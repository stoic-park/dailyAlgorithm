// 짝지어 제거하기 - 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/12973

// 문제 설명
// 짝지어 제거하기는, 알파벳 소문자로 이루어진 문자열을 가지고 시작합니다. 먼저 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다. 그다음, 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙입니다. 이 과정을 반복해서 문자열을 모두 제거한다면 짝지어 제거하기가 종료됩니다. 문자열 S가 주어졌을 때, 짝지어 제거하기를 성공적으로 수행할 수 있는지 반환하는 함수를 완성해 주세요. 성공적으로 수행할 수 있으면 1을, 아닐 경우 0을 리턴해주면 됩니다.

// 예를 들어, 문자열 S = baabaa 라면

// b aa baa → bb aa → aa →

// 의 순서로 문자열을 모두 제거할 수 있으므로 1을 반환합니다.

// 제한사항
// 문자열의 길이 : 1,000,000이하의 자연수
// 문자열은 모두 소문자로 이루어져 있습니다.

// 입출력 예
// baabaa => 1
// cdcd => 0

// 분석
// 문자열 인풋 숫자 아웃풋
// 연속된 문자를 제거하는 과정을 반복해야 하므로 연속된 문자를 제거하는 함수를 만든다(내부함수)
// 문자열의 길이가 0이 될때까지? : 연속된 문자가 없을 겨우 무한루프에 빠질 수도 있으니까 최대 문자열의 길이만큼 함수를 재생하는걸로
// 문자열을 배열로 바꿔서 map 을 사용?

function solution(s) {
  var answer = 0;
  let str = s.split("");
  const recursion = (a) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] === a[i + 1]) {
        a.splice(i, 2);
        recursion(a);
      }
    }
  };
  recursion(str);
  // console.log(str)
  if (str.length === 0) {
    answer = 1;
  }
  return answer;
}

// 기본 테스트 통과
// 2~8 번 테스트 통과 못함
// 효율성 테스트 통과 못함
// : 내부 함수를 도는 과정이 효율적이지 못한 듯
// ! tip :  문자열의 길이가 1,000,000 까지 되기 때문에 내부함수 말고 다른 방법을 사용해보도록 하라
// : stack

// solution 1
function solution(s) {
  let stack = []; // 제거된 요소를 저장
  let splited = s.split(""); // 배열화

  // 스택에 순서대로 쌓는 방법
  // 스택의 마지막 값과 배열의 현재 값이 같을 경우 스택에서 제거
  // 아닐 경우 스택에 푸쉬
  for (let i = 0; i < splited.length; i++) {
    // if (stack.length === 0) {
    //   stack.push(splited[i]);
    // } else {
    if (stack[stack.length - 1] === splited[i]) stack.pop();
    else stack.push(splited[i]);
    // }
  }
  return stack.length === 0 ? 1 : 0;
}

// solution 2
function solution(s) {
  var stringToArray = s.split("");
  var res = [];

  for (var val of stringToArray) {
    if (val === res[res.length - 1]) {
      res.pop();
    } else {
      res.push(val);
    }
  }
  return res.length === 0 ? 1 : 0;
}

// 후기
// 직관적인 풀이의 단점은 항상 존재한다
// 효율성을 생각한 풀이...
// 데이터 구조에 대한 이해가 필요했던 문제였다
// 자바스크립트 기초에서 shift() 와 같은 메서드를 사용할 경우 인덱스 전체를 변경해야 하므로 시간 복잡도가 높다는 사실을 확인할 수 있었다
// 계산이 복잡해질 경우 되도록 shift는 사용하지 말자!
