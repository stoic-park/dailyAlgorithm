// 기능 개발 - 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/42586

// 문제 설명
// 프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

// 또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

// 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

// 제한 사항
// 작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
// 작업 진도는 100 미만의 자연수입니다.
// 작업 속도는 100 이하의 자연수입니다.
// 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.

// 분석
// 배열 인풋,,, 배열 아웃풋
// 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고,
// ! 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.
// progresses 를 통해서 기본적인 배포 횟수와 배포일을 구한다?
// speeds를 통해서

// 첫 배포 까지 걸리는 기간
// 첫 배포 기간에 진도율 100인 애들
function solution(progresses, speeds) {
  var answer = [];
  // 배포까지 걸리는 기간
  let dDay = [];
  for (let i = 0; i < progresses.length; i++) {
    dDay.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }
  // console.log(dDay);
  // 배포일에 진행상황
  let dleng = dDay.length;
  // let per = [];
  let count = 0;
  for (let i = 0; i < dleng; i++) {
    for (let j = 0; j < progresses.length; j++) {
      let pro = progresses[j] + dDay[i] * speeds[j];
      if (pro >= 100) {
        count++;
        speeds[j] = 0;
      }
    }
    answer.push(count);
    if (count > 1) {
      dleng--;
    }
    count = 0;
  }
  return answer;
}

// 후기
// 분석 이후에 수도코드를 어느정도 가이드라인을 잡고 풀었어야 하지 않나?
// 때려 맞추기 식의 풀이로 인해서 좋지 못한 결과가 나온것 같다
// 작업률 퍼센트에 집중하느라
// 완료까지 걸리는 날짜가 작으면 카운트해주면 될텐데..!
// 너무 어렵게 생각했던것 같다!

function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
