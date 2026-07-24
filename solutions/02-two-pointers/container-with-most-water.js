// https://leetcode.com/problems/container-with-most-water/
// Difficulty: Medium
// Pattern: Two Pointers
//
// Approach: two pointers from both ends. Area is limited by the
// shorter wall, so always move the pointer on the shorter side —
// moving the taller one can only decrease or keep the area the same.
// Time: O(n) | Space: O(1)

const maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxAreaFound = 0;

  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(height[left], height[right]);
    const area = width * minHeight;

    if (area > maxAreaFound) {
      maxAreaFound = area;
    }

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxAreaFound;
};
