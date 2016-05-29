
/** Interfaces for OpenXml Spreadsheet compound data types
 * @since 2016-05-30
 */
declare module OpenXml {

    /** <alignment> (Alignment)
     * parents: dxf (§18.8.14); ndxf (§18.11.1.4); odxf (§18.11.1.6); xf (§18.8.45)
     *
     * formatting information pertaining to text alignment in cells. How text is aligned both horizontally and vertically, as well as indentation settings, etc.
     */
    interface Alignment {
        // attributes
        /** horizontal alignment in cells, one of: 'general', 'left', 'center', 'right', 'fill', 'justify', 'centerContinuous', 'distributed' */
        horizontal?: string;
        /** An integer value, where an increment of 1 represents 3 spaces. Indicates the number of spaces (of the normal style font) of indentation for text in a cell.
         * The number of spaces to indent is calculated as following: Number of spaces to indent = indent value * 3
         */
        indent?: number;
        /** indicates if the cells justified or distributed alignment should be used on the last line of text. (This is typical for East Asian alignments but not typical in other contexts) */
        justifyLastLine?: boolean;
        /** An integer value indicating whether the reading order (bidirectionality) of the cell is left-to-right, right-to-left, or context dependent.
         * 0 - Context Dependent - reading order is determined by scanning the text for the first non-whitespace character: if it is a strong right-to-left character, the reading order is right-to-left; otherwise, the reading order left-to-right
         * 1 - Left-to-Right - reading order is left-to-right in the cell, as in English
         * 2 - Right-to-Left - reading order is right-to-left in the cell, as in Hebrew
         */
        readingOrder?: number;
        /** An integer value (used only in a dxf element) to indicate the additional number of spaces of indentation to adjust for text in a cell */
        relativeIndent?: number;
        /** indicates if the displayed text in the cell should be shrunk to fit the cell width. Not applicable when a cell contains multiple lines of text */
        shrinkToFit?: boolean;
        /** Text rotation in cells. Expressed in degrees. Values range from 0 to 180. The first letter of the text is considered the center-point of the arc.
         * For 0 - 90, the value represents degrees above horizon. For 91-180 the degrees below the horizon is calculated as: [degrees below horizon] = 90 - textRotation.
         * 0, 45, 90, 135, 180
         */
        textRotation?: number;
        /** vertical alignment in cells, one of: 'top', 'center', 'bottom', 'justify', 'distributed' */
        vertical?: string;
        /** indicates if the text in a cell should be line-wrapped within the cell */
        wrapText?: boolean;
    }


    /** <author>
     * parents: authors (§18.7.2)
     */
    interface Author {
        content: string;
    }


    /** <authors>
     * parents: comments (§18.7.6)
     */
    interface Authors {
        authors: Author[];
    }


    /** <b> (Bold)
     * parents: font (§18.8.22); rPr (§18.4.7)
     */
    interface Bold {
        val: boolean; // default: true
    }


    /** <border>
     * parents: borders (§18.8.5); dxf (§18.8.14); ndxf (§18.11.1.4); odxf (§18.11.1.6)
     */
    interface Border {
        /** leading edge border */
        start: BorderProperty;
        /** trailing edge border */
        end: BorderProperty;
        /** top border */
        top: BorderProperty;
        /** bottom border */
        bottom: BorderProperty;
        /** diagonal */
        diagonal: BorderProperty;
        /** vertical inner border */
        vertical: BorderProperty;
        /** horizontal inner borders */
        horizontal: BorderProperty;

        // attributes
        /** indicates if the cell's diagonal border includes a diagonal line, starting at the top left corner of the cell and moving down to the bottom right corner of the cell */
        diagonalDown: boolean;
        /** indicates if the cell's diagonal border includes a diagonal line, starting at the bottom left corner of the cell and moving up to the top right corner of the cell */
        diagonalUp: boolean;
        /** indicates if left, right, top, and bottom borders should be applied only to outside borders of a cell range */
        outline: boolean; // default: true

        // these aren't part of the spec, but MS Office 2013 requires them
        left: BorderProperty;
        right: BorderProperty;
    }


    interface BorderProperty {
        color: Color;

        // attributes
        style: string; // one of: 'none', 'thin', 'medium', 'dashed', 'dotted', 'thick', 'double', 'hair', 'mediumDashed', 'dashDot', 'mediumDashDot', 'dashDotDot', 'mediumDashDotDot', 'slantDashDot'; default: 'none'
    }


