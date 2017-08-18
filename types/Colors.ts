import IndexedColors = require("./IndexedColors");
import MruColors = require("./MruColors");

class Colors {
    private static type: OpenXmlIo.ReadWrite<OpenXml.Colors> = Colors; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.Colors {
        xmlDoc.validator.expectNode(elem, "colors", "styleSheet");
        var indexedColorElem = xmlDoc.queryOneChild(elem, "indexedColors");
        var mruColorElem = xmlDoc.queryOneChild(elem, "mruColors");
        return {
            indexedColors: indexedColorElem ? IndexedColors.read(xmlDoc, indexedColorElem) : null,
            mruColors: mruColorElem ? MruColors.read(xmlDoc, mruColorElem) : null,
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.Colors): ElementLike {
        var elem = xmlDoc.dom.createElement("cellXfs");
        if (inst.indexedColors) { elem.appendChild(IndexedColors.write(xmlDoc, inst.indexedColors)); }
        if (inst.mruColors) { elem.appendChild(MruColors.write(xmlDoc, inst.mruColors)); }
        return elem;
    }

}

export = Colors;