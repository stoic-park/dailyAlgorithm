// 구명보트 - 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/42885

// ! 탐욕법 (greedy)

// 문제 설명
// 무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.
// 예를 들어,
// 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면 2번째 사람과 4번째 사람은 같이 탈 수 있지만
// 1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.
// 구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.
// 사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때,
// 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 무인도에 갇힌 사람은 1명 이상 50,000명 이하입니다.
// 각 사람의 몸무게는 40kg 이상 240kg 이하입니다.
// 구명보트의 무게 제한은 40kg 이상 240kg 이하입니다.
// 구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 주어지므로 사람들을 구출할 수 없는 경우는 없습니다.

// 입출력 예
// [70,50,80,50], 100 : 3
// [70,80,50], 100 : 3

// 70, 50 > 120
// 50, 80 > 130
// 50, 50 <= 100 카운트 +

// 분석
// 배열, 숫자 인풋 숫자 리턴
// 탐욕법
// 선형적으로 첫번째 인자를 고정으로 나머지 요소들중 더해서 limit를 넘지 않는 값을 찾는다
// 1.만족하는 값이 없을 경우 shift, answer++
// 2.만족하는 값이 있을 경우 해당 값을 제거(splice), shift, count ++;

// 수도코드 작성
// 1. answer
// 2. 반복문 2번
// 3. 만족하는 값이 없을 경우 people.shift() , answer ++
// 4. 있을 경우 해당 값을 splice, 그리고 쉬프트 그리고 answer ++
// 5. return answer
function solution(people, limit) {
  var answer = 0;
  let leng = people.length;
  for (let i = 0; i < leng; i++) {
    // 70 고정
    for (let j = 1; j < leng - 1; j++) {
      if (people[0] + people[j] <= limit) {
        people.splice(j, 1);
        leng--;
        break;
      }
    }
    people.shift();
    answer++;
  }
  return answer;
}

// 후기
// 탐욕법..
// 단순 반복문을 통해서 해결하려고 했다
// 방법이 좋지 못했다
// 정렬이나 조건을 통해서 범위를 줄여줬다면 어땠을까?

// solution 1

function solution(people, limit) {
  people.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0, j = people.length - 1; i < j; j--) {
    if (people[i] + people[j] <= limit) i++;
  }
  return people.length - i;
}

// solution 2

function solution(people, limit) {
  var answer = 0;
  let count = 0;
  // 내림차순 정렬
  people.sort((a, b) => b - a);

  //같이 탈 수 있는 사람 확인
  while (people.length !== 0) {
    //2명 가능한 경우
    if (limit - people[count] >= people[people.length - 1]) {
      answer = answer + 1;
      people.shift();
      people.pop();

      // 한명만 가능한 경우
    } else {
      people.shift();
      answer = answer + 1;
    }
  }

  return answer;
}
