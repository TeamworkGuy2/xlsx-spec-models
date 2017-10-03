
module ContentTypes {

    export var ContentTypes: OpenXmlIo.ReadWrite<OpenXml.ContentTypes> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "Types", "root element of Content_Type part");
            var defaultElems = xmlDoc.queryAllChilds(elem, "Default");
            var overrideElems = xmlDoc.queryAllChilds(elem, "Override");
            return {
                defaults: xmlDoc.readMulti(ContentTypeDefault.read, defaultElems),
                overrides: xmlDoc.readMulti(ContentTypeOverride.read, overrideElems),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("Types")
                .element;
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(ContentTypeDefault.write, inst.defaults));
            xmlDoc.addChilds(elem, xmlDoc.writeMulti(ContentTypeOverride.write, inst.overrides));
            return elem;
        }
    };


    export var ContentTypeDefault: OpenXmlIo.ReadWriteNamed<OpenXml.ContentTypeDefault> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "Default", "Types");
            var attrs = elem.attributes;
            return {
                contentType: xmlDoc.attrString(attrs, "ContentType"),
                extension: xmlDoc.attrString(attrs, "Extension"),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("Default")
                .attrString("ContentType", inst.contentType)
                .attrString("Extension", inst.extension)
                .element;
            return elem;
        }
    };


    export var ContentTypeOverride: OpenXmlIo.ReadWriteNamed<OpenXml.ContentTypeOverride> = {
        read(xmlDoc, elem) {
            xmlDoc.validator.expectNode(elem, "Override", "Types");
            var attrs = elem.attributes;
            return {
                contentType: xmlDoc.attrString(attrs, "ContentType"),
                partName: xmlDoc.attrString(attrs, "PartName"),
            };
        },

        write(xmlDoc, inst) {
            var elem = xmlDoc.domBldr.create("Override")
                .attrString("ContentType", inst.contentType)
                .attrString("PartName", inst.partName)
                .element;
            return elem;
        }
    };

}

export = ContentTypes;