import EvenHeader = require("./EvenHeader");
import EvenFooter = require("./EvenFooter");
import FirstHeader = require("./FirstHeader");
import FirstFooter = require("./FirstFooter");
import OddHeader = require("./OddHeader");
import OddFooter = require("./OddFooter");

/** <headerFooter> (Header Footer) "x:headerFooter"
 * parent: chartsheet (§18.3.1.12); customSheetView (§18.3.1.24); customSheetView (§18.3.1.25); dialogsheet (§18.3.1.34); worksheet (§18.3.1.99)
 * @see https://msdn.microsoft.com/en-us/library/documentformat.openxml.spreadsheet.text.aspx
 */
class HeaderFooter {
    private static type: OpenXmlIo.ReadWrite<OpenXml.HeaderFooter> = HeaderFooter; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.HeaderFooter {
        if (elem.tagName !== "headerFooter") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "headerFooter", "chartsheet, customSheetView, customSheetView, dialogsheet, worksheet"); }
        var evenHeaderElem = xmlDoc.domHelper.queryOneChild(elem, "evenHeader");
        var evenFooterElem = xmlDoc.domHelper.queryOneChild(elem, "evenFooter");
        var firstHeaderElem = xmlDoc.domHelper.queryOneChild(elem, "firstHeader");
        var firstFooterElem = xmlDoc.domHelper.queryOneChild(elem, "firstFooter");
        var oddHeaderElem = xmlDoc.domHelper.queryOneChild(elem, "oddHeader");
        var oddFooterElem = xmlDoc.domHelper.queryOneChild(elem, "oddFooter");

        return {
            evenHeader: evenHeaderElem ? EvenHeader.read(xmlDoc, evenHeaderElem) : null,
            evenFooter: evenFooterElem ? EvenFooter.read(xmlDoc, evenFooterElem) : null,
            firstHeader: firstHeaderElem ? FirstHeader.read(xmlDoc, firstHeaderElem) : null,
            firstFooter: firstFooterElem ? FirstFooter.read(xmlDoc, firstFooterElem) : null,
            oddHeader: oddHeaderElem ? OddHeader.read(xmlDoc, oddHeaderElem) : null,
            oddFooter: oddFooterElem ? OddFooter.read(xmlDoc, oddFooterElem) : null,
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.HeaderFooter): HTMLElement {
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