
/** OpenXml Spreadsheet data types and interfaces
 * @since 2016-05-30
 */
declare module OpenXml {
    // All ST_* types have exact names taken from W3C XML §A.2

    type ST_BlackWhiteMode = ("clr" | "auto" | "gray" | "ltGray" | "invGray" | "grayWhite" | "blackGray" | "blackWhite" | "black" | "white" | "hidden");

    type ST_BlipCompression = ("email" | "screen" | "print" | "hqprint" | "none");

    type ST_BorderStyle = ("none" | "thin" | "medium" | "dashed" | "dotted" | "thick" | "double" | "hair" | "mediumDashed" | "dashDot" | "mediumDashDot" | "dashDotDot" | "mediumDashDotDot" | "slantDashDot");

    type ST_CellFormulaType = ("normal" | "array" | "dataTable" | "shared");

    type ST_CellType = ("b" | "d" | "n" | "e" | "s" | "str" | "inlineStr");

    type ST_ColID = number; // >= 0

    type ST_Coordinate = number; // ST_UniversalMeasure: -?[0-9]+(\.[0-9]+)?(mm|cm|in|pt|pc|pi)

    type ST_EditAs = ("twoCell" | "oneCell" | "absolute");

    type ST_FontCollectionIndex = ("major" | "minor" | "none");

    type ST_FontScheme = ("none" | "major" | "minor");

    type ST_GradientType = ("linear" | "path");

    type ST_HorizontalAlignment = ("general" | "left" | "center" | "right" | "fill" | "justify" | "centerContinuous" | "distributed");

    type ST_Orientation = ("default" | "landscape" | "portrait");

    type ST_PatternType = ("none" | "solid" | "mediumGray" | "darkGray" | "lightGray" | "darkHorizontal" | "darkVertical" | "darkDown" | "darkUp" | "darkGrid" | "darkTrellis" | "lightHorizontal" | "lightVertical" | "lightDown" | "lightUp" | "lightGrid" | "lightTrellis" | "gray125" | "gray0625");

    type ST_Percentage = number;

    type ST_PositiveCoordinate = number; // >= 0

    type ST_RectAlignment = ("tl" | "t" | "tr" | "l" | "ctr" | "r" | "bl" | "b" | "br");

    type ST_Ref = string;

    type ST_RelationshipId = string;

    type ST_RowID = number; // >= 0

    type ST_SheetState = ("visible" | "hidden" | "veryHidden");

    type ST_SheetViewType = ("normal" | "pageBreakPreview" | "pageLayout");

    type ST_TableStyleType = ("wholeTable" | "headerRow" | "totalRow" | "firstColumn" | "lastColumn" | "firstRowStripe" | "secondRowStripe" | "firstColumnStripe" | "secondColumnStripe" | "firstHeaderCell" | "lastHeaderCell" | "firstTotalCell" | "lastTotalCell" | "firstSubtotalColumn" | "secondSubtotalColumn" | "thirdSubtotalColumn" | "firstSubtotalRow" | "secondSubtotalRow" | "thirdSubtotalRow" | "blankRow" | "firstColumnSubheading" | "secondColumnSubheading" | "thirdColumnSubheading" | "firstRowSubheading" | "secondRowSubheading" | "thirdRowSubheading" | "pageFieldLabels" | "pageFieldValues");

    type ST_TileFlipMode = ("none" | "x" | "y" | "xy");

    type ST_UnderlineValues = ("single" | "double" | "singleAccounting" | "doubleAccounting" | "none");

    type ST_VerticalAlignment = ("top" | "center" | "bottom" | "justify" | "distributed");

    type ST_VerticalAlignRun = ("baseline" | "superscript" | "subscript");


    /** <xdr:absoluteAnchor> (Absolute Anchor Shape Size, W3C XML CT_AbsoluteAnchor §A.4.5)
     * parents: wsDr (§20.5.2.35)
     *
     * This element is used as an anchor placeholder for a shape or group of shapes.
     * It anchors the object in the same position relative to sheet position and its extents are in EMU units.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.spreadsheet.absoluteanchor?view=openxml-2.8.1
     */
    interface AbsoluteAnchor extends EgObjectChoices {
        ext: Extent;
        pos: Position;
        clientData: ClientData;
    }


    /** Attribute group - Blob (W3C XML AG_Blob §A.4.1)
     */
    interface AgBlob {
        /** default: "" */
        embed?: ST_RelationshipId | null;
        /** default: "" */
        link?: ST_RelationshipId | null;
    }


    /** Attribute group - Locking (W3C XML AG_Locking §A.4.1)
     */
    interface AgLocking {
        // attributes
        /** Disallow Showing Adjust Handles - Specifies that the generating application should not show adjust handles for the corresponding connection shape; default: false */
        noAdjustHandles?: boolean | null;
        /** Disallow Arrowhead Changes - Specifies that the generating application should not allow arrowhead changes for the corresponding connection shape; default: false */
        noChangeArrowheads?: boolean | null;
        /** Disallow Aspect Ratio Change - Specifies that the generating application should not allow aspect ratio changes for the corresponding connection shape; default: false */
        noChangeAspect?: boolean | null;
        /** Disallow Shape Type Change - Specifies that the generating application should not allow shape type changes for the corresponding connection shape; default: false */
        noChangeShapeType?: boolean | null;
        /** Disallow Shape Point Editing - Specifies that the generating application should not allow shape point changes for the corresponding connection shape; default: false */
        noEditPoints?: boolean | null;
        /** Disallow Shape Grouping - Specifies that the generating application should not allow shape grouping for the corresponding connection shape.
         * That is it cannot be combined within other shapes to form a group of shapes; default: false */
        noGrp?: boolean | null;
        /** Disallow Shape Movement - Specifies that the generating application should not allow position changes for the corresponding connection shape; default: false */
        noMove?: boolean | null;
        /** Disallow Shape Resize - Specifies that the generating application should not allow size changes for the corresponding connection shape; default: false */
        noResize?: boolean | null;
        /** Disallow Shape Rotation - Specifies that the generating application should not allow shape rotation changes for the corresponding connection shape; default: false */
        noRot?: boolean | null;
        /** Disallow Shape Selection - Specifies that the generating application should not allow selecting of the corresponding connection shape.
         * That means also that no picture, shapes or text attached to this connection shape can be selected if this attribute has been specified; default: false */
        noSelect?: boolean | null;
    }


    /** <x:alignment> (Alignment, W3C XML CT_CellAlignment §A.2)
     * parents: dxf (§18.8.14); ndxf (§18.11.1.4); odxf (§18.11.1.6); xf (§18.8.45)
     *
     * Formatting information pertaining to text alignment in cells. How text is aligned both horizontally and vertically, as well as indentation settings, etc.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.alignment?view=openxml-2.8.1
     */
    interface Alignment {
        // attributes
        /** horizontal alignment in cells */
        horizontal?: ST_HorizontalAlignment | null;
        /** An integer value, where an increment of 1 represents 3 spaces. Indicates the number of spaces (of the normal style font) of indentation for text in a cell.
         * The number of spaces to indent is calculated as following: Number of spaces to indent = indent value * 3
         */
        indent?: number | null;
        /** indicates if the cells justified or distributed alignment should be used on the last line of text. (This is typical for East Asian alignments but not typical in other contexts) */
        justifyLastLine?: boolean | null;
        /** An integer value indicating whether the reading order (bidirectionality) of the cell is left-to-right, right-to-left, or context dependent.
         * 0 - Context Dependent - reading order is determined by scanning the text for the first non-whitespace character: if it is a strong right-to-left character, the reading order is right-to-left; otherwise, the reading order left-to-right
         * 1 - Left-to-Right - reading order is left-to-right in the cell, as in English
         * 2 - Right-to-Left - reading order is right-to-left in the cell, as in Hebrew
         */
        readingOrder?: number | null;
        /** An integer value (used only in a dxf element) to indicate the additional number of spaces of indentation to adjust for text in a cell */
        relativeIndent?: number | null;
        /** indicates if the displayed text in the cell should be shrunk to fit the cell width. Not applicable when a cell contains multiple lines of text */
        shrinkToFit?: boolean | null;
        /** Text rotation in cells. Expressed in degrees. Values range from 0 to 180. The first letter of the text is considered the center-point of the arc.
         * For 0 - 90, the value represents degrees above horizon. For 91-180 the degrees below the horizon is calculated as: [degrees below horizon] = 90 - textRotation.
         * 0, 45, 90, 135, 180
         */
        textRotation?: number | null;
        /** vertical alignment in cells */
        vertical?: ST_VerticalAlignment | null;
        /** indicates if the text in a cell should be line-wrapped within the cell */
        wrapText?: boolean | null;
    }


    /** <x:author> (Author, W3C XML content ST_Xstring §A.6.9)
     * parents: authors (§18.7.2)
     *
     * This element holds a string representing the name of a single author of comments. Every comment shall have an author.
     * The maximum length of the author string is an implementation detail, but a good guideline is 255 chars.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.author?view=openxml-2.8.1
     */
    interface Author {
        content: string;
    }


    /** <x:authors> (Authors, W3C XML CT_Authors §A.2)
     * parents: comments (§18.7.6)
     *
     * This element is a container that holds a list of comment author names. There can be many comment authors per sheet, but each author name shall be unique per sheet.
     * The information for each author is stored only once for that sheet, and comments refer to the author by zero based index.
     * Note that there can be multiple lists of authors per workbook since each sheet contains its own comments part, and each comments part defines a list of authors for comments on that sheet.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.authors?view=openxml-2.8.1
     */
    interface Authors {
        authors: Author[];
    }


    /** <a:blip> (Blip, W3C XML CT_Blip §A.4.1)
     * parents: blipFill (§21.3.2.2); blipFill (§20.1.8.14); blipFill (§20.2.2.1); blipFill (§20.5.2.2); blipFill (§19.3.1.4); buBlip (§21.1.2.4.2)
     *
     * This element specifies the existence of an image (binary large image or picture) and contains a reference to the image data.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.blip?view=openxml-2.8.1
     */
    interface Blip extends AgBlob {
        alphaBiLevel: Element; // CT_AlphaBiLevelEffect;
        alphaCeiling: Element; // CT_AlphaCeilingEffect;
        alphaFloor: Element; // CT_AlphaFloorEffect;
        alphaInv: Element; // CT_AlphaInverseEffect;
        alphaMod: Element; // CT_AlphaModulateEffect;
        alphaModFix: Element; // CT_AlphaModulateFixedEffect;
        alphaRepl: Element; // CT_AlphaReplaceEffect;
        biLevel: Element; // CT_BiLevelEffect;
        blur: Element; // CT_BlurEffect;
        clrChange: Element; // CT_ColorChangeEffect;
        clrRepl: Element; // CT_ColorReplaceEffect;
        duotone: Element; // CT_DuotoneEffect;
        fillOverlay: Element; // CT_FillOverlayEffect;
        grayscl: Element; // CT_GrayscaleEffect;
        hsl: Element; // CT_HSLEffect;
        lum: Element; // CT_LuminanceEffect;
        tint: Element; // CT_TintEffect;
        extLst?: Element | null; // CT_OfficeArtExtensionList

        // attributes
        /** Compression State - Specifies the compression state with which the picture is stored. This allows the application to specify the amount of compression that has been applied to a picture. default: "none" */
        cstate?: ST_BlipCompression | null;
        /** Embedded Picture Reference - Specifies the identification information for an embedded picture. This attribute is used to specify an image that resides locally within the file. */
        embed: ST_RelationshipId;
        /** Linked Picture Reference - Specifies the identification information for a linked picture. This attribute is used to specify an image that does not reside within this file. */
        link: ST_RelationshipId;
    }


    /** <xdr:blipFill> (Picture Fill, W3C XML CT_BlipFillProperties §A.4.1)
     * parents: pic (§20.5.2.25)
     *
     * This element specifies the type of picture fill that the picture object has. Because a picture has a picture fill already by default, it is possible to have two fills specified for a picture object. An example of this is shown below.
     * [Example: Consider the picture below that has a blip fill applied to it. The image used to fill this picture object has transparent pixels instead of white pixels.
     * <xdr:pic>
     *   ...
     *   <xdr:blipFill>
     *     <a:blip r:embed="rId2"/>
     *     <a:stretch>
     *       <a:fillRect/>
     *     </a:stretch>
     *   </xdr:blipFill>
     *   ...
     * </xdr:pic>
     * The above picture object is shown as an example of this fill type. end example]
     *
     * [Example: Consider now the same picture object but with an additional gradient fill applied within the shape properties portion of the picture.
     * <xdr:pic>
     *   ...
     *   <xdr:blipFill>
     *     <a:blip r:embed="rId2"/>
     *     <a:stretch>
     *       <a:fillRect/>
     *     </a:stretch>
     *   </xdr:blipFill>
     *   <xdr:spPr>
     *     <a:gradFill>
     *       <a:gsLst>
     *         <a:gs pos="0">
     *           <a:schemeClr val="tx2">
     *             <a:shade val="50000"/>
     *           </a:schemeClr>
     *         </a:gs>
     *         <a:gs pos="39999">
     *           <a:schemeClr val="tx2">
     *             <a:tint val="20000"/>
     *           </a:schemeClr>
     *         </a:gs>
     *         <a:gs pos="70000">
     *           <a:srgbClr val="C4D6EB"/>
     *         </a:gs>
     *         <a:gs pos="100000">
     *           <a:schemeClr val="bg1"/>
     *         </a:gs>
     *       </a:gsLst>
     *     </a:gradFill>
     *   </xdr:spPr>
     *   ...
     * </xdr:pic>
     *
     * The above picture object is shown as an example of this double fill type. end example]
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.spreadsheet.blipfill?view=openxml-2.8.1
     */
    interface BlipFill extends EgFillModeProperties {
        blip?: Blip | null;
        srcRect?: FillRectangle | null;

        // attributes
        /** DPI Setting
         * Specifies the DPI (dots per inch) used to calculate the size of the blip. If not present or zero, the DPI in the blip is used.
         * [Note: This attribute is primarily used to keep track of the picture quality within a document. There are different levels of quality needed for
         * print than on-screen viewing and thus a need to track this information. end note]
         */
        dpi?: number | null;
        /** Rotate With Shape - Specifies that the fill should rotate with the shape. That is, when the shape that has been filled with a picture and
         * the containing shape (say a rectangle) is transformed with a rotation then the fill is transformed with the same rotation */
        rotWithShape?: boolean | null;
    }


    /** <x:b> (Bold, W3C XML content CT_BooleanProperty §A.2)
     * parents: font (§18.8.22); rPr (§18.4.7)
     *
     * Displays characters in bold face font style.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.bold?view=openxml-2.8.1
     */
    interface Bold {
        val: boolean; // default: true
    }


    /** <x:border> (Border, W3C XML CT_Border §A.2)
     * parents: borders (§18.8.5); dxf (§18.8.14); ndxf (§18.11.1.4); odxf (§18.11.1.6)
     *
     * Expresses a single set of cell border formats (left, right, top, bottom, diagonal). Color is optional. When missing, 'automatic' is implied.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.border?view=openxml-2.8.1
     */
    interface Border {
        /** leading edge border */
        start?: BorderProperty | null;
        /** trailing edge border */
        end?: BorderProperty | null;
        /** top border */
        top?: BorderProperty | null;
        /** bottom border */
        bottom?: BorderProperty | null;
        /** diagonal */
        diagonal?: BorderProperty | null;
        /** vertical inner border */
        vertical?: BorderProperty | null;
        /** horizontal inner borders */
        horizontal?: BorderProperty | null;

        // these aren't part of the spec, but MS Office 2013 requires them
        left?: BorderProperty | null;
        right?: BorderProperty | null;

        // attributes
        /** indicates if the cell's diagonal border includes a diagonal line, starting at the top left corner of the cell and moving down to the bottom right corner of the cell */
        diagonalDown?: boolean | null;
        /** indicates if the cell's diagonal border includes a diagonal line, starting at the bottom left corner of the cell and moving up to the top right corner of the cell */
        diagonalUp?: boolean | null;
        /** indicates if left, right, top, and bottom borders should be applied only to outside borders of a cell range */
        outline?: boolean | null; // default: true
    }


    /** (W3C XML CT_BorderPr §A.2)
     * parents: border (§18.8.4)
     * implementations: <x:bottom> (Bottom Border); <x:diagonal> (Diagonal Border); <x:end> (Trailing Edge Border); <x:horizontal> (Horizontal Inner Border); <x:start> (Leading End Border); <x:top> (Top Border); <x:vertical> (Vertical Inner Border)
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.bottomborder?view=openxml-2.8.1
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.diagonalborder?view=openxml-2.8.1
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.endborder?view=openxml-2.8.1
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.horizontalborder?view=openxml-2.8.1
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.startborder?view=openxml-2.8.1
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.topborder?view=openxml-2.8.1
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.verticalborder?view=openxml-2.8.1
     */
    interface BorderProperty {
        color?: Color | null;

        // attributes
        style?: ST_BorderStyle | null; // default: 'none'
    }


