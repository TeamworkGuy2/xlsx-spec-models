/** <c> (Cell) "x:c"
 * parent: calcChain (§18.6.2)
 * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.calculationcell.aspx
 */
class CalculationCell {
    private static type: OpenXmlIo.ReadWrite<OpenXml.CalculationCell> = CalculationCell; // TODO type-checker


    public static read(xmlDoc: OpenXmlIo.ParsedFile, elem: HTMLElement): OpenXml.CalculationCell {
        if (elem.tagName !== "c") { throw xmlDoc.validator.unexpectedNode(elem.tagName, "c", "calcChain"); }

        var childAttrs = elem.attributes;
        return {
            i: xmlDoc.domHelper.attrInt(childAttrs, "i"),
            l: xmlDoc.domHelper.attrBool(childAttrs, "l"),
            r: xmlDoc.domHelper.attrString(childAttrs, "r"),
            s: xmlDoc.domHelper.attrBool(childAttrs, "s"),
        };
    }


    public static write(xmlDoc: OpenXmlIo.ParsedFile, inst: OpenXml.CalculationCell): HTMLElement {
        var cellElem = xmlDoc.domBldr.create("c")
            .attrString("r", inst.r)
            .attrInt("i", inst.i)
            .attrBool("l", inst.l, true, "1", "0")
            .attrBool("s", inst.s, true, "1", "0")
            .element;

        return cellElem;
    }

}

export = CalculationCell;