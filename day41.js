// 카펫 - 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/42842
// 완전탐색

// 문제 설명
// Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

// https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/b1ebb809-f333-4df2-bc81-02682900dc2d/carpet.png

// Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.

// Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
// 노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
// 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.

// 입출력 예
// brown : 10 , yellow : 2 => return [4,3]
// brown : 8, yellow : 1 => return [3,3]
// brown : 24 , yellow : 24 => return [8,6]

// 분석
// 숫자인 파라미터 인풋, 배열 아웃풋
// 주어진 숫자들에 맞는 가로, 세로 길이
// 주어진 숫자로 가능한 경우의 수를 모두 구하고 조건에 맞는 답을 구한다
// 24 + 24 = 48,
// X * Y = 48 인 경우
// [48,1] , [24,2], [16,3], [12,4], [8,6]
// 사각형인 경우 ?
// [8,6]

// 아니면 가능한 사각형의 경우...?
// 1 + 8 => 3,3
// 2 + 10 => 3,4
// 3 + 12 => 3,5
// : 이 경우에는 brown 이 8~5000 , yellow 가 1~ 2,000,000 이하... 경우의 수가 너무 많다

// 다시!
// 1. 주어진 갯수에 맞는 가로,세로 길이를 담은 배열을 리턴해라
// 2. 카펫의 가로 길이는 세로 길이와 같거나 길다
// =>
// 3. 사각형인 경우를 어떻게 판별하지?
// => 전체 카펫의 크기 = 가로 x 세로
// => 빨간색 카펫 크기 = (가로-2) x (세로-2)

// 정리
// 1. 주어진 brown, yellow를 더한 값이 나올 수 있는 경우의 수를 모두 구한다
// 2. 그 중 (가로-2) x (세로-2) 조건을 만족하는 경우를 구한다
// ! 카펫의 수 = (가로-2) x (세로-2)

function solution(brown, yellow) {
  //   var answer = [];
  let box = [];
  // 1, 가능한 경우의 수 모두 구하기
  let allCellNumber = brown + yellow;
  //   console.log(middle);
  for (let i = allCellNumber; i > 0; i--) {
    for (let j = 0; j < allCellNumber; j++) {
      if (allCellNumber % i !== 0) continue;
      // 2. 조건을 만족하는 경우
      if (i * j === allCellNumber && i >= j && (i - 2) * (j - 2) === yellow) {
        return [i, j];
      }
    }
  }
}
// 시간 초과 ( 테스트 3,6,7~10 )
// 수정안
function solution(brown, yellow) {
  //   var answer = [];
  let box = [];
  // 1, 가능한 경우의 수 모두 구하기
  let allCellNumber = brown + yellow;
  //   console.log(middle);
  for (let i = allCellNumber; i > 0; i--) {
    // 2. 조건을 만족하는 경우
    let j = allCellNumber / i;
    if (i >= j && (i - 2) * (j - 2) === yellow) {
      return [i, j];
    }
  }
}

// 후기
// 주어진 예에서 규칙을 찾는 것이 첫번째였다
// 규칙을 찾았다면 모든 경우의 수에서 조건을 만족하는 경우를 구하는 코드를 작성하면 된다
// 시간을 초과했다
// yellow의 경우 2,000,000 까지 간다... 이중포문이 부담이 될 것 같다
// 이중 포문을 사용하지 않고 x와 y의 관계를 설정해주었더니 부담이 줄었고 테스트를 통과할 수 있었다

// solution1
function solution(brown, red) {
  const totalSpace = brown + red;

  for (let i = Math.floor(totalSpace / 2); i > 0; i--) {
    if (totalSpace % i !== 0) continue;

    const width = i;
    const height = totalSpace / i;

    if ((width - 2) * (height - 2) === red) {
      return [width, height];
    }
  }
}
// https://2ssue.github.io/algorithm/programmers-42842/
