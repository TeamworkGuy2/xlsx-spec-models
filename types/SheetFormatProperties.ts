
class SheetFormatProperties {
    private static type: OpenXmlIo.ReadWrite<OpenXml.SheetFormatProperties> = SheetFormatProperties; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.SheetFormatProperties {
        xmlDoc.validator.expectNode(elem, "sheetFormatPr", "dialogsheet, worksheet");
        var attrs = elem.attributes;
        return {
            defaultColWidth: xmlDoc.attrFloat(attrs, "defaultColWidth"),
            defaultRowHeight: xmlDoc.attrFloat(attrs, "defaultRowHeight"),
            dyDescent: xmlDoc.attrFloat(attrs, "x14ac:dyDescent"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.SheetFormatProperties): HTMLElement {
        var elem = xmlDoc.domBldr.create("sheetFormatPr")
            .attrFloat("defaultColWidth", inst.defaultColWidth, true)
            .attrFloat("defaultRowHeight", inst.defaultRowHeight)
            .attrFloat("x14ac:dyDescent", inst.dyDescent, true)
            .element;
        return elem;
    }

}

export = SheetFormatProperties;