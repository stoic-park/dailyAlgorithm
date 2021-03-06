// 문제 설명
// 수평 직선에 탑 N대를 세웠습니다. 모든 탑의 꼭대기에는 신호를 송/수신하는 장치를 설치했습니다. 발사한 신호는 신호를 보낸 탑보다 높은 탑에서만 수신합니다. 또한, 한 번 수신된 신호는 다른 탑으로 송신되지 않습니다.

// 예를 들어 높이가 6, 9, 5, 7, 4인 다섯 탑이 왼쪽으로 동시에 레이저 신호를 발사합니다. 그러면, 탑은 다음과 같이 신호를 주고받습니다. 높이가 4인 다섯 번째 탑에서 발사한 신호는 높이가 7인 네 번째 탑이 수신하고, 높이가 7인 네 번째 탑의 신호는 높이가 9인 두 번째 탑이, 높이가 5인 세 번째 탑의 신호도 높이가 9인 두 번째 탑이 수신합니다. 높이가 9인 두 번째 탑과 높이가 6인 첫 번째 탑이 보낸 레이저 신호는 어떤 탑에서도 수신할 수 없습니다.

// 송신 탑(높이)	수신 탑(높이)
// 5(4)	4(7)
// 4(7)	2(9)
// 3(5)	2(9)
// 2(9)	-
// 1(6)	-
// 맨 왼쪽부터 순서대로 탑의 높이를 담은 배열 heights가 매개변수로 주어질 때 각 탑이 쏜 신호를 어느 탑에서 받았는지 기록한 배열을 return 하도록 solution 함수를 작성해주세요.

// 제한 사항
// heights는 길이 2 이상 100 이하인 정수 배열입니다.
// 모든 탑의 높이는 1 이상 100 이하입니다.
// 신호를 수신하는 탑이 없으면 0으로 표시합니다.

// 분석
// 배열 인풋 배열 아웃풋
// 스택/큐 카테고리긴 한데
// 간단히 생각했을 때
// 선형적으로
// 이전의 값들 중에 나보다 큰 값이 있으면
//

// 수도코드 작성
// 1. 빈 배열 선언
// 2. 선형적인 반복(뒤에서)
// 3. 인덱스 값 (default = 0)
// 4. 현재의 값과 비교하는 반복문 추가
// 5. 현재의 값보다 큰 것이 있다면 그 값을 배열에 추가 , break
// 6. 거꾸로

function solution(heights) {
  var answer = [];
  // 선형적인 반복문
  for (let i = heights.length - 1; i >= 0; i--) {
    let index = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (heights[j] > heights[i]) {
        index = j + 1;
        break;
      }
    }
    answer.push(index);
  }
  return answer.reverse();
}

// 후기
// 어떠한 방식으로 풀지에 대해서
// 틀리더라도 좋으니
// 한가지 방향으로 수도코드를 잡고
// 그대로 구현해나가면서 방황하는 시간을 줄였으면 좋겠다
// 이게 좋을까 저게 좋을까.. 간보다가는 시간만 다 보낼 것 같다
//
// 인덱스 값을 주의해야겠다
// 테스트 케이스가 있어서 다행이지
// 반복문의 인덱스 값도 예상 못해서 자꾸..

// 어렵다
