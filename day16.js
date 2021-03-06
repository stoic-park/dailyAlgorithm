// 괄호 변환 - 2020 카카오 블라인드
// https://programmers.co.kr/learn/courses/30/lessons/60058?language=javascript

//문제 설명
// 카카오에 신입 개발자로 입사한 콘은 선배 개발자로부터 개발역량 강화를 위해 다른 개발자가 작성한 소스 코드를 분석하여 문제점을 발견하고 수정하라는 업무 과제를 받았습니다. 소스를 컴파일하여 로그를 보니 대부분 소스 코드 내 작성된 괄호가 개수는 맞지만 짝이 맞지 않은 형태로 작성되어 오류가 나는 것을 알게 되었습니다.
// 수정해야 할 소스 파일이 너무 많아서 고민하던 콘은 소스 코드에 작성된 모든 괄호를 뽑아서 올바른 순서대로 배치된 괄호 문자열을 알려주는 프로그램을 다음과 같이 개발하려고 합니다.

// 용어의 정의
// '(' 와 ')' 로만 이루어진 문자열이 있을 경우, '(' 의 개수와 ')' 의 개수가 같다면 이를 균형잡힌 괄호 문자열이라고 부릅니다.
// 그리고 여기에 '('와 ')'의 괄호의 짝도 모두 맞을 경우에는 이를 올바른 괄호 문자열이라고 부릅니다.
// 예를 들어, "(()))("와 같은 문자열은 균형잡힌 괄호 문자열 이지만 올바른 괄호 문자열은 아닙니다.
// 반면에 "(())()"와 같은 문자열은 균형잡힌 괄호 문자열 이면서 동시에 올바른 괄호 문자열 입니다.

// '(' 와 ')' 로만 이루어진 문자열 w가 균형잡힌 괄호 문자열 이라면 다음과 같은 과정을 통해 올바른 괄호 문자열로 변환할 수 있습니다.

// 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
// 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다.
// 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.
//   3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다.
// 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
//   4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다.
//   4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다.
//   4-3. ')'를 다시 붙입니다.
//   4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.
//   4-5. 생성된 문자열을 반환합니다.
// 균형잡힌 괄호 문자열 p가 매개변수로 주어질 때, 주어진 알고리즘을 수행해 올바른 괄호 문자열로 변환한 결과를 return 하도록 solution 함수를 완성해 주세요.

// 매개변수 설명
// p는 '(' 와 ')' 로만 이루어진 문자열이며 길이는 2 이상 1,000 이하인 짝수입니다.
// 문자열 p를 이루는 '(' 와 ')' 의 개수는 항상 같습니다.
// 만약 p가 이미 올바른 괄호 문자열이라면 그대로 return 하면 됩니다.

// 분석
// 균형잡힌 괄호 , 올바른 괄호 로 구분
// 선형적으로 탐색을 통해 균형잡힌 괄호를 먼저 찾는다
// 올바른 괄호인지 확인하는 절차가 필요하다
// 올바른 괄호인지 확인하는 재귀함수를 이용하자
// 올바른 괄호가 아니라면..
// 빈 문자열에 '(' + function(v) + ')' + 압뒤 땐 뒤집은 u

function solution(p) {
  let answer = "";
  let countL = 0;
  let countR = 0;
  let isRight = true;

  // 1. 빈 문자열인 경우, 빈 문자열을 리턴
  if (p.length === 0) {
    return "";
  }
  // 2. p를 균형잡힌 문자열 u,v로 분리한다
  // 단, u는 균형잡힌 문자열, 더는 분리되지 못한다
  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") {
      countL++;
    }
    if (p[i] === ")") {
      countR++;
    }
    if (countL < countR) {
      isRight = false;
    }
    if (countL === countR) {
      // 4. 올바른 괄호가 아닐 경우
      if (isRight === false) {
        answer += "(";
        answer += solution(p.slice(i + 1, p.length));
        answer += ")";
        // 처음, 마지막 문자 제거하고 나머지 반전
        for (let j = 1; j < i; j++) {
          if (p[j] === ")") answer += "(";
          if (p[j] === "(") answer += ")";
        }
        return answer;
      }
      // 올바른 괄호일 경우
      else {
        answer += p.slice(0, i + 1); // 그대로
        answer += solution(p.slice(i + 1, p.length));
        return answer;
      }
    }
  }
}

// 후기
// 선형적으로 직관적으로 해결하려 했으나
// 스택? 이라는 개념이 자꾸 떠올라서
// 문제 분석하는데에만 시간을 아주..
// 결국 시간 내에 해결하지 못하고 보다가 다른 사람들의 풀이를 봤다
// 문제에 주어진 조건들을 그대로 구현한 듯한 느낌이 들었다
