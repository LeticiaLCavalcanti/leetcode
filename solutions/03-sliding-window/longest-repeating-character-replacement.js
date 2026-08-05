// https://leetcode.com/problems/longest-repeating-character-replacement/
// Difficulty: Medium
// Pattern: Sliding Window
//
// Approach: sliding window with a character frequency count. Track
// the max frequency of any single character in the window. If
// (window size - max frequency) exceeds k, too many characters
// would need replacing, so shrink from the left.
// Time: O(n) | Space: O(1) — count has at most 26 uppercase letters

const characterReplacement = function (s, k) {
  const count = {};
  let left = 0;
  let maxLength = 0;
  let maxCount = 0;

  for (let right = 0; right < s.length; right++) {
    count[s[right]] = (count[s[right]] || 0) + 1;
    maxCount = Math.max(maxCount, count[s[right]]);

    while (right - left + 1 - maxCount > k) {
      count[s[left]]--;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
