// K번째 수 - 프로그래머스 lv1
// https://programmers.co.kr/learn/courses/30/lessons/42748

// 제한시간 30분

// 문제 설명
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// array의 길이는 1 이상 100 이하입니다.
// array의 각 원소는 1 이상 100 이하입니다.
// commands의 길이는 1 이상 50 이하입니다.
// commands의 각 원소는 길이가 3입니다.

// 분석
// command에 있는 숫자 3개 중에 2개로 주어진 숫자배열 중 원하는 값들만 추출
// 추출한 배열을 오름차순 정렬
// command 3번째 숫자를 인덱스 값으로 하는 값을 리턴...!
// command가 숫자로 이루어진 배열로 나타나기 때문에 for문을 통해 array.push

function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    let first = array.slice(commands[i][0] - 1, commands[i][1]);
    // let second = first.sort();
    let second = first.sort(function (a, b) {
      return a - b;
    });
    let third = second[commands[i][2] - 1];
    answer.push(third);
    console.log(answer);
  }
  return answer;
}

// 후기
// 생각보다 간단한 문제였다
// 숫자 배열에서 원하는 값만 얻기 위해 slice 메소드를 사용했고
// 빈 배열에 원하는 인덱스의 값만 push 메소드를 사용했다
// 다만 테스트 케이스를 돌렸을 때 1가지가 통과되지 않아서 어떤 문제가 있나 생각해봤는데
// 숫자 배열의 오름차순 정렬 법을 저번에 익혔던 방식대로 처리해주었더니 해결됐다

// 조금씩 알아가자!
// 첫 술에 배부르랴?
