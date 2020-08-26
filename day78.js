// Odd Even Linked List - leetCode
// https://leetcode.com/problems/odd-even-linked-list/

// 문제 설명
// Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.
// You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

// 입출력 예
// Input: 1->2->3->4->5->NULL
// Output: 1->3->5->2->4->NULL

// 제한사항
// The relative order inside both the even and odd groups should remain as it was in the input.
// The first node is considered odd, the second node even and so on ...
// The length of the linked list is between [0, 10^4].

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 위치가 홀수인 노드를 그룹화, 짝수인 노드를 그룹화
// 빈 노드 두개를 만들어서 홀수노드, 짝수 노드를 그룹화하고
// 홀수 노드 끝에 짝수 노드 를 붙여주면? // inplace
// head 안에서 홀수 짝수 구분
var oddEvenList = function (head) {
  let newNode = new ListNode();
  console.log(newNode);

  // 0. 예외 조건
  if (head === null) return head;

  // 1. 필요한 파라미터들
  // 0dd, even, evenHead
  // 주어진 파라미터 노드를 odd의 head로 생각

  let odd = head;
  let even = head.next;
  let evenHead = even;

  // 2. 탐색
  // while
  // even이 null을 만나면, even.next 가 null이면.. 탈출

  while (odd.next && odd.next.next) {
    odd.next = even.next; // 1,2 => 1,3 꼬리 연결
    odd = odd.next; // 1 => 3 // 떨어트리기
    even.next = odd.next; // 2,3 => 2,4 // 꼬리 연결
    even = even.next; // 2 => 4; // 떨어트리기
  }
  odd.next = evenHead; // 이어주기
  return head;
};

//         odd.next = odd.next.next;
//         even.next = even.next.next;
//         odd = odd.next;
//         even = even.next;

// solution
// leetcode solution
// https://leetcode.com/problems/odd-even-linked-list/solution/
