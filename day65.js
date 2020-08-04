// Merge Sorted Array - leetCode
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/587/

// 문제 설명
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// 입출력 예
// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3
// Output: [1,2,2,3,5,6]

// 분석
// 문제를 잘 봐야한다
// nums1.length == m + n;
// 따라서 m ~ n 까지를 자르고 붙여야 한다
// nums2를 바로 붙이는 경우는 NaN이 된다
// ...nums2를 이용해서 복사해서 붙여넣는다
// 예기치 않게 클린코드
// 문제에서 이걸 원하는 것이 맞나?
// sort를 원하는 문제
// sort의 파라미터로 들어오는 compareFunc의 조건을 잘 기억해 두자

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n, nums2);
  nums1.sort((a, b) => a - b);
};
