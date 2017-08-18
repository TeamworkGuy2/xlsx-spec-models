import CellFormula = require("./CellFormula");
import InlineString = require("./InlineString");
import CellValue = require("./CellValue");

class Cell {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Cell> = Cell; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Cell {
        xmlDoc.validator.expectNode(elem, "c", "row");
        var attrs = elem.attributes;
        var fElem = xmlDoc.queryOneChild(elem, "f");
        var isElem = xmlDoc.queryOneChild(elem, "is");
        var vElem = xmlDoc.queryOneChild(elem, "v");
        return {
            f: fElem ? CellFormula.read(xmlDoc, fElem) : null,
            is: isElem ? InlineString.read(xmlDoc, isElem) : null,
            v: vElem ? CellValue.read(xmlDoc, vElem) : null,
            cm: xmlDoc.attrInt(attrs, "cm"),
            ph: xmlDoc.attrBool(attrs, "ph"),
            r: xmlDoc.attrString(attrs, "r"),
            s: xmlDoc.attrInt(attrs, "s"),
            t: xmlDoc.attrString(attrs, "t"),
            vm: xmlDoc.attrInt(attrs, "vm"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Cell): ElementLike {
        var elem = xmlDoc.domBldr.create("c")
            .attrInt("cm", inst.cm, true)
            .attrBool("ph", inst.ph, true)
            .attrString("r", inst.r, true)
            .attrInt("s", inst.s, true)
            .attrString("t", inst.t, true)
            .attrInt("vm", inst.vm, true)
            .element;
        if (inst.f) { elem.appendChild(CellFormula.write(xmlDoc, inst.f)); }
        if (inst.is) { elem.appendChild(InlineString.write(xmlDoc, inst.is)); }
        if (inst.v) { elem.appendChild(CellValue.write(xmlDoc, inst.v)); }

        return elem;
    }

}

export = Cell;