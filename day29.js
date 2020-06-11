// 가장 큰 수
// https://programmers.co.kr/learn/courses/30/lessons/42746

// 문제 설명
// 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

// 예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

// 0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

// 제한 사항
// numbers의 길이는 1 이상 100,000 이하입니다.
// numbers의 원소는 0 이상 1,000 이하입니다.
// 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

// 입출력 예
// [6, 10, 2] -> "6210"
// [3, 30, 34, 5, 9] -> "9534330"

// 분석
// 숫자배열 인풋 숫자로 이루어진 문자열 아웃풋
// 내림차순 정렬을 했을 때
// 6, 10, 2 => 10, 6, 2 가 된다
// 일의 자리숫자 중 큰수가 가장 앞으로 와야 한다
// 두번 째 예에서
// ! 3 vs 30 vs 34 => 34, 3, 30
// 이 규칙을 적용하는 것이 관건..

// 첫번째와 두번째를 더한 값이 큰 것으로 더한다?
// [ 9, 5, 34, 30, 3 ]
// 95 > 59 : [9]
// 534 > 345 : [9,5]
// 3430 > 3034 : [9,5,34]
// 303 < 330 : [9,5,34,3,30]

function solution(numbers) {
  var answer = "";
  numbers.sort().reverse();
  let newNum = [];
  let stringNum = numbers.join("");
  for (let i = 0; numbers.length; i++) {
    if (stringNum[i] + stringNum[i + 1] > stringNum[i + 1] + stringNum[i]) {
      newNum.push(stringNum[i]);
    } else newNum.push(stringNum[i + 1]);
  }
  return answer;
}
// 시간초과

// solution 1
function solution(numbers) {
  function solution(numbers) {
    var answer = numbers
      .map((a) => a.toString())
      .sort((a, b) => b + a - (a + b))
      .join("");
    return answer[0] === "0" ? "0" : answer;
  }
}
// numbers.map(c=>c+'') = 각 숫자들을 문자로 변환(1 => '1')
// sort((a,b) => (b+a)-(a+b)) = 문자로 변환된 숫자를 연결하여 비교정렬
// ( '3', '30' => ('303')-('330'))
// .join('') = 문자열 합치기
// numbers 배열이 0으로만 구성되어 있을 경우 '0'만 출력
// https://velog.io/@fastpace04/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4JavaScript-%EA%B0%80%EC%9E%A5-%ED%81%B0-%EC%88%98

// 후기
// 문자로 바꿔서 sort()를 사용하면 간단한 것...
// sort의 사용법이 정말 간단하면서도 무궁무진하구나?
