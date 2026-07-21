// https://leetcode.com/problems/3sum/
// Difficulty: Medium
// Pattern: Two Pointers
//
// Approach: sort the array, then for each number, fix it and run
// two pointers on the rest to find pairs that sum to its negative.
// Skip duplicate values for i, left, and right to avoid repeated triplets.
// Time: O(n²) | Space: O(n) — for the sorted copy and result array

const threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
      }

      if (sum > 0) {
        right--;
      }

      if (sum < 0) {
        left++;
      }
    }
  }

  return result;
};
