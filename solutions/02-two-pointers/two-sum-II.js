// Approach: two pointers from both ends. Since the array is sorted,
// if the sum is too big, move right inward (smaller value). If too
// small, move left inward (bigger value).
// Time: O(n) | Space: O(1)

const twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    }

    if (sum > target) {
      right--;
    }

    if (sum < target) {
      left++;
    }
  }
};
