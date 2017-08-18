import ContentTypeDefault = require("./ContentTypeDefault");
import ContentTypeOverride = require("./ContentTypeOverride");

class ContentTypes {
    private static type: OpenXmlIo.ReadWrite<OpenXml.ContentTypes> = ContentTypes; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.ContentTypes {
        xmlDoc.validator.expectNode(elem, "Types", "root element of Content_Type part");
        var defaultElems = xmlDoc.queryAllChilds(elem, "Default");
        var overrideElems = xmlDoc.queryAllChilds(elem, "Override");
        return {
            defaults: xmlDoc.readMulti(ContentTypeDefault.read, defaultElems),
            overrides: xmlDoc.readMulti(ContentTypeOverride.read, overrideElems),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.ContentTypes): ElementLike {
        var elem = xmlDoc.domBldr.create("Types")
            .element;
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(ContentTypeDefault.write, inst.defaults));
        xmlDoc.addChilds(elem, xmlDoc.writeMulti(ContentTypeOverride.write, inst.overrides));
        return elem;
    }

}

export = ContentTypes;