    /** <x:borders> (Borders, W3C XML CT_Borders §A.2)
     * parents: styleSheet (§18.8.39)
     *
     * This element contains borders formatting information, specifying all border definitions for all cells in the workbook.
     * NOTE: see link for example
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.borders?view=openxml-2.8.1
     */
    interface Borders {
        /** border count */
        borders: Border[];

        // attributes
        count?: number;
    }


    /** <x:c> (Calculation Cell, W3C XML CT_CalcCell §A.2)
     * parents: calcChain (§18.6.2)
     *
     * This element represents a single cell, which shall contain a formula, in the calc chain. Cells are calculated in the same order as the c elements appear in the Calculation Chain part.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.calculationcell?view=openxml-2.8.1
     */
    interface CalculationCell {
        // attributes
        //t?: boolean; // default: false
        //a?: boolean; // default: false
        /** sheet Id; default: 0 */
        i?: number | null;
        /** new dependency level; default: false */
        l?: boolean | null;
        /** ST_CellRef 'A1' style */
        r: string;
        /** child chain; default: false */
        s?: boolean | null;
    }


    /** <x:calcChain> (Calculation Chain Info, W3C XML CT_CalcChain §A.2)
     * parents: Root element of SpreadsheetML Calculation Chain part
     *
     * This element represents the root of the calculation chain.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.calculationchain?view=openxml-2.8.1
     */
    interface CalculationChain {
        cs: CalculationCell[];
    }


    /** <x:c> (Cell, W3C XML CT_Cell §A.2)
     * parents: row (§18.3.1.73)
     *
     * This collection represents a cell in the worksheet. Information about the cell's location (reference), value, data type, formatting, and formula is expressed here.
     * While a cell can have a formula element f and a value element v, when the cell's type t is inlineStr then only the element is is allowed as a child element.
     * NOTE: see link for examples
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.cell?view=openxml-2.8.1
     */
    interface Cell {
        // children
        f?: CellFormula | null;
        /** This element allows strings to be expressed directly in this cell instead of via a shared string table index */
        is?: InlineString | null;
        /** The value of this cell, see the 't' (cell data type) attribute.  If the cell contains a string, then this value is an index into the shared string table. 
         * Otherwise, the cell's value is expressed directly in this element */
        v?: CellValue | null;

        // attributes
        /** The 0-based index of the cell metadata record associated with this cell.  Metadata information is found in the Metadata Part. 
         * Cell metadata is extra information stored at the cell level, and is attached to the cell (travels through moves, copy / paste, clear, etc). */
        cm?: number | null;
        /** A Boolean indicating if the spreadsheet application should show phonetic information */
        ph?: boolean | null;
        /** ST_CellRef, 'A1' style cell reference, technically optional, but not in practice */
        r: string;
        /** The 0-based index of this cell's style in the <cellXfs> collection. Style records are stored in the Styles Part */
        s?: number | null;
        /** ST_CellType, cell data type */
        t?: ST_CellType | null;
        /** The 0-based index of the value metadata record associated with this cell's value.  Metadata records are stored in the Metadata Part.
         * Value metadata is extra information stored at the cell level, but associated with the value rather than the cell itself */
        vm?: number | null;
    }


    /** <x:cellStyle> (Cell Style, W3C XML CT_CellStyle, §A.2)
     * parents: cellStyles (§18.8.8)
     *
     * This element represents the name and related formatting records for a named cell style in this workbook.
     * Annex H contains a listing of cellStyles whose corresponding formatting records are implied rather than explicitly saved in the file.
     * In this case, a builtinId attribute is written on the cellStyle record, but no corresponding formatting records are written.
     * For all built-in cell styles, the builtinId determines the style, not the name. For all cell styles, Normal is applied by default.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.cellstyle?view=openxml-2.8.1
     */
    interface CellStyle {
        // attributes
        /** The index of a built-in cell style */
        builtinId?: number | null;
        /** True indicates that this built-in cell style has been customized.  By default built-in styles are not persisted when not in use.
         * This flag indicates that a built-in style has been modified, and therefore should be saved with the workbook, even if not currently in use. */
        customBuiltin?: boolean | null;
        /** If 'true' do not show this style in the application UI */
        hidden?: boolean | null;
        /** Indicates that this formatting is for an outline style.  When styles are applied to outline levels (using the outline feature), this value is set and
         * the formatting specified on this cell style is applied to the corresponding level of the outline */
        iLevel?: number | null;
        /** The name of the cell style */
        name?: string | null;
        /** CellStyleXfId, 0-based index referencing an xf record in the <cellStyleXfs> collection.  This is used to determine the formatting defined for this named cell style. */
        xfId: number;
    }


    /** <x:xf> (Format, W3C XML CT_Xf §A.2)
     * parents: cellStyleXfs (§18.8.9); cellXfs (§18.8.10)
     *
     * A single xf element describes all of the formatting for a cell.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.cellformat?view=openxml-2.8.1
     */
    interface CellFormat {
        alignment?: Alignment | null;
        protection?: Protection | null;
        //extLst? Element;

        // attributes
        /** indicates whether the alignment formatting specified for this xf should be applied */
        applyAlignment?: boolean | null;
        /** indicates whether the border formatting specified for this xf should be applied */
        applyBorder?: boolean | null;
        /** indicates whether the fill formatting specified for this xf should be applied */
        applyFill?: boolean | null;
        /** indicates whether the font formatting specified for this xf should be applied */
        applyFont?: boolean | null;
        /** indicates whether the number formatting specified for this xf should be applied */
        applyNumberFormat?: boolean | null;
        /** indicates whether the protection formatting specified for this xf should be applied */
        applyProtection?: boolean | null;
        /** 0-based index of the border record used by this cell format */
        borderId?: number | null;
        /** 0-based index of the fill record used by this cell format */
        fillId?: number | null;
        /** 0-based index of the font record used by this cell format */
        fontId?: number | null;
        /** NumberFormatId, Id of the number format (numFmt) record used by this cell format */
        numFmtId?: number | null;
        /** indicates whether the cell rendering includes a pivot table dropdown button; default: false */
        pivotButton?: boolean | null;
        /** indicates whether the text string in a cell should be prefixed by a single quote (e.g. 'text).  In these cases, the quote is not stored in the Shared Strings Part; default: false */
        quotePrefix?: boolean | null;
        /** CellStyleXfId, for xf records contained in cellXfs this is the 0-based index of an xf record contained in <cellStyleXfs> corresponding to the cell style applied to the cell */
        xfId?: number | null;
    }


    /** <x:cellXfs> (Cell Formats, W3C XML CT_CellXfs §A.2)
     * parents: styleSheet (§18.8.39)
     *
     * This element contains the master formatting records (xf) which define the formatting applied to cells in this workbook.
     * These records are the starting point for determining the formatting for a cell. Cells in the Sheet Part reference the xf records by zero-based index.
     * A cell can have both direct formatting (e.g., bold) and a cell style (e.g., Explanatory) applied to it.
     * Therefore, both the cell style xf records and cell xf records shall be read to understand the full set of formatting applied to a cell.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.cellformats?view=openxml-2.8.1
     */
    interface CellFormats {
        xfs: CellFormat[];

        // attributes
        count?: number;
    }


    /** <x:f> (Formula, W3C XML CT_CellFormula §A.2)
     * parents: c (§18.3.1.4); nc (§18.11.1.3); oc (§18.11.1.5)
     *
     * Formula for the cell. The formula expression is contained in the character node of this element.
     * [Example: <f>SUM(C4:E4)</f> end example]
     * NOTE: see link for example
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.cellformula?view=openxml-2.8.1
     */
    interface CellFormula {
        /** ST_Formula */
        content: string;
        // attributes
        t?: ST_CellFormulaType | null;
        ref?: ST_Ref | null;
        si?: number | null;
    }


    /** <x:cellStyleXfs> (Formatting Records, W3C XML CT_CellStyleXfs §A.2)
     * parents: styleSheet (§18.8.39)
     *
     * Master formatting records (xf's) which define the formatting for all named cell styles in this workbook.
     * Master formatting records reference individual elements of formatting (e.g. number format, font definitions, cell fills, etc.)
     * by specifying a zero-based index into those collections.  Master formatting records also specify whether to apply or ignore particular aspects of formatting.
     * [Example: Whether to apply a border or not. end example]
     * A cell can have both direct formatting (e.g., bold) and a cell style (e.g., Explanatory) applied to it.
     * Therefore, both the cell style xf records and cell xf records shall be read to understand the full set of formatting applied to a cell.
     * NOTE: see line for example
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.cellstyleformats?view=openxml-2.8.1
     */
    interface CellStyleFormats {
        xfs: CellFormat[];

        // attributes
        count?: number;
    }


    /** <x:cellStyles> (Cell Styles, W3C XML CT_CellStyles §A.2)
     * parents: styleSheet (§18.8.39)
     *
     * Contains the named cell styles, consisting of a sequence of named style records.  A named cell style is a collection of direct or themed
     * formatting (e.g. cell border, cell fill, font type/size/style) group together into a single named style, and can be applied to a cell.
     * [Example:
     * For example, "Normal", "Heading 1", "Title", and "20% Accent1" are named cell styles expressed below.
     * They have builtInId's associated with them, and use xfId to reference the specific formatting elements pertaining to the particular style.
     * The xfId is a zero-based index, referencing an xf record in the cellStyleXfs collection.
     * <cellStyles count="4">
     *   <cellStyle name="20% - Accent1" xfId="3" builtinId="30"/>
     *   <cellStyle name="Heading 1" xfId="2" builtinId="16"/>
     *   <cellStyle name="Normal" xfId="0" builtinId="0"/>
     *   <cellStyle name="Title" xfId="1" builtinId="15"/>
     * </cellStyles>
     * end example]
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.cellstyles?view=openxml-2.8.1
     */
    interface CellStyles {
        cellStyles: CellStyle[];

        // attributes
        count?: number;
    }


    /** <x:v> (Cell Value, W3C XML content ST_Xstring §A.6.9)
     * parents: c (§18.3.1.4); cell (§18.14.1); nc (§18.11.1.3); oc (§18.11.1.5); tp (§18.15.3)
     *
     * The value of a cell.  If the cell contains a string, then this value is an index into the shared string table.
     * Otherwise, the cell's value is expressed directly in this element.
     * Cells containing formulas express the last calculated result of the formula in this element.
     * For applications not wanting to implement the shared string table, an 'inline string' can be expressed in an <is> element
     * under <c> (instead of a <v> element under <c>),in the same way a string would be expressed in the shared string table. [Note: See <is> for an example. end note]
     * [Example:
     * In this example cell B4 contains the number "360" and C4 contains the UTC date 22 November 1976, 08:30.
     * <c r="B4">
     *   <v>360</v>
     * </c>
     * <c r="C4" t="d">
     *   <v>1976-11-22T08:30Z</v>
     * </c>
     * end example]
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.cellvalue?view=openxml-2.8.1
     */
    interface CellValue {
        content: string;
    }


    /** <xdr:clientData> (Client Data, W3C XML CT_AnchorClientData §A.4.5)
     * parents: absoluteAnchor (§20.5.2.1); oneCellAnchor (§20.5.2.24); twoCellAnchor (§20.5.2.33)
     *
     * This element is used to set certain properties related to a drawing element on the client spreadsheet application.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.spreadsheet.clientdata?view=openxml-2.8.1
     */
    interface ClientData {
        /** Locks With Sheet Flag - This attribute indicates whether to disable selection on drawing elements when the sheet is protected; default: true */
        fLocksWithSheet?: boolean | null;
        /** Prints With Sheet Flag - This attribute indicates whether to print drawing elements when printing the sheet; default: true */
        fPrintsWithSheet?: boolean | null;
    }


    /** <x:colors> (Colors, W3C XML CT_Colors §A.2)
     * parents: styleSheet (§18.8.39)
     *
     * Color information associated with this stylesheet.  This collection is written whenever the legacy color palette has been
     * modified (backwards compatibility settings) or a custom color has been selected while using this workbook.
     * When the color palette is modified, the indexedColors collection is written. When a custom color has been selected, the mruColors collection is written.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.colors?view=openxml-2.8.1
     */
    interface Colors {
        indexedColors?: IndexedColors | null;
        mruColors?: MruColors | null;
    }


    /** <x:col> (Column Width & Formatting, W3C XML CT_Col §A.2)
     * parents: cols (§18.3.1.17)
     *
     * Defines column width and column formatting for one or more columns of the worksheet.
     * [Example:
     * This example shows that column 5 (E) has width and style information applied.
     * <col min="5" max="5" width="9.140625" style="3"/>
     * end example]
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.column?view=openxml-2.8.1
     */
    interface Column {
        /** best fit column width; default: false */
        bestFit?: boolean | null;
        /** Flag indicating if the outlining of the affected column(s) is in the collapsed state. See description of row collapsed and outlinePr element's summaryBelow and summaryRight attributes for detailed information; default: false */
        collapsed?: boolean | null;
        /** custom width; default: false */
        customWidth?: boolean | null;
        /** Flag indicating if the affected column(s) are hidden on this worksheet; default: false */
        hidden?: boolean | null;
        /** Last column affected by this 'column info' record */
        max: number;
        /** First column affected by this 'column info' record */
        min: number;
        /** Outline level of affected column(s). Range is 0 to 7. See description of outlinePr element's summaryBelow and summaryRight attributes for detailed information; default: 0 */
        outlineLevel?: number | null;
        /** Flag indicating if the phonetic information should be displayed by default for the affected column(s) of the worksheet; default: false */
        phonetic?: boolean | null;
        /** Default style, affects cells not yet allocated in the column; default: 0 */
        style?: number | null;
        /** column width, measured as the number of chars of the maximum digit (0, 1, ..., 9) rendered in the
         * normal style's font, + 4 pixel margin padding (2 on each side), + 1 pixel padding for gridlines
         */
        width?: number | null;
    }


    /** <x:cols> (Column Information, W3C XML CT_Cols §A.2)
     * parents: worksheet (§18.3.1.99)
     *
     * Information about whole columns of the worksheet.
     * [Example:
     * This example shows that column 4 (D) has 'best fit' applied to it, which is also a custom width.
     * Also, column 5 (E) is listed as having a custom width and a style applied at the column level (as opposed to the cell level).
     * <cols>
     *   <col min="4" max="4" width="12" bestFit="1" customWidth="1"/>
     *   <col min="5" max="5" width="9.140625" style="3"/>
     * </cols>
     * end example]
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.columns?view=openxml-2.8.1
     */
    interface Columns {
        cols: Column[];
    }


    /** <xdr:col> (Column, W3C XML content ST_ColID §A.4.5)
     * parents: from (§20.5.2.15); to (§20.5.2.32)
     *
     * This element specifies the column that is used within the from and to elements to specify anchoring information for a shape within a spreadsheet
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.spreadsheet.columnid?view=openxml-2.8.1
     */
    interface ColumnId {
        content: ST_ColID;
    }


    /** <xdr:colOff> (Column Offset, W3C XML content ST_Coordinate §A.4.1)
     * parents: from (§20.5.2.15); to (§20.5.2.32)
     *
     * This element is used to specify the column offset within a cell. The units for which this attribute is specified in reside within the simple type definition referenced below.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.spreadsheet.columnoffset?view=openxml-2.8.1
     */
    interface ColumnOffset {
        content: ST_Coordinate;
    }


    /** <x:color> (Data Bar Color, W3C XML CT_Color §A.2)
     * parents: bottom (§18.8.6); colorScale (§18.3.1.16); dataBar (§18.3.1.28); diagonal (§18.8.13); end (§18.8.16); font (§18.8.22); horizontal (§18.8.25); mruColors (§18.8.28); rPr (§18.4.7); start (§18.8.37); stop (§18.8.38); top (§18.8.43); vertical (§18.8.44)
     *
     * One of the colors associated with the data bar or color scale.  The auto attribute shall not be used in the context of data bars.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.color?view=openxml-2.8.1
     */
    interface Color {
        /** indicating the color is automatic and system color dependent */
        auto?: boolean | null;
        /** indexed color value. Only used for backwards compatibility. References a color in indexedColors */
        indexed?: number | null;
        /** UnsignedIntHex, Standard Alpha Red Green Blue color value (ARGB) */
        rgb?: string | number | null;
        /** A 0-based index into the <clrScheme> collection (§20.1.6.2), referencing a particular <sysClr> or <srgbClr> value expressed in the Theme part */
        theme?: number | null;
        /** Specifies the tint value applied to the color. If tint is supplied, then it is applied to the value of the color to determine the final color applied.
         * The tint value is stored as a double from [-1.0, 1.0], where -1.0 means 100% darken and 1.0 means 100% lighten. Also, 0.0 means no change.
         * In loading the value, it is converted to HLS where HLS values are (0..HLSMAX), where HLSMAX is currently 255.
         * 
         * (Example: Here are some examples of how to apply tint to color:
         *   If (tint < 0)
         *     Lum' = Lum * (1.0 + tint)
         * 
         *     For example: Lum = 200; tint = -0.5; Darken 50%
         *     Lum' = 200 * (0.5) => 100
         * 
         *     For example: Lum = 200; tint = -1.0; Darken 100% (make black)
         *     Lum' = 200 * (1.0-1.0) => 0
         * 
         *   If (tint > 0)
         *     Lum' = Lum * (1.0-tint) + (HLSMAX – HLSMAX * (1.0-tint))
         * 
         *     For example: Lum = 100; tint = 0.75; Lighten 75%
         *     Lum' = 100 * (1-.75) + (HLSMAX – HLSMAX*(1-.75))
         *       = 100 * .25 + (255 – 255 * .25)
         *       = 25 + (255 – 63) = 25 + 192 = 217
         * 
         *     For example: Lum = 100; tint = 1.0; Lighten 100% (make white)
         *     Lum' = 100 * (1-1) + (HLSMAX – HLSMAX*(1-1))
         *       = 100 * 0 + (255 – 255 * 0)
         *       = 0 + (255 – 0) = 255
         * )
         */
        tint?: number | null; // default '0.0'
    }


