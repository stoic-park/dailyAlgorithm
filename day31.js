// N으로 표현 - 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/42895

// 문제 설명
// 아래와 같이 5와 사칙연산만으로 12를 표현할 수 있습니다.

// 12 = 5 + 5 + (5 / 5) + (5 / 5)
// 12 = 55 / 5 + 5 / 5
// 12 = (55 + 5) / 5

// 5를 사용한 횟수는 각각 6,5,4 입니다. 그리고 이중 가장 작은 경우는 4입니다.
// 이처럼 숫자 N과 number가 주어질 때, N과 사칙연산만 사용해서 표현 할 수 있는 방법 중 N 사용횟수의 최솟값을 return 하도록 solution 함수를 작성하세요.

// 제한사항
// N은 1 이상 9 이하입니다.
// number는 1 이상 32,000 이하입니다.
// 수식에는 괄호와 사칙연산만 가능하며 나누기 연산에서 나머지는 무시합니다.
// 최솟값이 8보다 크면 -1을 return 합니다.

// 입출력 예
// N : 5 , number : 12 => return 4
// N : 2 , number : 11 => return 3
// 22/2 = 11 return 3

// 분석
// 숫자 인풋 숫자 아웃풋
// number를 만들 수 있는 경우의 수를 모두 확인하는 방법
// N 으로 만들 수 있는 숫자
// 경우의 수가 8 이하인 경우를 모두 탐색..?
// ! 동적 계획법(Dynamic Programming)
// https://ko.wikipedia.org/wiki/%EB%8F%99%EC%A0%81_%EA%B3%84%ED%9A%8D%EB%B2%95

// 주어진 N을 8개 이하로 사용하여 만들 수 있는 모든 수를 구한다
// 5를 1번
// : 5
// 5를 2번
// : 55,
// 10, 0, 25, 1 (1번 Set과 1번 Set을 사칙연산)
// 5를 3번
// 555 ,
// 1번 Set과 2번 Set 사칙연산한 결과 ,
// 2번 Set과 1번 Set을 사칙연산한 결과들의 합집합
// 5를 4번
// 5555
// 1 + 3
// 2 + 2
// 3 + 1 의 경우의 합집합

// solution 1
function solution(N, number) {
  const cache = new Array(9).fill(0).map((el) => new Set());
  for (let i = 1; i < 9; i++) {
    cache[i].add("1".repeat(i) * N);
    for (let j = 1; j < i; j++) {
      for (const arg1 of cache[j]) {
        for (const arg2 of cache[i - j]) {
          cache[i].add(arg1 + arg2);
          cache[i].add(arg1 - arg2);
          cache[i].add(arg1 * arg2);
          cache[i].add((arg1 / arg2) >> 0);
        }
      }
    }
    if (cache[i].has(number)) return i;
  }
  return -1;
}

// Set
// Set 객체는 값 콜렉션으로, 삽입 순서대로 요소를 순회할 수 있습니다.
// 하나의 Set 내 값은 한 번만 나타날 수 있습니다.
// 즉, 어떤 값은 그 Set 콜렉션 내에서 유일합니다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set

// 후기
// lv 3 은 아직 무리인가..
// DP에 대한 생소함이 문제를 더 어렵게 느껴지게 했던 것 같다!
