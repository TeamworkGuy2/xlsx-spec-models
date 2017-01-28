"use strict";
var BorderProperty = require("../base-types/BorderProperty");
var BottomBorder = require("./BottomBorder");
var DiagonalBorder = require("./DiagonalBorder");
var EndBorder = require("./EndBorder");
var HorizontalBorder = require("./HorizontalBorder");
var StartBorder = require("./StartBorder");
var TopBorder = require("./TopBorder");
var VerticalBorder = require("./VerticalBorder");
var Border = (function () {
    function Border() {
    }
    Border.read = function (xmlDoc, elem) {
        xmlDoc.validator.expectNode(elem, "border", "borders, dxf, ndxf, odxf");
        var bottomElem = xmlDoc.queryOneChild(elem, "bottom");
        var diagonalElem = xmlDoc.queryOneChild(elem, "diagonal");
        var endElem = xmlDoc.queryOneChild(elem, "end");
        var horizontalElem = xmlDoc.queryOneChild(elem, "horizontal");
        var startElem = xmlDoc.queryOneChild(elem, "start");
        var topElem = xmlDoc.queryOneChild(elem, "top");
        var verticlaElem = xmlDoc.queryOneChild(elem, "vertical");
        // these aren't part of the spec, but MS Office 2013 requires them
        var leftElem = xmlDoc.queryOneChild(elem, "left");
        var rightElem = xmlDoc.queryOneChild(elem, "right");
        var attrs = elem.attributes;
        return {
            left: leftElem ? BorderProperty.read(xmlDoc, leftElem, "left", "border") : null,
            right: rightElem ? BorderProperty.read(xmlDoc, rightElem, "right", "border") : null,
            bottom: bottomElem ? BottomBorder.read(xmlDoc, bottomElem) : null,
            diagonal: diagonalElem ? DiagonalBorder.read(xmlDoc, diagonalElem) : null,
            end: endElem ? EndBorder.read(xmlDoc, endElem) : null,
            horizontal: horizontalElem ? HorizontalBorder.read(xmlDoc, horizontalElem) : null,
            start: startElem ? StartBorder.read(xmlDoc, startElem) : null,
            top: topElem ? TopBorder.read(xmlDoc, topElem) : null,
            vertical: verticlaElem ? VerticalBorder.read(xmlDoc, verticlaElem) : null,
            diagonalDown: xmlDoc.attrBool(attrs, "diagonalDown"),
            diagonalUp: xmlDoc.attrBool(attrs, "diagonalUp"),
            outline: xmlDoc.attrBool(attrs, "outline"),
        };
    };
    Border.write = function (xmlDoc, inst) {
        var elem = xmlDoc.domBldr.create("border")
            .attrBool("diagonalDown", inst.diagonalDown, true, "1", "0")
            .attrBool("diagonalUp", inst.diagonalUp, true, "1", "0")
            .attrBool("outline", inst.outline, true, "1", "0")
            .element;
        if (inst.left) {
            elem.appendChild(BorderProperty.write(xmlDoc, inst.left, "left"));
        }
        if (inst.right) {
            elem.appendChild(BorderProperty.write(xmlDoc, inst.right, "right"));
        }
        if (inst.top) {
            elem.appendChild(TopBorder.write(xmlDoc, inst.top));
        }
        if (inst.bottom) {
            elem.appendChild(BottomBorder.write(xmlDoc, inst.bottom));
        }
        if (inst.diagonal) {
            elem.appendChild(DiagonalBorder.write(xmlDoc, inst.diagonal));
        }
        if (inst.end) {
            elem.appendChild(EndBorder.write(xmlDoc, inst.end));
        }
        if (inst.horizontal) {
            elem.appendChild(HorizontalBorder.write(xmlDoc, inst.horizontal));
        }
        if (inst.start) {
            elem.appendChild(StartBorder.write(xmlDoc, inst.start));
        }
        if (inst.vertical) {
            elem.appendChild(VerticalBorder.write(xmlDoc, inst.vertical));
        }
        return elem;
    };
    return Border;
}());
Border.type = Border; // TODO type-checker
module.exports = Border;
