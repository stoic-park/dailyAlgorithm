// Symmetric Tree - LeetCode
// https://leetcode.com/problems/symmetric-tree/

// 문제 설명
// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// 입출력 예
// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3
// Follow up: Solve it both recursively and iteratively.

// 분석
// 숫자 배열 인풋 불리언 값 리턴
// 각 층별로 데깔꼬마니 인지 확인하고 넘어간다
// 단계별 값에 대해서 조건을 만족하는 지 확인하고
// 만족하는 경우 다음 단계를 재귀로 넘겨줘야 한다
// : 재귀를 돌면서 자식들 왼쪽 오른쪽을 비교하려면 2개의 인자를 받아야 하는데..?
// : 새로운 함수를 맹그러야 한다

function compare(left, right) {
  if (left === null && right === null) return true;
  if (left === null || right === null) return false;
  if (left.val !== right.val) return false;
  return compare(left.left, right.right) && compare(left.right, right.left);
}

// 수도코드 작성
// 1. 둘 다 없을 경우(null) true
// 2. 하나만 null일 경우 false
// 3. val 값이 조건을 만족하지 않을 경우 false
// 4. 조건을 만족할 경우 child 비교

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  //   console.log(root.left, root.right);
  //   console.log(root.val)
  //   console.log(root.left.val);
  //   console.log(root.right.val);
  //   console.log(root.left.left)
  //   0. tree 자체가 null일 경우
  if (!root) return true;

  // 1. left, right 비교할 내부 함수 생성
  function compare(left, right) {
    // 1-1. left, right가 둘다 null 일 경우
    if (left === null && right === null) return true;
    // 1-2. 하나만 null 일 경우
    if (left === null || right === null) return false;
    // 1-3. val 값이 다를 경우?
    if (left.val !== right.val) return false;
    // 1-4. vall 값이 같을 경우 자식들 비교
    return compare(left.left, right.right) && compare(left.right, right.left);
  }

  return compare(root.left, root.right);
};

// 후기
// 깊이우선탐색을 학습중이다
// day50 과 비슷한 형식으로 풀어보려 했고
// 다른 점은 함수의 파라미터를 어떻게 해줄 것인가였다
// left와 right를 비교하는 내부함수를 새로 만들어줬다
// 뭔가 감이 잡힐 듯 하면서도..
// 한번 더 같은 유형의 문제를 풀어보는 것이 좋을 것 같다!
