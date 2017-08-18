import EvenHeader = require("./EvenHeader");
import EvenFooter = require("./EvenFooter");
import FirstHeader = require("./FirstHeader");
import FirstFooter = require("./FirstFooter");
import OddHeader = require("./OddHeader");
import OddFooter = require("./OddFooter");

class HeaderFooter {
    private static type: OpenXmlIo.ReadWrite<OpenXml.HeaderFooter> = HeaderFooter; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ReaderContext, elem: HTMLElement): OpenXml.HeaderFooter {
        xmlDoc.validator.expectNode(elem, "headerFooter", "chartsheet, customSheetView, customSheetView, dialogsheet, worksheet");
        var evenHeaderElem = xmlDoc.queryOneChild(elem, "evenHeader");
        var evenFooterElem = xmlDoc.queryOneChild(elem, "evenFooter");
        var firstHeaderElem = xmlDoc.queryOneChild(elem, "firstHeader");
        var firstFooterElem = xmlDoc.queryOneChild(elem, "firstFooter");
        var oddHeaderElem = xmlDoc.queryOneChild(elem, "oddHeader");
        var oddFooterElem = xmlDoc.queryOneChild(elem, "oddFooter");

        return {
            evenHeader: evenHeaderElem ? EvenHeader.read(xmlDoc, evenHeaderElem) : null,
            evenFooter: evenFooterElem ? EvenFooter.read(xmlDoc, evenFooterElem) : null,
            firstHeader: firstHeaderElem ? FirstHeader.read(xmlDoc, firstHeaderElem) : null,
            firstFooter: firstFooterElem ? FirstFooter.read(xmlDoc, firstFooterElem) : null,
            oddHeader: oddHeaderElem ? OddHeader.read(xmlDoc, oddHeaderElem) : null,
            oddFooter: oddFooterElem ? OddFooter.read(xmlDoc, oddFooterElem) : null,
        };
    }


    public static write(xmlDoc: OpenXmlIo.WriterContext, inst: OpenXml.HeaderFooter): ElementLike {
        var elem = xmlDoc.dom.createElement("headerFooter");
        if (inst.evenHeader) { elem.appendChild(EvenHeader.write(xmlDoc, inst.evenHeader)); }
        if (inst.evenFooter) { elem.appendChild(EvenFooter.write(xmlDoc, inst.evenFooter)); }
        if (inst.firstHeader) { elem.appendChild(FirstHeader.write(xmlDoc, inst.firstHeader)); }
        if (inst.firstFooter) { elem.appendChild(FirstFooter.write(xmlDoc, inst.firstFooter)); }
        if (inst.oddHeader) { elem.appendChild(OddHeader.write(xmlDoc, inst.oddHeader)); }
        if (inst.oddFooter) { elem.appendChild(OddFooter.write(xmlDoc, inst.oddFooter)); }
        return elem;
    }

}

export = HeaderFooter;