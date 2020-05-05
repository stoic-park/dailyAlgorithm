// 나누어 떨어지는 숫자 배열 - 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/12910

// 제한시간 30분

// 문제 설명
// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 제한사항
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.

// 문제 분석
// 1. 나누어 떨어지는 값을 오름차순으로
// 2. 하나도 없다면 배열에 -1 담아서 리턴

// 수도 코드 작성
// 1. 결과를 담을 빈 배열
// 2. 반복을 통해 나눠서 나머지가 0인 값들을 빈 배열에 푸쉬
// 3. 오름차순 정렬

function solution(arr, divisor) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  answer.sort(function (a, b) {
    return a - b;
  });
  if (answer.length === 0) {
    return [-1];
  }
  // array1.sort(function(a, b) { return a - b });
  return answer;
}

// 후기
// 어렵지 않은 문제다
// 나머지가 0 이 되는 값들만 결과 배열에 넣어주면 되는 간단한 문제
// 여기에 오름차순 정렬
// 값이 없는 경우에 대해서만 생각해주면 된다
