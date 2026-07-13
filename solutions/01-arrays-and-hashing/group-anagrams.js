// https://leetcode.com/problems/group-anagrams/
// Difficulty: Easy
// Pattern: Arrays & Hashing
//
// Approach: sort each word's letters to create a key — anagrams
// produce the same sorted key. Use a Map to group words by key.
// Time: O(n * k log k) | Space: O(n * k), where n is the number of words and k is the maximum length of a word.

const groupAnagrams = function (strs) {
  const map = new Map();

  for (const word of strs) {
    const key = word.split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(word);
  }

  return Array.from(map.values());
};
