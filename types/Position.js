"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Position = void 0;
var Point2DType_1 = require("../types/Point2DType");
var Position = /** @class */ (function () {
    function Position() {
    }
    Position.read = function (xmlDoc, elem) {
        return Point2DType_1.Point2DType.read(xmlDoc, elem, "a:pos", "absoluteAnchor");
    };
    Position.write = function (xmlDoc, inst) {
        return Point2DType_1.Point2DType.write(xmlDoc, inst, "a:pos");
    };
    Position.type = Position; // TODO type-checker
    return Position;
}());
exports.Position = Position;