    /** <borders> (Borders)
     * parents: styleSheet (§18.8.39)
     */
    interface Borders {
        /** border count */
        borders: Border[];

        // attributes
        count?: number;
    }


    /** <c> (Calculation Cell)
     * parents: calcChain (§18.6.2)
     */
    interface CalculationCell {
        // attributes
        /** sheet Id */
        i: number;
        /** new dependency level */
        l: boolean;
        /** ST_CellRef 'A1' style */
        r: string;
        /** child chain */
        s: boolean;
    }


    /** <calcChain> (Calculation Chain Info), parent: Root element of SpreadsheetML Calculation Chain part */
    interface CalculationChain {
        cs: CalculationCell[];
    }


    /** <c> (Cell)
     * parents: row (§18.3.1.73)
     */
    interface Cell {
        // children
        f: CellFormula;
        /** This element allows strings to be expressed directly in this cell instead of via a shared string table index */
        is: InlineString;
        /** The value of this cell, see the 't' (cell data type) attribute.  If the cell contains a string, then this value is an index into the shared string table. 
         * Otherwise, the cell's value is expressed directly in this element */
        v: CellValue;

        // attributes
        /** The 0-based index of the cell metadata record associated with this cell.  Metadata information is found in the Metadata Part. 
         * Cell metadata is extra information stored at the cell level, and is attached to the cell (travels through moves, copy / paste, clear, etc). */
        cm?: number;
        /** A Boolean indicating if the spreadsheet application should show phonetic information */
        ph?: boolean;
        /** ST_CellRef, 'A1' style cell reference */
        r: string;
        /** The 0-based index of this cell's style in the <cellXfs> collection. Style records are stored in the Styles Part */
        s?: number;
        /** ST_CellType, cell data type */
        t: string;
        /** The 0-based index of the value metadata record associated with this cell's value.  Metadata records are stored in the Metadata Part.
         * Value metadata is extra information stored at the cell level, but associated with the value rather than the cell itself */
        vm?: number;
    }


    /** <cellStyle>
     * parents: cellStyles (§18.8.8)
     */
    interface CellStyle {
        // attributes
        /** The index of a built-in cell style */
        builtinId?: number;
        /** True indicates that this built-in cell style has been customized.  By default built-in styles are not persisted when not in use.
         * This flag indicates that a built-in style has been modified, and therefore should be saved with the workbook, even if not currently in use. */
        customBuiltin?: boolean;
        /** If 'true' do not show this style in the application UI */
        hidden?: boolean;
        /** Indicates that this formatting is for an outline style.  When styles are applied to outline levels (using the outline feature), this value is set and
         * the formatting specified on this cell style is applied to the corresponding level of the outline */
        iLevel?: number;
        /** The name of the cell style */
        name?: string;
        /** CellStyleXfId, 0-based index referencing an xf record in the <cellStyleXfs> collection.  This is used to determine the formatting defined for this named cell style. */
        xfId: number;
    }


    /** <xf> (Format)
     * parents: cellStyleXfs (§18.8.9); cellXfs (§18.8.10)
     */
    interface CellFormat {
        alignment: Alignment;
        protection: Protection;

        // attributes
        /** indicates whether the alignment formatting specified for this xf should be applied */
        applyAlignment?: boolean;
        /** indicates whether the border formatting specified for this xf should be applied */
        applyBorder?: boolean;
        /** indicates whether the fill formatting specified for this xf should be applied */
        applyFill?: boolean;
        /** indicates whether the font formatting specified for this xf should be applied */
        applyFont?: boolean;
        /** indicates whether the number formatting specified for this xf should be applied */
        applyNumberFormat?: boolean;
        /** indicates whether the protection formatting specified for this xf should be applied */
        applyProtection?: boolean;
        /** 0-based index of the border record used by this cell format */
        borderId?: number;
        /** 0-based index of the fill record used by this cell format */
        fillId?: number;
        /** 0-based index of the font record used by this cell format */
        fontId?: number;
        /** NumberFormatId, Id of the number format (numFmt) record used by this cell format */
        numFmtId?: number;
        /** indicates whether the cell rendering includes a pivot table dropdown button */
        pivotButton?: boolean; // default: false
        /** indicates whether the text string in a cell should be prefixed by a single quote (e.g. 'text).  In these cases, the quote is not stored in the Shared Strings Part */
        quotePrefix?: boolean; // default: false
        /** CellStyleXfId, for xf records contained in cellXfs this is the 0-based index of an xf record contained in <cellStyleXfs> corresponding to the cell style applied to the cell */
        xfId?: number;
    }


