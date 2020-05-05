// 두 정수 사이의 합 - 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/12912

// 제한 시간 30분

// 문제 설명
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// 제한 조건
// a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
// a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
// a와 b의 대소관계는 정해져있지 않습니다.

// 문제 분석
// 1. 주어진 숫자 둘 사이의 값들의 합
// 2. a,b 가 같을 경우 아무거나
// 3. 대소관계가 정해져 있지 않다
//? 어떤 식으로 사이 숫자들을 ? 반복문? a>b 인경우 / a< b 인 경우를 나눠서

// 수도 코드 작성
// 1. 반복문
// 2. a < b 인 경우 & a > b 인 경우
function solution(a, b) {
  var answer = 0;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  }
  if (a > b) {
    for (let i = a; i >= b; i--) {
      answer += i;
    }
  }
  if (a === b) {
    return a;
  }
  return answer;
}

// 후기
// 간단한 for 반복문 문제였다
// 그럼에도 내가 헷갈렸던 부분은
// ! for 반복문에서 사용하는 조건들을 제대로 이해하고 있지 않았다는 것이다
// ! for ([initialization]; [condition]; [final-expression])
// ! 특히나 중간의 condition 같은 경우에는 condition에 부합하면 반복문을 계속 진행한다는 것이므로
// 정확히 알아야 한다!

// 그 밖에는 딱히 어려운 문제는 아니였다
// 그럼 이만
