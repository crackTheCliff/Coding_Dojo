/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num, i = 1, add = 0) {
    if (Math.floor(num) < i) {
        return add
    }
    add += i
    return recursiveSigma(num, i + 1, add)
}
console.log(recursiveSigma(num3))



/* 
Recursively sum an arr of ints
*/

const nums4 = [1, 2, 3];
const expected4 = 6;

const nums5 = [1];
const expected5 = 1;

const nums6 = [];
const expected6 = 0;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums, i = 0, sum = 0) {

    if (i > (nums.length - 1)) {
        return sum
    }
    sum = sum + nums[i]
    return sumArr(nums, i + 1, sum)
}
console.log(sumArr(nums3))