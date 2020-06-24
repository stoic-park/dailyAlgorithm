// 숫자야구 - 프로그래머스 - 완전탐색
// https://programmers.co.kr/learn/courses/30/lessons/42841#qna

// 문제 설명
// 숫자 야구 게임이란 2명이 서로가 생각한 숫자를 맞추는 게임입니다. 게임해보기

// 각자 서로 다른 1~9까지 3자리 임의의 숫자를 정한 뒤 서로에게 3자리의 숫자를 불러서 결과를 확인합니다. 그리고 그 결과를 토대로 상대가 정한 숫자를 예상한 뒤 맞힙니다.

// * 숫자는 맞지만, 위치가 틀렸을 때는 볼
// * 숫자와 위치가 모두 맞을 때는 스트라이크
// * 숫자와 위치가 모두 틀렸을 때는 아웃
// 예를 들어, 아래의 경우가 있으면

// A : 123
// B : 1스트라이크 1볼.
// A : 356
// B : 1스트라이크 0볼.
// A : 327
// B : 2스트라이크 0볼.
// A : 489
// B : 0스트라이크 1볼.
// 이때 가능한 답은 324와 328 두 가지입니다.

// 질문한 세 자리의 수, 스트라이크의 수, 볼의 수를 담은 2차원 배열 baseball이 매개변수로 주어질 때, 가능한 답의 개수를 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 질문의 수는 1 이상 100 이하의 자연수입니다.
// baseball의 각 행은 [세 자리의 수, 스트라이크의 수, 볼의 수] 를 담고 있습니다.

// 입출력 예
// [[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]] => return 2

// [123, 1, 1] 에 맞는 배열을 추려냄
// : if strike 1 => [1xx] => if ball 2 => 1x2 => if ball 3 => 13x
// : if strike 2 => [x2x] => if ball 1 => x21 => if ball 3 => 32x
// : [xx3]

// [327, 2, 0]
// : [32x]
// : [3x7]
// : [x27]

// 분석
// 숫자배열로 이루어진 배열 인풋, 숫자 아웃풋
// ! 중복되지 않는 숫자로 이루어진 세자리수
// ! 0은 제외
// 세자리 숫자의 경우의 수를 모두 구한 후
// 조건에 맞는 수를 추려가는 식으로 진행
// 1. 스트라이크 조건에 맞는 배열을 추려내는 함수
// 2. 볼 조건에 맞는 배열을 추려내는 함수

// 1. 모든 경우의 수
// 2. 주어진 배열의 길이만큼 반복
// 3. 첫번째에 해당하는 숫자 조합을 푸쉬 ...
// 4. 0이 들어가거나, 중복된 숫자가 있는 경우 제거 (sort, filter)

function solution(baseball) {
  let allNumbers = [];
  let isRightNumbers = [];
  // 1. 모든 경우의 수
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      for (let k = 1; k < 10; k++) {
        if (k !== i && k !== j && i !== j) {
          allNumbers.push(i * 100 + j * 10 + k);
        }
      }
    }
  }
  // console.log(allNumbers)
  // 2. 스트라이크
  function strike(current, target, n) {
    let temp = 0;
    for (let i = 0; i < 3; i++) {
      if (String(current[i]) === String(target[i])) {
        temp++;
      }
    }
    if (temp === n) return true;
  }

  // 3. 볼
  function ball(current, target, num) {
    let temp = 0;
    for (let i = 0; i < 3; i++) {
      if (String(current).indexOf(String(target[i])) >= 0) {
        temp++;
      }
    }

    if (temp === num) return true;
  }

  // 4. 해당되는 조합
  for (let i = 0; i < allNumbers.length; i++) {
    for (let j = 0; j < baseball.length; j++) {
      let isStrike = strike(allNumbers[i], baseball[j][0], baseball[j][1]);
      let isBall = ball(allNumbers[i], baseball[j][0], baseball[j][2]);
      // console.log(isStrike) // undefined
      // console.log(isBall)
      if (isStrike && isBall) {
        isRightNumbers.push(allNumbers[i]);
      }
    }
  }
  console.log(isRightNumbers); // []

  return isRightNumbers.length;
}

// 후기
// 숫자야구 참 오랜만
// 숫자야구를 완전탐색으로 접하니 굉장히 어렵게 느껴진다
// 접근하는 방법은 나쁘지 않았으나
// 구현하는 과정에서 미흡한 점이 많았다
// 완전탐색에 대해서 쉬운 문제부터 익혀보자

// solution 1
// https://raina94.github.io/2019/10-02-algorithm-1/
function solution(baseball) {
  var answer = [],
    numbers = [];

  function strike(cur, target, num) {
    //스트라이크인지 판별
    let temp = 0;
    for (let i = 0; i < 3; i++) {
      if (String(cur)[i] === String(target)[i]) {
        temp++;
      }
    }

    return temp === num;
  }
  function ball(cur, target, num) {
    //볼인지 판별
    let temp = 0;
    for (let i = 0; i < 3; i++) {
      if (String(cur).indexOf(String(target)[i]) >= 0) {
        temp++;
      }
    }

    return temp === num;
  }

  //답이 될 수 있는 모든 숫자 리스트 생성
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      for (let z = 1; z < 10; z++) {
        if (z !== i && z !== j && i !== j) {
          numbers.push(i * 100 + j * 10 + z);
        }
      }
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    let flag = true;
    for (let j = 0; j < baseball.length && flag; j++) {
      let s = strike(numbers[i], baseball[j][0], baseball[j][1]);
      let b = ball(numbers[i], baseball[j][0], baseball[j][1] + baseball[j][2]);
      //일치하는 숫자를 찾는 것이므로 스트라이크 + 볼의 갯수만큼 찾도록

      if (!s || !b) {
        flag = false;
      }
    }
    if (flag) {
      answer.push(numbers[i]);
    }
  }

  return answer.length;
}

// solution 2
function solution(baseball) {
  var answer = 0;

  // 서로 다른 3개의 수 조합.
  for (let i = 123; i <= 987; i++) {
    let [x, y, z] = (i + "").split("");

    // 각 수의 범위는 1~9
    if (x === "0" || y === "0" || z === "0") continue;
    if (x === y || x === z || y === z) continue;

    for (let j = 0; j < baseball.length; j++) {
      let strike = 0;
      let ball = 0;

      const [query, query_s, query_b] = baseball[j];
      const [query_x, query_y, query_z] = (query + "").split("");
      if (query_x === "0" || query_y === "0" || query_z === "0") break;
      if (query_x === query_y || query_x === query_y || query_y === query_z)
        break;

      if (x === query_x) strike++;
      if (y === query_y) strike++;
      if (z === query_z) strike++;
      if (query_s != strike) break;

      if (x === query_y || x === query_z) ball++;
      if (y === query_x || y === query_z) ball++;
      if (z === query_x || z === query_y) ball++;
      if (query_b != ball) break;

      if (j === baseball.length - 1) answer++;
    }
  }

  return answer;
}
