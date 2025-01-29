/*
Link: https://leetcode.com/problems/search-insert-position/description/

Title: Search Insert Position

Question:

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
 
Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

let nums = [1,3,5,6]
let target = 2;


var searchInsert = function(nums, target) {
    const pos = nums.indexOf(target);
    if(pos!=-1)
        return pos;
    else {
        for(let i=0;i<nums.length;i++) {
            if(nums[i]>=target)
                return i;
        }
    }
    // Edge case where target is greater than any values present in nums array
    return nums.length;
};

console.log(searchInsert(nums,target));
