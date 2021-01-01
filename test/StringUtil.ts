
module StringUtil {

    /** Split a long string into multiple string at spaces between words, keeping each string's length less than or equal to the maxLength
     * @param fullStr the description to split up
     * @param maxLength the max length of each split sub-description
     * @returns an array of strings containing the 'fullString' split at spaces or the 'maxLength'
     */
    export function splitLongString(fullStr: string, maxLength: number) {
        fullStr = fullStr.trim();
        var descLen = fullStr.length;
        var parts: string[] = [];

        if (descLen === 0) {
            return parts;
        }

        var offset = 0;
        while (true) {
            var nextSplitLen = getNextWordSplitIndex(fullStr, offset, maxLength);
            parts.push(fullStr.substring(offset, offset + nextSplitLen));
            nextSplitLen += (fullStr.charAt(offset + nextSplitLen) === ' ' ? 1 : 0); // if a max length sub-string ends right before a space, skip the space so that the next sub-string doesn't start with a leading space
            if (offset + nextSplitLen >= descLen) {
                break;
            }
            offset += nextSplitLen;
        }

        return parts;
    }


    /** Determine the next index (up to a max sub-string size) at which to split a string, prefering to split at spaces between words
     * For example: getNextWordSplitIndex("the quick sly fox", 4, 5)
     * returns: 5 // meaning 4 (the offset) + 5 is the next absolute split index which produces "quick"
     * example: getNextWordSplitIndex("the quick sly fox", 10, 5)
     * returns: 3 // meaning 10 (the offset) + 3 is the next absolute split index which produces "sly"
     *
     * @param str the string
     * @param offset an initial (0-based) offset at which to start searching for a split point
     * @param maxLen the max length of the sub-string
     * @returns the number of characters to take from the string, 'offset' is not included.
     */
    export function getNextWordSplitIndex(str: string, offset: number, maxLen: number) {
        var idx = str.indexOf(" ", offset) - offset;
        // loop over each space, looking for the last space less than the maxLen + 1 (+1 because we don't need the trailing space)
        while (idx > -1 && idx < maxLen + 1) {
            var nextIdx = str.indexOf(" ", offset + idx + 1) - offset;
            // break if no more spaces exist or the next space is an index greater than the maxLen
            if (nextIdx < 0 || nextIdx >= maxLen + 1) {
                // if there are no more spaces, but the remainder of the string is less than the maxLen, take all of it
                if (nextIdx < 0 && str.length - offset <= maxLen) {
                    idx = str.length - offset;
                }
                break;
            }
            // the next space index is still less than maxLen
            idx = nextIdx;
        }

        return (idx < 0
            ? Math.min(str.length - offset, maxLen) // if no spaces exist in the remaining string, take the remainder or maxLen, whichever is smaller
            : (idx >= maxLen + 1 ? maxLen : idx)); // if the index somehow ended up too large (shouldn't be possible) limit it to maxLen, otherwise return the next valid index
    }

}

export = StringUtil;