// Same Tree - leetCode
// https://leetcode.com/problems/same-tree/

// 문제 설명
// Given two binary trees, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

// 입출력 예
// Example 1:
// Input:     1         1
//           / \       / \
//          2   3     2   3

//         [1,2,3],   [1,2,3]
// Output: true

// Example 2:
// Input:     1         1
//           /           \
//          2             2

//         [1,2],     [1,null,2]
// Output: false

// Example 3:
// Input:     1         1
//           / \       / \
//          2   1     1   2

//         [1,2,1],   [1,1,2]
// Output: false

// 분석
// Dfs 깊이 우선 탐색
// 부모의 값이 조건을 만족할 때
// 자식의 값을 재귀를 통해 탐색

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  console.log(p, "p"); // TreeNode {}
  // 1. 둘 다 없을 경우
  if (p === null && q === null) return true;
  // 1-1. 하나만 null일 경우
  if (p === null || q === null) return false;

  // 2. val 값이 다를 경우
  if (p.val !== q.val) return false;

  // 3. vall 값이 같을 경우 child 비교 (재귀)
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
