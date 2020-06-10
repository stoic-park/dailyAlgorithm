// 단속카메라 - 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/42884

// 문제 설명
// 고속도로를 이동하는 모든 차량이 고속도로를 이용하면서 단속용 카메라를 한 번은 만나도록 카메라를 설치하려고 합니다.
// 고속도로를 이동하는 차량의 경로 routes가 매개변수로 주어질 때, 모든 차량이 한 번은 단속용 카메라를 만나도록 하려면 최소 몇 대의 카메라를 설치해야 하는지를 return 하도록 solution 함수를 완성하세요.

// 제한사항
// 차량의 대수는 1대 이상 10,000대 이하입니다.
// routes에는 차량의 이동 경로가 포함되어 있으며 routes[i][0]에는 i번째 차량이 고속도로에 진입한 지점, routes[i][1]에는 i번째 차량이 고속도로에서 나간 지점이 적혀 있습니다.
// 차량의 진입/진출 지점에 카메라가 설치되어 있어도 카메라를 만난것으로 간주합니다.
// 차량의 진입 지점, 진출 지점은 -30,000 이상 30,000 이하입니다.

// 입출력 예
// [[-20,15], [-14,-5], [-18,-13], [-5,-3]] => return 2
// -5 지점에 카메라를 설치하면 두번째, 네번째 차량이 카메라를 만납니다
// -15 지점에 카메라를 설치하면 첫번째, 세번 째 차량이 카메라를 만납니다

// 분석
// 배열 인풋 숫자 리턴
// ? - 가 의미하는 것은? [-20, 15] : 0번째 차량이 -20에서 들어와서 15에서 나갔다
// 어떤식으로 풀어야 하는가..? 탐욕법?

// 오름차순 정렬
// 앞의 인덱스의 도착점 이 다음 경로의 시작점보다 크면 포함 관계를 갖는 것

function solution(routes) {
  var answer = 0;
  // 오름 차순 정렬
  routes.sort((a, b) => a[0] - b[0]);
  //   console.log(routes);
  //   for (let i = 0; i < routes.length - 1; i++) {
  //     if (routes[i][1] < routes[i + 1][0]) {
  //       answer++;
  //     } else continue;
  //   }

  let target = routes[0][1];
  routes.pop(0);
  // answer += 1;

  for (let i in routes) {
    if (i[0] <= target) {
      target = Math.min(i[1], target);
    } else {
      target = i[1];
      answer += 1;
    }
  }
  return answer;
}

// 후기
// 탐욕법 3번째
// 문제를 이해하는 것이 가장 큰 관건이었다
// 오름차순으로 정렬한 뒤
// 첫번째의 마지막 지점과 다음 차의 시작 지점을 비교해서 포함 여부를 생각한다는 것이 포인트

// solution
function solution(routes) {
  var answer = [];
  routes.sort((a, b) => a[1] - b[1]);
  for (let item of routes) {
    if (!checkCam(item, answer)) {
      answer.push(item[1]);
    }
  }
  return answer.length;
}
function checkCam(route, cameras) {
  for (let cam of cameras) {
    if (route[0] <= cam && cam <= route[1]) {
      return true;
    }
  }
  return false;
}
