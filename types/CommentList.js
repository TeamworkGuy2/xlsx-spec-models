"use strict";
var Comment = require("./Comment");
/** <commentList> (List of Comments) "x:commentList"
 * parent: comments (§18.7.6)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.commentlist.aspx
 */
var CommentList = (function () {
    function CommentList() {
    }
    CommentList.read = function (xmlDoc, elem) {
        if (elem.tagName !== "commentList") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "commentList", "comments");
        }
        var commentElems = xmlDoc.domHelper.queryAllChilds(elem, "comment");
        return {
            comments: xmlDoc.readOpenXml.readMulti(xmlDoc, Comment.read, commentElems),
        };
    };
    CommentList.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("commentList");
        var commentElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, Comment.write, inst.comments);
        xmlDoc.domHelper.addChilds(elem, commentElems);
        return elem;
    };
    CommentList.type = CommentList; // TODO type-checker
    return CommentList;
}());
module.exports = CommentList;
