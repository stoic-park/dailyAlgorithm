// Search for a Range - leetCode
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/802/

// 문제설명
// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
// Your algorithm's runtime complexity must be in the order of O(log n).
// If the target is not found in the array, return [-1, -1].

// 입출력 예
// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// 제한사항
// 0 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9
// nums is a non decreasing array.
// -10^9 <= target <= 10^9

// 분석
// 타겟으로 주어진 요소가 배열안에서 언제 시작해서 언제 끝나는지
// 그 인덱스 값을 리턴하면 되는데
// 제한사항을 보면 nums는 감소하는 배열은 아니라고 했으니까...sort를 해주지 않더라도? 정렬이 되어있는 것 같다
// 순차적으로 탐색해서 타겟과 같은 값이 나타나면 첫번째로..
// findIndex, lastIndexOf
// 다른 방법..

// 순차적으로 빈 배열에 타겟과 같은 경우 인덱스 값을 푸쉬한다
// 빈배열에 첫번째와 마지막 값을 리턴한다
// 없는 경우는 [-1,-1] return

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  //   let start = nums.findIndex((a) => a === target);
  //   console.log(start);
  //   let last = nums.lastIndexOf((a) => a === target);
  //   console.log(last);

  let box = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      box.push(i);
    }
  }

  return box.length === 0 ? [-1, -1] : [box[0], box[box.length - 1]];
};

// 후기
// 마지막 리턴하는 과정 굉장히 깔끔했다고 생각합니다
