"use strict";
var ClientData = (function () {
    function ClientData() {
    }
    ClientData.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "xdr:clientData", "absoluteAnchor, oneCellAnchor, twoCellAnchor");
        var attrs = elem.attributes;
        return {
            fLocksWithSheet: xmlDoc.attrBool(attrs, "fLocksWithSheet"),
            fPrintsWithSheet: xmlDoc.attrBool(attrs, "fPrintsWithSheet"),
        };
    };
    ClientData.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("xdr:clientData")
            .attrBool("fLocksWithSheet", inst.fLocksWithSheet, true, "1", "0")
            .attrBool("fPrintsWithSheet", inst.fPrintsWithSheet, true, "1", "0")
            .element;
        return elem;
    };
    return ClientData;
}());
ClientData.type = ClientData; // TODO type-checker
module.exports = ClientData;
