// 문자열을 정수로 바꾸기
// https://programmers.co.kr/learn/courses/30/lessons/12925

// 제한시간 30분

// 문제 설명
// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

// 제한 조건
// s의 길이는 1 이상 5이하입니다.
// s의 맨앞에는 부호(+, -)가 올 수 있습니다.
// s는 부호와 숫자로만 이루어져있습니다.
// s는 0으로 시작하지 않습니다.

// 문제 분석
// 1. 문자열 인풋 => 숫자열 아웃풋
// 2. 음수의 경우가 있다
// 문자를 숫자로 바꾸는? parseInt() 함수

// 수도코드..?

function solution(s) {
  // console.log(s)
  // var answer = 0;
  // return answer;
  return parseInt(s);
}

// 후기
// 뭘 해본다..? 하기도 전에 끝났다
// 단순히 문자열을 숫자로 바꾸는 함수를 알고있나? 에 대한 문제는 아닐꺼라고 생각했는데
// 테스트 케이스를 모두 통과해버리니 벙쪘다..
// 그래서 다른 사람들의 풀이를 찾아봤더니
// 새로운 관점으로 푼 풀이들이 여럿 보였다.

// Solution1

function strToInt(str) {
  return str / 1;
}

// Solution 2

function strToInt(str) {
  return +str;
}
// 문자열과 숫자열의 사칙연산은 숫자가 나오게 됩니다..

// 결론..!

// 놀라운 js..
