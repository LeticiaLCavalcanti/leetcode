// https://leetcode.com/problems/contains-duplicate/
// Difficulty: Easy
// Pattern: Arrays & Hashing
//
// Approach: 
// Time: O(n) | Space: O(n)

const containsDuplicate = function(nums) {
    const seen = new Set();
    
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
};

// Alternative approach using Set constructor
// Cons: Uses more memory to create the Set because it stores all unique elements at once, but it's more concise.

// const containsDuplicate = function(nums) {
//     let set = new Set(nums)

//     return set.size !== nums.length;
// };