    /** <x:comment> (Comment, W3C XML CT_Comment §A.2)
     * parents: commentList (§18.7.4)
     *
     * This element represents a single user entered comment. Each comment shall have an author and can optionally contain richly formatted text.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.comment?view=openxml-2.8.1
     */
    interface Comment {
        text: CommentText;
        //commentPr: CommentProperties;

        // attributes
        /** Author ID - Required. An unsigned integer which is used as the zero based index into the list of authors for this set of comments. */
        authorId: number;
        /** Cell Reference - Required. A string that serves as the A1 style reference to the cell that the comment is associated with.
         * Shall only reference a single cell, not a range of cells, since comments are on a per cell basis. */
        ref: ST_Ref;
        /** Shape ID - Specifies the ID of the DrawingML shape that provides the visual representation of the comment.
         * [Example: <comment shapeId="10 " ...> end example] */
        shapeId?: number | null;
        //guid: ST_Guid;
    }


    /** <x:commentList> (List of Comments, W3C XML CT_CommentList §A.2)
     * parents: comments (§18.7.6)
     *
     * This element is a container that holds a list of comments for the sheet.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.commentlist?view=openxml-2.8.1
     */
    interface CommentList {
        comments: Comment[];
    }


    /** <x:comments> (Comments, W3C XML CT_Comments §A.2)
     * parents: root element of SpreadsheetML Comments part
     *
     * This element is the root container of a set of comments and comment authors for a particular sheet.
     * Each set of comments for a sheet is stored in a separate xml part. The relationship part for a sheet defines a link to the correct comment part for that sheet.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.comments?view=openxml-2.8.1
     */
    interface Comments {
        authors: Authors;
        commentList: CommentList;
    }


    /** <x:text> (Comment Text, W3C XML CT_Rst §A.2)
     * parents: comment (§18.7.3)
     *
     * This element contains rich text which represents the text of a comment. The maximum length for this text
     * is a spreadsheet application implementation detail. A recommended guideline is 32767 chars.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.commenttext?view=openxml-2.8.1
     */
    interface CommentText {
        rs: RichTextRun[];
        t?: Text | null;
        //phoneticPr: PhoneticProperties;
        //rPh: PhoneticRun;
    }


    /** <condense>
     * parents: font (§18.8.22); rPr (§18.4.7)
     *
     * Macintosh compatibility setting. Represents special word/character rendering on Macintosh, when this flag is set.
     * The effect is to condense the text (squeeze it together). SpreadsheetML applications are not required to render according to this flag.
     */
    interface Condense {
        val: boolean; // default: true
    }


    /** <xdr:cxnSp> (Connection Shape, W3C XML CT_Connector §A.4.5)
     * parents: grpSp (§20.1.2.2.20); lockedCanvas (§20.3.2.1); absoluteAnchor (§20.5.2.1); grpSp (§20.5.2.17); oneCellAnchor (§20.5.2.24); twoCellAnchor (§20.5.2.33)
     *
     * This element specifies the properties for a connection shape drawing element (used to connect two sp elements). A connection shape is a line, etc. (specified using cxnSp) that connects two other shapes in this drawing.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.spreadsheet.connectionshape?view=openxml-2.8.1
     */
    interface ConnectionShape {
        nvCxnSpPr: Element; // CT_ConnectorNonVisual;
        spPr: ShapeProperties;
        style: ShapeStyle;

        // attributes
        /** Publish to Server Flag - This attribute indicates whether the shape shall be published with the worksheet when sent to the server. default: false */
        fPublish?: boolean | null;
        /** Reference to Custom Function
         * This element specifies the custom function associated with the object. [Example: A macro script, add-in function, and so on. end example]
         * The format of this string shall be application-defined, and should be ignored if not understood.
         * [Example: <... macro="DoWork()" /> end example]
         */
        macro?: string | null;
    }


    /** <xdr:contentPart> (Content Part, W3C XML CT_Rel §A.4.5)
     * parents: absoluteAnchor (§20.5.2.1); oneCellAnchor (§20.5.2.24); twoCellAnchor (§20.5.2.33)
     *
     * This element specifies a reference to XML content in a format not defined by /IEC 29500.
     * [Note: This part allows the native use of other commonly used interchange formats, such as:
     *  - MathML (http://www.w3.org/TR/MathML2/)
     *  - SMIL (http://www.w3.org/TR/REC-smil/)
     *  - SVG (http://www.w3.org/TR/SVG11/)
     * end note]
     * The relationship type of the explicit relationship specified by this element shall be http://schemas.openxmlformats.org/officeDocument/2006/customXml and
     * have a TargetMode attribute value of Internal. If an application cannot process content of the content type specified by the targeted part, then it should
     * continue to process the file. If possible, it should also provide some indication that unknown content was not imported.
     *
     * [Example: Consider a SpreadsheetML document which includes SVG markup in a part (file) named svg1.xml:
     * The SpreadsheetML Drawing part would reference this content as follows:
     * <wsDr>
     *   <twoCellAnchor>
     *     <from>
     *       <col>3</col>
     *       <colOff>152400</colOff>
     *       <row>5</row>
     *       <rowOff>123825</rowOff>
     *     </from>
     *     <to>
     *       <col>8</col>
     *       <colOff>266700</colOff>
     *       <row>22</row>
     *       <rowOff>38100</rowOff>
     *     </to>
     *   </twoCellAnchor>
     *   <contentPart r:id="svg1"/>
     * </wsDr>
     *
     * The contentPart element specifies that the SVG markup targeted by the relationship with an ID of svg1 is part of the SpreadsheetML document.
     * Examining the contents of the corresponding relationship part item, we can see the targets for that relationship:
     * <Relationships ...>
     *   <Relationship Id="svg1" TargetMode="Internal" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml" Target="svg1.xml" />
     *   ...
     * </Relationships>
     *
     * The corresponding relationship part item shows that the file to be imported is named svg1.xml. end example]
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.spreadsheet.contentpart?view=openxml-2.8.1
     */
    interface ContentPart {
        // attributes
        /** Relationship to Part - Specifies the relationship ID to a content part.
         * [Example: Consider an XML element which has the following id attribute:
         * <... r:id="rId1" />
         * The markup specifies the associated relationship part with relationship ID rId1 contains the corresponding relationship information for the parent XML element. end example]
         */
        rid: ST_RelationshipId;
    }


    interface ContentTypes {
        defaults: ContentTypeDefault[];
        overrides: ContentTypeOverride[];
    }


    interface ContentTypeDefault {
        // attributes
        contentType: string;
        extension: string;
    }


    interface ContentTypeOverride {
        // attributes
        contentType: string;
        partName: string;
    }


    /** <x:drawing> (Drawing, W3C XML CT_Drawing §A.2)
     * parents: chartsheet (§18.3.1.12); dialogsheet (§18.3.1.34); worksheet (§18.3.1.99)
     *
     * This element indicates that the sheet contains drawing components built on the drawingML platform.
     * The relationship Id references the part containing the drawingML definitions.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.drawing?view=openxml-2.8.1
     */
    interface Drawing {
        /** "r:id" */
        rid: ST_RelationshipId;
    }


    /** (W3C XML EG_ColorChoice §A.4.1)
     */
    interface EgColorChoice {
        // exclusive optional choice
        scrgbClr?: Element | null; // CT_ScRgbColor
        srgbClr?: Element | null; // CT_SRgbColor
        hslClr?: Element | null; // CT_HslColor
        schemeClr?: Element | null; // CT_SchemeColor
        prstClr?: Element | null; // CT_PresetColor
    }


    /** (W3C XML EG_EffectProperties §A.4.1)
     */
    interface EgEffectProperties {
        // exclusive choice
        effectLst?: Element | null; // CT_EffectList;
        effectDag?: Element | null; // CT_EffectContainer;
    }


    /** (W3C XML EG_FillModeProperties §A.4.1)
     */
    interface EgFillModeProperties {
        // exclusive choice
        tile?: Tile | null;
        stretch?: Stretch | null;
    }


    /** (W3C XML EG_FillProperties §A.4.1)
     */
    interface EgFillProperties {
        // exclusive choice
        noFill?: Element | null; // CT_NoFillProperties;
        solidFill?: Element | null; // CT_SolidColorFillProperties;
        gradFill?: Element | null; // CT_GradientFillProperties;
        blipFill?: Element | null; // CT_BlipFillProperties;
        pattFill?: Element | null; // CT_PatternFillProperties;
        grpFill?: Element | null; // CT_GroupFillProperties;
    }


    /** (W3C XML EG_Geometry §A.4.1)
     */
    interface EgGeometry {
        // exclusive choice
        custGeom?: Element | null; // CT_CustomGeometry2D
        prstGeom?: Element | null; // CT_PresetGeometry2D
    }


    /** (W3C XML EG_ObjectChoices §A.4.5)
     */
    interface EgObjectChoices {
        // exclusive choice
        contentPart?: ContentPart | null;
        cxnSp?: ConnectionShape | null;
        grpSp?: GroupShape | null;
        graphicFrame?: GraphicFrame | null;
        pic?: Picture | null;
        sp?: Shape | null;
    }


    /** <x:dxf> (Formatting, W3C XML CT_Dxf §A.2)
     * parents: dxfs (§18.8.15); rfmt (§18.11.1.17)
     *
     * A single dxf record, expressing incremental formatting to be applied.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.differentialformat?view=openxml-2.8.1
     */
    interface DifferentialFormat {
        alignment?: Alignment | null;
        border?: Border | null;
        fill?: Fill | null;
        font?: Font | null;
        numFmt?: NumberingFormat | null;
        protection?: Protection | null;
    }


    /** <x:dxfs> (Formats, W3C XML CT_Dxfs §A.2)
     * parents: styleSheet (§18.8.39)
     *
     * This element contains the master differential formatting records (dxf's) which define formatting for all non-cell formatting in this workbook.
     * Whereas xf records fully specify a particular aspect of formatting (e.g., cell borders) by referencing those formatting definitions elsewhere in the
     * Styles part, dxf records specify incremental (or differential) aspects of formatting directly inline within the dxf element.
     * The dxf formatting is to be applied on top of or in addition to any formatting already present on the object using the dxf record.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.differentialformats?view=openxml-2.8.1
     */
    interface DifferentialFormats {
        dxfs: DifferentialFormat[];

        // attributes
        count?: number;
    }


    /** <x:evenFooter> (Even Page Footer, W3C XML content ST_Xstring §A.6.9)
     * parents: headerFooter (§18.3.1.46)
     *
     * Even page footer value. Corresponds to even printed pages.
     * [Example: Even page(s) in the sheet can not be printed if the print area is specified to be a range such that it falls outside an even page's scope. end example]
     * If no even footer is specified, then the odd footer's value is assumed for even page footers. See the evenHeader element (§18.3.1.39) description for full discussion of value content.
     *
     * Note: Specification URL for 'evenHeader' has full description of the content string format
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.evenfooter?view=openxml-2.8.1
     */
    interface EvenFooter {
        content: string;
    }


    /** <x:evenHeader> (Even Page Header, W3C XML content ST_Xstring §A.6.9)
     * parents: headerFooter (§18.3.1.46)
     *
     * Even page header value. Corresponds to even printed pages.
     * [Example: Even page(s) in the sheet can not be printed if the print area is specified to be a range such that it falls outside an even page's scope. end example]
     * If no even header is specified, then odd header value is assumed for even page headers.
     *
     * Note: Specification URL for 'evenHeader' has full description of the content string format
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.evenheader?view=openxml-2.8.1
     */
    interface EvenHeader {
        content: string;
    }


    /** <extend>
     * parents: font (§18.8.22); rPr (§18.4.7)
     *
     * This element specifies a compatibility setting used for previous spreadsheet applications, resulting in special word/character
     * rendering on those legacy applications, when this flag is set. The effect extends or stretches out the text.
     * SpreadsheetML applications are not required to render according to this flag.
     */
    interface Extend {
        val: boolean; // default: true
    }


    /** <xdr:ext> (Shape Extent, W3C XML CT_PositiveSize2D §A.4.1)
     * parents: absoluteAnchor (§20.5.2.1); oneCellAnchor (§20.5.2.24)
     *
     * This element describes the length and width properties for how far a drawing element should extend for.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.spreadsheet.extent?view=openxml-2.8.1
     */
    interface Extent {
        // attributes
        /** Specifies the length of the extents rectangle in EMUs. This rectangle shall dictate the size of the object as displayed (the result of any scaling to the original object).
         * [Example: Consider a DrawingML object specified as follows:
         * <... cx="1828800" cy="200000"/>
         * The cx attributes specifies that this object has a height of 1828800 EMUs (English Metric Units). end example]
         */
        cx: ST_PositiveCoordinate;
        /** Specifies the width of the extents rectangle in EMUs. This rectangle shall dictate the size of the object as displayed (the result of any scaling to the original object).
         * [Example: Consider a DrawingML object specified as follows:
         * <... cx="1828800" cy="200000"/>
         * The cy attribute specifies that this object has a width of 200000 EMUs (English Metric Units). end example]
         */
        cy: ST_PositiveCoordinate;
    }


    /** <x:fill> (Fill, W3C XML CT_Fill §A.2)
     * parents: dxf (§18.8.14); fills (§18.8.21); ndxf (§18.11.1.4); odxf (§18.11.1.6)
     *
     * This element specifies fill formatting.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.fill?view=openxml-2.8.1
     */
    interface Fill {
        // pattern and gradient are exclusive
        patternFill?: PatternFill | null;
        gradientFill?: GradientFill | null;
    }


    /** <x:fills> (Fills, W3C XML CT_Fills §A.2)
     * parents: styleSheet (§18.8.39)
     *
     * This element defines the cell fills portion of the Styles part, consisting of a sequence of fill records.
     * A cell fill consists of a background color, foreground color, and pattern to be applied across the cell.
     * NOTE: see link for examples
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.fills?view=openxml-2.8.1
     */
    interface Fills {
        fills: Fill[];

        // attributes
        count?: number;
    }


    /** <a:fillRect> (Fill Rectangle, W3C XML CT_RelativeRect §A.4.1)
     * parents: stretch (§20.1.8.56)
     *
     * This element specifies a fill rectangle. When stretching of an image is specified, a source rectangle, srcRect, is scaled to fit the specified fill rectangle.
     * Each edge of the fill rectangle is defined by a percentage offset from the corresponding edge of the shape's bounding box. A positive percentage specifies an
     * inset, while a negative percentage specifies an outset. [Note: For example, a left offset of 25% specifies that the left edge of the fill rectangle is located to the
     * right of the bounding box's left edge by an amount equal to 25% of the bounding box's width. end note]
     *
     * [Example:
     * <a:blipFill>
     *   <a:blip r:embed="rId2"/>
     *   <a:stretch>
     *     <a:fillRect b="10000" r="25000"/>
     *   </a:stretch>
     * </a:blipFill>
     * The above image is stretched to fill the entire rectangle except for the bottom 10% and rightmost 25%.
     * end example]
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.fillrectangle?view=openxml-2.8.1
     */
    interface FillRectangle /* TODO extends RelativeRectangleType */ {
        /** Bottom Offset - Specifies the bottom edge of the rectangle. default: "0%" */
        b?: ST_Percentage | null;
        /** Left Offset - Specifies the left edge of the rectangle. default: "0%" */
        l?: ST_Percentage | null;
        /** Right Offset - Specifies the right edge of the rectangle. default: "0%" */
        r?: ST_Percentage | null;
        /** Top Offset - Specifies the top edge of the rectangle. default: "0%" */
        t?: ST_Percentage | null;
    }


    /** <x:firstFooter> (First Page Footer, W3C XML content ST_Xstring §A.6.9)
     * parents: headerFooter (§18.3.1.46)
     *
     * First page footer content. Only used when headerFooter@differentFirst is '1'. Corresponds to first printed page.
     * [Example:The first logical page in the sheet can not be printed if the print area is specified to be a range such that it falls outside the first page's scope. end example]
     * See evenHeader (§18.3.1.39) description for full discussion of value content.
     *
     * Note: Specification URL for 'evenHeader' has full description of the content string format
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.firstfooter?view=openxml-2.8.1
     */
    interface FirstFooter {
        content: string;
    }


