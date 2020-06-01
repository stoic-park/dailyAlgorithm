// 숫자의 표현 - 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/12924

// 문제 설명
// Finn은 요즘 수학공부에 빠져 있습니다. 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다. 예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.

// 1 + 2 + 3 + 4 + 5 = 15
// 4 + 5 + 6 = 15
// 7 + 8 = 15
// 15 = 15
// 자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.

// 제한사항
// n은 10,000 이하의 자연수 입니다.

// 분석
// 숫자 인풋 숫자 리턴
// 연속된 숫자의 합으로 n이 되는 방법의 수를 리턴하는 문제

// 선형적으로
// 1 + 2 + 3 + 4 + 5 = 15 카운트 + 1
// 2 + 3 + 4 + 5 + 6 > 15 pass
// 3 + 4 + 5 + 6 > 15 pass
// 4 + 5 + 6 = 15 카운트 1
// 5 + 6 + 7 > 15 pass
// 6 + 7 + 8 > 15 pass
// 7 + 8 = 15 count +
// ...
// 15 =  15 count +

// 조건문을 사용한다면
// while()

// function solution(n) {
//   var answer = 0;
//   let sum = 0;
//   let current = 0;

//   while (current < n) {
//     for (let i = current; i < n; i++) {
//       if (sum < n) {
//         sum += i;
//       }
//       if (sum === n) {
//         current++;
//         answer++;
//         sum = 0;
//         break;
//       }
//     }
//   }
//   return answer;
// }

// 시간이 10초를 넘어선다

function solution(n) {
  var answer = 0;
  //   let sum = 0;
  let current = 0;
  for (let i = 1; i <= n; i++) {
    let sum = 0; // 초기화
    current = i;
    while (sum < n) {
      sum += current;
      if (sum === n) answer++;
      current++;
    }
  }
  return answer;
}

// 후기
// 이해가 안가지 왜..?
// while문 + for문을 통해서 해결이 가능할 것 처럼 보이고
// 다른 사람들의 풀이도 비슷한 것 같은데
// 답이 나오는 부분에서 올바로 계산이 되지 않는다

// solution 1
function expressions(num) {
  var answer = 0;

  for (var i = 1; i <= num; i++) {
    if (num % i == 0 && i % 2 == 1)
      // ???
      answer++;
  }
  return answer;
}

// 한줄평 : 사람들 참 대단하다
