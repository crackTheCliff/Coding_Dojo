const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
function fewestCoinChange(cents) {
    dict = { 'quarter': 0, 'dime': 0, 'nickel': 0, 'penny': 0 }
    while (cents > 25) {
        cents -= 25;
        dict['quarter']++
    }
    while (cents > 10) {
        cents -= 10;
        dict['dime']++
    }
    while (cents > 5) {
        cents -= 5;
        dict['nickel']++
    }
    while (cents > 1) {
        cents -= 1;
        dict['penny']++
    }
    return dict;
}
console.log(fewestCoinChange(cents1))
console.log(fewestCoinChange(cents2))
console.log(fewestCoinChange(cents3))
console.log(fewestCoinChange(cents4))


/* 
Given an array of integers
return the first integer from the array that is not repeated anywhere else
If there are multiple non-repeated integers in the array,
the "first" one will be the one with the lowest index.
*/

const nums1 = [3, 5, 4, 3, 4, 6, 5];
const expected5 = 6;

const nums2 = [3, 5, 5];
const expected6 = 3;

const nums3 = [3, 3, 5];
const expected7 = 5;

const nums4 = [5];
const expected8 = 5;

const nums5 = [];
const expected9 = null;

/**
 * Finds the first int from the given array that has no duplicates. I.e., the
 *    item at the lowest index that doesn't appear again in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number|null} The first int value from the given array that has no
 *    dupes or null if there is none.
 */
function firstNonRepeated(arr) {
    let occurences = {};
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in occurences)) {
            occurences[arr[i]] = 0;
        }
        occurences[arr[i]]++;
    }
    for (let i = 0; i < arr.length; i++) {
        if (occurences[arr[i]] === 1) {
            return arr[i];
        }
    }
    return null;
}

console.log(firstNonRepeated(nums5));