    /** <x:firstHeader> (First Page Header, W3C XML content ST_Xstring §A.6.9)
     * parents: headerFooter (§18.3.1.46)
     *
     * First page header content. Only used when headerFooter@differentFirst is '1'. Corresponds to first printed page.
     * [Example: The first logical page in the sheet can not be printed if the print area is specified to be a range such that it falls outside the first page's scope. end example]
     * See evenHeader (§18.3.1.39) description for full discussion of value content.
     *
     * Note: Specification URL for 'evenHeader' has full description of the content string format
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.firstheader?view=openxml-2.8.1
     */
    interface FirstHeader {
        content: string;
    }


    /** <x:font> (Font, W3C XML CT_Font §A.2)
     * parents: dxf (§18.8.14); fonts (§18.8.23); ndxf (§18.11.1.4); odxf (§18.11.1.6)
     *
     * This element defines the properties for one of the fonts used in this workbook.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.font?view=openxml-2.8.1
     */
    interface Font {
        b?: Bold | null;
        charset?: FontCharSet | null;
        color?: Color | null;
        condense?: Condense | null;
        extend?: Extend | null;
        family?: FontFamily | null;
        i?: Italic | null;
        name?: FontName | null;
        outline?: Outline | null;
        scheme?: FontScheme | null;
        shadow?: Shadow | null;
        strike?: Strike | null;
        sz?: FontSize | null;
        u?: Underline | null;
        vertAlign?: VerticalTextAlignment | null;
    }


    /** <x:fonts> (Fonts, W3C XML CT_Fonts §A.2)
     * parents: styleSheet (§18.8.39)
     *
     * This element contains all font definitions for this workbook.
     * [Example:
     * This example expresses one font in the workbook. A Calibri family font, with font size of 11, with strikethrough applied.
     * <fonts count="2">
     *   <font>
     *     <strike/>
     *     <sz val="11"/>
     *     <color theme="1"/>
     *     <name val="Calibri"/>
     *     <family val="2"/>
     *     <scheme val="minor"/>
     *   </font>
     * </fonts>
     * end example]
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.fonts?view=openxml-2.8.1
     */
    interface Fonts {
        fonts: Font[];

        // attributes
        count?: number;
    }


    /** <x:charset> (Charset, W3C XML content CT_IntProperty §A.2)
     * parents: font (§18.8.22); rPr (§18.4.7)
     *
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.fontcharset?view=openxml-2.8.1
     */
    interface FontCharSet {
        val: number;
    }


    /** <x:family> (Font Family, W3C XML content CT_IntProperty §A.2)
     * parents: font (§18.8.22); rPr (§18.4.7)
     *
     * The font family this font belongs to. A font family is a set of fonts having common stroke width and serif characteristics.
     * This is system level font information. The font name overrides when there are conflicting values.
     * Value    Font Family
     *  0       Not applicable.
     *  1       Roman
     *  2       Swiss
     *  3       Modern
     *  4       Script
     *  5       Decorative
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.fontfamily?view=openxml-2.8.1
     */
    interface FontFamily {
        /** ST_FontFamily, range [0, 14], includes: 0=N/A, 1=Roman, 2=Swiss, 3=Modern, 4=Script, 5=Decorative */
        val: number;
    }


    /** <x:name> (Font Name, W3C XML CT_FontName §A.2)
     * parents: font (§18.8.22)
     *
     * This element specifies the face name of this font.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.fontname?view=openxml-2.8.1
     */
    interface FontName {
        /** A string representing the name of the font. If the font doesn't exist (because it isn't installed on the system),
         * or the charset not supported by that font, then another font should be substituted.
         * The string length for this attribute shall be 0 to 31 characters
         */
        val: string;
    }


    /** <x:scheme> (Scheme, W3C XML CT_FontScheme §A.2)
     * parents: font (§18.8.22); rPr (§18.4.7)
     *
     * Defines the font scheme, if any, to which this font belongs. When a font definition is part of a theme definition,
     * then the font is categorized as either a major or minor font scheme component.
     * When a new theme is chosen, every font that is part of a theme definition is updated to use the new major or minor font definition for that theme.
     * Usually major fonts are used for styles like headings, and minor fonts are used for body and paragraph text.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.fontscheme?view=openxml-2.8.1
     */
    interface FontScheme {
        val: ST_FontScheme;
    }


    /** <a:fontRef> (Font Reference, W3C XML CT_FontReference §A.4.1)
     * parents: style (§21.3.2.24); style (§21.4.2.28); style (§20.1.2.2.37); style (§20.5.2.31); style (§19.3.1.46); tcTxStyle (§20.1.4.2.30)
     *
     * This element represents a reference to a themed font. When used it specifies which themed font to use along with a choice of color.
     * [Example: Consider the following example of a font reference within DrawingML:
     * <fontRef idx="minor">
     *   <schemeClr val="tx1"/>
     * </fontRef>
     * In this example, we see a font referencing the minor font defined within the theme. end example]
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.fontreference?view=openxml-2.8.1
     */
    interface FontReference extends EgColorChoice {
        // attributes
        /** Identifier - Specifies the identifier of the font to reference. */
        idx: ST_FontCollectionIndex;
    }


    /** <x:sz> (Font Size, W3C XML CT_FontSize §A.2)
     * parents: font (§18.8.22); rPr (§18.4.7)
     *
     * This element represents the point size (1/72 of an inch) of the Latin and East Asian text.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.fontsize?view=openxml-2.8.1
     */
    interface FontSize {
        /** positive font points measure (1/72 inch) */
        val: number;
    }


    /** <x:gradientFill> (Gradient, W3C XML CT_GradientFill §A.2)
     * parents: fill (§18.8.20)
     *
     * This element defines a gradient-style cell fill. Gradient cell fills can use one or two colors as the end points of color interpolation.
     * NOTE: see link for examples
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.gradientfill?view=openxml-2.8.1
     */
    interface GradientFill {
        stops: GradientStop[];

        // attributes
        /** Bottom Convergence - Range [0, 1]. Specifies in percentage format (from the top to the bottom) the position of the bottom edge of the inner rectangle (color 1).
         * For bottom, 0 means the bottom edge of the inner rectangle is on the top edge of the cell, and 1 means it is on the bottom edge of the cell. default 0
         */
        bottom?: number | null;
        /** Linear Gradient Degree - Angle of the linear gradient - vertical, horizontal, diagonal.
         * (Example: In these examples, color 1 is white and color 2 is blue.
         *   90 = Horizontal & color 1 to color 2
         *   270 = Horizontal & color 1 to color 2
         *   0 = Vertical & color 1 to color 2
         *   180 = Vertical & color 1 to color 2
         *   45 = Diagonal Up & top to bottom (color 1 to color 2)
         *   225 = Diagonal Up & bottom to top (color 1 to color 2)
         *   135 = Diagonal Down & top to bottom (color 1 to color 2)
         *   315 = Diagonal Down & bottom to top (color 1 to color 2)
         * ), default: 0
         */
        degree?: number | null;
        /** Left Convergence - Range [0, 1]. Specifies in percentage format (from the left to the right) the position of the left edge of the inner rectangle (color 1).
         * For left, 0 means the left edge of the inner rectangle is on the left edge of the cell, and 1 means it is on the right edge of the cell.
         * (applies to From Corner and From Center gradients). default: 0
         */
        left?: number | null;
        /** Right Convergence - Range [0, 1]. Specifies in percentage format (from the left to the right) the position of the right edge of the inner rectangle (color 1).
         * For right, 0 means the right edge of the inner rectangle is on the left edge of the cell, and 1 means it is on the right edge of the cell.
         * (applies to From Corner and From Center gradients). default: 0
         */
        right?: number | null;
        /** Top Gradient Convergence - Range [0, 1]. Specifies in percentage format (from the top to the bottom) the position of the top edge of the inner rectangle (color 1).
         * For top, 0 means the top edge of the inner rectangle is on the top edge of the cell, and 1 means it is on the bottom edge of the cell.
         * (applies to From Corner and From Center gradients). default: 0
         */
        top?: number | null;
        /** Gradient Fill Type - gradient fill type; default: 'linear' */
        type: ST_GradientType;
    }


    /** <x:stop> (Gradient Stop, W3C XML CT_GradientStop §A.2)
     * parents: gradientFill (§18.8.24)
     *
     * One of a sequence of two or more gradient stops, constituting this gradient fill.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.gradientstop?view=openxml-2.8.1
     */
    interface GradientStop {
        color: Color;

        // attributes
        /** Gradient Stop Position - Position information for this gradient stop. Interpreted exactly like gradientFill left, right, bottom, top.
         * The position indicated here indicates the point where the color is pure. Before and and after this position
         * the color can be in transition (or pure, depending on if this is the last stop or not).
         */
        position: number;
    }


    /** <a:graphic> (Graphic Object, W3C XML CT_GraphicalObject §A.4.1)
     * parents: anchor (§20.4.2.3); graphicFrame (§21.3.2.12); graphicFrame (§20.1.2.2.18); graphicFrame (§20.5.2.16); graphicFrame (§19.3.1.21); inline (§20.4.2.8)
     *
     * This element specifies the existence of a single graphic object. Document authors should refer to this element when they wish to persist a graphical object of some kind.
     * The specification for this graphical object is provided entirely by the document author and referenced within the graphicData child element.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.graphic?view=openxml-2.8.1
     */
    interface Graphic {
        graphicData: GraphicData;
    }


    /** <a:graphicData> (Graphic Object Data, W3C XML CT_GraphicalObjectData §A.4.1)
     * parents: graphic (§20.1.2.2.16)
     *
     * This element specifies the reference to a graphic object within the document. This graphic object is provided entirely by the document authors who choose to persist this data within the document.
     * [Note: Depending on the kind of graphical object used not every generating application that supports the OOXML framework has the ability to render the graphical object. end note]
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.graphicdata?view=openxml-2.8.1
     */
    interface GraphicData {
        [key: string]: any;

        // attributes
        /** Uniform Resource Identifier - Specifies the uniform resource identifier that represents the data stored under this tag. The is used to identify the correct 'server' that can process the contents of this tag. */
        uri: string;
    }


    /** <a:graphicFrame> (Graphic Frame, W3C XML CT_GraphicalObjectFrame §A.4.5)
     * parents: grpSp (§20.1.2.2.20); lockedCanvas (§20.3.2.1); absoluteAnchor (§20.5.2.1); grpSp (§20.5.2.17); oneCellAnchor (§20.5.2.24); twoCellAnchor (§20.5.2.33)
     *
     * This element describes a single graphical object frame for a spreadsheet which contains a graphical object.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.spreadsheet.graphicframe?view=openxml-2.8.1
     */
    interface GraphicFrame {
        graphic: Graphic;
        nvGraphicFramePr: Element; // CT_GraphicalObjectFrameNonVisual
        xfrm: Transform2D;

        // attributes
        /** Publish to Server Flag - This attribute indicates whether the shape shall be published with the worksheet when sent to the server. default: false */
        fPublished?: boolean | null;
        /** Reference To Custom Function
         * This element specifies the custom function associated with the object. [Example: A macro script, add-in function, and so on. end example]
         * The format of this string shall be application-defined, and should be ignored if not understood.
         * [Example: <... macro="DoWork()" /> end example]
         */
        macro?: string | null;
    }


    /** <xdr:grpSp> (Group Shape, W3C XML CT_GroupShape §A.4.5)
     * parents: absoluteAnchor (§20.5.2.1); grpSp (§20.5.2.17); oneCellAnchor (§20.5.2.24); twoCellAnchor (§20.5.2.33)
     *
     * This element specifies a group shape that represents many shapes grouped together. This shape is to be treated just as if it were a regular
     * shape but instead of being described by a single geometry it is made up of all the shape geometries encompassed within it.
     * Within a group shape each of the shapes that make up the group are specified just as they normally would. The idea behind grouping elements however is
     * that a single transform can apply to many shapes at the same time.
     * [Example: Consider the following group shape.
     * <xdr:grpSp>
     *   <xdr:nvGrpSpPr>
     *     <xdr:cNvPr id="10" name="Group 9"/>
     *     <xdr:cNvGrpSpPr/>
     *     <xdr:nvPr/>
     *   </xdr:nvGrpSpPr>
     *   <xdr:grpSpPr>
     *     <a:xfrm>
     *       <a:off x="838200" y="990600"/>
     *       <a:ext cx="2426208" cy="978408"/>
     *       <a:chOff x="838200" y="990600"/>
     *       <a:chExt cx="2426208" cy="978408"/>
     *    </a:xfrm>
     *   </xdr:grpSpPr>
     *   <xdr:sp>
     *     ...
     *   </xdr:sp>
     *   ...
     * </xdr:grpSp>
     * In the above example we see three shapes specified within a single group. These three shapes have their position and sizes specified just as they normally would within the shape tree.
     * The generating application should apply the transformation after the bounding box for the group shape has been calculated. end example]
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.spreadsheet.groupshape?view=openxml-2.8.1
     */
    interface GroupShape {
        nvGrpSpPr: NonVisualGroupShapeProperties;
        grpSpPr: GroupShapeProperties;
        // exclusive
        sps?: Shape[];
        grpSps?: GroupShape[];
        graphicFrames?: GraphicFrame[];
        cxnSps?: ConnectionShape[];
        pics?: Picture[];
    }


    /** <a:grpSpLocks> (Group Shape Locks, W3C XML CT_GroupLocking §A.4.1)
     * parents: cNvGrpSpPr (§21.3.2.5); cNvGrpSpPr (§20.1.2.2.6); cNvGrpSpPr (§20.5.2.6); cNvGrpSpPr (§19.3.1.10)
     *
     * This element specifies all locking properties for a connection shape.
     * These properties inform the generating application about specific properties that have been previously locked and thus should not be changed.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.groupshapelocks?view=openxml-2.8.1
     */
    interface GroupShapeLocks {
        extLst?: Element; // CT_OfficeArtExtensionList

        // attributes
        /** (Disallow Aspect Ratio Change - Specifies that the generating application should not allow aspect ratio changes for the corresponding connection shape. default: false */
        noChangeAspect?: boolean | null;
        /** Disallow Shape Grouping - Specifies that the corresponding group shape cannot be grouped. That is it cannot be combined within other shapes to form a group of shapes. default: false */
        noGrp?: boolean | null;
        /** Disallow Moving Shape - Specifies that the corresponding graphic frame cannot be moved. Objects that reside within the graphic frame can still be moved unless they also have been locked. default: false */
        noMove?: boolean | null;
        /** Disallow Shape Resizing - Specifies that the corresponding group shape cannot be resized. default: false */
        noResize?: boolean | null;
        /** Disallow Shape Rotation - Specifies that the corresponding group shape cannot be rotated Objects that reside within the group can still be rotated unless they also have been locked. default: false */
        noRot?: boolean | null;
        /** Disallow Shape Selection - Specifies that the corresponding group shape cannot have any part of it be selected. That means that no picture, shapes or attached text can be selected either if this attribute has been specified. [Note: This property is inherited by sub-elements and thus all shapes within the group shape cannot be selected when this attribute is set to a value of true. end note]; default: false */
        noSelect?: boolean | null;
        /** Disallow Shape Ungrouping - Specifies that the generating application should not show adjust handles for the corresponding connection shape. default: false */
        noUngrp?: boolean | null;
    }


    /** <xdr:grpSpPr> (Group Shape Properties, W3C XML CT_GroupShapeProperties §A.4.1)
     * parents: grpSp (§20.5.2.17)
     *
     * This element specifies the properties that are to be common across all of the shapes within the corresponding group. If there are any conflicting properties
     * within the group shape properties and the individual shape properties then the individual shape properties should take precedence.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.spreadsheet.groupshapeproperties?view=openxml-2.8.1
     */
    interface GroupShapeProperties extends EgEffectProperties, EgFillProperties {
        xfrm?: TransformGroup | null;
        scene3d?: Element | null; // CT_Scene3D
        extLst?: Element | null; // CT_OfficeArtExtensionList

        // attributes
        /** Black and White Mode
         * Specifies that the group shape should be rendered using only black and white coloring. That is the coloring information for the group shape
         * should be converted to either black or white when rendering the corresponding shapes.
         * No gray is to be used in rendering this image, only stark black and stark white.
         * [Note: This does not mean that the group shapes themselves are stored with only black and white color information.
         * This attribute instead sets the rendering mode that the shapes use when rendering. end note]
         */
        bwMode?: ST_BlackWhiteMode | null;
    }


    /** <x:headerFoot> (Header Footer Settings, W3C XML CT_HeaderFooter §A.2)
     * parents: chartsheet (§18.3.1.12); customSheetView (§18.3.1.24); customSheetView (§18.3.1.25); dialogsheet (§18.3.1.34); worksheet (§18.3.1.99)
     *
     * Header and footer settings.
     * [Example:
     * This example demonstrates "Header" at the top and "Footer" at the bottom of a page.
     * <headerFooter>
     *   <oddHeader>&amp;CHeader</oddHeader>
     *   <oddFooter>&amp;CFooter</oddFooter>
     * </headerFooter>
     * end example]
     * The tokens in the header & footer elements can be localized. An application can decide which locales are supported.
     * Even when a locale is not supported, the header and footer text shall be loaded, and only the formatting is discarded.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.headerfooter?view=openxml-2.8.1
     */
    interface HeaderFooter {
        evenFooter?: EvenFooter | null; // (Even Page Footer)
        evenHeader?: EvenHeader | null; // (Even Page Header)
        firstFooter?: FirstFooter | null; // (First Page Footer)
        firstHeader?: FirstHeader | null; // (First Page Header)
        oddFooter?: OddFooter | null; // (Odd Page Footer)
        oddHeader?: OddHeader | null; // (Odd Page Header)
    }


