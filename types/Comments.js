"use strict";
var Authors = require("./Authors");
var CommentList = require("./CommentList");
/** <comments> (Comments) "x:comments"
 * parent: root element of SpreadsheetML Comments part
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.comments.aspx
 */
var Comments = (function () {
    function Comments() {
    }
    Comments.read = function (xmlDoc, elem) {
        if (elem.tagName !== "comments") {
            throw xmlDoc.validator.unexpectedNode(elem.tagName, "comments", "root element of SpreadsheetML Comments part");
        }
        var authorElem = xmlDoc.domHelper.queryOneChild(elem, "authors");
        var commentListElem = xmlDoc.domHelper.queryOneChild(elem, "commentList");
        return {
            authors: Authors.read(xmlDoc, authorElem),
            commentList: CommentList.read(xmlDoc, commentListElem),
        };
    };
    Comments.write = function (xmlDoc, inst) {
        var elem = xmlDoc.dom.createElement("comments");
        var authorElems = Authors.write(xmlDoc, inst.authors);
        elem.appendChild(authorElems);
        var commentElems = CommentList.write(xmlDoc, inst.commentList);
        elem.appendChild(commentElems);
        return elem;
    };
    Comments.type = Comments; // TODO type-checker
    return Comments;
}());
module.exports = Comments;
