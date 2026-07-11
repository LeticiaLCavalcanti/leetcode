// https://leetcode.com/problems/valid-anagram
// Difficulty: Easy
// Pattern: Arrays & Hashing
//
// Approach: use a frequency counter object. Count every character
// in s (increment), then go through t subtracting (decrement).
// If any character is missing or runs out, it's not an anagram.
// Time: O(n) | Space: O(n)

const isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const count = {};

    for (const char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (const char of t) {
        if (!count[char]) {
            return false;
        }
        count[char]--;
    }

    return true;
}