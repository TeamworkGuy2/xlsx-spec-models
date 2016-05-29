import StringElement = require("../base-types/StringElement");

/** <author> (Author) "x:author"
 * parent: authors (§18.7.2)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.author.aspx
 */
class Author {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Author> = Author; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.Author {
        return StringElement.read(xmlDoc, elem, "author", "authors");
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.Author): HTMLElement {
        return StringElement.write(xmlDoc, inst, "author");
    }

}

export = Author;