    /** (W3C XML CT_Hyperlink §A.4.1)
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.hyperlinktype?view=openxml-2.8.1
     */
    interface Hyperlink {
        snd?: HyperlinkSound | null;
        extLst?: Element | null;

        // attributes
        /** Action Setting
         * Specifies an action that is to be taken when this hyperlink is activated. This can be used to specify a slide to be navigated to or a script of code to be run.
         * default: ""
         */
        action?: string | null;
        /** End Sounds
         * Specifies if the URL in question should stop all sounds that are playing when it is clicked.
         * default: false
         */
        endSnd?: boolean | null;
        /** Add Hyperlink to Page History
         * Specifies whether to add this to the history when navigating to it. This allows for the viewing of this presentation without
         * the storing of history information on the viewing machine. If this attribute is omitted, then a value of 1 or true is assumed.
         * default: false
         */
        history?: boolean | null;
        /** Highlight Click
         * Specifies if this attribute has already been used within this document. That is when a hyperlink has already been visited that this attribute would be utilized so the
         * generating application can determine the color of this text. If this attribute is omitted, then a value of 0 or false is implied.
         * default: false
         */
        highlightClick?: boolean | null;
        /** <r:id> Drawing Object Hyperlink Target
         * Specifies the relationship id that when looked up in this slides relationship file contains the target of this hyperlink. This attribute cannot be omitted.
         */
        id?: number | null;
        /** Invalid URL
         * Specifies the URL when it has been determined by the generating application that the URL is invalid.
         * That is the generating application can still store the URL but it is known that this URL is not correct.
         * default: ""
         */
        invalidUrl: string;
        /** Target Frame
         * Specifies the target frame that is to be used when opening this hyperlink. When the hyperlink is activated this attribute is used to determine if
         * a new window is launched for viewing or if an existing one can be used. If this attribute is omitted, than a new window is opened.
         * default: ""
         */
        tgtFrame?: string | null;
        /** Hyperlink Tooltip
         * Specifies the tooltip that should be displayed when the hyperlink text is hovered over with the mouse.
         * If this attribute is omitted, than the hyperlink text itself can be displayed.
         * default: ""
         */
        tooltip?: string | null;
    }


    /** <a:hlinkClick> (Click Hyperlink)
     * parents: cNvPr (§21.3.2.7); cNvPr (§20.1.2.2.8); cNvPr (§20.2.2.3); cNvPr (§20.5.2.8); cNvPr (§19.3.1.12); defRPr (§21.1.2.3.2); docPr (§20.4.2.5); endParaRPr (§21.1.2.2.3); rPr (§21.1.2.3.9)
     *
     * Specifies the on-click hyperlink information to be applied to a run of text. When the hyperlink text is clicked the link is fetched.
     * [Example: Consider the DrawingML shown below.
     * <p:txBody>
     *   ...
     *   <a:p>
     *     <a:r>
     *       <a:rPr ...>
     *         <a:hlinkClick r:id="rId2" tooltip="Some Sample Text"/>
     *       </a:rPr>
     *       ...
     *       <a:t>Sample Text</a:t>
     *     ...
     *     </a:r>
     *   </a:p>
     * </p:txBody>
     * The above run of text is a hyperlink that points to the resource pointed at by rId2 within this slides relationship file.
     * Additionally this text should display a tooltip when the mouse is hovered over the run of text. end example]
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.hyperlinkonclick?view=openxml-2.8.1
     */
    interface HyperlinkOnClick extends Hyperlink {
    }


    /** <a:hlinkHover> (Hyperlink for Hover)
     * parents: cNvPr (§21.3.2.7); cNvPr (§20.1.2.2.8); cNvPr (§20.2.2.3); cNvPr (§20.5.2.8); cNvPr (§19.3.1.12); docPr (§20.4.2.5)
     *
     * This element specifies the hyperlink information to be activated when the user's mouse is hovered over the corresponding object.
     * The operation of the hyperlink is to have the specified action be activated when the mouse of the user hovers over the object.
     * When this action is activated then additional attributes can be used to specify other tasks that should be performed along with the action.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.hyperlinkonhover?view=openxml-2.8.1
     */
    interface HyperlinkOnHover extends Hyperlink {

    }


    /** <a:snd> (Hyperlink Sound, W3C XML CT_EmbeddedWAVAudioFile §A.4.1)
     * parents: hlinkClick (§21.1.2.3.5); hlinkHover (§20.1.2.2.23); hlinkMouseOver (§21.1.2.3.6)
     *
     * This element specifies a sound to be played when a hyperlink within the document is activated. This sound is specified from within the parent hyperlink element.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.hyperlinksound?view=openxml-2.8.1
     */
    interface HyperlinkSound {
        /** <r:embed> Embedded Audio File Relationship ID
         * Specifies the identification information for an embedded audio file. This attribute is used to specify the location of an object that resides locally within the file.
         * [Note: A list of suggested audio types is provided in §15.2.2. end note]
         */
        embed: string;
        /** Sound Name
         * Specifies the original name or given short name for the corresponding sound. This is used to distinguish this sound from others by providing
         * a human readable name for the attached sound should the user need to identify the sound among others within the UI.
         * default: ""
         */
        name?: string;
    }


    /** <x:indexedColors> (Color Indexes, W3C XML CT_IndexedColors §A.2)
     * parents: colors (§18.8.11)
     *
     * A legacy indexing scheme for colors that is still required for some records, and for backwards compatibility with legacy formats.
     * This element contains a sequence of color values that correspond to color indexes (zero-based). When using the default indexed color palette,
     * the values are not written out, but instead are implied. When the color palette has been modified from default, then the entire color palette is written out.
     * NOTE: see link for further color index details
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.indexedcolors?view=openxml-2.8.1
     */
    interface IndexedColors {
        rgbColors: RgbColor[];
    }


    /** <x:is> (Rich Text Inline, W3C XML CT_Rst §A.2)
     * parents: c (§18.3.1.4); nc (§18.11.1.3); oc (§18.11.1.5)
     *
     * This element allows for strings to be expressed directly in the cell definition instead of implementing the shared string table.
     * [Example:
     * <c r="A1">
     *   <is>
     *     <t>String</t>
     *   </is>
     * </c>
     * end example]
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.inlinestring?view=openxml-2.8.1
     */
    interface InlineString {
        t?: Text | null;
        rs: RichTextRun[];
        //rPh?: PhoneticRun[];
        //phoneticPr?: PhoneticPr;
    }


    /** <i>
     * parents: font (§18.8.22); rPr (§18.4.7)
     */
    interface Italic {
        val: boolean; // default: true
    }


    /** <x:legacyDrawing> (Legacy Drawing Reference, W3C XML CT_LegacyDrawing §A.2)
     * parents: chartsheet (Part 1, §18.3.1.12); dialogsheet (Part 1, §18.3.1.34); worksheet (Part 1, §18.3.1.99)
     *
     * This element is present when the sheet contains drawing shapes defined by VML. In this case, the element
     * contains an explicit relationship whose ID points to the part containing the VML definitions.
     * [Example: <drawing r:id="rId1"/> end example]
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.legacydrawing?view=openxml-2.8.1
     */
    interface LegacyDrawing {
        /** "r:id" */
        rid: ST_RelationshipId;
    }


    /** (W3C XML CT_Marker §A.4.5)
     */
    interface MarkerType {
        col: ColumnId;
        row: RowId;
        colOff: ColumnOffset;
        rowOff: RowOffset;
    }


    /** <xdr:from> (Starting Anchor Point, W3C XML CT_Marker §A.4.5)
     * parents: anchor (§18.3.1.1); oneCellAnchor (§20.5.2.24); twoCellAnchor (§20.5.2.33)
     *
     * This element specifies the first anchor point for the drawing element. This is used to anchor the top and left sides of the shape within the spreadsheet. That is when the cell that is specified in the from element is adjusted, the shape is also adjusted.
     * [Example: Consider the following SpreadsheetDrawingML
     * <xdr:twoCellAnchor>
     *   <xdr:from>
     *     <xdr:col>3</xdr:col>
     *     <xdr:colOff>447675</xdr:colOff>
     *     <xdr:row>8</xdr:row>
     *     <xdr:rowOff>28575</xdr:rowOff>
     *   </xdr:from>
     *   <xdr:sp macro="" textlink="">
     *   ...
     *   </xdr:sp>
     *   <xdr:clientData/>
     * </xdr:twoCellAnchor>
     * The above example shows the first anchor point being specified via the from element. end example]
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.spreadsheet.frommarker?view=openxml-2.8.1
     */
    interface FromMarker extends MarkerType {
    }


    /** <xdr:to> (Ending Anchor Point, W3C XML CT_Marker §A.4.5)
     * parents: anchor (§18.3.1.1); twoCellAnchor (§20.5.2.33)
     *
     * This element specifies the second anchor point for the drawing element. This is used to anchor the bottom and right sides of the shape within the spreadsheet. That is when the cell that is specified in the to element is adjusted, the shape is also adjusted.
     * [Example: Consider the following SpreadsheetDrawingML
     * <xdr:twoCellAnchor>
     *   <xdr:to>
     *     <xdr:col>5</xdr:col>
     *     <xdr:colOff>466725</xdr:colOff>
     *     <xdr:row>14</xdr:row>
     *     <xdr:rowOff>9525</xdr:rowOff>
     *   </xdr:to>
     *   <xdr:sp macro="" textlink="">
     *   ...
     *   </xdr:sp>
     *   <xdr:clientData/>
     * </xdr:twoCellAnchor>
     * The above example shows the second anchor point being specified via the to element. end example]
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.spreadsheet.tomarker?view=openxml-2.8.1
     */
    interface ToMarker extends MarkerType {
    }


    /** <x:mruColors> (MRU Colors, W3C XML CT_MRUColors §A.2)
     * parents: colors (§18.8.11)
     *
     * This element contains sequence of values that correspond to custom colors selected by the user for this workbook.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.mrucolors?view=openxml-2.8.1
     */
    interface MruColors {
        colors: Color[];
    }


    /** <a:cNvPr> (Non-Visual Drawing Properties, W3C XML CT_NonVisualDrawingProps §A.4.1)
     * parents: nvCxnSpPr (§20.5.2.19); nvGraphicFramePr (§20.5.2.20); nvGrpSpPr (§20.5.2.21); nvPicPr (§20.5.2.22); nvSpPr (§20.5.2.23)
     *
     *This element specifies the set of non-visual properties for the parent element. These properties specify all the data about the parent which does not affect its display within the spreadsheet.
     * [Example: Consider the following SpreadSheetDrawingML.
     * <xdr:pic>
     *   ...
     *   <xdr:nvPicPr>
     *     <xdr:cNvPr id="4" name="Lilly_by_Lisher.jpg"/>
     *   </xdr:nvPicPr>
     *   ..
     * </xdr:pic>
     * The above example defines some non-visual drawing properties for the inserted picture. end example]
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.nonvisualdrawingproperties?view=openxml-2.8.1
     */
    interface NonVisualDrawingProperties {
        hlinkClick?: HyperlinkOnClick | null;
        hlinkHover?: HyperlinkOnHover | null;
        extLst?: Element | null;

        // attributes
        /** Alternative Text for Object
         * Specifies alternative text for the current DrawingML object, for use by assistive technologies or applications which do not display the current object.
         * If this element is omitted, then no alternative text is present for the parent object.
         * [Example: Consider a DrawingML object defined as follows:
         * <... descr="A picture of a bowl of fruit">
         * The descr attribute contains alternative text which can be used in place of the actual DrawingML object. end example]
         * default: ""
         */
        descr?: string | null;
        /** Hidden
         * Specifies whether this DrawingML object is displayed. When a DrawingML object is displayed within a document, that object can be hidden (i.e., present, but not visible).
         * This attribute determines whether the object is rendered or made hidden. [Note: An application can have settings which allow this object to be viewed. end note]
         * If this attribute is omitted, then the parent DrawingML object shall be displayed (i.e., not hidden).
         * [Example: Consider an inline DrawingML object which must be hidden within the document's content. This setting would be specified as follows:
         * <... hidden="true">
         * The hidden attribute has a value of true, which specifies that the DrawingML object is hidden and not displayed when the document is displayed. end example]
         * default: false
         */
        hidden?: boolean | null;
        /** Unique Identifier
         * Specifies a unique identifier for the current DrawingML object within the current document. This ID can be used to assist in uniquely identifying this object so that it can be referred to by other parts of the document.
         * If multiple objects within the same document share the same id attribute value, then the document shall be considered non-conformant.
         * [Example: Consider a DrawingML object defined as follows:
         * <... id="10">
         * The id attribute has a value of 10, which is the unique identifier for this DrawingML object. end example]
         */
        id: number;
        /** Name
         * Specifies the name of the object. [Note: Typically, this is used to store the original file name of a picture object. end note]
         * [Example: Consider a DrawingML object defined as follows:
         * <... name="foo.jpg">
         * The name attribute has a value of foo.jpg, which is the name of this DrawingML object. end example]
         */
        name: string;
        /** Title
         * Specifies the title (caption) of the current DrawingML object.
         * If this attribute is omitted, then no title text is present for the parent object.
         * [Example: Consider a DrawingML object defined as follows:
         * <... title="Process Flow Diagram">
         * end example]
         * default: ""
         */
        title?: string | null;
    }


    /** <a:cNvGrpSpPr> (Non-Visual Group Shape Drawing Properties, W3C XML CT_NonVisualGroupDrawingShapeProps §A.4.1)
     * parents: nvGrpSpPr (§20.1.2.2.27)
     *
     * This element specifies the non-visual drawing properties for a group shape. These non-visual properties are properties that
     * the generating application would utilize when rendering the slide surface.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.nonvisualgroupshapedrawingproperties?view=openxml-2.8.1
     */
    interface NonVisualGroupShapeDrawingProperties {
        grpSpLocks?: GroupShapeLocks | null;
        extLst?: Element | null; // CT_OfficeArtExtensionList
    }


    /** <a:nvGrpSpPr> (Non-Visual Properties for a Group Shape, W3C XML CT_GroupShapeNonVisual §A.4.5)
     * parents: grpSp (§20.5.2.17); lockedCanvas (§20.3.2.1)
     *
     * This element specifies all non-visual properties for a group shape. This element is a container for the non-visual identification properties, shape properties and
     * application properties that are to be associated with a group shape. This allows for additional information that does not affect the appearance of the group shape to be stored.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.nonvisualgroupshapeproperties?view=openxml-2.8.1
     */
    interface NonVisualGroupShapeProperties {
        cNvPr: NonVisualDrawingProperties;
        cNvGrpSpPr: NonVisualGroupShapeDrawingProperties;
    }


    /** <xdr:cNvPicPr> (Non-Visual Picture Drawing Properties, W3C XML CT_NonVisualPictureProperties §A.4.1)
     * parents: nvPicPr (§20.5.2.22)
     *
     * This element describes the non-visual properties of a picture within a spreadsheet. These are the set of properties of a picture which do not affect its display within a spreadsheet.
     * [Example: Consider the following SpreadsheetDrawingML.
     * <xdr:pic>
     *   ...
     *   <xdr:nvPicPr>
     *     <xdr:cNvPr id="4" name="Lilly_by_Lisher.jpg"/>
     *     <xdr:cNvPicPr>
     *       <a:picLocks noChangeAspect="1"/>
     *     </xdr:cNvPicPr>
     *     <xdr:nvPr/>
     *   </xdr:nvPicPr>
     *   ...
     * </xdr:pic>
     * The above example defines some non-visual picture drawing properties for the inserted picture. end example]
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.spreadsheet.nonvisualpicturedrawingproperties?view=openxml-2.8.1
     */
    interface NonVisualPictureDrawingProperties {
        picLocks?: PictureLocks | null;
        extLst?: Element | null; // CT_OfficeArtExtensionList

        // attributes
        /** Relative Resize Preferred
         * Specifies if the user interface should show the resizing of the picture based on the picture's current size or its original size.
         * If this attribute is set to true, then scaling is relative to the original picture size as opposed to the current picture size.
         * [Example: Consider the case where a picture has been resized within a document and is now 50% of the originally inserted picture size.
         * Now if the user chooses to make a later adjustment to the size of this picture within the generating application, then the value of this attribute should be checked.
         * If this attribute is set to true then a value of 50% is shown. Similarly, if this attribute is set to false,
         * then a value of 100% should be shown because the picture has not yet been resized from its current (smaller) size. end example];
         * default: true
         */
        preferRelativeResize?: boolean | null;
    }


