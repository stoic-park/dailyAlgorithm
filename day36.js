// 올바른 괄호 - 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/12909

// 문제 설명
// 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

// ()() 또는 (())() 는 올바른 괄호입니다.
// )()( 또는 (()( 는 올바르지 않은 괄호입니다.
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 문자열 s의 길이 : 100,000 이하의 자연수
// 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

// 입출력 예
// "()()" true
// "(())()" true
// ")()(" false
// "(()(" false

// 분석
// 문자열 인풋 boolean 아웃풋
// 정렬을 하지 않고 선형적으로 탐색을 해야 한다
// "(" 를 스택에 넣고 ")" 가 나오면 스택에서 지워준다
// 스택의 길이가 0이라면 올바른 괄호

// 수도코드
// 1. 빈 배열(스택)
// 2. for 반복문
// 3. "(" 인 경우 스택에 담는다
// 4. "(" 일 경우 스택에 쌓여있는 짝 "(" 를 하나씩 pop
// 5. 올바른 짝이 있다면 반복이 끝난 후 스택의 길이는 0
// 6. 아니면 false
function solution(s) {
  var answer = true;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) return false;
      else stack.pop();
    }
  }

  if (stack.length === 0) {
    return true;
  } else return false;
  return answer;
}

// 후기
// 스택..!
// 문제를 잘 이해한다면 어렵지 않게 해결할 수 있다
// 데이터 구조를 잘 이해해야 한다
// 비슷한 문제를 더 풀어보는 것이 좋겠다