    /** <cellXfs> (Cell Formats)
     * parents: styleSheet (§18.8.39)
     */
    interface CellFormats {
        xfs: CellFormat[];

        // attributes
        count?: number;
    }


    /** <f>
     * parents: c (§18.3.1.4); nc (§18.11.1.3); oc (§18.11.1.5)
     */
    interface CellFormula {
        /** ST_Formula */
        content: string;
        // attributes
        /** one of: "normal", "array", "dataTable", "shared" */
        t: string;
        /** ST_Ref */
        ref: string;
        si: number;
    }


    /** <cellStyleXfs> (Formatting Records)
     * parents: styleSheet (§18.8.39)
     *
     * Master formatting records (xf's) which define the formatting for all named cell styles in this workbook.
     * Master formatting records reference individual elements of formatting (e.g. number format, font definitions, cell fills, etc.)
     * by specifying a zero-based index into those collections.  Master formatting records also specify whether to apply or ignore particular aspects of formatting.
     */
    interface CellStyleFormats {
        xfs: CellFormat[];

        // attributes
        count?: number;
    }


    /** <cellStyles> (Cell Styles)
     * parents: styleSheet (§18.8.39)
     *
     * Contains the named cell styles, consisting of a sequence of named style records.  A named cell style is a collection of direct or themed
     * formatting (e.g. cell border, cell fill, font type/size/style) group together into a single named style, and can be applied to a cell.
     */
    interface CellStyles {
        cellStyles: CellStyle[];

        // attributes
        count?: number;
    }


    /** <v> (Cell Value)
     * parents: c (§18.3.1.4); cell (§18.14.1); nc (§18.11.1.3); oc (§18.11.1.5); tp (§18.15.3)
     *
     * The value of a cell.  If the cell contains a string, then this value is an index into the shared string table.
     * Otherwise, the cell's value is expressed directly in this element
     */
    interface CellValue {
        content: string;
    }


    /** <colors> (Colors)
     * parents: styleSheet (§18.8.39)
     *
     * Color information associated with this stylesheet.  This collection is written whenever the legacy color palette has been
     * modified (backwards compatibility settings) or a custom color has been selected while using this workbook
     */
    interface Colors {
        indexedColors: IndexedColors;
        mruColors: MruColors;
    }


    /** <col> (Column Width & Formatting)
     * parents: cols (§18.3.1.17)
     */
    interface Column {
        /** best fit column width; default: false */
        bestFit?: boolean;
        /** Flag indicating if the outlining of the affected column(s) is in the collapsed state. See description of row collapsed and outlinePr element's summaryBelow and summaryRight attributes for detailed information; default: false */
        collapsed?: boolean;
        /** custom width; default: false */
        customWidth?: boolean;
        /** Flag indicating if the affected column(s) are hidden on this worksheet; default: false */
        hidden?: boolean;
        /** Last column affected by this 'column info' record */
        max: number;
        /** First column affected by this 'column info' record */
        min: number;
        /** Outline level of affected column(s). Range is 0 to 7. See description of outlinePr element's summaryBelow and summaryRight attributes for detailed information; default: 0 */
        outlineLevel?: number;
        /** Flag indicating if the phonetic information should be displayed by default for the affected column(s) of the worksheet; default: false */
        phonetic?: boolean;
        /** Default style, affects cells not yet allocated in the column; default: 0 */
        style?: number;
        /** column width, measured as the number of chars of the maximum digit (0, 1, ..., 9) rendered in the
         * normal style's font, + 4 pixel margin padding (2 on each side), + 1 pixel padding for gridlines
         */
        width?: number;
    }


    /** <cols>
     * parents: worksheet (§18.3.1.99)
     */
    interface Columns {
        cols: Column[];
    }


