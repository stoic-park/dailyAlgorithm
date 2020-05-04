// 같은 숫자는 싫어 - 프로그래머스 lv1
// https://programmers.co.kr/learn/courses/30/lessons/12906

// 제한시간 30분

// 문제 설명
// 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 배열 arr의 크기 : 1,000,000 이하의 자연수
// 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

// 문제 분석
// 연속되는 숫자는 하나만 남기고 제거
// 원소들의 순서는 유지 (노 오름차순)
// 반복문을 통해서 순서대로 비교하면서 진행하는 식으로 접근하겠다

// 수도 코드
// 1. 빈 배열
// 2. 현재 카운트 값 선언
// 3. for 문을 통해 현재값과 비교를 통해 같을 경우 빈 배열에 푸시
// 4. 빈 배열에 푸쉬 할 경우 기존에 존재하는지 유무를 파악

function solution(arr) {
  var answer = [];
  let count = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (count === arr[i]) {
      if (answer.includes(arr[i]) === false) {
        answer.push(arr[i]);
      }
    }
    count = arr[i];
  }

  return answer;
}

// 후기
// 간단하게 순서대로 비교하면서 푸쉬하고 이미 존재하는 않는 경우에 대해서만 푸쉬하는 식으로
// 문제를 해결할 생각이었는데...

// 테스트 케이스 1개를 통과하지 못했습니다

// solution
// filter 메소드를 이용해서 아주 쉽게 해결할 수 있습니다!

function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
