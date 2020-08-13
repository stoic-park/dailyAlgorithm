// Longest Substring Without Repeating Characters - leetCode
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/779/
// string

// 문제 설명
// Given a string, find the length of the longest substring without repeating characters.

// 입출력 예
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// 분석
// 문자열을 인풋으로 받고 숫자를 리턴한다
// 연속적으로 반복되지 않은 문자들의 길이를 리턴하라
// 1. 선형적인 탐색
// 2. 문자의 중복 여부를 파악
// 3. 연속되는 길이를 빈 배열에 담고
// 4. 가장 긴 길이를 리턴하자

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 0. 기본적으로
  if (s.length <= 1) return s.length;

  // 연속된 문자의 길이를 담을 배열
  let resultBox = [];

  let isRepeat = [];

  for (let j = 0; j < s.length; j++) {
    for (let i = j; i < s.length; i++) {
      // 존재하지 않는 경우
      if (!isRepeat.includes(s[i])) isRepeat.push(s[i]);
      // 존재하는 경우 배열 비우고 이번 반복 마치기
      else {
        resultBox.push(isRepeat.length);
        isRepeat = [];
        break;
      }
    }
  }

  console.log(resultBox); // [3,3,3,3,2,2,1,1] 이 나와야 되는데..?
  resultBox.sort((a, b) => b - a);
  return resultBox[0];
};
