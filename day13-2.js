// 약수의 합
// https://programmers.co.kr/learn/courses/30/lessons/12928

// 제한시간 30분

// 문제 설명
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.

// 분석
// 1. 숫자 인풋 => 숫자 리턴
// 2. 주어진 숫자 n 에 대해서 약수를 구할 수 있어야 한다
// 3. 주어진 숫자 n + 구한 약수들의 합
// ! 약수 구하기
// 주어진 숫자 n 을 1부터 차례로 나눴을때 나머지가 0인 경우에 대해서만 빈 배열에 담는다
// 중복될 경우 넣지 않는다 반복은 숫자의 크기만큼만 진행
// ? reduce를 통해 합을 구해보자

// 수도코드 작성
// 1. 약수를 담을 배열 선언
// 2. for 반복문을 진행해서 나머지가 0인 경우만 빈 배열에 집어넣는다
// 3. 빈 배열을 reduce로 합을 구한다
// 4. reduce 진행한 값과 n을 더한다

function solution(n) {
  //   var answer = 0;
  let inInteger = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      inInteger.push(i);
    }
  }
  console.log(inInteger);
  return inInteger.reduce((prev, curr) => prev + curr);
}

// ? 테스트케이스 16번을 통과하지 못해서
// ? `질문하기` 를 보니 주어진 값이 0 일 경우에 대해서 처리해주면 된다고 한다

// 후기
// 개발자라면서 언제까지 % 랑 / 랑 헷갈릴꺼냐
