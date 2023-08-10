/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/* listen:
- what is the input?
  input: 
  nums = [2, 7, 11, 15] no sorted or sorted
  target = 9
- what is the output?
  output: indices of nums array: [0, 1] so that they add up to the target: nums[0] + nums[1] = 9

- can I assume that each input have only one solution? have exactly one solution
- can I use the same element twice? you may not use the same element twice
- can I return the answer in any order? can return the answer in any order

constraints:
2 <= nums.length <= 10^4
-10^9 <= nums[i] <= 10^9
-10^9 <= target <= 10^9

*/

/* EXAMPLE:
nums = [3, 2, 4], target = 6
output = [1, 2]

nums = [2, 7, 11, 15], target 9

try 4 approaches:
- DIY: 
*/

/* BRUTE FORCE SOLUTION:
- 
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  /* for (let p1 = 0; p1 < nums.length; p1++) {
    const numToFind = target - nums[p1]
    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (numToFind === nums[p2]) {
        return [p1, p2]
      }
    }
  }
  return null */

  for (let p1 = 0; p1 < nums.length - 1; p1++) {
    for (let p2 = p1 + 1; p2 < nums.length - 1; p2++) {
      if (nums[p1] + nums[p2] === target) {
        return [p1, p2]
      }
    }
  }
  return null
}

console.log(twoSum([], 1))
console.log(twoSum([1, 2], 3))
console.log(twoSum([2, 7, 11, 15], 26))
