// https://leetcode.com/problems/product-of-array-except-self/
// Difficulty: Medium
// Pattern: Arrays & Hashing
// Approach: build a left array with the accumulated product of
// everything before each index, then a right array with everything
// after. Multiply left[i] * right[i] for the final result.
// Time: O(n) | Space: O(n)

const productExceptSelf = function (nums) {
  const left = new Array(nums.length);
  left[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  const right = new Array(nums.length);
  right[nums.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  const result = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    result[i] = left[i] * right[i];
  }

  return result;
};
