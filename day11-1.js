// 서울에서 김서방 찾기
// https://programmers.co.kr/learn/courses/30/lessons/12919

// 제한시간 30분

// 문제 설명
// String형 배열 seoul의 element중 Kim의 위치 x를 찾아, 김서방은 x에 있다는 String을 반환하는 함수, solution을 완성하세요. seoul에 Kim은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// 제한 사항
// seoul은 길이 1 이상, 1000 이하인 배열입니다.
// seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// Kim은 반드시 seoul 안에 포함되어 있습니다.

// 분석
// 배열 안에서 일치하는 인덱스 값을 리턴하는 문제
// 고맙게도 "kim" 은 단 한번만 나타난다!

function solution(seoul) {
  // var answer = '';
  // console.log(seoul)
  let targetNumber = seoul.indexOf("Kim");
  // console.log(targetNumber)
  // answer += targetNumber
  // console.log(answer)
  // return answer;
  return `김서방은 ${targetNumber}에 있다`;
}

// 후기
// 배열안에서 인덱스 값을 묻는 간단한 문제였다
// 다만 조금 헷갈렸던 부분은
// 백틱을 이용해 문자를 나타내는 부분!