    /** <color> (Data Bar Color)
     * parents: bottom (§18.8.6); colorScale (§18.3.1.16); dataBar (§18.3.1.28); diagonal (§18.8.13); end (§18.8.16); font (§18.8.22); horizontal (§18.8.25); mruColors (§18.8.28); rPr (§18.4.7); start (§18.8.37); stop (§18.8.38); top (§18.8.43); vertical (§18.8.44)
     *
     * One of the colors associated with the data bar or color scale.  The auto attribute shall not be used in the context of data bars.
     */
    interface Color {
        /** indicating the color is automatic and system color dependent */
        auto?: boolean;
        /** indexed color value. Only used for backwards compatibility. References a color in indexedColors */
        indexed?: number;
        /** UnsignedIntHex, Standard Alpha Red Green Blue color value (ARGB) */
        rgb?: string | number;
        /** A 0-based index into the <clrScheme> collection (§20.1.6.2), referencing a particular <sysClr> or <srgbClr> value expressed in the Theme part */
        theme?: number;
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
        tint?: number; // default '0.0'
    }


    /** <comment>
     * parents: commentList (§18.7.4)
     */
    interface Comment {
        text: CommentText;
        //commentPr: CommentProperties;

        // attributes
        authorId: number;
        /** ST_Ref, 'A1' style cell reference */
        ref: string;
        shapeId: number;
    }


    /** <commentList>
     * parents: comments (§18.7.6)
     */
    interface CommentList {
        comments: Comment[];
    }


    /** <comments>
     * parents: root element of SpreadsheetML Comments part
     */
    interface Comments {
        authors: Authors;
        commentList: CommentList;
    }


    /** <text>
     * parents: comment (§18.7.3)
     */
    interface CommentText {
        rs: RichTextRun[];
        t: Text;
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


    /** <drawing>
     * parents: chartsheet (§18.3.1.12); dialogsheet (§18.3.1.34); worksheet (§18.3.1.99)
     */
    interface Drawing {
        /** "r:id", ST_RelationshipId */
        rid: string;
    }


    /** <dxf> (Formatting)
     * parents: dxfs (§18.8.15); rfmt (§18.11.1.17)
     *
     * A single dxf record, expressing incremental formatting to be applied.
     */
    interface DifferentialFormat {
        alignment: Alignment;
        border: Border;
        fill: Fill;
        font: Font;
        numFmt: NumberingFormat;
        protection: Protection;
    }


    /** <dxfs> (Formats)
     * parents: styleSheet (§18.8.39)
     *
     * This element contains the master differential formatting records (dxf's) which define formatting for all non-cell formatting in this workbook.
     * Whereas xf records fully specify a particular aspect of formatting (e.g., cell borders) by referencing those formatting definitions elsewhere in the
     * Styles part, dxf records specify incremental (or differential) aspects of formatting directly inline within the dxf element.
     * The dxf formatting is to be applied on top of or in addition to any formatting already present on the object using the dxf record.
     */
    interface DifferentialFormats {
        dxfs: DifferentialFormat[];

        // attributes
        count?: number;
    }


    /** <evenFooter> (Even Page Footer)
     * parents: headerFooter (§18.3.1.46)
     */
    interface EvenFooter {
        content: string;
    }


    /** <evenHeader> (Even Page Header)
     * parents: headerFooter (§18.3.1.46)
     * Spec for 'evenHeader' has full description of the content string format
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


    interface Fill {
        // pattern and gradient are exclusive
        patternFill: PatternFill;
        gradientFill: GradientFill;
    }


    /** <fills> (Fills)
     * parents: styleSheet (§18.8.39)
     *
     * This element defines the cell fills portion of the Styles part, consisting of a sequence of fill records.
     * A cell fill consists of a background color, foreground color, and pattern to be applied across the cell.
     */
    interface Fills {
        fills: Fill[];

        // attributes
        count?: number;
    }


    /** <firstFooter> (First Page Footer)
     * parents: headerFooter (§18.3.1.46)
     */
    interface FirstFooter {
        content: string;
    }


    /** <firstHeader> (First Page Header)
     * parents: headerFooter (§18.3.1.46)
     */
    interface FirstHeader {
        content: string;
    }


    /** <font>
     * parents: dxf (§18.8.14); fonts (§18.8.23); ndxf (§18.11.1.4); odxf (§18.11.1.6)
     */
    interface Font {
        b: Bold;
        charset: FontCharSet;
        color: Color;
        condense: Condense;
        extend: Extend;
        family: FontFamily;
        i: Italic;
        name: FontName;
        outline: Outline;
        scheme: FontScheme;
        shadow: Shadow;
        strike: Strike;
        sz: FontSize;
        u: Underline;
        vertAlign: VerticalTextAlignment;
    }


