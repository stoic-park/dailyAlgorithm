// 다음 큰 숫자
// https://programmers.co.kr/learn/courses/30/lessons/12911

// 문제 설명
// 자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.
// 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
// 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
// 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
// 예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.
// 자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.

// 제한 사항
// n은 1,000,000 이하의 자연수 입니다.

// 분석
// 숫자 인풋 숫자 리턴
// 주어진 숫자를 이진수로 바꿔야 한다
// 바뀐 이진수에서 1의 갯수를 확인한다
// 주어진 숫자 n 보다 클 경우? 1의 갯수가 같은 경우 리턴
// ! 주어진 숫자를 이진수로 바꾸는 방법
// n.toString(2)

// 수도코드 작성
// 1. 이진수로 변환
// 2. 1의 갯수를 찾는다(고정값, 타겟)
// 2-1. for문 통해서 1의 갯수를 찾는 함수를 맹근다
// 3. n보다 클 경우 계속해서 반복하는 while문
// 4. 만약 1의 갯수가 같다면 리턴
function solution(n) {
  let binary = n.toString(2);
  let next = n + 1;

  const findIndex = (n) => {
    let count = 0;
    let binaryTarget = n.toString(2);
    for (let i = 0; i < binaryTarget.length; i++) {
      if (binaryTarget[i] === "1") {
        count++;
      }
    }
    return count;
  };

  let binaryIndex = findIndex(binary); // 주어진 n 의 1의 개수
  let nextNum;

  while (next > n) {
    let nextCount = findIndex(next);
    if (binaryIndex !== nextCount) {
      next++;
    }
    if (binaryIndex === nextCount) {
      return next;
    }
  }
}

// 후기
// 처음 생각대로 풀어갔고 해결이 됐다
// 효율성 테스트도 통과를 했다
// 1의 갯수를 찾는 `내부함수`를 사용했다는 점에서 개인적으로 만족한다
// 다만 좋은 풀이라고는 생각하지 않는다
// 직관적으로 해결하기 위해서 풀이가 길어졌기 때문에 더 짧은 솔루션을 찾아봐야겠다

// solution 1

function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
}

// .match(/1/g) 라는 메소드?!
