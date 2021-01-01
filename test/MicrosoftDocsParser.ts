
module MicrosoftDocsParser {

    /** Parse a Microsoft docs page for Open XML types (https://docs.microsoft.com/en-us/dotnet/api/overview/openxml/?view=openxml-2.8.1)
     * @param dom
     * @param link
     */
    export function parseDocPageForOpenXml(dom: Document, link: string) {
        var typeNameAndDescriptor = dom.querySelector("#main > p > strong")?.textContent;
        var typeNameAndDescriptorParts = typeNameAndDescriptor?.split(" (", 2);
        if (typeNameAndDescriptorParts?.length !== 2) throw new Error("could not find element name in 'Remarks' section");
        var typeName = typeNameAndDescriptorParts[0];
        var typeDescriptor = "(" + typeNameAndDescriptorParts[1];

        var description = dom.querySelectorAll("#main > p")[2].textContent ?? "";

        // #main table's [parents, child elements, [attributes], constructors, properties, methods, interface implementations]

        var parentsTable = dom.querySelectorAll("#main table")[0];
        var parentsHeader = parentsTable.querySelector("thead th")?.textContent?.trim();
        if (parentsHeader !== "Parent Elements") throw new Error("could not find 'Parent Elements' table");
        var parents: string[] = [];
        parentsTable.querySelectorAll("tbody > tr").forEach((elem) => parents.push(elem?.textContent?.trim() ?? ""));

        var childElementsTable = dom.querySelectorAll("#main table")[1];
        var childs: { name: string; nameDescriptor: string; location: string }[] = readTable(childElementsTable, "thead th", "Child Elements", 2, (cells) => {
            var nameAndDescriptorStr = cells[0]?.textContent?.trim()?.split(" (", 2);
            var locationStr = cells[1]?.textContent?.trim();
            if (nameAndDescriptorStr?.length !== 2 || locationStr == null) {
                return null;
            }
            return {
                name: nameAndDescriptorStr[0],
                nameDescriptor: nameAndDescriptorStr[1].substr(0, nameAndDescriptorStr[1].length - 1),
                location: locationStr,
            };
        });

        var attributesTable = dom.querySelectorAll("#main table")[2];
        var attributes: { name: string; description: string }[] = readTable(attributesTable, "thead th", "Attributes", 2, (cells) => ({
            name: cells[0]?.textContent?.trim() ?? "",
            description: cells[1]?.textContent?.trim() ?? "",
        }));

        var propertiesTable = dom.querySelectorAll("#main table")[attributes.length > 0 ? 4 : 3];
        var properties: { name: string; description: string }[] = readTable(propertiesTable, "thead th", null, 2, (cells) => {
            var name = cells[0]?.querySelector("span.lang-csharp")?.textContent?.trim();
            var descriptionAndInheritance = cells[1]?.textContent?.trim() ?? "";
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

        var noteElem: Element | null = null;
        dom.querySelectorAll("#main p").forEach((elem) => {
            if (elem.textContent?.trim()?.startsWith("[Note:")) {
                noteElem = elem;
            }
        });
        if (noteElem == null) throw new Error("could not find '[Note: ...]'");
        var note = (<Element><any>noteElem).textContent?.trim() ?? "";
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


    export function readTable<T>(table: Element, headerSelector: string | null, expectedHeaderText: string | null, expectedCellCount: number, readRow: (cells: NodeListOf<Element>) => T | null): T[] {
        var header = headerSelector != null ? table.querySelector(headerSelector)?.textContent?.trim() : null;
        var results: T[] = [];

        if (header != null || expectedHeaderText == null) {
            if (expectedHeaderText != null && header !== expectedHeaderText) throw new Error("could not find '" + expectedHeaderText + "' table");

            table.querySelectorAll("tbody > tr")?.forEach((elem) => {
                var cells = elem.querySelectorAll("td");
                if (cells.length !== expectedCellCount) throw new Error("table expected to have " + expectedCellCount + " columns, found " + cells.length);
                var res = readRow(cells);
                if (res != null) {
                    results.push(res);
                }
            });
        }

        return results;
    }

}

export = MicrosoftDocsParser;