    /** <fonts>
     * parents: styleSheet (§18.8.39)
     */
    interface Fonts {
        fonts: Font[];

        // attributes
        count?: number;
    }


    interface FontCharSet {
        val: number;
    }


    /** <family>
     * parents: font (§18.8.22); rPr (§18.4.7)
     */
    interface FontFamily {
        /** ST_FontFamily, range [0, 14], includes: 0=N/A, 1=Roman, 2=Swiss, 3=Modern, 4=Script, 5=Decorative */
        val: number;
    }


    /** <name>
     * parent: font (§18.8.22)
     */
    interface FontName {
        /** A string representing the name of the font. If the font doesn't exist (because it isn't installed on the system), or the charset not supported by that font, then another font should be substituted.
         * The string length for this attribute shall be 0 to 31 characters
         */
        val: string;
    }


    /** <scheme>
     * parent: font (§18.8.22); rPr (§18.4.7)
     */
    interface FontScheme {
        /** ST_FontScheme, one of: 'none', 'major', 'minor' */
        val: string;
    }


    /** <sz> parent: font (§18.8.22), rPr (§18.4.7) */
    interface FontSize {
        /** positive font points measure (1/72 inch) */
        val: number;
    }


    /** <gradientFill> (Gradient)
     * parents: fill (§18.8.20)
     *
     * This element defines a gradient-style cell fill. Gradient cell fills can use one or two colors as the end points of color interpolation.
     */
    interface GradientFill {
        stops: GradientStop[];

        // attributes
        /** Range [0, 1]. Specifies in percentage format (from the top to the bottom) the position of the bottom edge of the inner rectangle (color 1).
         * For bottom, 0 means the bottom edge of the inner rectangle is on the top edge of the cell, and 1 means it is on the bottom edge of the cell. default 0
         */
        bottom?: number;
        /** Angle of the linear gradient - vertical, horizontal, diagonal.
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
        degree?: number;
        /** Range [0, 1]. Specifies in percentage format (from the left to the right) the position of the left edge of the inner rectangle (color 1).
         * For left, 0 means the left edge of the inner rectangle is on the left edge of the cell, and 1 means it is on the right edge of the cell.
         * (applies to From Corner and From Center gradients). default: 0
         */
        left?: number;
        /** Range [0, 1]. Specifies in percentage format (from the left to the right) the position of the right edge of the inner rectangle (color 1).
         * For right, 0 means the right edge of the inner rectangle is on the left edge of the cell, and 1 means it is on the right edge of the cell.
         * (applies to From Corner and From Center gradients). default: 0
         */
        right?: number;
        /** Range [0, 1]. Specifies in percentage format (from the top to the bottom) the position of the top edge of the inner rectangle (color 1).
         * For top, 0 means the top edge of the inner rectangle is on the top edge of the cell, and 1 means it is on the bottom edge of the cell.
         * (applies to From Corner and From Center gradients). default: 0
         */
        top?: number;
        /** gradient fill type, one of: 'linear', 'path'; default: 'linear' */
        type: string;
    }


    interface GradientStop {
        color: Color;

        // attributes
        position: number;
    }


    /** <headerFoot> (Header Footer Settings)
     * parents: chartsheet (§18.3.1.12); customSheetView (§18.3.1.24); customSheetView (§18.3.1.25); dialogsheet (§18.3.1.34); worksheet (§18.3.1.99)
     */
    interface HeaderFooter {
        evenFooter: EvenFooter; // (Even Page Footer)
        evenHeader: EvenHeader; // (Even Page Header)
        firstFooter: FirstFooter; // (First Page Footer)
        firstHeader: FirstHeader; // (First Page Header)
        oddFooter: OddFooter; // (Odd Page Footer)
        oddHeader: OddHeader; // (Odd Page Header)
    }


    /** <indexedColors> (Color Indexes)
     * parents: colors (§18.8.11)
     *
     * A legacy indexing scheme for colors that is still required for some records, and for backwards compatibility with legacy formats.
     * This element contains a sequence of color values that correspond to color indexes (zero-based). When using the default indexed color palette,
     * the values are not written out, but instead are implied. When the color palette has been modified from default, then the entire color palette is written out.
     */
    interface IndexedColors {
        rgbColors: RgbColor[];
    }