    /** <xdr:nvPicPr> (Non-Visual Properties for a Picture, W3C XML CT_PictureNonVisual §A.4.5)
     * parents: pic (§20.5.2.25)
     *
     * This element specifies all non-visual properties for a picture. This element is a container for the non-visual identification properties,
     * shape properties and application properties that are to be associated with a picture. This allows for additional information that does not affect the appearance of the picture to be stored.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.spreadsheet.nonvisualpictureproperties?view=openxml-2.8.1
     */
    interface NonVisualPictureProperties {
        cNvPr: NonVisualDrawingProperties;
        cNvPicPr: NonVisualPictureDrawingProperties;
    }


    /** <a:cNvSpPr> (Connection Non-Visual Shape Properties, W3C XML CT_NonVisualDrawingShapeProps §A.4.1)
     * parents: nvSpPr (§20.5.2.23)
     *
     * This element specifies the set of non-visual properties for a connection shape. These properties specify all data about the connection shape which do not affect its display within a spreadsheet.
     * [Example: Consider the shape that has a shape lock applied to it.
     * <xdr:sp>
     *   <xdr:nvSpPr>
     *     <xdr:cNvPr id="2" name="Rectangle 1"/>
     *     <xdr:cNvSpPr>
     *       <a:spLocks noGrp="1"/>
     *     </xdr:cNvSpPr>
     *   </xdr:nvSpPr>
     *   ...
     * </xdr:sp>
     * This shape lock is stored within the non-visual drawing properties for this shape. end example]
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.nonvisualshapedrawingproperties?view=openxml-2.8.1
     */
    interface NonVisualShapeDrawingProperties {
        /** Extension List */
        spLocks?: ShapeLocks | null;
        /** Shape Locks */
        extLst?: Element | null;

        // attributes
        /** Text Box
         * Specifies that the corresponding shape is a text box and thus should be treated as such by the generating application.
         * If this attribute is omitted then it is assumed that the corresponding shape is not specifically a text box.
         * [Note: Because a shape is not specified to be a text box does not mean that it cannot have text attached to it.
         * A text box is merely a specialized shape with specific properties. end note]
         * default: false
         */
        txBox?: boolean | null;
    }


    /** <a:nvSpPr> (Non-Visual Properties for a Shape, W3C WML CT_ShapeNonVisual §A.4.5)
     * parents: sp (§20.5.2.29)
     *
     * This element specifies all non-visual properties for a shape. This element is a container for the non-visual identification properties, shape properties and
     * application properties that are to be associated with a shape. This allows for additional information that does not affect the appearance of the shape to be stored.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.nonvisualshapeproperties?view=openxml-2.8.1
     */
    interface NonVisualShapeProperties {
        cNvPr: NonVisualDrawingProperties;
        cNvSpPr: NonVisualShapeDrawingProperties;
        //nvPr: CT_ApplicationNonVisualDrawingprops;
    }


    /** <x:numFmt> (Number Format, W3C XML CT_NumFmt §A.2)
     * parents: dxf (§18.8.14); ndxf (§18.11.1.4); numFmts (§18.8.31); odxf (§18.11.1.6)
     *
     * This element specifies number format properties which indicate how to format and render the numeric value of a cell.
     * Following is a listing of number formats whose formatCode value is implied rather than explicitly saved in the file.
     * In this case a numFmtId value is written on the xf record, but no corresponding numFmt element is written. Some of these Ids can be
     * interpreted differently, depending on the UI language of the implementing application.
     * Ids not specified in the listing, such as 5, 6, 7, and 8, shall follow the number format specified by the formatCode attribute.
     *  NOTE see link for more format details
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.numberingformat?view=openxml-2.8.1
     */
    interface NumberingFormat {
        /** The number format code for this number format */
        formatCode: string;
        /** ST_NumFmtId, Id used by the master style records (xf's) to reference this number format */
        numFmtId: number;
    }


    /** <x:numFmts> (Number Formats, W3C XML CT_NumFmts §A.2)
     * parents: styleSheet (§18.8.39)
     *
     * This element defines the number formats in this workbook, consisting of a sequence of numFmt records, where each numFmt record defines a
     * particular number format, indicating how to format and render the numeric value of a cell.
     * [Example:
     * This cell is formatting as US currency:
     * The XML expressing this format shows that the formatId is "166" and the decoded formatCode is $#,##0.00
     * <numFmts count="1">
     *   <numFmt numFmtId="166" formatCode="&quot;$&quot;#,##0.00"/>
     * </numFmts>
     * end example]
     * NOTE: see link for list of Number Format Codes
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.numberingformats?view=openxml-2.8.1
     */
    interface NumberingFormats {
        numFmts: NumberingFormat[];

        // attributes
        count?: number;
    }


    /** <x:oddFooter> (Odd Footer, W3C XML content ST_Xstring §A.6.9)
     * parents: headerFooter (§18.3.1.46)
     *
     * Odd page footer value. Corresponds to odd printed pages.
     * [Example: Odd page(s) in the sheet can not be printed if the print area is specified to be a range such that it falls outside an odd page's scope. end example]
     * See evenHeader (§18.3.1.39) description for full discussion of value content.
     * The possible values for this element are defined by the ST_Xstring simple type (§22.9.2.19).
     *
     * Note: Specification URL for 'evenHeader' has full description of the content string format
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.oddfooter?view=openxml-2.8.1
     */
    interface OddFooter {
        content: string;
    }


    /** <x:oddHeader> (Odd Header, W3C XML content ST_Xstring §A.6.9)
     * parents: headerFooter (§18.3.1.46)
     *
     * Odd page header value. Corresponds to odd printed pages.
     * [Example: Odd page(s) in the sheet can not be printed if the print area is specified to be a range such that it falls outside an odd page's scope. end example]
     * See evenHeader (§18.3.1.39) description for full discussion of value content.
     * The possible values for this element are defined by the ST_Xstring simple type (§22.9.2.19).
     *
     * Note: Specification URL for 'evenHeader' has full description of the content string format
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.oddheader?view=openxml-2.8.1
     */
    interface OddHeader {
        content: string;
    }


    /** <xdr:oneCellAnchor> (One Cell Anchor Shape Size, W3C XML CT_OneCellAnchor §A.4.5)
     * parents: wsDr (§20.5.2.35)
     *
     * This element specifies a one cell anchor placeholder for a group, a shape, or a drawing element. It moves with the cell and its extents is in EMU units.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.spreadsheet.onecellanchor?view=openxml-2.8.1
     */
    interface OneCellAnchor extends EgObjectChoices {
        clientData: ClientData;
        ext: Extent;
        from: FromMarker;
    }


    /** <outline>
     * parents: font (§18.8.22); rPr (§18.4.7)
     */
    interface Outline {
        val: boolean; // default: true
    }


    /** <x:pageMargins> (Page Margins, W3C XML CT_PageMargins §A.2)
     * parents: chartsheet (§18.3.1.12); customSheetView (§18.3.1.24); customSheetView (§18.3.1.25); dialogsheet (§18.3.1.34); worksheet (§18.3.1.99)
     *
     * Page margins for a sheet or a custom sheet view.
     * [Example:
     * <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3"  footer="0.3"/>
     * end example]
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.pagemargins?view=openxml-2.8.1
     */
    interface PageMargins {
        bottom: number;
        footer: number;
        header: number;
        left: number;
        right: number;
        top: number;
    }


    /** <x:pageSetup> (Page Setup, W3C XML CT_PageSetup §A.2)
     * parents: customSheetView (§18.3.1.25); dialogsheet (§18.3.1.34); worksheet (§18.3.1.99)
     *
     * Page setup settings for the worksheet.
     * [Example: The following example shows the pageSetup element for A0 paper, printed in black and white, with graphics:
     * <pageSetup blackAndWhite="true" draft="false" paperHeight="1189" paperWidth="841" paperUnits="mm" />
     * end example]
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.pagesetup?view=openxml-2.8.1
     */
    interface PageSetup {
        // TODO incomplete
        orientation?: ST_Orientation | null;
        scale?: number | null;
        /** "r:id" */
        rid: ST_RelationshipId;
    }


    /** <pane> (View Pane)
     * parents: customSheetView (§18.3.1.25); sheetView (§18.3.1.87)
     */
    /*interface Pane {
        // attributes
        activePane: Pane;
        state: PaneState;
        topLeftCell: string; // ST_CellRef
        xSplit: number;
        ySplit: number;
    }*/


    /** PaneStateValues value type */
    /*interface PaneState {
        // one of: Split "split", Frozen "frozen", FrozenSplit "frozenSplit"
    }*/


    /** <x:patternFill> (Pattern, CT_PatternFill §A.2)
     * parents: fill (§18.8.20)
     *
     * This element is used to specify cell fill information for pattern and solid color cell fills. For solid cell fills (no pattern),
     * fgColor is used. For cell fills with patterns specified, then the cell fill color is specified by the bgColor element.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.patternfill?view=openxml-2.8.1
     */
    interface PatternFill {
        // choice
        fgColor?: Color | null;
        bgColor?: Color | null;

        // attributes
        /** ST_PatternType, Specifies the fill pattern type (including solid and none); default: 'none' */
        patternType?: ST_PatternType | null;
    }


    /** <xdr:pic> (Picture, W3C XML CT_Picture §A.4.5)
     * parents: absoluteAnchor (§20.5.2.1); grpSp (§20.5.2.17); oneCellAnchor (§20.5.2.24); twoCellAnchor (§20.5.2.33)
     *
     * This element specifies the existence of a picture object within the spreadsheet.
     * [Example: Consider the following SpreadsheetDrawingML that specifies the existence of a picture within a document. This picture can have non-visual properties, a picture fill as well as shape properties attached to it.
     * <xdr:pic>
     *   <xdr:nvPicPr>
     *     <xdr:cNvPr id="4" name="lake.JPG" descr="Picture of a Lake" />
     *     <xdr:cNvPicPr>
     *       <a:picLocks noChangeAspect="1"/>
     *     </xdr:cNvPicPr>
     *     <xdr:nvPr/>
     *   </xdr:nvPicPr>
     *   <xdr:blipFill>
     *     ...
     *   </xdr:blipFill>
     *   <xdr:spPr>
     *     ...
     *   </xdr:spPr>
     * </xdr:pic>
     * end example]
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.spreadsheet.picture?view=openxml-2.8.1
     */
    interface Picture {
        blipFill: Element; // BlipFill;
        nvPicPr: Element; // NonVisualPictureProperties;
        spPr: ShapeProperties;
        //style: ShapeStyle;

        // attributes
        /** Publish to Server Flag - This attribute indicates whether the shape shall be published with the worksheet when sent to the server. default: false */
        fPublished?: boolean | null;
        /** Reference To Custom Function
         * This element specifies the custom function associated with the object. [Example: A macro script, add-in function, and so on. end example]
         * The format of this string shall be application-defined, and should be ignored if not understood.
         * [Example: <... macro="DoWork()" /> end example]
         */
        macro?: string | null;
    }


    /** <a:picLocks> (Picture Locks, W3C XML CT_PictureLocking §A.4.1)
     * parents: cNvPicPr (§21.3.2.6); cNvPicPr (§20.1.2.2.7); cNvPicPr (§20.2.2.2); cNvPicPr (§20.5.2.7); cNvPicPr (§19.3.1.11)
     *
     * This element specifies all locking properties for a graphic frame. These properties inform the generating application about
     * specific properties that have been previously locked and thus should not be changed.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.picturelocks?view=openxml-2.8.1
     */
    interface PictureLocks extends AgLocking {
        extLst?: Element | null; // CT_OfficeArtExtensionList;

        // attributes
        /** Disallow Crop Changes
         * Specifies that the generating application should not allow cropping for the corresponding picture. If this attribute is not specified, then a value of false is assumed.
         * default: false
         */
        noCrop?: boolean | null;
    }


    /** (W3C XML CT_Point2D §A.4.1)
     *
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.point2dtype?view=openxml-2.8.1
     */
    interface Point2DType {
        // attributes
        /** Specifies a coordinate on the x-axis. The origin point for this coordinate shall be specified by the parent XML element.
         * [Example: Consider the following point on a basic wrapping polygon for a DrawingML object:
         * <... x="0" y="100" />
         * The x attribute defines an x-coordinate of 0. end example]
         */
        x: ST_Coordinate
        /** Specifies a coordinate on the y-axis. The origin point for this coordinate shall be specified by the parent XML element.
         * [Example: Consider the following point on a basic wrapping polygon for a DrawingML object:
         * <... x="0" y="100" />
         * The y attribute defines a y-coordinate of 100. end example]
         */
        y: ST_Coordinate
    }


    /** <a:off> (Offset, W3C XML CT_Point2D §A.4.1)
     * parents: xfrm (§21.3.2.28); xfrm (§20.1.7.5); xfrm (§20.1.7.6); xfrm (§20.5.2.36); xfrm (§19.3.1.53)
     *
     * This element specifies the location of the bounding box of an object. Effects on an object are not included in this bounding box.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.offset?view=openxml-2.8.1
     */
    interface Offset extends Point2DType {
    }


    /** <xdr:pos> (Position, W3C XML CT_Point2D §A.4.1)
     * parents: absoluteAnchor (§20.5.2.1)
     *
     * This element describes the position of a drawing element within a spreadsheet.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.spreadsheet.position?view=openxml-2.8.1
     */
    interface Position extends Point2DType {
    }


    /** <x:protection> (Protection Properties, W3C XML CT_CellProtection §A.2)
     * parents: dxf (§18.8.14); ndxf (§18.11.1.4); odxf (§18.11.1.6); xf (§18.8.45)
     *
     * Contains protection properties associated with the cell. Each cell has protection properties that can be set.
     * The cell protection properties do not take effect unless the sheet has been protected.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.protection?view=openxml-2.8.1
     */
    interface Protection {
        // attributes
        /** indicating if the cell is hidden. When the cell is hidden and the sheet on which the cell resides is protected, then the cell value is displayed in the cell grid location,
         * but the contents of the cell will not be displayed in the formula bar. This is true for all types of cell content, including formula, text, or numbers.
         * Therefore the cell A4 can contain a formula "=SUM(A1:A3)", but if the cell protection property of A4 is marked as hidden, and the sheet is protected,
         * then the cell should display the calculated result (e.g. "6"), but will not display the formula used to calculate the result
         */
        hidden?: boolean | null;
        /** indicates if the cell is locked. When cells are marked as "locked" and the sheet is protected, then the options specified in the
         * Sheet Part's sheetProtection element (§18.3.1.85) are prohibited for these cells
         */
        locked?: boolean | null;
    }


    /** <Relationship> (Relationship, !!not documented in OOXML spec!!)
     */
    interface Relationship {
        // attributes
        /** Format: rId# (e.g. rId1, rId2, rId3) */
        id: string;
        /** Target file name (e.g. xl/workbook.xml) */
        target: string;
        /** XML schema name (e.g. http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument) */
        type: string;
    }


    /** <Relationships> (Relationships, !!not documented in OOXML spec, a list of Relationship elements!!)
     */
    interface Relationships {
        relationships: Relationship[];
    }


    /** <x:r> (Rich Text Run, W3C XML CT_RElt §A.2)
     * parents: is (§18.3.1.53); si (§18.4.8); text (§18.7.7)
     *
     * This element represents a run of rich text. A rich text run is a region of text that share a common set of properties, such as formatting properties.
     * The properties are defined in the rPr element, and the text displayed to the user is defined in the Text (t) element.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.run?view=openxml-2.8.1
     */
    interface RichTextRun {
        t: Text; /** text */
        rPr?: RichTextRunProperties | null;
    }


    /** <x:rPr> (Run Properties, W3C XML CT_RPrElt §A.2)
     * parents: r (§18.4.4)
     *
     * This element represents a set of properties to apply to the contents of this rich text run.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.runproperties?view=openxml-2.8.1
     */
    interface RichTextRunProperties {
        b?: Bold | null;
        color?: Color | null;
        sz?: FontSize | null;
        rFont?: RunFont | null;
        family?: FontFamily | null;
        // TODO other attributes
        [key: string]: any;
        //b?: CT_BooleanProperty;
        //color?: CT_Color;
        //sz?: CT_FontSize;
        //rFont?: CT_FontName;
        //family?: CT_IntProperty;
        //charset?: CT_IntProperty;
        //i?: CT_BooleanProperty;
        //strike?: CT_BooleanProperty;
        //outline?: CT_BooleanProperty;
        //shadow?: CT_BooleanProperty;
        //condense?: CT_BooleanProperty;
        //extend?: CT_BooleanProperty;
        //u?: CT_UnderlineProperty;
        //vertAlign?: CT_VerticalAlignFontProperty;
        //scheme?: CT_FontScheme;
    }


    /** <x:rgbColor> (RGB Color, CT_RgbColor §A.2)
     * parents: indexedColors (§18.8.27)
     *
     * A single ARGB entry for the corresponding color index.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.rgbcolor?view=openxml-2.8.1
     */
    interface RgbColor {
        /** ST_UnsignedIntHex, Color value expressed in Alpha Red Green Blue format (ARGB) */
        rgb?: string | number | null;
    }


