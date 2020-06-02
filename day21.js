// 최솟값 만들기 - 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/12941

// 문제 설명
// 길이가 같은 배열 A, B 두개가 있습니다. 각 배열은 자연수로 이루어져 있습니다.
// 배열 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱합니다. 이러한 과정을 배열의 길이만큼 반복하며, 두 수를 곱한 값을 누적하여 더합니다. 이때 최종적으로 누적된 값이 최소가 되도록 만드는 것이 목표입니다. (단, 각 배열에서 k번째 숫자를 뽑았다면 다음에 k번째 숫자는 다시 뽑을 수 없습니다.)

// 예를 들어 A = [1, 4, 2] , B = [5, 4, 4] 라면

// A에서 첫번째 숫자인 1, B에서 두번째 숫자인 5를 뽑아 곱하여 더합니다. (누적된 값 : 0 + 5(1x5) = 5)
// A에서 두번째 숫자인 4, B에서 세번째 숫자인 4를 뽑아 곱하여 더합니다. (누적된 값 : 5 + 16(4x4) = 21)
// A에서 세번째 숫자인 2, B에서 첫번째 숫자인 4를 뽑아 곱하여 더합니다. (누적된 값 : 21 + 8(2x4) = 29)
// 즉, 이 경우가 최소가 되므로 29를 return 합니다.

// 배열 A, B가 주어질 때 최종적으로 누적된 최솟값을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 배열 A, B의 크기 : 1,000 이하의 자연수
// 배열 A, B의 원소의 크기 : 1,000 이하의 자연수

// 분석
// 문제는 최솟값을 찾는 방법인데
// 모든 경우의 수를 통해서 가장 작은 값을 뛰우는 방법으로 가야할 듯
// ! 가장 작은 값과 가장 큰값이 곱해지면 되는 거 아니냐?

// 수도코드 작성
// 1. A에서 가장 작은 값, B에서 가장 큰 값
// 2. 반복문(배열의 길이만큼)
// 3. 작은 값과 큰 값을 곱하고 answer에 더하기
// 4. 배열에서 해당하는 인덱스 값 찾기
// 5. 해당 배열에서 지우기
// 6. 반복 후 리턴

// ? 풀이 1
function solution(A, B) {
  var answer = 0;
  let tlength = A.length;
  for (let i = 0; i < tlength; i++) {
    let minA = Math.min.apply(null, A);
    let maxB = Math.max.apply(null, B);
    answer += minA * maxB;
    // console.log(answer);
    let indexA = A.indexOf(minA);
    let indexB = B.indexOf(maxB);
    A.splice(indexA, 1);
    B.splice(indexB, 1);
  }

  return answer;
}

// ! 기본테스트를 통과하지만 효율성 테스트를 통과하지 못했다
// ! Math.min / Math.max 함수가 시간복잡도가 높은가?

// ? 풀이 2

function solution(A, B) {
  var answer = 0;
  let tlength = A.length;
  let arrA = A.sort(function (a, b) {
    return a - b;
  });
  let arrB = B.sort(function (a, b) {
    return b - a;
  });
  //   console.log(arrA, "A", arrB, "B");
  for (let i = 0; i < tlength; i++) {
    let sum = 0;
    sum = arrA[0] * arrB[0];
    answer += sum;
    arrA.shift();
    arrB.shift();
  }
  return answer;
}

// 후기
// 질문에서 sort를 썼다는 말을 힌트로
// 오름차순, 내림차순 정렬을 통해서 Math함수를 사용하지 않고 풀수 있었다
// 내가 할 수 있는 가장 직관적인 풀이라고 할 수 있겠다
// level3이라는 말을 듣고
// 오히려 어려울테니 부담 없이 풀 수 있었다
// 수학적인 힌트를 얻고나니 쉽게 해결할 수 있는 문제였다
// 조금 더 깔끔한 풀이를 할 수 있을 것 같은 생각이 들었고
//  reduce를 통한 풀이를 찾아봤다

// solution
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}
// arr.reduce(callback[, initialValue])
// callback : (total, val, idx) => total + val * B[idx]
// currentIndex : 0?
