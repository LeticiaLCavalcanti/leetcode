// https://leetcode.com/problems/top-k-frequent-elements/
// Difficulty: Medium
// Pattern: Arrays & Hashing
//
// Approach: count frequency of each number with a Map, sort entries
// by frequency (descending), return the first k numbers.
// Time: O(n log n) | Space: O(n)

const topKFrequent = function (nums, k) {
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const entries = Array.from(map.entries());

  entries.sort((a, b) => b[1] - a[1]);

  return entries.slice(0, k).map((entry) => entry[0]);
};