    /** <x:row> (Row, W3C XML CT_Row §A.2)
     * parents: sheetData (§18.3.1.80)
     *
     * The element expresses information about an entire row of a worksheet, and contains all cell definitions for a particular row in the worksheet.
     * [Example:
     * This row expresses information about row the worksheet, and contains 3 cell definitions.
     * <row r="2" spans="2:12">
     *   <c r="C2" s="1">
     *     <f>PMT(B3/12,B4,-B5)</f>
     *     <v>672.68336574300008</v>
     *   </c>
     *   <c r="D2">
     *     <v>180</v>
     *   </c>
     * </row>
     * end example]
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.row?view=openxml-2.8.1
     */
    interface Row {
        cs: Cell[];
        // attributes
        /** '1' if the rows 1 level of outlining deeper than the current row are in the collapsed outline state. It means that the rows which are 1 outline level deeper (numerically higher value)
         * than the current row are currently hidden due to a collapsed outline state. It is possible for collapsed to be false and yet still have the rows in question hidden.
         * This can be achieved by having a lower outline level collapsed, thus hiding all the child rows. default: false */
        collapsed?: boolean | null;
        /** '1' if the row style should be applied */
        customFormat?: boolean | null;
        /** '1' if the row height has been manually set */
        customHeight?: boolean | null;
        /** '1' if the row is hidden, e.g., due to a collapsed outline or by manually selecting and hiding a row. default: false */
        hidden?: boolean | null;
        /** Row height measured in point size. There is no margin padding on row height */
        ht?: number | null;
        /** Outlining level of the row, when outlining is on. See description of outlinePr element's summaryBelow and summaryRight attributes for detailed information. default: 0 */
        outlineLevel?: number | null;
        /** '1' if the row should show phonetic. default: false */
        ph?: boolean | null;
        /** Row Index. Indicates to which row in the sheet this <row> definition corresponds */
        r: number;
        /** (Style Index) Index to style record for the row (only applied if customFormat attribute is '1') */
        s?: number | null;
        /** ST_CellSpans */
        spans?: string | null;
        /** (Thick Bottom), default: false */
        thickBot?: boolean | null;
        /** (Thick Top), default: false */
        thickTop?: boolean | null;
        /** "x14ac:dyDescent" */
        dyDescent: number;
    }


    /** <x:rFont> (Font, W3C XML CT_FontName §A.2)
     * parents: rPr (§18.4.7)
     *
     * This element is a string representing the name of the font assigned to display this run.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.runfont?view=openxml-2.8.1
     */
    interface RunFont {
        val: string;
    }


    /** <xdr:row> (Row, W3C XML content ST_RowID §A.4.5)
     * parents: from (§20.5.2.15); to (§20.5.2.32)
     *
     * This element specifies the row that is used within the from and to elements to specify anchoring information for a shape within a spreadsheet.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.spreadsheet.rowid?view=openxml-2.8.1
     */
    interface RowId {
        content: ST_RowID;
    }


    /** <xdr:rowOff> (Row Offset, W3C XML content ST_Coordinate §A.4.1)
     * parents: from (§20.5.2.15); to (§20.5.2.32)
     *
     * This element is used to specify the row offset within a cell. The units for which this attribute is specified in reside within the simple type definition referenced below.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.spreadsheet.rowoffset?view=openxml-2.8.1
     */
    interface RowOffset {
        content: ST_Coordinate;
    }


    /** <x:selection> (Selection, W3C XML CT_Selection §A.2)
     * parents: customSheetView (§18.3.1.25); sheetView (§18.3.1.87)
     *
     * Worksheet view selection.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.selection?view=openxml-2.8.1
     */
    interface Selection {
        // attributes
        /** ST_CellRef, Active Cell Location */
        activeCell?: string | null;
        /** Active Cell Index - 0-based index of the range reference (in the array of references listed in sqref) containing the active cell.
         * Only used when the selection in sqref is not contiguous. Therefore, this value needs to be aware of the order in which the range references are written in sqref.
         * When this value is out of range then activeCell can be used.
         */
        activeCellId?: number | null;
        /** ST_Sqref, Sequence of References - Range of the selection. Can be non-contiguous set of ranges. */
        sqref?: string | null;
        /** The pane to which this selection belongs. */
        //pane: Pane;
    }


    /** <shadow>
     * parents: font (§18.8.22); rPr (§18.4.7)
     *
     * Macintosh compatibility setting. Represents special word/character rendering on Macintosh, when this flag is set.
     * The effect is to render a shadow behind, beneath and to the right of the text. SpreadsheetML applications are not required to render according to this flag.
     */
    interface Shadow {
        val: boolean; // default: true
    }


    /** <xdr:sp> (Shape, W3C XML CT_Shape §A.4.5)
     * parents: absoluteAnchor (§20.5.2.1); grpSp (§20.5.2.17); oneCellAnchor (§20.5.2.24); twoCellAnchor (§20.5.2.33)
     *
     * This element specifies the existence of a single shape. A shape can either be a preset or a custom geometry, defined using the SpreadsheetDrawingML framework.
     * In addition to a geometry each shape can have both visual and non-visual properties attached. Text and corresponding styling information can also be attached to a shape.
     * This shape is specified along with all other shapes within either the shape tree or group shape elements.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.spreadsheet.shape?view=openxml-2.8.1
     */
    interface Shape {
        nvSpPr: NonVisualShapeProperties;
        spPr: ShapeProperties;
        style: ShapeStyle;
        txBody: TextBody;

        // attributes
        /** Lock Text Flag - This attribute indicates whether to allow text editing within this drawing object when the parent worksheet is protected; default: true */
        fLocksText?: boolean | null;
        /** Publish to Server Flag - This attribute indicates whether the shape shall be published with the worksheet when sent to the server; default: false */
        fPublished?: boolean | null;
        /** Reference to Custom Function
         * This element specifies the custom function associated with the object. [Example: A macro script, add-in function, and so on. end example]
         * The format of this string shall be application-defined, and should be ignored if not understood.
         * [Example: <... macro="DoWork()" /> end example]
         */
        macro?: string | null;
        /** Text Link - This attribute specifies a formula linking to spreadsheet cell data */
        textlink?: string | null;
    }


    /** <a:spLocks> (Shape Locks, W3C XML CT_ShapeLocking §A.4.1)
     * parents: cNvSpPr (§21.3.2.8); cNvSpPr (§20.1.2.2.9); cNvSpPr (§20.5.2.9); cNvSpPr (§19.3.1.13)
     *
     * This element specifies all locking properties for a shape. These properties inform the generating application about specific properties that
     * have been previously locked and thus should not be changed.
     */
    interface ShapeLocks extends AgLocking {
        extLst?: Element | null;

        // attributes
        /** Disallow Shape Text Editing
         * Specifies that the generating application should not allow editing of the shape text for the corresponding shape.
         * default: false */
        noTextEdit?: boolean | null;
    }


    /** <xdr:spPr> (Shape Properties, W3C XML CT_ShapeProperties §A.4.1)
     * parents: cxnSp (§20.5.2.13); pic (§20.5.2.25); sp (§20.5.2.29)
     *
     * This element specifies the visual shape properties that can be applied to a special shape such as a connector shape or picture.
     * These are the same properties that are allowed to describe the visual properties of a shape but are used here to describe additional object-specific properties within a document.
     * This allows for these shapes to have both the properties of a shape as well as specific properties that are unique to only them.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.spreadsheet.shapeproperties?view=openxml-2.8.1
     */
    interface ShapeProperties extends EgGeometry, EgFillProperties, EgEffectProperties {
        xfrm?: Transform2D | null;
        ln?: Element | null; // CT_LineProperties
        scene3d?: Element | null; // CT_Scene3D
        sp3d?: Element | null; // CT_Shape3D
        extLst?: Element | null; // CT_OfficeArtExtensionList

        // attributes
        bwMode?: ST_BlackWhiteMode | null;
    }


    /** <xdr:style> (Shape Style, W3C XML CT_ShapeStyle §A.4.1)
     * parents: cxnSp (§20.5.2.13); pic (§20.5.2.25); sp (§20.5.2.29)
     *
     * The element specifies the style that is applied to a shape and the corresponding references for each of the style components such as lines and fills.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.spreadsheet.shapestyle?view=openxml-2.8.1
     */
    interface ShapeStyle {
        effectRef: EffectReference;
        fillRef: FillReference;
        fontRef: FontReference;
        lnRef: LineReference;
    }


    /** <x:si> (String Item, W3C XML CT_Rst §A.2)
     * parents: sst (§18.4.9)
     *
     * This element is the representation of an individual string in the Shared String table.
     * If the string is just a simple string with formatting applied at the cell level, then the String Item (si) should contain a single text element used to express the string.
     * However, if the string in the cell is more complex - i.e., has formatting applied at the character level - then the string item shall
     * consist of multiple rich text runs which collectively are used to express the string.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.sharedstringitem?view=openxml-2.8.1
     */
    interface SharedStringItem {
        t?: Text | null;
        rs?: RichTextRun[];
        //rPh?: PhoneticRun[]; // phonetic run
        //phoneticPr?: PhoneticProperties; // phonetic properties
    }


    /** <x:sst> (Shared String Table, W3C XML CT_Sst §A.2)
     * parents: root element of SpreadsheetML Shared String Table part
     *
     * This element is the root of the Shared String Table, which serves as a collection of individual String Items (si).
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.sharedstringtable?view=openxml-2.8.1
     */
    interface SharedStringTable {
        sis: SharedStringItem[];

        // attributes
        /** String Count - An integer representing the total count of strings in the workbook. This count does not include any numbers, it counts only the total of text strings in the workbook.
         * This attribute is optional unless uniqueCount is used, in which case it is required.
         */
        count?: number;
        /** Unique String Count - An integer representing the total count of unique strings in the Shared String Table. A string is unique even if it is a copy of another string,
         * but has different formatting applied at the character level.
         * [Example:
         * World, World, and World.
         * The count would be 3, and the uniqueCount would be 2. Only one entry for "World" would show in the table because it is the same string,
         * just with different formatting applied at the cell level (i.e., applied to the entire string in the cell).
         * The "World" string would get a separate unique entry in the shared string table because it has different formatting applied to specific characters.
         * end example]
         * This attribute is optional unless count is used, in which case it is required.
         */
        uniqueCount?: number;
    }


    /** <x:sheetData> (Sheet Data, W3C XML CT_SheetData §A.2)
     * parents: worksheet (§18.3.1.99)
     *
     * This collection represents the cell table itself. This collection expresses information about each cell, grouped together by rows in the worksheet.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.sheetdata?view=openxml-2.8.1
     */
    interface SheetData {
        rows: Row[];
    }


    /** <x:dimension> (Sheet Dimension, W3C XML CT_SheetDimension §A.2)
     * parents: worksheet (§18.3.1.99)
     *
     * This element specifies the used range of the worksheet. It specifies the row and column bounds of used cells in the worksheet.
     * This is optional and is not required. Used cells include cells with formulas, text content, and cell formatting.
     * When an entire column is formatted, only the first cell in that column is considered used.
     * [Example: <dimension ref="A1:C2"/> end example]
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.sheetdimension?view=openxml-2.8.1
     */
    interface SheetDimension {
        /** attr, ST_Ref row and column bounds of all cells in this worksheet 'A-1:B-2' style */
        ref: ST_Ref;
    }


    /** <x:sheetFormatPr> (Sheet Format Properties, W3C XML CT_SheetFormatPr §A.2)
     * parents: dialogsheet (§18.3.1.34); worksheet (§18.3.1.99)
     *
     * Sheet formatting properties.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.sheetformatproperties?view=openxml-2.8.1
     */
    interface SheetFormatProperties {
        // attributes
        //baseColWidth: number;
        //customHeight: boolean;
        defaultColWidth?: number | null;
        defaultRowHeight: number;
        /** double, "x14ac:dyDescent" */
        dyDescent: number;
        //outlineLevelCol: number;
        //outlineLevelRow: number;
        //thickBottom: boolean;
        //thickTop: boolean;
        //zeroHeight: boolean;
    }


    /** <x:sheet> (Sheet, W3C XML CT_Sheet §A.2)
     * parents: sheets (§18.2.20)
     *
     * This element defines a sheet in this workbook. Sheet data is stored in a separate part.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.sheet?view=openxml-2.8.1
     */
    interface Sheet {
        // attributes
        id: ST_RelationshipId;
        /** Sheet Name */
        name: string;
        /** Sheet Tab Id */
        sheetId: number;
        /** Visible State */
        state?: ST_SheetState | null;
    }


    /** <x:sheets> (Sheets, W3C XML CT_Sheets §A.2)
     * parents: workbook (§18.2.27)
     *
     * This element represents the collection of sheets in the workbook. There are different types of sheets you can create in SpreadsheetML.
     * The most common sheet type is a worksheet; also called a spreadsheet. A worksheet is the primary document that you use in SpreadsheetML to store and work with data.
     * A worksheet consists of cells that are organized into columns and rows.
     * Some workbooks might have a modular design where there is one sheet for data and another worksheet for each specific analysis performed on that data.
     * In a complex modular system, you might have dozens of sheets, each dedicated to a specific task.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.sheets?view=openxml-2.8.1
     */
    interface Sheets {
        sheets: Sheet[];
    }


    /** <x:sheetView> (Worksheet View, W3C XML CT_SheetView §A.2)
     * parents: sheetViews (§18.3.1.88)
     *
     * A single sheet view definition. When more than one sheet view is defined in the file, it means that when opening the workbook,
     * each sheet view corresponds to a separate window within the spreadsheet application, where each window is showing the particular
     * sheet containing the same workbookViewId value, the last sheetView definition is loaded, and the others are discarded.
     * When multiple windows are viewing the same sheet, multiple sheetView elements (with corresponding workbookView entries) are saved.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.sheetview?view=openxml-2.8.1
     */
    interface SheetView {
        selections: Selection[];
        //extLst;
        //pane: Pane;
        //pivotSelection;

        // attributes
        //colorId: number;
        //defaultGridColor: boolean;
        //rightToLeft: boolean;
        //showFormulas: boolean;
        //showGridLines: boolean;
        //showOutlineSymbols: boolean;
        //showRuler: boolean;
        //showWhiteSpace: boolean;
        //showZeros: boolean;
        tabSelected?: boolean | null;
        topLeftCell?: string | null; // ST_CellRef
        view?: ST_SheetViewType | null;
        //windowProtection: boolean;
        workbookViewId: number;
        zoomScale?: number | null;
        zoomScaleNormal?: number | null;
        zoomScalePageLayoutView?: number | null;
        zoomScaleSheetLayoutView?: number | null;
    }


    /** <x:sheetViews> (Sheet Views, W3C XML CT_SheetViews §A.2)
     * parents: dialogsheet (§18.3.1.34); worksheet (§18.3.1.99)
     *
     * Worksheet views collection.
     * [Example:
     * This example shows one sheet view definition. The definition indicates that the current sheet is the active/selected sheet, and that there is a split pane applied to the view. This definition also indicates for each of the four window panes of the split which cell is the active cell for that pane.
     * <sheetViews>
     *   <sheetView tabSelected="1" workbookViewId="0">
     *     <pane xSplit="2310" ySplit="2070" topLeftCell="C1" activePane="bottomRight"/>
     *     <selection/>
     *     <selection pane="bottomLeft" activeCell="A6" sqref="A6"/>
     *     <selection pane="topRight" activeCell="C1" sqref="C1"/>
     *     <selection pane="bottomRight" activeCell="E13" sqref="E13"/>
     *   </sheetView>
     * </sheetViews>
     * end example]
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.sheetviews?view=openxml-2.8.1
     */
    interface SheetViews {
        sheetViews: SheetView[];
        //extLst;
    }


    /** <a:stretch> (Stretch, W3C XML CT_StretchInfoProperties §A.4.1)
     * parents: blipFill (§21.3.2.2); blipFill (§20.1.8.14); blipFill (§20.2.2.1); blipFill (§20.5.2.2); blipFill (§19.3.1.4)
     *
     * This element specifies that a BLIP should be stretched to fill the target rectangle. The other option is a tile where a BLIP is tiled to fill the available area.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.stretch?view=openxml-2.8.1
     */
    interface Stretch {
        fillRect?: FillRectangle | null;
    }


    /** <strike>
     * parents: font (§18.8.22); rPr (§18.4.7)
     */
    interface Strike {
        val: boolean; // default: true
    }


    /** (W3C XML CT_StyleMatrixReference §A.4.1)
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.stylematrixreferencetype?view=openxml-2.8.1
     */
    interface StyleMatrixReferenceType extends EgColorChoice {
        // attributes
        /** Style Matrix Index - Specifies the style matrix index of the style referred to. */
        idx: number;
    }


    /** <a:fillRef> (Fill Reference, W3C XML CT_StyleMatrixReference §A.4.1)
     * parents: style (§21.3.2.24); style (§21.4.2.28); style (§20.1.2.2.37); style (§20.5.2.31); style (§19.3.1.46); tblBg (§20.1.4.2.25); tcStyle (§20.1.4.2.29)
     *
     * This element defines a reference to a fill style within the style matrix. The idx attribute refers to the index of a fill style or background
     * fill style within the presentation's style matrix, defined by the fmtScheme element. A value of 0 or 1000 indicates no background,
     * values 1-999 refer to the index of a fill style within the fillStyleLst element, and values 1001 and above refer to the index of a background
     * fill style within the bgFillStyleLst element. The value 1001 corresponds to the first background fill style, 1002 to the second background fill style, and so on.
     * [Example:
     * <a:fillRef idx="2">
     *   <a:schemeClr val="accent2"/>
     * </a:fillRef>
     * The above code indicates the object is to have the style's second fill style using the accent2 color of the color scheme.
     * end example]
     *
     * [Example:
     * <a:fillRef idx="1001">
     *   <a:schemeClr val="accent2"/>
     * </a:fillRef>
     * The above code indicates the object is to have the style's first background fill style using the accent2 color of the color scheme.
     * end example]
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.fillreference?view=openxml-2.8.1
     */
    interface FillReference extends StyleMatrixReferenceType {
    }