    /** <is>
     * parents: c (§18.3.1.4); nc (§18.11.1.3); oc (§18.11.1.5)
     */
    interface InlineString {
        t?: Text;
        rs?: RichTextRun[];
        //rPh?: PhoneticRun[];
        //phoneticPr?: PhoneticPr;
    }


    /** <i>
     * parents: font (§18.8.22); rPr (§18.4.7)
     */
    interface Italic {
        val: boolean; // default: true
    }


    /** <legacyDrawing> (Legacy Drawing Reference)
     * parents: chartsheet (Part 1, §18.3.1.12); dialogsheet (Part 1, §18.3.1.34); worksheet (Part 1, §18.3.1.99)
     */
    interface LegacyDrawing {
        /** ST_RelationshipId */
        rid: string;
    }


    /** <mruColors> (MRU Colors)
     * parents: colors (§18.8.11)
     */
    interface MruColors {
        colors: Color[];
    }


    /** <numFmt> (Number Format)
     * parents: dxf (§18.8.14); ndxf (§18.11.1.4); numFmts (§18.8.31); odxf (§18.11.1.6)
     */
    interface NumberingFormat {
        /** The number format code for this number format */
        formatCode: string;
        /** ST_NumFmtId, Id used by the master style records (xf's) to reference this number format */
        numFmtId: number;
    }


    /** <numFmts> (Number Formats)
     * parents: styleSheet (§18.8.39)
     *
     * This element defines the number formats in this workbook, consisting of a sequence of numFmt records, where each numFmt record defines a
     * particular number format, indicating how to format and render the numeric value of a cell.
     */
    interface NumberingFormats {
        numFmts: NumberingFormat[];

        // attributes
        count?: number;
    }


    /** <oddFooter> (Odd Page Footer)
     * parents: headerFooter (§18.3.1.46)
     */
    interface OddFooter {
        content: string;
    }


    /** <oddHeader> (Odd Page Header)
     * parents: headerFooter (§18.3.1.46)
     */
    interface OddHeader {
        content: string;
    }


    /** <outline>
     * parents: font (§18.8.22); rPr (§18.4.7)
     */
    interface Outline {
        val: boolean; // default: true
    }


    /** <pageMargins>
     * parents: chartsheet (§18.3.1.12); customSheetView (§18.3.1.24); customSheetView (§18.3.1.25); dialogsheet (§18.3.1.34); worksheet (§18.3.1.99)
     */
    interface PageMargins {
        bottom: number;
        footer: number;
        header: number;
        left: number;
        right: number;
        top: number;
    }


    /** <pageSetup>
     * parents: customSheetView (§18.3.1.25); dialogsheet (§18.3.1.34); worksheet (§18.3.1.99)
     */
    interface PageSetup {
        // TODO incomplete
        /** ST_Orientation, one of: "default", "landscape", "portrait" */
        orientation: string;
        scale: number;
        /** "r:id" */
        rid: string;
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


    /** <patternFill> (Pattern)
     * parents: fill (§18.8.20)
     *
     * This element is used to specify cell fill information for pattern and solid color cell fills. For solid cell fills (no pattern),
     * fgColor is used. For cell fills with patterns specified, then the cell fill color is specified by the bgColor element
     */
    interface PatternFill {
        fgColor: Color;
        bgColor: Color;

        // attributes
        /** ST_PatternType, Specifies the fill pattern type (including solid and none),
         * one of: 'none', 'solid', 'mediumGray', 'darkGray', 'lightGray', 'darkHorizontal', 'darkVertical', 'darkDown', 'darkUp', 'darkGrid', 'darkTrellis', 'lightHorizontal', 'lightVertical', 'lightDown', 'lightUp', 'lightGrid', 'lightTrellis', 'gray125', 'gray0625'
         * default: 'none' */
        patternType: string;
    }


    /** <protection> (Protection Properties)
     * parents: dxf (§18.8.14); ndxf (§18.11.1.4); odxf (§18.11.1.6); xf (§18.8.45)
     */
    interface Protection {
        // attributes
        /** indicating if the cell is hidden. When the cell is hidden and the sheet on which the cell resides is protected, then the cell value is displayed in the cell grid location,
         * but the contents of the cell will not be displayed in the formula bar. This is true for all types of cell content, including formula, text, or numbers.
         * Therefore the cell A4 can contain a formula "=SUM(A1:A3)", but if the cell protection property of A4 is marked as hidden, and the sheet is protected,
         * then the cell should display the calculated result (e.g. "6"), but will not display the formula used to calculate the result
         */
        hidden?: boolean;
        /** indicates if the cell is locked. When cells are marked as "locked" and the sheet is protected, then the options specified in the
         * Sheet Part's sheetProtection element (§18.3.1.85) are prohibited for these cells
         */
        locked?: boolean;
    }


