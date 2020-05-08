// 크레인 인형뽑기 게임
// https://programmers.co.kr/learn/courses/30/lessons/64061

// 분석
// 1. N x N 의 배열
// 2. moves로 주어진 배열의 값대로 추출
// 3. 그리고 따로 뽑은 인형을 담을 배열
// 4. 담긴 배열에서 연속으로 같은 경우 삭제..
// 5. 그렇다면 기존의 배열과 삭제된 배열의 길이를 비교한 값을 리턴한다면?
// ex )
// 1,5,3,5,1,2,1,4
// => 4,3,1,1,3,2,3,4 // 1,1 삭제
// => 4,3,3,2,3,4  // 3,3 삭제
// => 4,2,3,4
// 총 4개 삭제..!

// 수도 코드 작성
// 1. 이중 for문
// 2. 0일 경우 넘어가고 0이 아닐 경우 그 값을 빈 배열에 넣고 0으로 바꿈
// 3. 인형을 담은 배열의 길이 확인
// 4. 같은 숫자를 찾아서 삭제
// 5. 길이 비교
function solution(board, moves) {
  var answer = 0;
  let copyBoard = board;
  let box = [];
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      // 0,0 => 1,0 => 2,0 순으로 탐색
      if (copyBoard[j][moves[i] - 1] !== 0) {
        box.push(copyBoard[j][moves[i] - 1]);
        copyBoard[j][moves[i] - 1] = 0;
        break;
      }
    }
    while (box.length > 1) {
      let temp = box.pop();
      if (temp === box.slice(-1)[0]) {
        box.pop();
        answer += 2;
      } else {
        box.push(temp);
        break;
      }
    }
  }
  // console.log(board);
  console.log(copyBoard);
  console.log(box);
  return answer;
}

// 후기

// 빈 박스를 두고
// 그곳에 뽑은 인형들을 담은 후에 해결하려고 했다
// 담는 것까지는 성공했으나
// 담고 난 이후에 중복된 경우에 대한 해결에서 애를 먹었다..
