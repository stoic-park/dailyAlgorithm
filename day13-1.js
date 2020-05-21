// 시저 암호
// https://programmers.co.kr/learn/courses/30/lessons/12926

// 제한시간 30분

// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 AB는 1만큼 밀면 BC가 되고, 3만큼 밀면 DE가 됩니다. z는 1만큼 밀면 a가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.

// 분석
// ! 가장 기본적인 방법으로 풀어보자
// 1. 문자, 숫자 인풋 => 문자 아웃풋
// 2. 주어진 숫자만큼 인덱스값을 미룬다
// 3. z => a
//    => 알파벳을 두번 반복한 배열을 맹글면 됨
// 4. 소문자 대문자를 구분한다
//    => 각각의 문자값에 대해서 인덱스 값을 + or 대문자 소문자 경우의 수를 나눈다

// 수도코드 작성
// 0. 빈 문자열
// 1. 대문자 알파벳 배열 , 소문자 알파벳 배열 선언
// 2. 인덱스 값 빈 배열 선언
// 3. 주어진 문자열의 각 요소에 대해서 인덱스 값을 카운트
// 4. 카운트 값에 주어진 숫자만큼 ++;
// 5. 증가한 카운트 값에 해당하는 문자를 빈 문자열에 넣는다

function solution(s, n) {
  var answer = "";
  const uppperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerString = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (uppperString.includes(s[i]) === true) {
      count = uppperString.indexOf(s[i]);
      count = count + n;
      answer += uppperString[count];
      count = 0;
    }
    if (lowerString.includes(s[i]) === true) {
      count = lowerString.indexOf(s[i]);
      count = count + n;
      answer += lowerString[count];
      count = 0;
    }
    // ? 공백이 있네..
    if (s[i] === " ") {
      answer += " ";
    }
  }

  return answer;
}

// 후기
// 역시..자바스크립트가 익숙하지 않기 때문에
// for문을 통한 가장 기본적인 풀이로 해결하려고 했다
// 자바스크립트가 어서 익숙해지면 좋겠지만
// 배운지 얼마 안됀 한계가 분명히 있고
// 주니어 개발자로써 가지고 있는 능력 안에서 해결하는 모습을 보여주는것이
// 오히려 좋지 않을까 생각해본다

// 그래서 결론은
// 계속해서 쉬운 접근을 통해서 문제를 해결하되
// 자바스크립트 공부를 계속 해나가자!