    /** <r>
     * parents: is (§18.3.1.53); si (§18.4.8); text (§18.7.7)
     */
    interface RichTextRun {
        t: Text; /** text */
        rPr: RichTextRunProperties;
    }


    /** <rPr>
     * parents: r (§18.4.4)
     */
    interface RichTextRunProperties {
        b?: Bold;
        color?: Color;
        sz?: FontSize;
        rFont?: RunFont;
        family?: FontFamily;
        // TODO other attributes
    }


    /** <rgbColor> (RGB Color)
     * parents: indexedColors (§18.8.27)
     *
     * A single ARGB entry for the corresponding color index.
     */
    interface RgbColor {
        /** UnsignedIntHex, Color value expressed in Alpha Red Green Blue format (ARGB) */
        rgb?: string | number;
    }


    /** <row>
     * parents: sheetData (§18.3.1.80)
     */
    interface Row {
        cs: Cell[];
        // attributes
        /** '1' if the rows 1 level of outlining deeper than the current row are in the collapsed outline state. It means that the rows which are 1 outline level deeper (numerically higher value)
         * than the current row are currently hidden due to a collapsed outline state. It is possible for collapsed to be false and yet still have the rows in question hidden.
         * This can be achieved by having a lower outline level collapsed, thus hiding all the child rows. default: false */
        collapsed?: boolean;
        /** '1' if the row style should be applied */
        customFormat?: boolean;
        /** '1' if the row height has been manually set */
        customHeight?: boolean;
        /** '1' if the row is hidden, e.g., due to a collapsed outline or by manually selecting and hiding a row. default: false */
        hidden?: boolean;
        /** Row height measured in point size. There is no margin padding on row height */
        ht?: number;
        /** Outlining level of the row, when outlining is on. See description of outlinePr element's summaryBelow and summaryRight attributes for detailed information. default: 0 */
        outlineLevel?: number;
        /** '1' if the row should show phonetic. default: false */
        ph?: boolean;
        /** Row Index. Indicates to which row in the sheet this <row> definition corresponds */
        r: number;
        /** (Style Index) Index to style record for the row (only applied if customFormat attribute is '1') */
        s?: number;
        /** ST_CellSpans */
        spans: string;
        /** (Thick Bottom), default: false */
        thickBot?: boolean;
        /** (Thick Top), default: false */
        thickTop?: boolean;
        /** "x14ac:dyDescent" */
        dyDescent: number;
    }


    /** <rFont>
     * parents: rPr (§18.4.7)
     */
    interface RunFont {
        val?: string;
    }


    /** <selection>
     * parents: customSheetView (§18.3.1.25); sheetView (§18.3.1.87)
     */
    interface Selection {
        // attributes
        /** ST_CellRef */
        activeCell: string;
        activeCellId: number;
        /** ST_Sqref */
        sqref: string;
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


    /** <si> (String Item) "x:si"
     * parents: sst (§18.4.9)
     * @see https://msdn.microsoft.com/EN-US/library/documentformat.openxml.spreadsheet.sharedstringitem.aspx
     */
    interface SharedStringItem {
        t?: Text;
        rs?: RichTextRun[];
        //rPh?: PhoneticRun[]; // phonetic run
        //phoneticPr?: PhoneticProperties; // phonetic properties
    }


    /** <sst> (Shared String Table)
     * parents: root element of SpreadsheetML Shared String Table part
     */
    interface SharedStringTable {
        sis: SharedStringItem[];

        // attributes
        count?: number;
        uniqueCount?: number;
    }


    /** <sheetData> (Sheet Data)
     * parents: worksheet (§18.3.1.99)
     */
    interface SheetData {
        rows: Row[];
    }


    /** <dimension>
     * parents: worksheet (§18.3.1.99)
     */
    interface SheetDimension {
        /** attr, ST_Ref row and column bounds of all cells in this worksheet 'A-1:B-2' style */
        ref: string;
    }


