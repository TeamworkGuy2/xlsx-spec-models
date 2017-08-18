import Author = require("./Author");

class Authors {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Authors> = Authors; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Authors {
        xmlDoc.validator.expectNode(elem, "authors", "comments");
        var authorElems = xmlDoc.queryAllChilds(elem, "author");
        return {
            authors: xmlDoc.readMulti(Author.read, authorElems),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Authors): ElementLike {
        var elem = xmlDoc.dom.createElement("authors");
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(Author.write, inst.authors));
        return elem;
    }

}

export = Authors;