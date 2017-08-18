
class CellFormula {
    private static type: OpenXmlIo.ReadWrite<OpenXml.CellFormula> = CellFormula; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.CellFormula {
        xmlDoc.validator.expectNode(elem, "f", "c, nc, oc");
        var attrs = elem.attributes;
        return {
            content: elem.textContent,
            ref: xmlDoc.attrString(attrs, "ref"),
            si: xmlDoc.attrInt(attrs, "si"),
            t: <OpenXml.ST_CellFormulaType>xmlDoc.attrString(attrs, "t"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.CellFormula): ElementLike {
        var elem = xmlDoc.domBldr.create("f")
            .attrString("t", inst.t, true)
            .attrString("ref", inst.ref, true)
            .attrInt("si", inst.si, true)
            .element;
        elem.textContent = inst.content;
        return elem;
    }

}

export = CellFormula;