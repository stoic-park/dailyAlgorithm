// 프린터 - 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/42587

// 문제 설명
// 일반적인 프린터는 인쇄 요청이 들어온 순서대로 인쇄합니다. 그렇기 때문에 중요한 문서가 나중에 인쇄될 수 있습니다. 이런 문제를 보완하기 위해 중요도가 높은 문서를 먼저 인쇄하는 프린터를 개발했습니다. 이 새롭게 개발한 프린터는 아래와 같은 방식으로 인쇄 작업을 수행합니다.

// 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
// 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
// 3. 그렇지 않으면 J를 인쇄합니다.
// 예를 들어, 4개의 문서(A, B, C, D)가 순서대로 인쇄 대기목록에 있고 중요도가 2 1 3 2 라면 C D A B 순으로 인쇄하게 됩니다.

// 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 알고 싶습니다. 위의 예에서 C는 1번째로, A는 3번째로 인쇄됩니다.

// 현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities와 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location이 매개변수로 주어질 때, 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 현재 대기목록에는 1개 이상 100개 이하의 문서가 있습니다.
// 인쇄 작업의 중요도는 1~9로 표현하며 숫자가 클수록 중요하다는 뜻입니다.
// location은 0 이상 (현재 대기목록에 있는 작업 수 - 1) 이하의 값을 가지며 대기목록의 가장 앞에 있으면 0, 두 번째에 있으면 1로 표현합니다.

// 분석
// 주어진 우선순위, 위치 값을 통해서 언제 리턴되는지 알아야 한다
// 먼저 주어진 위치값을 통해서 인덱스값을 고정하고
// 우선순위 배열에서 내 것을 제외한 나머지 값들의 비교를 통해서
// 내 우선순위와 같거나 작은게 있으면 인덱스 값을 1씩 + 하면 되지 않을까?

// 수도코드 작성
// 1. 인덱스 값
// 2.
// 3. 스플라이스를 통해서 내가 원하는 숫자의 우선순위를 지운다
// 4. 반복문을 통해서 선형적으로 탐색해서 같거나 작은게 있으면 인덱스 값 ++

function solution(priorities, location) {
  var answer = 0;
  let current = priorities[location];
  let index = 1;
  console.log(index);
  priorities.splice(location, 1);
  for (let i = 0; i < priorities.length - 1; i++) {
    if (current <= priorities[i]) {
      index++;
    }
  }
  answer = index;
  return answer;
}

// 후기
// 문제를 제대로 이해하지 못했다
// 단순히 주어진 입출력 예에 대한 기본 테스트만 통과했다
// 데이터 구조..여전히 익숙하지 않다
// 날잡아서 공부좀 해야겠다
function solution(priorities, location) {
  let list = priorities.map((target, index) => ({
    my: index === location,
    value: target,
  }));
  let count = 0;
  while (true) {
    let current = list.splice(0, 1)[0];
    // let current = list.shift();
    if (list.some((target) => target.value > current.value)) {
      list.push(current);
    } else;
    {
      count++;
      if (current.my) return count;
    }
  }
}

// while문의 사용
// 객체를 이용한 풀이
// some이라는 메소드
