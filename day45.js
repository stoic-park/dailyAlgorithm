// 문자열 내 마음대로 정렬하기
// https://programmers.co.kr/learn/courses/30/lessons/12915

// 문제 설명
// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 [sun, bed, car]이고 n이 1이면 각 단어의 인덱스 1의 문자 u, e, a로 strings를 정렬합니다.

// 제한 조건
// strings는 길이 1 이상, 50이하인 배열입니다.
// strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
// strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
// 모든 strings의 원소의 길이는 n보다 큽니다.
// 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

// 입출력 예
// strings = ["sun", "bed", "car"] , n = 1 , return = ["car","bed","sun"]
// ["abce", "abcd", "cdx"], 2, ["abcd", "abce", "cdx"]

// 입출력 예 설명
// 입출력 예 1
// sun, bed, car의 1번째 인덱스 값은 각각 u, e, a 입니다.
// 이를 기준으로 strings를 정렬하면 [car, bed, sun] 입니다.
// 입출력 예 2
// abce와 abcd, cdx의 2번째 인덱스 값은 c, c, x입니다.
// 따라서 정렬 후에는 cdx가 가장 뒤에 위치합니다. abce와 abcd는 사전순으로 정렬하면 abcd가 우선하므로, 답은 [abcd, abce, cdx] 입니다.

// 분석
// 문자 배열, 숫자(인덱스) 인풋 문자배열 아웃풋
// 정렬
// 주어진 인덱스 값(n)에 해당되는 문자가 다를 경우와 같을 경우에 대해서 구분

// 수도코드
// 1. strings.sort(compareFunc)
// 2. 해당되는 문자열이 다를 경우 오름차순 정렬
// 3. 해당되는 문자열이 같을 경우 문자 전체를 비교

function solution(strings, n) {
  // var answer = [];
  strings.sort(function (a, b) {
    if (a[n] !== b[n]) {
      if (a[n] > b[n]) return 1;
      else return -1;
    } else {
      if (a > b) return 1;
      else return -1;
    }
  });
//   console.log(strings);
  return strings;
}

// 후기
// 한번 접했던 문제
// array.sort() 에 대한 이해가 필요한 문제다
// array.sort(compareFunc) , 안에 들어가는 compareFunc 에 대한 이해
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function compare(a, b) {
    if (a is less than b by some ordering criterion) {
      return -1;
    }
    if (a is greater than b by the ordering criterion) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
// localeCompare 메소드의 경우 단순 알파벳이 아닌 문자에 대해서도 비교를 해주기 때문에 알아두면 좋겠다!


// solution
function solution(strings, n) {
  return strings.sort((a, b) =>
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
  );
}
