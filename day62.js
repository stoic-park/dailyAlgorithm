// Longist Increasing Subsequence - leetCode
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/111/dynamic-programming/810/

// 문제 설명
// Given an unsorted array of integers, find the length of longest increasing subsequence.

// 입출력 예
// >Example:
// Input: [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// 제한사항
// There may be more than one LIS combination, it is only necessary for you to return the length.
// Your algorithm should run in O(n2) complexity.
// Follow up: Could you improve it to O(n log n) time complexity?

// 분석
// 최장증가부분수열
// https://ko.wikipedia.org/wiki/%EC%B5%9C%EC%9E%A5_%EC%A6%9D%EA%B0%80_%EB%B6%80%EB%B6%84_%EC%88%98%EC%97%B4
// 핵심: 주어진 수열에 존재하는 모든 부분 증가 수열 중 길이가 최대인 수열의 길이를 구하는 것 => DP
// dp[x] : x번째 수를 마지막 원소로 가지는 lis의 길이
// arr[x+1] > arr[x] 일 경우, dp[x+1] = dp[x] + 1 이 될 수 있다;
// 이중 포문

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // 0. 기본 조건
  if (nums.length <= 1) {
    return nums.length;
  }

  let dp = new Array(nums.length).fill(1);
  console.log(dp);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // 현재 타겟이 그 이전의 값보다 크다면 dp[i] = dp[j] +1 한 값
      // 비교 했을 때 더 큰 값을 갖는다..
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j], dp[j] + 1);
      }
    }
  }
  console.log(dp);
  return Math.max.apply(null, dp);
};
