"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readTable = exports.parseDocPageForOpenXml = void 0;
/** Parse a Microsoft docs page for Open XML types (https://docs.microsoft.com/en-us/dotnet/api/overview/openxml/?view=openxml-2.8.1)
 * @param dom
 * @param link
 */
function parseDocPageForOpenXml(dom, link) {
    var _a, _b, _c, _d, _e, _f;
    var typeNameAndDescriptor = (_a = dom.querySelector("#main > p > strong")) === null || _a === void 0 ? void 0 : _a.textContent;
    var typeNameAndDescriptorParts = typeNameAndDescriptor === null || typeNameAndDescriptor === void 0 ? void 0 : typeNameAndDescriptor.split(" (", 2);
    if ((typeNameAndDescriptorParts === null || typeNameAndDescriptorParts === void 0 ? void 0 : typeNameAndDescriptorParts.length) !== 2)
        throw new Error("could not find element name in 'Remarks' section");
    var typeName = typeNameAndDescriptorParts[0];
    var typeDescriptor = "(" + typeNameAndDescriptorParts[1];
    var description = (_b = dom.querySelectorAll("#main > p")[2].textContent) !== null && _b !== void 0 ? _b : "";
    // #main table's [parents, child elements, [attributes], constructors, properties, methods, interface implementations]
    var parentsTable = dom.querySelectorAll("#main table")[0];
    var parentsHeader = (_d = (_c = parentsTable.querySelector("thead th")) === null || _c === void 0 ? void 0 : _c.textContent) === null || _d === void 0 ? void 0 : _d.trim();
    if (parentsHeader !== "Parent Elements")
        throw new Error("could not find 'Parent Elements' table");
    var parents = [];
    parentsTable.querySelectorAll("tbody > tr").forEach(function (elem) { var _a, _b; return parents.push((_b = (_a = elem === null || elem === void 0 ? void 0 : elem.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : ""); });
    var childElementsTable = dom.querySelectorAll("#main table")[1];
    var childs = readTable(childElementsTable, "thead th", "Child Elements", 2, function (cells) {
        var _a, _b, _c, _d, _e;
        var nameAndDescriptorStr = (_c = (_b = (_a = cells[0]) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim()) === null || _c === void 0 ? void 0 : _c.split(" (", 2);
        var locationStr = (_e = (_d = cells[1]) === null || _d === void 0 ? void 0 : _d.textContent) === null || _e === void 0 ? void 0 : _e.trim();
        if ((nameAndDescriptorStr === null || nameAndDescriptorStr === void 0 ? void 0 : nameAndDescriptorStr.length) !== 2 || locationStr == null) {
            return null;
        }
        return {
            name: nameAndDescriptorStr[0],
            nameDescriptor: nameAndDescriptorStr[1].substr(0, nameAndDescriptorStr[1].length - 1),
            location: locationStr,
        };
    });
    var attributesTable = dom.querySelectorAll("#main table")[2];
    var attributes = readTable(attributesTable, "thead th", "Attributes", 2, function (cells) {
        var _a, _b, _c, _d, _e, _f;
        return ({
            name: (_c = (_b = (_a = cells[0]) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim()) !== null && _c !== void 0 ? _c : "",
            description: (_f = (_e = (_d = cells[1]) === null || _d === void 0 ? void 0 : _d.textContent) === null || _e === void 0 ? void 0 : _e.trim()) !== null && _f !== void 0 ? _f : "",
        });
    });
    var propertiesTable = dom.querySelectorAll("#main table")[attributes.length > 0 ? 4 : 3];
    var properties = readTable(propertiesTable, "thead th", null, 2, function (cells) {
        var _a, _b, _c, _d, _e, _f;
        var name = (_c = (_b = (_a = cells[0]) === null || _a === void 0 ? void 0 : _a.querySelector("span.lang-csharp")) === null || _b === void 0 ? void 0 : _b.textContent) === null || _c === void 0 ? void 0 : _c.trim();
        var descriptionAndInheritance = (_f = (_e = (_d = cells[1]) === null || _d === void 0 ? void 0 : _d.textContent) === null || _e === void 0 ? void 0 : _e.trim()) !== null && _f !== void 0 ? _f : "";
        var inheritIdx = descriptionAndInheritance.indexOf("(Inherited from ");
        var description = inheritIdx > -1 ? descriptionAndInheritance.substr(0, inheritIdx).trim() : descriptionAndInheritance;
        // skip inherited elements and element tags since these are defined the 'Child Elements' table
        if (inheritIdx > -1 || name == null || name === "LocalName" || description.indexOf("Represents the following element tag in the schema: ") > -1) {
            return null;
        }
        return {
            name: name,
            description: description,
        };
    });
    var noteElem = null;
    dom.querySelectorAll("#main p").forEach(function (elem) {
        var _a, _b;
        if ((_b = (_a = elem.textContent) === null || _a === void 0 ? void 0 : _a.trim()) === null || _b === void 0 ? void 0 : _b.startsWith("[Note:")) {
            noteElem = elem;
        }
    });
    if (noteElem == null)
        throw new Error("could not find '[Note: ...]'");
    var note = (_f = (_e = noteElem.textContent) === null || _e === void 0 ? void 0 : _e.trim()) !== null && _f !== void 0 ? _f : "";
    var modelIdx = note.indexOf("model (");
    var modelAndLocationStr = note.substr(modelIdx + "model (".length);
    var modelName = modelAndLocationStr.substr(0, modelAndLocationStr.indexOf(")"));
    var location = modelAndLocationStr.substring(modelAndLocationStr.indexOf("located in ") + "located in ".length, modelAndLocationStr.lastIndexOf("."));
    return {
        typeName: typeName,
        typeDescriptor: typeDescriptor,
        modelName: modelName,
        description: description,
        parents: parents,
        childs: childs,
        attributes: attributes,
        properties: properties,
        note: note,
        location: location,
        link: link,
    };
}
exports.parseDocPageForOpenXml = parseDocPageForOpenXml;
function readTable(table, headerSelector, expectedHeaderText, expectedCellCount, readRow) {
    var _a, _b, _c;
    var header = headerSelector != null ? (_b = (_a = table.querySelector(headerSelector)) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim() : null;
    var results = [];
    if (header != null || expectedHeaderText == null) {
        if (expectedHeaderText != null && header !== expectedHeaderText)
            throw new Error("could not find '" + expectedHeaderText + "' table");
        (_c = table.querySelectorAll("tbody > tr")) === null || _c === void 0 ? void 0 : _c.forEach(function (elem) {
            var cells = elem.querySelectorAll("td");
            if (cells.length !== expectedCellCount)
                throw new Error("table expected to have " + expectedCellCount + " columns, found " + cells.length);
            var res = readRow(cells);
            if (res != null) {
                results.push(res);
            }
        });
    }
    return results;
}
exports.readTable = readTable;
