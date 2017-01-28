
class CalculationCell {
    private static type: OpenXmlIo.ReadWrite<OpenXml.CalculationCell> = CalculationCell; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.CalculationCell {
        xmlDoc.validator.expectNode(elem, "c", "calcChain");

        var childAttrs = elem.attributes;
        return {
            i: xmlDoc.attrInt(childAttrs, "i"),
            l: xmlDoc.attrBool(childAttrs, "l"),
            r: xmlDoc.attrString(childAttrs, "r"),
            s: xmlDoc.attrBool(childAttrs, "s"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.CalculationCell): HTMLElement {
        var elem = xmlDoc.domBldr.create("c")
            .attrString("r", inst.r)
            .attrInt("i", inst.i)
            .attrBool("l", inst.l, true, "1", "0")
            .attrBool("s", inst.s, true, "1", "0")
            .element;

        return elem;
    }

}

export = CalculationCell;