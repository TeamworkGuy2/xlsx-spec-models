import StringElement = require("../base-types/StringElement");

class Author {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Author> = Author; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Author {
        return StringElement.read(xmlDoc, elem, "author", "authors");
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Author): ElementLike {
        return StringElement.write(xmlDoc, inst, "author");
    }

}

export = Author;