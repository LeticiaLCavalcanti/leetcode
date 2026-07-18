// https://leetcode.com/problems/valid-palindrome/
// Difficulty: Easy
// Pattern: Two Pointers
//
// Approach: clean the string (lowercase, remove non-alphanumeric),
// then use two pointers from both ends moving inward. If they ever
// disagree, it's not a palindrome.
// Time: O(n) | Space: O(n)

const isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }

        left++;
        right--;    
    }

     return true
};