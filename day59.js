// Sort Characters By Frequency - leetCode
// https://leetcode.com/problems/sort-characters-by-frequency/

// 문제 설명
// Given a string, sort it in decreasing order based on the frequency of characters.

// 입출력 예
// Example 1:
// Input:
// "tree"
// Output:
// "eert"
// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:
// Input:
// "cccaaa"
// Output:
// "cccaaa"
// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:
// Input:
// "Aabb"
// Outpu:
// "bbAa"
// Explanation:
// "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

// 분석
// 주어진 문자에 대해서 빈도에 따라 내림차순으로 정렬하라
// 1.빈도수가 많은 친구가 먼저 정렬된다.
// 2.그리고 나머지는 내림차순으로 정렬된다
// 3.대문자와 소문자는 다른 것으로 간주된다.

// 빈 객체
// 반복문을 통해서 해당 키값이 존재하지 않을 경우 새로 만들어서 넣어주고 value 값 추가
// 있을 경우 해당 키값에 밸류 추가

// 빈 배열
// 밸류의 길이가 긴 것부터 밸류 푸쉬

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let obj1 = {};
  for (let i = 0; i < s.length; i++) {
    if (!obj1.hasOwnProperty(s[i])) {
      obj1[s[i]] = 1;
    } else obj1[s[i]]++;
  }
  //   console.log(obj1);
  let box = [];
  for (let key in obj1) {
    let inBox = [];
    inBox[0] = key;
    inBox[1] = obj1[key];
    box.push(inBox);
  }
  //   console.log(box);
  let sortArr = box.sort((a, b) => b[1] - a[1]);
  //   console.log(sortArr);

  let answer = "";
  for (let i = 0; i < sortArr.length; i++) {
    let [el, count] = sortArr[i];
    answer += el.repeat(count);
  }

  return answer;
};

// solution 1
var frequencySort = function (s) {
  let freq = new Map();

  for (const char of s) {
    if (!freq.has(char)) freq.set(char, 0);
    freq.set(char, freq.get(char) + 1);
  }

  freq = [...freq].sort((a, b) => a[1] - b[1]);
  let str = "";

  for (let i = freq.length - 1; i >= 0; i--) {
    let [char, count] = freq[i];
    str += char.repeat(count);
  }

  return str;
};
