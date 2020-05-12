// 문자열 내림차순으로 배치하기
// https://programmers.co.kr/learn/courses/30/lessons/12917

// 제한시간 30분

// 문제 설명
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항
// str은 길이 1 이상인 문자열입니다.

// 분석
// 1. 영문으로만 구성
// 2. 대문자와 소문자 구분

// 수도코드 작성
// 1. split('')
// 2. sort
// 3. reverse
// 4. join('')

function solution(s) {
  // var answer = '';
  // return answer;
  let answer = s.split("").sort().reverse().join("");
  return answer;
}

// 후기
// 아주 간단한 문자열에 관한 문제
// split, sort, join, reverse 를 이용했다

// 아주 간단한 문제인데.. 왜..?
