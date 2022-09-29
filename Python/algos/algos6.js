/* 
String: Is Palindrome
Create a function that returns a boolean whether the string is a strict palindrome. 
- palindrome = string that is same forwards and backwards

Do not ignore spaces, punctuation and capitalization
 */

const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;

/**
 * Determines if the given str is a palindrome (same forwards and backwards).
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str is a palindrome or not.
 */

function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false
        }
        return false
    }
}


// Nick's solution!
function isPalindrome(str) {
    var newString = '';
    for (var i = str.length - 1; i >= 0; i--) {
        newString = newString + str[i];
    }
    if (str == newString) {
        console.log(str + " is a palindrome!");
        return true
    } else {
        console.log(str + " is not a palindrome!");
        return false
    }
}

isPalindrome(str1)
isPalindrome(str2)
isPalindrome(str3)
isPalindrome(str4)