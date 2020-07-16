// Assign Cookies - leeCode
// https://leetcode.com/problems/assign-cookies/

// 문제 설명
// Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie. Each child i has a greed factor gi, which is the minimum size of a cookie that the child will be content with; and each cookie j has a size sj. If sj >= gi, we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

// 제한 사항
// You may assume the greed factor is always positive.
// You cannot assign more than one cookie to one child.

// 입출력 예
// Example 1:
// Input: [1,2,3], [1,1]

// Output: 1

// Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3.
// And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
// You need to output 1.
// Example 2:
// Input: [1,2], [1,2,3]

// Output: 2

// Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2.
// You have 3 cookies and their sizes are big enough to gratify all of the children,
// You need to output 2.

// 분석
// 숫자 배열 인풋, 숫자 아웃풋
// 원하는 쿠키의 사이즈가 담긴 자식들 배열과, 쿠키의 사이즈가 담긴 배열
// 만족시킬수 있는 자식의 숫자를 리턴
// 아이에게는 하나의 쿠키만 줄 수 있다

// 쿠키를 주고 나면 쿠키는 줄어든다

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  s.sort((a, b) => a - b);
  //   console.log(cookies);
  g.sort((a, b) => a - b);
  //   console.log(childs);
  // 반복대상의 길이가 줄어들게 할 것이기 때문에 길이를 따로 상수 처리
  // for문으로는 좀..?
  let count = 0;
  let cookieLeng = s.length - 1;
  let childLeng = g.length - 1;

  //   for (let i = 0; i < cookieLeng; i++) {
  //     for (let j = 0; j < childLeng; j++) {
  //       if (childs[j] <= cookies[i]) {
  //         count++;
  //         cookies.splice(0, 1);
  //         i--;
  //         cookieLeng--;
  //         childs.splice(0, 1);
  //         // console.log(childs)
  //         // j--;
  //         childLeng--;
  //       }
  //     }
  //   }

  // 반복대상이 줄어드는 상황에서 for문은 문제가 있다
  while (childLeng >= 0) {
    if (s[cookieLeng] >= g[childLeng]) {
      count++;
      cookieLeng--;
      childLeng--;
    } else cookieLeng--;
  }
  return count;
};

// 후기

// solution!
const findContentChildren = (kids, cookies) => {
  kids.sort((a, b) => a - b);
  cookies.sort((a, b) => a - b);
  let count = 0,
    k = kids.length - 1,
    c = cookies.length - 1;
  while (k >= 0) {
    let kid = kids[k],
      cookie = cookies[c];
    if (cookie >= kid) {
      count++;
      k--;
      c--;
    } else k--;
  }
  return count;
};
