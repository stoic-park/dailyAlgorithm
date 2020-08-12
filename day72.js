// Set Matrix Zeroes
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/777/

// 문제설명
// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

// 입출력 예
// Input:
// [
//   [1,1,1],
//   [1,0,1],
//   [1,1,1]
// ]
// Output:
// [
//   [1,0,1],
//   [0,0,0],
//   [1,0,1]
// ]

// 분석
// 행과 열의 길이를 파악한 후
// 단순 반복..?
// Matrix[0][0] === 0 일 경우
// Matrix[0]번째 행은 모두 0이 되고
// Matrix[i][0] 도 모두 0이 되는데
// 시간 복잡도를 생각해야 한다?

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let row = matrix.length;
  let col = matrix[0].length;

  let rowRecord = [];
  let colRecord = [];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === 0) {
        if (!rowRecord.includes(i)) rowRecord.push(i);
        if (!colRecord.includes(j)) colRecord.push(j);
      }
    }
  }
  //   console.log(rowRecord);
  //   console.log(colRecord);
  for (let r of rowRecord) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[r][j] = 0;
    }
  }

  for (let c of colRecord) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][c] = 0;
    }
  }
};

// solution 1

var setZeroes = function (matrix) {
  const zeroRow = new Set();
  const zeroCol = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        zeroRow.add(i);
        zeroCol.add(j);
      }
    }
  }

  for (let r of zeroRow) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[r][j] = 0;
    }
  }

  for (let c of zeroCol) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][c] = 0;
    }
  }
};
