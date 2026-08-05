// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Difficulty: Medium
// Pattern: Sliding Window
//
// Approach: sliding window with a Set tracking characters in the
// current window. Expand with right; when a duplicate is found,
// shrink from the left until it's gone. Track the max window size.
// Time: O(n) | Space: O(min(n, charset size))

const lengthOfLongestSubstring = function (s) {
  const seen = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }

    seen.add(s[right]);

    const windowSize = right - left + 1;
    if (windowSize > maxLength) {
      maxLength = windowSize;
    }
  }

  return maxLength;
};
