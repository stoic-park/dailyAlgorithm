// 문제 설명
// 2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 2 이상 100 이하입니다.
// 행렬 arr1, arr2의 원소는 -10 이상 20 이하인 자연수입니다.
// 곱할 수 있는 배열만 주어집니다.

// 분석
// 문제가 이해가 안되는데요?
// 유튜브 행렬 강의 듣고 왔습니다
// 예시 1
// 3x2 X 2x2 => 3x2
// 반복문을 통해서 행과 열의 길이만큼 곱해서 더한 값을 배열에 담아 푸시
//

// 수도코드 작성
// 1. 정답을 담을 빈 배열
// 2. 곱한 값을 더한 sum
// 3. 곱한 값들을 담을 빈 배열 sumArr
// 4. arr1의 행의 길이만큼 반복
// 5. arr2의 행의 길이만큼 반복
// 6. arr2의 열의 길이만큼 반복
function solution(arr1, arr2) {
  var answer = [];
  let sum = 0;
  let sumArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      for (let k = 0; k < arr2.length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      sumArr.push(sum);
      sum = 0;
    }
    answer.push(sumArr);
    sumArr = [];
  }
  return answer;
}

// 후기
// 행렬 개어렵다
// 고등학교 이후로 손대본적 없는..
// 인덱스 값이 너무 헷갈려서 더 어려웠다
// 단순한 반복문을 통해서 해결할 수 있었지만
// 테스트였다면 과연 접근이나 할 수 있었을까

// Solution
// 다른 사람의 풀이를 첨부합니다..
function solution(arr1, arr2) {
  return arr1.map((row) =>
    arr2[0].map((x, y) => row.reduce((a, b, c) => a + b * arr2[c][y], 0))
  );
}
