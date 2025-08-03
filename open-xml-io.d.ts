/// <reference path="../@twg2/dom-builder/dom/dom-builder.d.ts" />
/// <reference path="./open-xml.d.ts" />

/** Read/write interfaces for the 'OpenXml' definition
 * @since 2016-5-27
 */
declare module OpenXmlIo {

    /** Information about a XLSX file, schema url, MIME content type, relative path within the XLSX file zip folder, etc.
     */
    export interface XlsxFileType {
        /** the URL of this file's XML DTD schema */
        schemaUrl: string;
        /** the 'target' attribute for this file type used in XLSX files */
        schemaTarget: string;
        /* the content/mime type name of this file */
        contentType: string;
        /** the relative path inside an unzipped XLSX file where this file resides (the path can be a template string that needs a specific sheet number or resource identifier to complete) */
        xlsxFilePath: string;
        /** refers to 'xlsxFilePath' field, whether the 'xlsxFilePath' is a template string or not */
        pathIsTemplate: boolean;
        /** a string to find/replace in 'xlsxFilePath' with a worksheet number or resource identifier (e.g. 'drawing1.xml', 'drawing2.xml', etc. names can be created using a template string) */
        pathTemplateToken: string | null;
    }


    /** An instance of a parsed XML file with utilities to help read the resulting XMLDocument
     */
    export interface ReaderContext extends DomBuilderHelper {
        /** this XML file's parsed DOM */
        dom: DocumentLike;
        /** a DOM builder for this XML document */
        domBldr: DomBuilderFactory;
        /** an XLSX DOM reader utility */
        readMulti: ElementsReader;
        /** a validator for XLSX DOM elements */
        validator: DomValidate;
    }


    /** An instance of a parsed XML file with utilities to help write the resulting XMLDocument
     */
    export interface WriterContext extends DomBuilderHelper {
        /** This XML file's parsed DOM */
        dom: DocumentLike;
        /** A DOM builder util for creating elements for insertion into this XML document */
        domBldr: DomBuilderFactory;
        /** Serialize an array of elements and add them to this  XLSX DOM writer utility */
        writeMulti: ElementsWriter;
        /** a validator for XLSX DOM elements */
        validator: DomValidate;
    }


    /** Read and write OpenXml files of a specific type into an object or back to an XML string
     */
    export interface FileReadWriter<T> {
        /** The OpenXML file type this instance can read and write */
        fileInfo: XlsxFileType;
        /** Parse an XML string into the OpenXML data type `T` of this reader */
        read(xmlContentStr: string): T;
        /** Serialize an OpenXML data object `T` to an XML string */
        write(data: T): string;

        // alternatives using existing Documents
        /** Parse an XML {@link Document} into the OpenXML data type `T` of this reader */
        loadFromDom(dom: Document): T;
        /** Serialize an OpenXML data object `T` to an XML {@link Document}.
         * Note: the returned document could be a virtual/mock in non-browser environments
         * such as node.js, see the implementation of this interface for details.
         */
        saveToDom(data: T): Document;
    }


    /** Function for parsing {@link Element} arrays using a 'reader' function
     * which accepts individual {@link Elements}.
     */
    export interface ElementsReader {

        /** Given a 'reader' function and an array of {@link Element}(s), run the reader against each of the
         * elements and return the results as an array.
         * @param reader the reader function to call for each `elems`
         * @param elems array of {@link Element}s to read through the `reader`
         * @return an array of results in the same order as the 'elems' array
         */
        <T>(reader: /*ReadFunc<T>*/(xmlDoc: ReaderContext, elem: Element, expectedElemName?: string) => T, elems: Element[]): T[];

        /** Given a 'reader' function and an array of {@link Element}(s), run the reader against each of the
         * elements and return the results as an array.
         * @param reader the reader function to call for each `elems`
         * @param elems array of {@link Element}s to read through the `reader`
         * @param expectedElemName the expected nodeName of each of the 'elems', throw an error if any mismatch
         * @return an array of results in the same order as the 'elems' array
         */
        <T>(reader: /*ReadFuncNamed<T>*/(xmlDoc: ReaderContext, elem: Element, expectedElemName: string) => T, elems: Element[], expectedElemName: string): T[];
    }


    /** Function for serializing an array of data to {@link Element}s using a 'writer'
     * function which accepts individual data items.
     */
    export interface ElementsWriter {

        /** Given a 'writer' function and array of data objects, run the writer against each of the
         * objects and return the results as an array of {@link Element}(s).
         * @param writer the writer function to call for each data element in `insts`
         * @param insts array or map of data elements to write
         * @param keys optional array of keys/indexes into `insts` of the elements to write.
         * If not provided, `Object.keys()` is used to determine which keys to iterate over and elements to serialize in `insts`.
         * @return an array of {@link Element}(s) in the same order as the `insts` array
         */
        <T, E extends ElementLike>(writer: /*WriteFunc<T>*/(xmlDoc: WriterContext, data: T, expectedElemName?: string) => E, insts: T[] | { [id: string]: T }, keys?: string[]): E[];

        /** Given a 'writer' function and an array of data objects, run the writer against each of the
         * objects and return the results as an array of {@link Element}(s).
         * @param writer the writer function to call for each data element in `insts`
         * @param insts array of data elements to write
         * @param expectedElemName the expected nodeName of each of the {@link Element}(s) produced by the writer, throw an error if any mismatch
         * @return an array of {@link Element}(s) in the same order as the `insts` array
         */
        <T, E extends ElementLike>(writer: /*WriteFuncNamed<T>*/(xmlDoc: WriterContext, data: T, expectedElemName: string) => E, insts: T[], expectedElemName: string): E[];
    }


    export interface ReadFunc<T> {
        (xmlDoc: ReaderContext, elem: Element, expectedElemName?: string): T;
    }

    export interface ReadFuncNamed<T> {
        (xmlDoc: ReaderContext, elem: Element, expectedElemName: string, parentElemName?: string): T;
    }


    export interface WriteFunc<T> {
        (xmlDoc: WriterContext, data: T, expectedElemName?: string): ElementLike;
    }

    export interface WriteFuncNamed<T> {
        (xmlDoc: WriterContext, data: T, expectedElemName: string, parentElemName?: string): ElementLike;
    }


    export interface ReadWrite<T> {
        read: ReadFunc<T>;
        write: WriteFunc<T>;
    }

    export interface ReadWriteNamed<T> {
        read: ReadFuncNamed<T>;
        write: WriteFuncNamed<T>;
    }


    export interface ReadWriteCopy<T> {
        read: ReadFunc<T>;
        write: WriteFunc<T>;
        copy: (elem: T) => T;
    }

    export interface ReadWriteCopyNamed<T> {
        read: ReadFuncNamed<T>;
        write: WriteFuncNamed<T>;
        copy: (elem: T) => T;
    }

}
