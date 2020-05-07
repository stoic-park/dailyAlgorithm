// 문자열 내 p와 y의 개수
// https://programmers.co.kr/learn/courses/30/lessons/12916

// 제한시간 30분

// 문제 설명
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
// 예를 들어 s가 pPoooyY면 true를 return하고 Pyy라면 false를 return합니다.

// 제한사항
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.

// 분석
// 1. 대문자와 소문자의 경우를 구분
// 2. p와 y의 개수를 비교

// 수도 코드
// 1. 고정 값 트루
// 2. 대문자 혹은 소문자로 변환
// 3. p와 y를 카운트 해줄 변수 선언
// 4. for 반복문을 통해 카운트 값 +
// 5. false 인 경우

function solution(s) {
  var answer = true;
  let sentence = s.toUpperCase();
  let countP = 0;
  let countY = 0;
  // console.log(sentence)
  for (let i = 0; i < s.length; i++) {
    if (sentence[i] === "P") {
      countP++;
    }
    if (sentence[i] === "Y") {
      countY++;
    }
  }
  // console.log(countP)
  if (countP !== countY) {
    return false;
  }
  return answer;
}

// 후기
// toUpperCase() 메서드와 for 문을 이용해 쉽게 해결
// 단순한 풀이로 풀 수 있었다

// Solution
function numPY(s) {
  //함수를 완성하세요
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
