// Increasing Triplet Subsequence - leetcode
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/781/

// 문제 설명
// Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.
// Formally the function should:
// Return true if there exists i, j, k
// such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.

// 제한사항
// Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  // 0번째 인덱스에서 시작해서 순서대로 탐색
  // 1번째 인덱스에서 ..
  // 2번째 인덱스에서 ..
  // 매 반복마다 현재 인덱스 값과 그 다음 인덱스 값을 비교해서 크면 카운트++
  // 아니면 break;
  // 카운트의 값이 3이상일 경우 true;

  // 카운트를 하고 확인을 해줘야 하는데?

  // 0. 기본 예외 조건
  if (nums.length < 3) return false;

  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    //         for(let j=i; j<nums.length-1; j++) {
    //             if(nums[j] < nums[j+1]) {
    //                 count++;
    //             }
    //             // 아닐 경우
    //             // else {
    //             //     break;
    //             // }
    //         }
    //         return count >= 3 ? true : false;

    if (nums[i] < nums[i + 1]) count++;
  }
  console.log(count);
  return count >= 3 ? true : false;
};

// 문제를 잘못 이해한듯..?
// 다시 풀어보자
