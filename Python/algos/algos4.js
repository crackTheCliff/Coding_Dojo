/* 
String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decode(str) {
    let decoded = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let num_str = "";
        while (i + 1 < str.length && !isNaN(str[i + 1])) {
            num_str += str[i + 1]
            i++
        }
        if (num_str) {
            decoded += char.repeat(num_str)
            // for loop would work as well
            // for (let j = 0; j < parseInt(num_str); j++) {
            //  decoded += char
            // }
        }
    }
    return decoded
}
console.log(decode("a10c7b12"))