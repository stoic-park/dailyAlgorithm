// 땅따먹기 - 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/12913

// 문제 설명
// 땅따먹기 게임을 하려고 합니다.
// 땅따먹기 게임의 땅(land)은 총 N행 4열로 이루어져 있고, 모든 칸에는 점수가 쓰여 있습니다.
// 1행부터 땅을 밟으며 한 행씩 내려올 때, 각 행의 4칸 중 한 칸만 밟으면서 내려와야 합니다.
// 단, 땅따먹기 게임에는 한 행씩 내려올 때, 같은 열을 연속해서 밟을 수 없는 특수 규칙이 있습니다.

// 예를 들면,
// | 1 | 2 | 3 | 5 |
// | 5 | 6 | 7 | 8 |
// | 4 | 3 | 2 | 1 |
// 로 땅이 주어졌다면, 1행에서 네번째 칸 (5)를 밟았으면, 2행의 네번째 칸 (8)은 밟을 수 없습니다.
// 마지막 행까지 모두 내려왔을 때, 얻을 수 있는 점수의 최대값을 return하는 solution 함수를 완성해 주세요.
// 위 예의 경우, 1행의 네번째 칸 (5), 2행의 세번째 칸 (7), 3행의 첫번째 칸 (4) 땅을 밟아 16점이 최고점이 되므로 16을 return 하면 됩니다.

// 제한사항
// 행의 개수 N : 100,000 이하의 자연수
// 열의 개수는 4개이고, 땅(land)은 2차원 배열로 주어집니다.
// 점수 : 100 이하의 자연수

// 입출력 예
// [[1,2,3,5],[5,6,7,8],[4,3,2,1]] => return 16

// 분석
// 1. 숫자로 이루어진 배열을 받아서 숫자를 리턴
// 2. 행의 갯수가 정해지지 않았다(행의 갯수만큼 반복)
// 3. 같은 열을 밟을 수 없다(다음 반복에서 같은 인덱스 값은 제외)

// 수도코드 작성
// 1. answer(sum) = maxNum
// 2. maxNum = land[0]에서 가장 큰 값
// 2-1. currIndex = land[0]에서 가장 큰 값의 인덱스 값(indexOf)
// 3. 행의 길이만큼 반복
// 3-1. targetArr = curr인덱스 값을 제외한 배열을 생성
// 3-2. maxNum =  targetArr에서 가장 큰 값
// 3-3. sum += maxNum
// 3-3. curr = 현재 행에서 max값의 인덱스 값(indexOf)

function solution(land) {
  // 1. sum
  var sum = 0;
  // 2. maxNum
  let maxNum = Math.max.apply(null, land[0]);
  //   console.log(maxNum);
  sum += maxNum; // 출발값 정해주기
  // 2-1. currIndex
  let currIndex = land[0].indexOf(maxNum);
  //   console.log(currIndex);
  // 3. 행의 길이만큼 반복
  for (let i = 1; i < land.length; i++) {
    let targetArr = [...land[i]];
    targetArr.splice(currIndex, 1);
    maxNum = Math.max.apply(null, targetArr);
    // console.log(targetArr);
    sum += maxNum;
    currIndex = land[i].indexOf(maxNum);
  }
  return sum;
}

// 후기
// 모든 테스트 통과 X
// ! DP 문제로 풀어야 한다?
// : 동적 프로그래밍 풀이 해설
// https://programmers.co.kr/learn/courses/18/lessons/846
// a 지점에 도착하기 이전의 경로는 a지점에서 출발해서 얻을 수 있는 최고 점수에 영향을 주지 않는다
// 핵심 : a 지점에 a에서 출발했을 때 얻을 수 있는 최고 점수를 적어둔다.
// 하향식
// dp[i][0] = max(dp[i+1][1], dp[i+1][2], dp[i+1][3]) + land[i][0]
// dp[i][1] = max(dp[i+1][2], dp[i+1][3], dp[i+1][0]) + land[i][1]
// dp[i][2] = max(dp[i+1][3], dp[i+1][0], dp[i+1][1]) + land[i][2]
// dp[i][3] = max(dp[i+1][0], dp[i+1][1], dp[i+1][2]) + land[i][3]
// 상향식도 가능

// solution
function solution(land) {
  return Math.max(
    ...land.reduce(
      (target, score) => {
        return [
          score[0] + Math.max(target[1], target[2], target[3]),
          score[1] + Math.max(target[0], target[2], target[3]),
          score[2] + Math.max(target[0], target[1], target[3]),
          score[3] + Math.max(target[0], target[1], target[2]),
        ];
      },
      [0, 0, 0, 0]
    )
  );
}
