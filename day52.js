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
 * @return {TreeNode}
 */
var convertBST = function (root) {
  // binary search tree...!
  // 오른쪽 자식의 값이 크다
  // 오른쪽 자식의 값부터 sum에 더해준다
  // 재귀?

  let sum = 0;

  // 0 => 0+13 => 13 + 5 => 18 + 2

  // sum += root.right.val // sum = 13
  // root.right.val = sum // root.right = 13
  // sum += root.val // 13 + 5
  // root.val = sum // root.val = 18
  // sum += root.left.val // 18+2
  // root.left.val = sum

  // 1.sum에 현재의 값을 더해주고현재의 값을 sum으로 바꿔주는 과정이 반복
  // 2.먼저 오른쪽
  // 3.마지막 왼쪽
  function search(root) {
    // : runtime error fix!
    if (!root) {
      return;
    }
    // 2. 먼저 오른쪽 자식부터
    search(root.right);
    // 1. sum += root.val , root.val = sum
    sum += root.val;
    root.val = sum;
    // 3. 마지막 왼쪽
    search(root.left);
    return root;
  }
  search(root);
  return root;
};

// 런타임 에러

// 후기
// 처음에 binary Search tree 임을 생각하지 못해서
// 문제 자체를 이해하지 못했다
// 더해지는 순서를 이해했는데
// 그것을 tree의 형식에 맞게 트리의 구조가 커져도 계산 가능한 함수를 만들어야 했다
// sum에 현재값을 더해주고 더한 값을 그 노드의 값으로 바꾸는 과정을 반복 해야 한다
// 먼저 right, 그리고 나중에 left의 값을 처리해줘야 한다
// tree 문제는 문제를 정말 잘 이해해야 한다
// 트리 구조 문제를 더 풀어보고 정리해야겠다
