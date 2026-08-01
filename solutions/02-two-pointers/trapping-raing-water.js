// https://leetcode.com/problems/trapping-rain-water
// Difficulty: hard
// Pattern: Two Pointers
//
// Approach: two pointers with running max on each side. Process the
// shorter side each time, since the taller side guarantees a max at
// least that big — so the shorter side's own running max is always
// the real limit for how much water it can hold.
// Time: O(n) | Space: O(1)

const trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      water += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      water += rightMax - height[right];
      right--;
    }
  }

  return water;
};
