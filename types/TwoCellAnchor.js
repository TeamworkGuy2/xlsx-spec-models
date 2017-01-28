"use strict";
var ClientData = require("./ClientData");
var FromMarker = require("./FromMarker");
var Picture = require("./Picture");
var ToMarker = require("./ToMarker");
var TwoCellAnchor = (function () {
    function TwoCellAnchor() {
    }
    TwoCellAnchor.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "xdr:twoCellAnchor", "xdr:wsDr");
        var attrs = elem.attributes;
        return {
            clientData: ClientData.read(xmlDoc, xmlDoc.queryOneChild(elem, "clientData")),
            from: FromMarker.read(xmlDoc, xmlDoc.queryOneChild(elem, "from")),
            to: ToMarker.read(xmlDoc, xmlDoc.queryOneChild(elem, "to")),
            pic: Picture.read(xmlDoc, xmlDoc.queryOneChild(elem, "pic")),
            // attributes
            editAs: xmlDoc.attrString(attrs, "editAs"),
        };
    };
    TwoCellAnchor.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("xdr:twoCellAnchor")
            .attrString("editAs", inst.editAs, true)
            .element;
        elem.appendChild(FromMarker.write(xmlDoc, inst.from));
        elem.appendChild(ToMarker.write(xmlDoc, inst.to));
        elem.appendChild(Picture.write(xmlDoc, inst.pic));
        elem.appendChild(ClientData.write(xmlDoc, inst.clientData));
        return elem;
    };
    return TwoCellAnchor;
}());
TwoCellAnchor.type = TwoCellAnchor; // TODO type-checker
module.exports = TwoCellAnchor;
