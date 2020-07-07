// 정수 삼각형 - 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/43105

// 문제 설명
// []!(https://grepp-programmers.s3.amazonaws.com/files/production/97ec02cc39/296a0863-a418-431d-9e8c-e57f7a9722ac.png)
// 위와 같은 삼각형의 꼭대기에서 바닥까지 이어지는 경로 중, 거쳐간 숫자의 합이 가장 큰 경우를 찾아보려고 합니다. \
// 아래 칸으로 이동할 때는 대각선 방향으로 한 칸 오른쪽 또는 왼쪽으로만 이동 가능합니다.
// 예를 들어 3에서는 그 아래칸의 8 또는 1로만 이동이 가능합니다.
// 삼각형의 정보가 담긴 배열 triangle이 매개변수로 주어질 때, 거쳐간 숫자의 최댓값을 return 하도록 solution 함수를 완성하세요.

// 제한사항
// 삼각형의 높이는 1 이상 500 이하입니다.
// 삼각형을 이루고 있는 숫자는 0 이상 9,999 이하의 정수입니다.

// 입출력 예
// [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]] => return 30

// 분석
// 숫자배열 인풋 숫자 아웃풋
// 동적프로그래밍으로 풀자
// 동적 프로그래밍이란?
// https://namu.wiki/w/%EB%8F%99%EC%A0%81%20%EA%B3%84%ED%9A%8D%EB%B2%95
// 하향식? 상향식?
// 정삼각형이기 때문에 깊이만큼 커진다

function solution(triangle) {
  for (let i = triangle.length - 1; i > 0; i--) {
    // console.log(i)
    for (let j = 0; j < triangle[i - 1].length; j++) {
      // console.log(j)
      triangle[i - 1][j] += Math.max(triangle[i][j], triangle[i][j + 1]);
    }
  }
  return triangle[0][0];
}

// 후기
// 상향식으로 진행
// 동적계획법으로 어제 풀었던 문제와 비슷한 방식이지만 상향식으로 진행된 차이점이 있다
// 문제를 해결하기 위한 가장 작은 개념을 찾는 것이 중점이다
// 다음 행에서 둘 중 큰 값을 그 이전 행의 값에 더해주면서 올라가는 방법이다
// 아래에서 시작할 경우 각 행의 길이가 1씩 계속 줄어들기 때문에 주의해야 한다

// 참고
// https://allo-ew.tistory.com/120
