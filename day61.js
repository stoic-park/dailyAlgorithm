// Coin Change - leetCode
// https://leetcode.com/problems/coin-change/

// 문제 설명
// You are given coins of different denominations and a total amount of money amount.
// Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// 입출력 예
// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

// 분석
// 동적 프로그래밍
// 어찌 풀어야 하느냐?
// new Array 를 이용한 풀이가 많다
//

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  console.log(coins, amount);
};

// Solution 1: Top-down (Memoization)
var coinChange = function (coins, amount) {
  const memo = new Map();

  function permute(left) {
    if (memo.has(left)) return memo.get(left);
    if (left === 0) return 0;
    let min = Infinity;

    for (let coin of coins) {
      if (left - coin >= 0) min = Math.min(min, permute(left - coin));
    }
    memo.set(left, min + 1);
    return min + 1;
  }
  const result = permute(amount);
  return result === Infinity ? -1 : result;
};
// Solution 2: Bottom-up (Tabulation)
var coinChange = function (coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i < dp.length; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

// https://upcount.tistory.com/94
