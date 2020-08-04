// Sort Colors - leetCode
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/798/

// 문제 설명
// Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.
// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// 제한 사항
// You are not suppose to use the library's sort function for this problem.

// 입출력 예
// Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// 분석
// bubbleSort
// 핵심은 sort 메소드를 사용하지 않고 inplace로 정렬시켜라... => bubbleSort
// bubbleSort 에 대한 정리글
// https://im-developer.tistory.com/133

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // bubbleSort
  // O(n) ~ O(n^2)

  // 회차
  for (let i = 0; i < nums.length; i++) {
    // 엘리먼트 비교 및 스왑
    for (let j = 0; j < nums.length - 1 - i; j++) {
      let target;
      if (nums[j] > nums[j + 1]) {
        target = nums[j]; // 큰 값을 타겟으로 지정
        nums[j] = nums[j + 1]; // 뒤에 놈을 앞으로
        nums[j + 1] = target; // 타겟(큰놈)을 뒤로
      }
    }
  }
  return nums;
};
