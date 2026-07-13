// https://leetcode.com/problems/two-sum/
// Difficulty: Easy
// Pattern: Arrays & Hashing
//
// Approach: use a Map to store values already seen.
// For each number, check if the complement (target - num) exists in the map.
// Map preserves key types and guarantees O(1) lookup.
// Time: O(n) | Space: O(n)

const twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let expectedNumber = target - nums[i];

    if (map.has(expectedNumber)) {
      return [map.get(expectedNumber), i];
    }

    map.set(nums[i], i);
  }
};
