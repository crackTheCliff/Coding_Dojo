/* 
Given a string,
return a new string with the duplicates excluded
Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

const str5 = "yeeeeees";
const expected5 = "yes";

const str_bonus = "SuperTxT";
const expected_bonus = "SuperxT";

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
function stringDedupe(str) {
    var newstring = "";
    var newtable = {};
    for (i in str) {
        if (!(str[i] in newtable)) {
            newtable[str[i]] = 1;
            newstring += str[i];
        }
        else {
            newtable[str[i]] = newtable[str[i]] + 1;
        }
    }
    return newstring;
}
console.log(stringDedupe(str3));



/* 
Given a string containing space separated words
Reverse each word in the string.
If you need to, use .split to start, then try to do it without.
*/

const str6 = "hello";
const expected6 = "olleh";

const str7 = "hello world";
const expected7 = "olleh dlrow";

const str8 = "abc def ghi";
const expected8 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWordsSplit(wordsStr) {
    const words = wordsStr.split(" ");
    let wordsReversed = "";

    for (const word of words) {
        let reversedWord = "";

        for (let i = word.length - 1; i >= 0; --i) {
            reversedWord += word[i];
        }

        // add a space in front of word if it's not the first word
        if (wordsReversed.length > 0) {
            reversedWord = " " + reversedWord;
        }
        wordsReversed += reversedWord;
    }
    return wordsReversed;
}





/* 
Reverse Word Order
Given a string of words (with spaces)
return a new string with words in reverse sequence.
*/

const str9 = "This is a test";
const expected9 = "test a is This";

const str10 = "hello";
const expected10 = "hello";

const str11 = "   This  is a   test  ";
const expected11 = "test a is This";

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */
function reverseWordOrderSplit(wordsStr = "") {
    // if all spaces
    if (wordsStr == false) {
        return wordsStr;
    }

    const words = wordsStr.split(" ");
    let reversedWordOrder = "";

    // loop backwards
    for (let i = words.length - 1; i >= 0; --i) {
        // Skip empty strings resulting from .split encountering multiple spaces.
        if (words[i] === "") {
            continue;
        }

        if (reversedWordOrder.length > 0) {
            reversedWordOrder += " ";
        }

        reversedWordOrder += words[i];
    }
    return reversedWordOrder;
}