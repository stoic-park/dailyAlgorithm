// Clone Graph -leetCode
// https://leetcode.com/problems/clone-graph/

// 문제 설명
// Given a reference of a node in a connected undirected graph.
// Return a deep copy (clone) of the graph.
// Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.
// class Node {
//     public int val;
//     public List<Node> neighbors;
// }
// Test case format:
// For simplicity sake, each node's value is the same as the node's index (1-indexed).
// For example, the first node with val = 1, the second node with val = 2, and so on.
// The graph is represented in the test case using an adjacency list.
// Adjacency list is a collection of unordered lists used to represent a finite graph.
// Each list describes the set of neighbors of a node in the graph.
// The given node will always be the first node with val = 1.
// You must return the copy of the given node as a reference to the cloned graph.

// 입출력 예
// Example 1:
// ![](https://assets.leetcode.com/uploads/2019/11/04/133_clone_graph_question.png)
// Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
// Output: [[2,4],[1,3],[2,4],[1,3]]
// Explanation: There are 4 nodes in the graph.
// 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
// 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
// Example 2:
// Input: adjList = [[]]
// Output: [[]]
// Explanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.

// 분석
// 영어로 된 설명이 길고 복잡해 보이나
// 그래프 문제고
// 순서대로 인접한 밸류 값을 담은 배열의 집합을 리턴하라는 문제다
// 1.예 2,3,4 와 같은 예외 상황에 대한 처리를 해주고
// 2.노드 순서대로 인접한 이웃의 값을 담아준다

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  // console.log(node);
  // {
  //     val: 1,
  //     neighbors: [ { val: 2, neighbors: [Array] }, { val: 4, neighbors: [Array] } ]
  //   }
  // 1. val:1 이므로 neighbors에 담긴 [2,4]를 푸쉬한다
  // let box = [ node.neighbors[0].val, node.neighbors[1].val ]
  // answer.push(box)
  // 2. val:1을 넣었으므로 cloneGraph(node.neighbors[0].neighbors) 를 돌려야하는데
  // 넘어가는 조건을 어떻게 할 것이냐?

  // 풀이 1.
  // console.log(node.neighbors[0].val)
  //   if (node === [[]] || node === []) return node;
  //   let answer = [];
  //   let box = [];
  //   if (node) {
  //     // let box = [ node.neighbors[0].val, node.neighbors[1].val ];
  //     box.push(node.neighbors[0].val);
  //     box.push(node.neighbors[1].val);
  //     console.log(box);
  //     answer.push(box);
  //   }
  //   cloneGraph(node.neighbors[0].neighbors);
  //   return answer;

  // 풀이 2 객체로 풀어야겠따

  // 0. 기본 예외 조건
  if (!node) return node;
  //   if (node === [[]] || node === []) return node;
  let answer = {};

  // 1. 재귀 함수 생성
  function recur(node) {
    // if (answer[node.val]) return answer[node.val];
    // val:1 에 해당하는 키에 값이 없을 경우
    if (!node) return node;

    if (!answer[node.val]) {
      // val:1, neighbors : [] 인 새로운 노드를 값으로 넣어준다
      answer[node.val] = new Node(node.val);
      // answer = { '1': { val: 1, neighbors: [] } }
      // node.neighbors = [ { val: 2, neighbors: [Array] }, { val: 4, neighbors: [Array] } ]
      //   answer[node.val].neighbors = node.neighbors.map(recur);
      answer[node.val].neighbors[0] = recur(node.neighbors[0]);
      answer[node.val].neighbors[1] = recur(node.neighbors[1]);
    }
    return answer[node.val];
  }
  return recur(node);
};

// solution 1;
var cloneGraph = function (node, hash = {}) {
  if (!node) return node;
  if (!hash[node.val]) {
    hash[node.val] = new Node(node.val);
    hash[node.val].neighbors = node.neighbors.map((n) => cloneGraph(n, hash));
  }
  return hash[node.val];
};

// solution 2
var cloneGraph = function (node) {
  if (node == null) return null;
  let nodesHash = {};
  function copy(node) {
    if (nodesHash[node.val]) return nodesHash[node.val];
    nodesHash[node.val] = new Node(node.val);
    nodesHash[node.val].neighbors = node.neighbors.map(copy);
    return nodesHash[node.val];
  }
  return copy(node);
};

// solution 3;
// Map 객체를 이용한 풀이가 대부분이다
// 이걸 알아야 할 듯?
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map
// Map 객체는 요소의 삽입 순서대로 원소를 순회합니다. for...of 반복문은 각 순회에서 [key, value]로 이루어진 배열을 반환합니다.
// 순회를 함에 있어서 모든 키를 알 필요가 없다;
// Map() : 생성자
// Map.prototype.has(key) : Map 객체 안에 주어진 key/value pair가 있는지 검사하고 Boolean 값을 반환한다.
// Map.prototype.set(key, value) : Map 객체에 주어진 키(Key)에 값(Value)를 집어넣고, Map 객체를 반환한다.
// Map.prototype.get(key) : 주어진 키(Key)에 해당되는 값(value)을 반환하고, 만약 없으면 undefined를 반환한다.

var cloneGraph = function (node) {
  const map = new Map();

  const dfs = (node) => {
    if (!node) return null;
    let newNode = new Node(node.val);
    // console.log(newNode);
    // { val: 1, neighbors: [] }
    if (map.has(node)) newNode = node;
    map.set(node, newNode);
    // Map(1) {
    //   { val: 1, neighbors: [ [Object], [Object] ] } => { val: 1, neighbors: [] }
    // }

    for (const next of node.neighbors) {
      newNode.neighbors.push(map.get(next) || dfs(next));
    }
    return newNode;
  };

  return dfs(node);
};

// 후기
// 잘 모르겠다
// 요 며칠 사이 풀었던 그래프 문제의 난이도가 오늘 문제를 제외하고는 easy이므로
// 이 문제를 제외하고 그래프 푸는 방법을 하나로 정리해야겠다
