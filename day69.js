// Find Peak Element - leetCode
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/801/

// 문제 설명
// A peak element is an element that is greater than its neighbors.
// Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.
// The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
// You may imagine that nums[-1] = nums[n] = -∞.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
// Example 2:
// Input: nums = [1,2,1,3,5,6,4]
// Output: 1 or 5
// Explanation: Your function can return either index number 1 where the peak element is 2,
// or index number 5 where the peak element is 6.

// 제한사항
// Follow up: Your solution should be in logarithmic complexity.

// 분석
// 단순히...
// 순서대로 탐색해서 다음 요소보다 큰 엘리먼트의 인덱스를 리턴하면 되는그 아니냐?

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums.length === 1) return 0;
  let count;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) return i;
    else count = i;
  }
  return count;
};

// 후기
// 단순한 방법으로 해결하려 했으나
// [1,2] 와 같은 경우, 마지막인자까지 값이 계속 커지는 경우에 대해서는 값을 리턴할 수 없으므로
// 카운트를 해주었다
