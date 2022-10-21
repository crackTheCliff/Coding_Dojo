/* 
Array: Mode

Create a function that, given an array of ints,
returns the int that occurs most frequently in the array.
What if there are multiple items that occur the same number of time?
- return all of them (in an array)
- what if all items occur the same number of times?
- return empty array
*/

const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];

const nums6 = [5, 1, 4, 4, 1, 5]
const expected6 = [];


//  - order doesn't matter

/**
 * Finds the mode or all modes if there are more than one. The mode is the
 *    value which occurs the most times in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Test
 * @returns {Array<number>} Mode or modes in any order.
 */

function mode(nums) {
    myTable = {}
    returnArray = []
    highest = 0;

    if (nums.length == 1) {
        return nums;
    }
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] in myTable) {
            myTable[nums[i]] += 1
        } else {
            myTable[nums[i]] = 1
        }
        if (myTable[nums[i]] > highest) {
            highest = myTable[nums[i]];
        }
    }
    if (highest == 1) {
        return returnArray;
    }

    check = []

    for (key in myTable) {
        if (myTable[key] == highest) {
            returnArray.push(key);
        } else {
            check.push(myTable[key]);
        }
    }

    if (check.length == 0) {
        return x = []
    }
    return returnArray;
}

console.log(mode(nums5));

/*****************************************************************************/