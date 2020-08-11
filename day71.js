// 3Sum - leetCode
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/776/

// 문제 설명
// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// 입출력 예
// Given array nums = [-1, 0, 1, 2, -1, -4],
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// 제한사항
// The solution set must not contain duplicate triplets.

// 분석
// 주어진 배열에서 3개의 숫자를 골라서 더했을 때 0이 되는 경우를 담은 배열을 리턴하라
// solution set 은 중복되지 않는다..
// Set을 통해 풀어야 할 것 같다.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 오름차순 정렬
  // 3개의 포인터
  // 3개의 조건

  // 1. 오름차순 정렬

  let result = []; // 결과를 담을 배열
  nums.sort((a, b) => a - b);

  // 0.기본 제한조건
  if (nums.length < 3) return result; // 전체 길이가 3이 넘어야한다

  // 첫번째 포인터를 기준으로 반복
  for (let i = 0; i < nums.length - 2; i++) {
    // 0.기본 제한조건
    if (nums[i] > 0) break; // 정렬된 배열의 첫번째 값이 양수다?
    if (nums[nums.length - 1] < 0) break; // 정렬된 배열의 마지막 값이 음수다..?

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // 2. 3개의 포인터
    let left = i + 1;
    let right = nums.length - 1;

    // 3개의 조건
    // 일단 오른쪽 값이 커야한다
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      // 3-1, 합이 0보다 클 경우, 값을 줄여야한다
      if (sum > 0) right--;
      // 3-2, 합이 작을 경우, 키워야 한다.
      if (sum < 0) left++;
      // 3-3, 합이 0인 경우
      // else {
      if (sum === 0) {
        // sum = 0;
        result.push([nums[i], nums[left], nums[right]]);

        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;

        // 다른 경우도 확인해줘야한다
        // input = [-1,0,1,2,-1,-4] 일 경우,
        // [[-1,-1,2],[-1,0,1],[-1,0,1],[0,1,1]] 의 값이 나온다
        // 중복된 값을 제거해준다고 쳤을때, [0,1,1]의 값은 왜?
        // => 1은 1개밖에 없는데 서로 같은 값을 가리키고 있나?
      }
    }
  }

  return result;
};

// 시간 복잡도를 생각해보라

// solution reference
// https://medium.com/@hanjiang_54259/leetcode-15-3sum-in-javascript-ea39705e283d
// https://programmer.group/leetcode-series-15-3sum-javascript.html