    /** <sheetFormatPr>
     * parents: dialogsheet (§18.3.1.34); worksheet (§18.3.1.99)
     */
    interface SheetFormatProperties {
        defaultColWidth: number;
        defaultRowHeight: number;
        /** double, "x14ac:dyDescent" */
        dyDescent: number;
    }


    /** <sheetView>
     * parents: sheetViews (§18.3.1.88)
     */
    interface SheetView {
        selections: Selection[];
        //extLst;
        //pane: Pane;
        //pivotSelection;

        // attributes
        tabSelected: boolean;
        view: string;
        topLeftCell: string; // ST_CellRef
        workbookViewId: number;
        zoomScale: number;
        zoomScaleNormal: number;
        zoomScalePageLayoutView: number;
        zoomScaleSheetLayoutView: number;
    }


    /** <sheetViews>
     * parents: dialogsheet (§18.3.1.34); worksheet (§18.3.1.99)
     */
    interface SheetViews {
        sheetViews: SheetView[];
        //extLst;
    }


    /** <strike>
     * parents: font (§18.8.22); rPr (§18.4.7)
     */
    interface Strike {
        val: boolean; // default: true
    }


    /** <styleSheet> (Stylesheet)
     * parents: root element of SpreadsheetML Styles part
     */
    interface Stylesheet {
        borders: Borders;
        cellStyles: CellStyles;
        cellStyleXfs: CellStyleFormats;
        cellXfs: CellFormats;
        colors: Colors;
        dxfs: DifferentialFormats;
        fills: Fills;
        fonts: Fonts;
        numFmts: NumberingFormats;
        tableStyles: TableStyles;
        extLst?: Element;
    }


    /** <tableStyle>
     * parents: tableStyles (§18.8.42)
     */
    interface TableStyle {
        tableStyleElements: TableStyleElement[];

        // attributes
        count?: number;
        name: string;
        pivot?: boolean; // default: true
        table?: boolean; // default: true
    }


    interface TableStyleElement {
        // attributes
        /** ST_TableStyleType, one of: 'wholeTable', 'headerRow', 'totalRow', 'firstColumn', 'lastColumn', 'firstRowStripe', 'secondRowStripe', 'firstColumnStripe', 'secondColumnStripe', 'firstHeaderCell', 'lastHeaderCell', 'firstTotalCell', 'lastTotalCell', 'firstSubtotalColumn', 'secondSubtotalColumn', 'thirdSubtotalColumn', 'firstSubtotalRow', 'secondSubtotalRow', 'thirdSubtotalRow', 'blankRow', 'firstColumnSubheading', 'secondColumnSubheading', 'thirdColumnSubheading', 'firstRowSubheading', 'secondRowSubheading', 'thirdRowSubheading', 'pageFieldLabels', 'pageFieldValues' */
        type: string;
        size?: number; // default: 1
        /** ST_DxfId */
        dxfId?: number;
    }


    /** <tableStyles>
     *
     */
    interface TableStyles {
        tableStyles: TableStyle[];

        // attributes
        count?: number;
        /** Name of the default table style to apply to new PivotTables. This can be set by the user interface */
        defaultPivotStyle?: string;
        /** Name of default table style to apply to new Tables. This can be set by the user interface */
        defaultTableStyle?: string;
    }


    /** <t>
     * parents: is (§18.3.1.53); r (§18.4.4); rPh (§18.4.6); si (§18.4.8); text (§18.7.7)
     */
    interface Text {
        /** text */
        content: string;
        /** "xml:space" */
        preserveSpace: boolean;
    }


    interface Underline {
        /** ST_UnderlineValues, one of: 'single', 'double', 'singleAccounting', 'doubleAccounting', 'none'; default: 'single' */
        val: string;
    }


    interface VerticalTextAlignment {
        /** ST_VerticalAlignRun, one of: 'baseline', 'superscript', 'subscript' */
        val: string;
    }


    /** <worksheet>
     * parents: root element of SpreadsheetML Worksheet part
     */
    interface Worksheet {
        dimension: SheetDimension;
        sheetViews: SheetViews;
        sheetFormatPr: SheetFormatProperties;
        cols: Columns[];
        sheetData: SheetData;
        pageMargins: PageMargins;
        pageSetup: PageSetup;
        headerFooter: HeaderFooter;
        drawing: Drawing;
        legacyDrawing: LegacyDrawing;
    }

}
