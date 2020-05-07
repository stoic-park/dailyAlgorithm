// 문자열 내 마음대로 정렬하기
// https://programmers.co.kr/learn/courses/30/lessons/12915

// 제한시간 30분

// 문제 설명
// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 [sun, bed, car]이고 n이 1이면 각 단어의 인덱스 1의 문자 u, e, a로 strings를 정렬합니다.

// 제한 조건
// strings는 길이 1 이상, 50이하인 배열입니다.
// strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
// strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
// 모든 strings의 원소의 길이는 n보다 큽니다.
// 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

// 분석
// 1. n번째 인덱스 값을 비교한다
// 2. 인덱스 값을 오름차순으로 정렬하고 그에 해당하는 값들을 푸쉬해준다면?

// 수도코드 작성
// 1. 빈 배열 선언
// 2. n번째 인덱스 값들을 나타내는 배열을 오름차순 정렬
// 3. 반복문을 통해서 인덱스 값이 일치하는 문자를 찾아서 푸쉬

function solution(strings, n) {
  var answer = [];
  let indexString = [];
  for (let i = 0; i < strings.length; i++) {
    indexString.push(strings[i][n]);
  }
  indexString.sort();
  // console.log(indexString) //
  // 반복문 두번?
  for (let j = 0; j < strings.length; j++) {
    for (let k = 0; k < indexString.length; k++) {
      if (strings[k].indexOf(n) === indexString[j]) {
        answer.push(strings[k]);
      }
    }
  }
  return answer;
}

// 후기
// 쟁점은 localeCompare() 메서드와 sort() 메서드에 대한 이해가 쟁점이다
// 여전히 js에 대한 익숙함이 부족하기 때문에
// 문제를 딱 접했을 때 sort를 활용하기보다도 단순하게 for문을 억지로 사용하려는 모습이 강했꼬
// 결국 문제를 해결하지 못했다..

// Tips

// The localeCompare() 메서드는 기준 문자열과 비교했을 때 비교 대상 문자열이 정렬상 전에 오는지,
// 후에 오는지 혹은 같은 순서에 배치되는지를 알려주는 숫자를 리턴합니다.

// sort() 메소드를 이용해 n번째 글자를 기준으로 정렬

// Solution 1

function solution(strings, n) {
  strings.sort(function (a, b) {
    var first = a[n];
    var second = b[n];
    if (first === second) {
      return (a > b) - (a < b);
    } else {
      return (first > second) - (first < second);
    }
  });
  return strings;
}

// Solution 2 - localeCompare

function solution(strings, n) {
  return strings.sort((a, b) =>
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
  );
}
