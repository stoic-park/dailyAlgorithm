// JadenCase 문자열 만들기 - 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/12951

// 문제 설명
// JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// s는 길이 1 이상인 문자열입니다.
// s는 알파벳과 공백문자(" ")로 이루어져 있습니다.
// 첫 문자가 영문이 아닐때에는 이어지는 영문은 소문자로 씁니다. ( 첫번째 입출력 예 참고 )

// 분석
// 스트링 인풋 스트링 아웃풋
// 단어의 첫 문자는 대문자, 나머지는 소문자
// 첫 문자가 영문이 아닐 경우 소문자

// 수도 코드
// 1. 빈 문자열
// 2. 주어진 s의 0번째 인덱스 값이 문자일 경우에 대해서 소문자
// 3. 선형적으로 반복 (for)
// 4. i번째의 요소가 string 이면서, i-1 번째 요소가 " " 빈 문자열 일 경우
//     answer + 대문자 s[i]
// 5. 아닐 경우 소문자 +,
// 6. 리턴

function solution(s) {
  // 주의해야 할 조건
  // 영문이 아닐 경우
  var answer = "";
  if (typeof s[0] === "string") {
    answer += s[0].toUpperCase();
  }
  for (let i = 1; i < s.length; i++) {
    if (typeof s[i] === "string" && s[i - 1] === " ") {
      answer += s[i].toUpperCase();
    } else answer += s[i].toLowerCase();
  }

  return answer;
}

// 후기
// 간단한 문자열 문제
// 투박하게 해결했다
// 주어진 조건을 만족하게 하고 toUpperCase, toLowerCase 메소드를 사용
// 조금 더 깔끔한 풀이에 대해서 생각해보자

// solution 1
// 인덱스 0번째 조건을 따로 해주지 않으면 코드가 더 깔끔해진다
function solution(s) {
  var answer = "";
  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i - 1] === " ") {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
  }
  return answer;
}

// solution2
// split, map등 배열로 문제를 해결

function solution(s) {
  return s
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ");
}

// chartAt(index) : 인덱스에 해당하는 유니코드 단일문자 반환
// substring(index) : string 객체의 시작 인덱스로부터 종료 인덱스까지 부분 문자열을 반환