    /** <a:effectRef> (Effect Reference, W3C XML CT_StyleMatrixReference §A.4.1)
     * parents: style (§21.3.2.24); style (§21.4.2.28); style (§20.1.2.2.37); style (§20.5.2.31); style (§19.3.1.46); tblBg (§20.1.4.2.25)
     *
     * This element defines a reference to an effect style within the style matrix. The idx attribute refers the index of an effect style within the effectStyleLst element.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.effectreference?view=openxml-2.8.1
     */
    interface EffectReference extends StyleMatrixReferenceType {
    }


    /** <a:lnRef> (Line Reference, W3C XML CT_StyleMatrixReference §A.4.1)
     * parents: bottom (§20.1.4.2.6); insideH (§20.1.4.2.14); insideV (§20.1.4.2.15); left (§20.1.4.2.18); right (§20.1.4.2.22); style (§21.3.2.24); style (§21.4.2.28); style (§20.1.2.2.37); style (§20.5.2.31); style (§19.3.1.46); tl2br (§20.1.4.2.31); top (§20.1.4.2.32); tr2bl (§20.1.4.2.33)
     *
     * This element defines a reference to a line style within the style matrix. The idx attribute refers the index of a line style within the fillStyleLst element.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.linereference?view=openxml-2.8.1
     */
    interface LineReference extends StyleMatrixReferenceType {
    }


    /** <xdr:oneCellAnchor> (One Cell Anchor Shape Size, W3C XML CT_OneCellAnchor §A.4.5)
     * parents: wsDr (§20.5.2.35)
     * 
     * This element specifies a one cell anchor placeholder for a group, a shape, or a drawing element. It moves with the cell and its extents is in EMU units.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.spreadsheet.onecellanchor?view=openxml-2.8.1
     */
    interface OneCellAnchor extends EgObjectChoices {
        clientData: ClientData;
        from: FromMarker;
        ext: Extent;
    }


    /** <x:styleSheet> (Stylesheet, W3C XML CT_Stylesheet §A.2)
     * parents: root element of SpreadsheetML Styles part
     *
     * This is the root element of the Styles part.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.stylesheet?view=openxml-2.8.1
     */
    interface Stylesheet {
        borders?: Borders | null;
        cellStyles?: CellStyles | null;
        cellStyleXfs?: CellStyleFormats | null;
        cellXfs?: CellFormats | null;
        colors?: Colors | null;
        dxfs?: DifferentialFormats | null;
        fills?: Fills | null;
        fonts?: Fonts | null;
        numFmts?: NumberingFormats | null;
        tableStyles?: TableStyles | null;
        extLst?: Element | null;
    }


    /** <x:tableStyle> (Table Style, W3C XML CT_TableStyle §A.2)
     * parents: tableStyles (§18.8.42)
     *
     * This element represents a single table style definition that indicates how a spreadsheet application should format and display a table.
     * Each of the tableStyle elements contains a collection of tableStyleElement elements that define formatting for a particular region of the table.
     * Annex H contains a listing of table styles whose tableStyleElement elements are implied rather than explicitly saved in the file.
     * In this case, a name attribute is written on the tableStyle record, but no corresponding tableStyleElement elements are written.
     * All of the built-in, named table styles defined in Annex D shall be supported by applications that implement table styles.
     * [Note: Each of the table styles is made up of a collection of formatting definitions, each of which corresponds to a particular
     * structured region of the table. An application can decide to support these built-in types, and can also decide to define more styles, each with their own definitions.
     * An application can also decide whether the user is allowed to customize or further define additional table styles. end note]
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.tablestyle?view=openxml-2.8.1
     */
    interface TableStyle {
        tableStyleElements: TableStyleElement[];

        // attributes
        count?: number;
        name: string;
        pivot?: boolean | null; // default: true
        table?: boolean | null; // default: true
    }


    /** <x:tableStyleElement> (Table Style, W3C XML CT_TableStyleElement §A.2)
     * parents: tableStyle (§18.8.40)
     *
     * This element specifies formatting for one area of a table or PivotTable. Together the sequence of these elements makes up one entire Table style or PivotTable style definition.
     * The order in which table style element formatting is applied is as follows:
     * Table Style Element Order: Whole Table, First Column Stripe, Second Column Stripe, First Row Stripe, Second Row Stripe, Last Column, First Column, Header Row, Total Row, First Header Cell, Last Header Cell, First Total Cell, Last Total Cell
     * For instance, row stripe formatting 'wins' over column stripe formatting, and both 'win' over whole table formatting.
     * PivotTable Style Element Order: Whole Table, Page Field Labels, Page Field Values, First Column Stripe, Second Column Stripe, First Row Stripe, Second Row Stripe, First Column, Header Row, First Header Cell, Subtotal Column 1, Subtotal Column 2, Subtotal Column 3, Blank Row, Subtotal Row 1, Subtotal Row 2, Subtotal Row 3, Column Subheading 1, Column Subheading 2, Column Subheading 3, Row Subheading 1, Row Subheading 2, Row Subheading 3, Grand Total Column, Grand Total Row
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.tablestyleelement?view=openxml-2.8.1
     */
    interface TableStyleElement {
        // attributes
        /** Table Style Type - Identifies this table style element's type. */
        type: ST_TableStyleType;
        /** Band Size - Number of rows or columns in a single band of striping. Applies only when type is firstRowStripe, secondRowStripe, firstColumnStripe, or secondColumnStripe; default: 1 */
        size?: number | null;
        /** ST_DxfId, Formatting Id - Zero-based index to a dxf record in the dxfs collection, specifying differential formatting to use with this Table or PivotTable style element. */
        dxfId?: number | null;
    }


    /** <x:tableStyles> (Table Styles, W3C XML CT_TableStyles §A.2)
     * parents: styleSheet (§18.8.39)
     *
     * This element represents a collection of Table style definitions for Table styles and PivotTable styles used in this workbook.
     * It consists of a sequence of tableStyle records, each defining a single Table style.
     * A Table style is a collection of formatting that applies to structured regions of a Table or PivotTable
     * [Example: make the header row & totals bold face, and apply light gray fill to alternating rows in the data portion of the table to achieve striped or banded rows. end example]
     * See the enumeration values in ST_TableStyleType for a listing of structured Table regions to which formatting can be applied, and which together make up a single Table style definition.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.tablestyles?view=openxml-2.8.1
     */
    interface TableStyles {
        tableStyles: TableStyle[];

        // attributes
        /** Table Style Count - Count of table styles defined in this collection. */
        count?: number;
        /** Default Pivot Style - Name of the default table style to apply to new PivotTables. This can be set by the user interface */
        defaultPivotStyle?: string | null;
        /** Default Table Style - Name of default table style to apply to new Tables. This can be set by the user interface */
        defaultTableStyle?: string | null;
    }


    /** <x:t> (Text, W3C XML content ST_Xstring §A.6.9)
     * parents: is (§18.3.1.53); r (§18.4.4); rPh (§18.4.6); si (§18.4.8); text (§18.7.7)
     *
     * This element represents the text content shown as part of a string.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.text?view=openxml-2.8.1
     */
    interface Text {
        /** text */
        content: string;
        /** "xml:space" */
        preserveSpace?: boolean;
    }


    /** <xdr:txBody> (Shape Text Body, W3C XML CT_TextBody §A.4.1)
     * parents: sp (§20.5.2.29)
     *
     * This element specifies the existence of text to be contained within the corresponding shape. All visible text and visible text related
     * properties are contained within this element. There can be multiple paragraphs and within paragraphs multiple runs of text.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.spreadsheet.textbody?view=openxml-2.8.1
     */
    interface TextBody {
        bodyPr: Element; // CT_TextBodyProperties;
        lstStyle: Element; // CT_TextListStyle;
        p: Element; // CT_TextParagraph;
    }


    /** <a:tile> (Tile, W3C XML CT_TileInfoProperties §A.4.1)
     * parents: blipFill (§21.3.2.2); blipFill (§20.1.8.14); blipFill (§20.2.2.1); blipFill (§20.5.2.2); blipFill (§19.3.1.4)
     *
     * This element specifies that a BLIP should be tiled to fill the available space. This element defines a "tile" rectangle within the bounding box.
     * The image is encompassed within the tile rectangle, and the tile rectangle is tiled across the bounding box to fill the entire area.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.tile?view=openxml-2.8.1
     */
    interface Tile {
        // attributes
        /** Alignment - Specifies where to align the first tile with respect to the shape. Alignment happens after the scaling, but before the additional offset. */
        algn?: ST_RectAlignment | null;
        /** Tile Flipping - Specifies the direction(s) in which to flip the source image while tiling. Images can be flipped horizontally, vertically, or in both directions to fill the entire region. */
        flip?: ST_TileFlipMode | null;
        /** Horizontal Ratio - Specifies the amount to horizontally scale the srcRect. */
        sx?: ST_Percentage | null;
        /** Vertical Ratio - Specifies the amount to vertically scale the srcRect. */
        sy?: ST_Percentage | null;
        /** Horizontal Offset - Specifies additional horizontal offset after alignment. */
        tx?: ST_Coordinate | null;
        /** Vertical Offset - Specifies additional vertical offset after alignment. */
        ty?: ST_Coordinate | null;
    }


    /** <a:xfrm> (2D Transform for Individual Objects, W3C XML CT_Transform2D §A.4.1)
     * parents: graphicFrame (§20.1.2.2.18); spPr (§21.2.2.197); spPr (§21.3.2.23); spPr (§21.4.3.7); spPr (§20.1.2.2.35); spPr (§20.2.2.6); spPr (§20.5.2.30); spPr (§19.3.1.44); txSp (§20.1.2.2.41)
     *
     * This element represents 2-D transforms for ordinary shapes.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.transform2d?view=openxml-2.8.1
     */
    interface Transform2D {
        off?: Position | null;
        ext?: Extent | null;

        // attributes
        /** Horizontal Flip. When true, this attribute defines that the shape is flipped horizontally about the center of its bounding box. default: false */
        flipH?: boolean | null;
        /** Vertical Flip. When true, this attribute defines that the group is flipped vertically about the center of its bounding box. default: false */
        flipV?: boolean | null;
        /** Rotation. Specifies (the clockwise rotation of a shape in 1/64000 of a degree) the rotation of the Graphic Frame. The units for which this attribute is specified in reside within the simple type definition referenced below. default: 0 */
        rot?: number | null;
    }


    /** <a:xfrm> (2D Transform for Grouped Objects, W3C XML CT_GroupTransform2D §A.4.1)
     * parents: grpSpPr (§21.3.2.14); grpSpPr (§20.1.2.2.22); grpSpPr (§20.5.2.18); grpSpPr (§19.3.1.23)
     *
     * This element is nearly identical to the representation of 2-D transforms for ordinary shapes (§20.1.7.6).
     * The only addition is a member to represent the Child offset and the Child extents.
     * https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.transformgroup?view=openxml-2.8.1
     */
    interface TransformGroup {
        off?: Position | null;
        ext?: Extent | null;
        chOff?: Position | null;
        chExt?: Extent | null;

        // attributes
        /** Horizontal Flip. When true, this attribute defines that the group is flipped horizontally about the center of its bounding box. default: false */
        flipH?: boolean | null;
        /** Vertical Flip. When true, this attribute defines that the group is flipped vertically about the center of its bounding box. default: false */
        flipV?: boolean | null;
        /** Rotation. Specifies the clockwise rotation of a group in 1/64000 of a degree. default: 0 */
        rot?: number | null;
    }


    /** <xdr:twoCellAnchor> (Two Cell Anchor Shape Size, W3C XML CT_TwoCellAnchor §A.4.5)
     * parents: wsDr (§20.5.2.35)
     *
     * This element specifies a two cell anchor placeholder for a group, a shape, or a drawing element. It moves with cells and its extents are in EMU units.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.spreadsheet.twocellanchor?view=openxml-2.8.1
     */
    interface TwoCellAnchor extends EgObjectChoices {
        clientData: ClientData;
        from: FromMarker;
        to: ToMarker;

        // attributes
        /** Positioning and Resizing Behaviors
         * Specifies how the DrawingML contents shall be moved and/or resized when the rows and columns between its start and ending anchor (the from and to child elements) are resized, or have additional rows/columns inserted within them, or additional row/columns are added before them. The behaviors are discussed in the simple type referenced below.
         * If this attribute is omitted, then its default value shall be assumed to be twoCell.
         * [Example: Consider a drawing defined as follows:
         * <ws:twoCellAnchor editAs="absolute"></ws:twoCellAnchor>
         * The editAs attribute has a value of absolute, which specifies that the sizing of this object must not change,
         * instead the anchor locations should be moved as needed to maintain the same size and position. end example];
         * default: "twoCell"
         */
        editAs?: ST_EditAs | null;
    }


    /** <x:u> (Underline, W3C XML CT_UnderlineProperty §A.2)
     * parents: font (§18.8.22); rPr (§18.4.7)
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.underline?view=openxml-2.8.1
     */
    interface Underline {
        val: ST_UnderlineValues;
    }


    /** <x:vertAlign> (Vertical Alignment, W3C XML CT_VerticalAlignFontProperty §A.2)
     * parents: font (§18.8.22); rPr (§18.4.7)
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.verticaltextalignment?view=openxml-2.8.1
     */
    interface VerticalTextAlignment {
        val: ST_VerticalAlignRun;
    }


    /** <x:workbook> (Workbook, W3C XML CT_Workbook §A.2)
     * parents: root element of SpreadsheetML Workbook part
     *
     * This is the root element of the SpreadsheetML Workbook part.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.workbook?view=openxml-2.8.1
     */
    interface Workbook {
        // attributes
        /*
        conformance: ST_ConformanceClass;
        */

        // elements
        /*
        fileVersion?: CT_FileVersion;
        fileSharing?: CT_FileSharing;
        workbookPr?: CT_WorkbookPr;
        workbookProtection?: CT_WorkbookProtection;
        bookViews?: CT_BookViews;
        functionGroups?: CT_FunctionGroups;
        definedNames?: CT_DefinedNames;
        calcPr?: CT_CalcPr;
        oleSize?: CT_OleSize;
        customWorkbookViews?: CT_CustomWorkbookViews;
        pivotCaches?: CT_PivotCaches;
        smartTagPr?: CT_SmartTagPr;
        smartTagTypes?: CT_SmartTagTypes;
        webPublishing?: CT_WebPublishing;
        fileRecoveryPr?: CT_FileRecoveryPr[];
        webPublishedObjects?: CT_WebPublishedObjects;
        extLst?: CT_ExtensionList;
        */
        sheets: Sheets;
        fileVersion?: {
            // attributes
            appName: string;
            codeName?: string; //ST_Guid;
            lastEdited: string;
            lowestEdited: string;
            rupBuild: string;
        } | Element | null;
        workbookPr?: {
            // attributes
            defaultThemeVersion: number;
            // others...
        } | Element | null;
        bookViews?: {
            workbookView: {
                // attributes
                xWindow?: number;
                yWindow?: number;
                windowWidth?: number;
                windowHeight?: number;
                tabRatio?: number;
            };
        } | Element | null;
        calcPr?: {
            // attributes
            calcId: number;
        } | Element | null;
        extLst?: Element | null;
    }


    /** <x:worksheet> (Worksheet, W3C XML CT_Worksheet §A.2)
     * parents: root element of SpreadsheetML Worksheet part
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.worksheet?view=openxml-2.8.1
     */
    interface Worksheet {
        dimension?: SheetDimension | null;
        sheetViews?: SheetViews | null;
        sheetFormatPr?: SheetFormatProperties | null;
        cols: Columns[];
        sheetData: SheetData;
        pageMargins?: PageMargins | null;
        pageSetup?: PageSetup | null;
        headerFooter?: HeaderFooter | null;
        drawing?: Drawing | null;
        legacyDrawing?: LegacyDrawing | null;
        // TODO and other elements
    }


    /** <xdr:wsDr> (Worksheet Drawing, W3C XML CT_Drawing §A.4.5)
     * parents: root element of SpreadsheetML Drawings part
     *
     * This element specifies all drawing objects within the worksheet. It acts much like the spTree element within the DrawingML framework.
     * Allowing for the specification of all shapes for a given part of a document, in this case a single Worksheet.
     * @see https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.drawing.spreadsheet.worksheetdrawing?view=openxml-2.8.1
     */
    interface WorksheetDrawing {
        //absoluteAnchors: AbsoluteAnchor[];
        //oneCellAnchors: OneCellAnchor[];
        twoCellAnchors: TwoCellAnchor[];
    }

}
