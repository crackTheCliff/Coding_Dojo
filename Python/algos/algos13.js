/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
function socialDistancingEnforcer(queue) {
    let c = {}
    for(let i = 0; i < q.length; i++){
        if(q[i] == 1){
            if (c['index of 1']){
                if(i - c['index of 1'] < 7){
                    return false
                }
            }
            c['index of 1'] = i
        }
    }
    return true
}
console.log(socialDistancingEnforcer(queue1))



/* 
Balance Index
Here, a balance point is ON an index, not between indices.
Return the balance index where sums are equal on either side
(exclude its own value).

Return -1 if none exist.

*/

const nums1 = [-2, 5, 7, 0, 3];
const expected5 = 2;

const nums2 = [9, 9];
const expected6 = -1;

const nums3 = [13, 5, 90, 18]
const expected7 = 2

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) { 
    if (nums.length < 3) {// need at least 3 numbers to have a possible balance index
        return -1;
    }
    
    let leftSum = nums[0];
    let rightSum = 0;
    //we start at index 2 here because were are summing up everything EXCEPT the first number, and the first potential balance point
    for (let i = 2; i < nums.length; i++) {
        rightSum += nums[i]
    }
    // loop over all potential balance points (starting from 1 since thats the first possible balance index) and check if both sums are equal
    // if they are, return the balance index, if not, shift the sums by adding to the left and subtracting from the right
    for (let i = 1; i < nums.length; i++) {
        if (leftSum === rightSum) {
            return i;
        }
        
        leftSum += nums[i]
        rightSum -= nums[i + 1]
    }
    // if we don't return within the for loop then there is no balance point so return -1 here
    return -1
}