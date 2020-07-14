// Range Sum of BST - leetcode
// https://leetcode.com/problems/range-sum-of-bst/

// 문제 설명
// Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).
// The binary search tree is guaranteed to have unique values.

// 예시
// Example 1:
// Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
// Output: 32
// Example 2:
// Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
// Output: 23

// 제한사항
// The number of nodes in the tree is at most 10000.
// The final answer is guaranteed to be less than 2^31.

// 분석
// 숫자배열로 이루어진 node, 숫자 파라미터 인풋 숫자 아웃풋
// binary search tree
// 특정 숫자 범위를 만족하는 값을 더해줘서 총 합을 구하는 문제
// 배열이기때문에 배열을 완전 탐색해서 해결해도 되는게 아닐까?
// 트리구조이기 때문에 bst 방식으로 해결하자

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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
  // console.log(root)
  // console.log(root.left)
  let sum = 0;

  function search(root) {
    if (!root) return;

    search(root.right);
    if (root.val >= L && root.val <= R) {
      sum += root.val;
    }
    search(root.left);
  }

  search(root);
  return sum;
};

// 후기
// 주어진 배열을 완전탐색을 통해서 풀어도 되지 않을까 했지만
// 이진탐색트리로 풀게끔 주어진 문제이기 때문에 그렇게 풀었다
// 어렵게 느껴지던 이진트리가 형식을 알고 나니까 간단하게 풀렸다
// 다만, runtime에러를 해결하기 위해 `!root 일 경우 return` 해주는 과정이 조금 이해가 가지 않았지만
// 트리가 커질 경우 존재하지 않는 root에 대해서 처리해주는 것 만으로도 런타임을 줄일 수 있을꺼라고 생각하니
// 너무 당연한 코드였다
// 그것을 제외하면 재미있게 해결 했다.
