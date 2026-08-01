// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Difficulty: Easy
// Pattern: Sliding Window
//
// Approach: track the minimum price seen so far while iterating once.
// At each day, calculate profit if selling today, and keep the best.
// Time: O(n) | Space: O(1)

const maxProfit = function (prices) {
  let minPrice = Infinity;
  let bestProfit = 0;

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    }

    const profit = price - minPrice;
    if (profit > bestProfit) {
      bestProfit = profit;
    }
  }

  return bestProfit;
};
