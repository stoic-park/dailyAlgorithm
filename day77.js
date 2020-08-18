// Letter Combinations of a Phone Number - leetCode
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/109/backtracking/793/
// backTracking

// 문제 설명
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
// ![](https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/200px-Telephone-keypad2.svg.png)

// 입출력 예
// Example:
// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

// 제한사항
// Although the above answer is in lexicographical order, your answer could be in any order you want.

// 분석
// 2~9자리의 숫자로 이루어진 스트링 파라미터가 주어진다.
// 각 숫자에 해당하는 문자를 객체로 나타내서 해당 문자를 가져올 수 있도록 한다.
// 나타낼 수 있는 문자만을 담은 배열로 바꿔서 반복에 용이한 값을 만든다
// 문자의 길이가 길다면..?
// 234일 경우?
// 2 34
// 23 4
// 234

// 23
// [2,3] // 배열로 바꿔주는 과정
// [[a,b,c], [d,e,f]] // 해당 문자열을 담은 배열로 바꿔주는 과정
// ["ad", "ae", "af" ... ] // 경우의 수를 구하는 과정

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // 결과를 담을 배열
  let result = [];
  // 숫자에 해당하는 문자열을 담은 객체
  let box = {
    2: [a, b, c],
    3: [d, e, f],
    4: [g, h, i],
    5: [j, k, i],
    6: [m, n, o],
    7: [p, q, r, s],
    8: [t, u, v],
    9: [w, x, y, z],
  };

  //
};

// solution1 - backtracking (video)
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/discuss/764601/JavasScript-Solution-w-Video-Explanation

// solution2 - backtracking
var letterCombinations = function (digits) {
  if (!digits.length) return [];

  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const result = [];

  function permute(str, idx) {
    if (idx === digits.length) {
      result.push(str);
      return;
    }

    for (let alpha of map[digits[idx]]) {
      permute(str + alpha, idx + 1);
    }
  }
  permute("", 0);
  return result;
};
