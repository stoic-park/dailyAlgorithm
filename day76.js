// Permutations - leetcode
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/109/backtracking/795/discuss/595600/Javascript-solution
// backtracking
// 백트래킹이란?
// https://medium.com/@jeongdowon/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-backtracking-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-13492b18bfa1

// 문제 설명
// Given a collection of distinct integers, return all possible permutations.
// 입출력 예
// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

// 분석
// [1,2,3]
// 1, 23
// 12, 3
// 123
// 2, 13
// 21, 3
// 213
// 3, 12
// 31, 2
// 312

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // 1. 결과 담을 배열
  let result = [];
  // 0. 예외 조건
  if (nums.length <= 1) return [nums];

  // 재귀?
  // 재귀가 끝나는 조건 필요

  function recur(target, rest) {
    // 재귀가 끝나는 조건
    // 나머지의 길이가 0 일 경우
    if (rest.length === 0) result.push(target);

    // 재귀
    for (let i = 0; i < rest.length; i++) {
      //   let nextRest = [...rest].splice(i, 1); //
      let nextRest = [...rest];
      nextRest.splice(i, 1);
      recur(target.concat(rest[i]), nextRest);
    }
  }

  recur([], nums);

  return result;
};

// 에러 발생
// FATAL ERROR: Scavenger: semi-space copy Allocation failed - JavaScript heap out of memory
// https://bloodguy.tistory.com/entry/nodejs-FATAL-ERROR-CALLANDRETRYLAST-Allocation-failed-process-out-of-memory-%EC%97%90%EB%9F%AC-%EC%9B%90%EC%9D%B8-%ED%95%B4%EA%B2%B0%EB%B0%A9%EB%B2%95

// solution
var permute = function (nums) {
  if (!nums) return [];
  if (nums.length == 1) return [nums];
  let res = [];

  let check = (temp, rest) => {
    if (rest.length == 0) {
      res.push(temp);
      return;
    }
    for (let i = 0; i < rest.length; i++) {
      let newRest = rest.slice(0);
      newRest.splice(i, 1);
      check(temp.concat(rest[i]), newRest);
    }
  };

  check([], nums);

  return res;
};
