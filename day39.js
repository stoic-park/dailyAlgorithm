// 예산 - 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/43237
// 이분탐색 (binarySearch)

// 문제 설명
// 국가의 역할 중 하나는 여러 지방의 예산요청을 심사하여 국가의 예산을 분배하는 것입니다. 국가예산의 총액은 미리 정해져 있어서 모든 예산요청을 배정해 주기는 어려울 수도 있습니다. 그래서 정해진 총액 이하에서 가능한 한 최대의 총 예산을 다음과 같은 방법으로 배정합니다.

// 1. 모든 요청이 배정될 수 있는 경우에는 요청한 금액을 그대로 배정합니다.
// 2. 모든 요청이 배정될 수 없는 경우에는 특정한 정수 상한액을 계산하여 그 이상인 예산요청에는 모두 상한액을 배정합니다.
//    상한액 이하의 예산요청에 대해서는 요청한 금액을 그대로 배정합니다.
// 예를 들어, 전체 국가예산이 485이고 4개 지방의 예산요청이 각각 120, 110, 140, 150일 때, 상한액을 127로 잡으면 위의 요청들에 대해서 각각 120, 110, 127, 127을 배정하고 그 합이 484로 가능한 최대가 됩니다.
// 각 지방에서 요청하는 예산이 담긴 배열 budgets과 총 예산 M이 매개변수로 주어질 때, 위의 조건을 모두 만족하는 상한액을 return 하도록 solution 함수를 작성해주세요.

// 제한 사항
// 지방의 수는 3 이상 100,000 이하인 자연수입니다.
// 각 지방에서 요청하는 예산은 1 이상 100,000 이하인 자연수입니다.
// 총 예산은 지방의 수 이상 1,000,000,000 이하인 자연수입니다.

// 입출력 예
// [120, 110, 140, 150] , 485  => return 127

// 분석
// 숫자 배열, 숫자 인풋 숫자 아웃풋
// 먼저 주어진 숫자배열의 합이 예산을 넘지 않는 경우와 넘는 경우로 나눈다
// 넘는 경우 오름차순 정렬 // [110, 120, 140, 150]
// 인덱스 중간값(4/2 = 2 - 1 = 1) => 120 인덱스 1부터 끝까지 120으로
// 합이 예산보다 작은 경우 계속 120 ++
// 리턴?

// 수도코드
// 1. answer = 0;
// 2. 오름차순 정렬
// 3. bugets의 합이 < M 인 경우 return budgets[budgets.length -1]
// 4. target = budgets[ budgets.length/2 - 1]
// 5. while ( <= M ) target++ return target

function solution(budgets, M) {
  // console.log(Math.max(...budgets))
  // 1. 오름차순 정렬
  budgets.sort((a, b) => a - b);
  //   console.log(budgets)
  // 2. 요청의 합이 예산보다 작은 경우
  const sumBudgets = budgets.reduce((a, b) => a + b, 0);
  //   console.log(sumBudgets);
  if (sumBudgets <= M) {
    return budgets[budgets.length - 1];
  }
  // 3. 요청의 합이 예산보다 클 경우
  let middleIndex = Math.floor(budgets.length / 2) - 1;
  let target = budgets[middleIndex];
  // target보다 큰 값들을 target으로
  let newArr = budgets.map((a) => (a > target ? (a = target) : a));
  console.log(newArr);
  let newSum = newArr.reduce((a, b) => a + b, 0);
  console.log(newSum);
  // while(newSum < M) {
  //     target++
  // }

  return target;
}

// 후기
// 이분탐색에 대해서
// 이분탐색에서 핵심은 범위 변수와 탈출 조건!

// solution1
function solution(budgets, M) {
  let answer = 0;
  let sum = budgets.reduce((a, b) => a + b, 0);
  let max = Math.max(...budgets);
  // 요청의 합이 예산보다 작거나 같은 경우
  if (sum <= M) return max;
  //
  let left = 0;
  let right = max;
  while (true) {
    let mid = parseInt((left + right) / 2);
    if (left === mid || right === mid) break;
    sum = budgets.reduce((a, b) => {
      return b < mid ? a + b : a + mid;
    }, 0);
    if (sum > M) {
      right = mid;
    } else {
      left = mid;
      answer = mid;
    }
    if (right <= left) break;
  }
  return answer;
}

// solution 2
function solution(budgets, M) {
  var answer = 0;
  let sum = budgets.reduce((a, b) => a + b, 0);
  let max = Math.max(...budgets);
  // 1. 요청의 합이 예산보다 작거나 같은 경우
  if (sum <= M) return max;
  // 2. 요청의 합이 예산보다 클 경우 : 이분탐색
  let left = 0;
  let right = max;
  while (right >= left) {
    let mid = Math.floor((left + right) / 2);
    if (left === mid || right === mid) break; // 이 조건이 들어가야 시간초과 안함
    sum = budgets.reduce((a, c) => (c < mid ? a + c : a + mid), 0); // 초기값 안넣어줬떠니 테스트 케이스 4,6,9,2 통과 못함
    if (sum > M) right = mid;
    else {
      left = mid;
      answer = mid;
    }
  }
  return answer;
}
