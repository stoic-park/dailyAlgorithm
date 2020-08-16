// longest palindrome - leetcode
// https://leetcode.com/problems/longest-palindromic-substring/

// 볼 때마다 헷갈리는 문제..

// 문제 설명
// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000

//

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = "";

  // 1. 팰린드롬 여부를 확인하는 함수

  function isPalindrome(str, start, end) {
    // 조건을 만족하는 경우에만
    while (start >= 0 && end < str.length && str[start] === str[end]) {
      start--;
      end++;
    }

    return str.slice(start + 1, end);
  }

  // 2. 주어진 문자열에 대해 선형적으로 탐색 시작

  for (let i = 0; i < s.length; i++) {
    let target = isPalindrome(s, i, i);
    result = target.length > result.length ? target : result;
  }

  return result;
};

// solution
var longestPalindrome = function (s) {
  let longest = "";
  const findLongestPalindrome = (str, i, j) => {
    while (i >= 0 && j < str.length && str[i] === str[j]) {
      i -= 1;
      j += 1;
    }
    // slice the qualified substring from the second last iteration
    return str.slice(i + 1, j);
  };
  for (let i = 0; i < s.length; i++) {
    // palindrome can center around 1 or 2 letters
    const current1 = findLongestPalindrome(s, i, i);
    const current2 = findLongestPalindrome(s, i, i + 1);
    const longerPalindrome =
      current1.length > current2.length ? current1 : current2;
    if (longerPalindrome.length > longest.length) {
      longest = longerPalindrome;
    }
  }
  return longest;
};

// solution 2 - DP
var longestPalindrome = function (s) {
  const n = s.length;
  const dp = [];
  let longest = "";

  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n).fill(false);
  }

  for (let len = 1; len <= n; len++) {
    for (let row = 0; row < n - len + 1; row++) {
      const col = row + len - 1;
      if (s.charAt(row) == s.charAt(col)) {
        if (len <= 2 || dp[row + 1][col - 1] == true) {
          dp[row][col] = true;
          const substr = s.substring(row, col + 1);
          if (substr.length > longest.length) longest = substr;
        }
      }
    }
  }

  return longest;
};

// 후기
// 팰린드롬 왜이리 어렵냐..?
