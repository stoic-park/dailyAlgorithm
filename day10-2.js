// 문자열 다루기 기본
// https://programmers.co.kr/learn/courses/30/lessons/12918

// 제한시간 30분

// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 a234이면 False를 리턴하고 1234라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.

// 분석
// 1. 길이가 4 or 6
// 2. 숫자로만 구성됐는지를 확인
// 3. 문자열 인풋, 불린값으로 리턴

// 수도코드 작성
// 1. 기본값 true
// 2. filter돌려서 element가 숫자가 아니다 => false

function solution(s) {
  var answer = false;
  let leng = s.length;
  // console.log(leng)
  //   if (leng !== 4 || leng !== 6) {
  //     answer = false;
  //   }
  if ((leng === 4 || leng === 6) && !isNaN(s)) {
    answer = true;
  } else answer = false;
  return answer;
}

// 후기
// 문자열 기본
// 근데 못품
// isNaN

// 포인트 isNaN을 이용한 풀이는 조건 하나를 만족하지 못한다
// 숫자인지여부를 판단하는 정규식을 활용해야 할 것 같다

// Solution

// 포인트 자바스크립트 정규식..!

function alpha_string46(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
