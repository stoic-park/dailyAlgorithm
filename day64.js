// unique path - leetCode
// https://leetcode.com/problems/unique-paths/

// 문제 설명
// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
// How many possible unique paths are there?

// ![](https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png)

// 입출력 예
// Example 1:
// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right
// Example 2:
// Input: m = 7, n = 3
// Output: 28

// 분석
// DP
// 각 칸마다 가능한 방법을 담고, 탑 다운
// 주어진 행과열의 길이만큼 1을 채운 배열을 먼저 만들고..?
// 이전의 행(dp[i-1][j])과 열(dp[i][j-1])의 값을 더한 값이 현재 dp 값!

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  if (m === 0 && n === 0) {
    return 0;
  }
  if (m === 0 || n === 0) {
    return 1;
  }
  let dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(1);
  }
  console.log(dp);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dp[i + 1][j + 1] = dp[i][j + 1] + dp[i + 1][j];
    }
  }
  console.log(dp);
  return dp[m - 1][n - 1];
};

// solution 1:
// arr[x][y] : will store the unique path from start to (x,y) location
// intialize: will initial the first row and column
// 1 1 1 1 1 1 1
// 1
// 1
// calculate: arr[x][y] = arr[x -1][y] + f[x][y - 1]
// result: arr[m - 1][n - 1]
var uniquePaths = function (m, n) {
  if (m === 0 && n === 0) {
    return 0;
  }
  if (m === 0 || n === 0) {
    return 1;
  }

  let arr = [];

  // initial the first column
  for (let i = 0; i < m; i++) {
    arr[i] = [1];
  }

  // initial the first row data
  for (let i = 1; i < n; i++) {
    arr[0].push(1);
  }

  // the rest of table, will be calculate by, top + left
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
  }

  return arr[m - 1][n - 1];
};
