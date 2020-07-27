// Group Anagrams - LeetCode
// https://leetcode.com/problems/group-anagrams/

// 문제 설명
// Given an array of strings, group anagrams together.

// 입출력 예
// Example:
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

// 제한사항
// All inputs will be in lowercase.
// The order of your output does not matter.

// 분석
// same spelling
// 요소별로 sort해서 같은 것끼리?
// Map을 쓰면 될텐데 일단 원래 풀던데로 풀어볼까

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // console.log(strs)

  // let sortStrs = strs.sort()
  // console.log(sortStrs)
  // string 자체를 sort하는건 안되는구만
  // 반복 => 요소 하나에 대해서 배열로 바꿔서 sort한 다음 join
  // let sortStr = strs[1].split("").sort().join("") // eat
  // console.log(sortStr)

  let map = new Map();

  let sortStrs = strs.sort();
  console.log(sortStrs);

  for (let i = 0; i < sortStrs.length; i++) {
    let sortEl = sortStrs[i].split("").sort().join("");
    // console.log(sortEl)
    // 키 값이 없을 경우 배열로 값을 담는다
    if (!map.has(sortEl)) map.set(sortEl, [sortStrs[i]]);
    else {
      // 같은 키값을 가진 값들(배열) 받아온 뒤 푸쉬
      let arr = map.get(sortEl);
      arr.push(sortStrs[i]);
    }
  }

  return [...map.values()];
};

// 후기
// Map을 이용해서 풀었다
// 문제 자체가 단순해서 반복문이나 배열을 통해서도 풀 수 있겠지만
// 중복여부를 확인하고 하는 과정이 있기 때문에 Map 객체를 활용하면 간단한 것 같다.
