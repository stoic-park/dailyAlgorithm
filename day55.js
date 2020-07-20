// Jump Game - leetCode
// https://leetcode.com/problems/jump-game/

// 문제 설명
// Given an array of non-negative integers, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Determine if you are able to reach the last index.

// 입출력 예
// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// 제한사항
// 1 <= nums.length <= 3 * 10^4
// 0 <= nums[i][j] <= 10^5

// 분석
// 1. 처음에는 배열의 첫번째 인덱스에 배치된다.
// 2. 배열의 각 요소는 해당 위치에서 최대 점프 길이

// 현재 위치를 표현하는 인덱스 값 = 0;
// 목표로 하는 인덱스 값 = nums.length - 1;
// 무조건 0번째의 요소만큼 이동이 가능하다

/**
 * @param {number[]} nums
 * @return {boolean}
 */
let canJump = function (nums) {
  let targetIndex = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    console.log(i);
    if (i + nums[i] >= targetIndex) {
      // 크거나 같을 경우
      targetIndex = i;
    }
  }

  if (targetIndex === 0) return true;
  else return false;
};

// greedy란?
// 미래를 생각하지 않고 현재 단계에서 가장 최선의 선택을 하는 기법
// https://www.zerocho.com/category/Algorithm/post/584ba5c9580277001862f188
// : 그리디 알고리즘은 이 해결책이 최선이라는 것을 보장하지 않는다!

// solution1
let canJump = function (nums) {
  let lastValidIndex = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= lastValidIndex) {
      lastValidIndex = i;
    }
  }

  return lastValidIndex === 0;
};

// solution2
var canJump = function (nums) {
  if (nums.length < 2) {
    return true;
  }
  for (let i = 0; i < nums.length - 1; i++) {
    if (i + nums[i] >= nums.length - 1) {
      return true;
    }
    if (nums[i] === 0) {
      return false;
    }
    if (i + nums[i] > i + 1 + nums[i + 1]) {
      nums[i + 1] = nums[i] - 1;
    }
  }
};

// solution3
function canJump(nums) {
  if (!nums || !nums.length) return false;
  return (
    nums.reduce(
      (acc, num, i) => (acc >= i ? Math.max(acc, i + num) : acc),
      0
    ) >=
    nums.length - 1
  );
}
