// Kth Largest Element in an Array - leetcode
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/800/

// 문제 설명
// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// 입출력 예
// Example 1:
// Input: [3,2,1,5,6,4] and k = 2
// Output: 5
// Example 2:
// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4

// 제한사항
// You may assume k is always valid, 1 ≤ k ≤ array's length.

// 분석
// 오름차순으로 정렬을 해야한다.
// 중복된 엘리먼트를 제거해야한다.
// 핵심은 중복된 엘리먼트를 제거하는 거
// filter?

//! 중복된 요소를 제거하는 방법 - javascript
// https://medium.com/@Dongmin_Jang/javascript-array-%EC%A4%91%EB%B3%B5-%EC%A0%9C%EA%B1%B0%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-es6-b5b9075361f9

var findKthLargest = function (nums, k) {
  // 1. 중복된 요소 제거
  // let uniqueArr = Array.from(new Set(nums));
  // console.log(uniqueArr)

  // 2. 정렬
  // let sortArr = uniqueArr.sort((a,b) => a - b);
  let sortArr = nums.sort((a, b) => b - a);
  console.log(sortArr);
  return sortArr[k - 1];
};

// 중복된 요소를 제거할 필요 없이
// 단순히 내림차순 정렬해서 원하는 인덱스 값을 리턴하면 되는 문제였다
// 하지만 배열에서 중복된 요소를 제거하는 방법은 알아두면 유용할 것이다!
