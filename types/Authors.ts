import Author = require("./Author");

/** <authors> (Authors) "x:authors"
 * parent: comments (§18.7.6)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.authors.aspx
 */
class Authors {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Authors> = Authors; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.Authors {
        if (elem.tagName !== "authors") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "authors", "comments"); }
        var authorElems = xmlDoc.domHelper.queryAllChilds(elem, "author");
        return {
            authors: xmlDoc.readOpenXml.readMulti(xmlDoc, Author.read, authorElems),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.Authors): HTMLElement {
        var elem = xmlDoc.dom.createElement("authors");
        var authorElems = xmlDoc.writeOpenXml.writeMulti(xmlDoc, Author.write, inst.authors);
        xmlDoc.domHelper.addChilds(elem, authorElems);
        return elem;
    }

}

export = Authors;