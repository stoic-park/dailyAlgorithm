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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // 깊이별로 배열에 담아서 리턴
  // 왼쪽 오른쪽 별로 깊이별로 탐색..?
  // [] => [[3]]
  // [[3]] => [[3],[9]] => [[3],[9,10]]

  // console.log(root)
  let result = [];

  function recursion(node, depth) {
    // 예외 조건
    if (!node) return [];

    // 비었을 경우
    if (!result[depth]) result[depth] = [node.val];
    // [[3], [9]]
    // 존재할 경우 푸쉬
    else result[depth].push(node.val); // [[3],[9,10]]

    // 왼쪽 오른쪽
    recursion(node.left, depth + 1);
    recursion(node.right, depth + 1);
  }
  // 0부터 시작
  recursion(root, 0);
  return result;
};

// 후기
// 왼쪽 => 오른쪽 순으로 함수를 실행했을 경우 순서가 바뀌는 경우는 없을까?

// solution
// queue를 이용한 풀이
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/628/discuss/472672/Javascript-Detailed-line-by-line-solution
