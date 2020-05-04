// 가운데 글자 가져오기 - 프로그래머스 lv1
// https://programmers.co.kr/learn/courses/30/lessons/12903

// 제한시간 30분

// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.

// 문제 분석
// 1. 단어 s가 홀수, 짝수인 경우를 나눠서 생각
// 2. 예를 들어 5일 경우 2로 나눴을 때 2.5 => 3번째 인덱스
// 3. 예를 들어 6일 경우 2로 나눴을 때 3 => 3,4번째 인덱스를 리턴해야 한다

// 수도 코드 작성
// 1. 짝수 홀수인 경우로 나눈다
// 2. 홀 수 인 경우 2로 나눈 값에 - 0.5 의 값을 갖는 인덱스 문자를 리턴
// 3. 짝 수 인 경우 2로 나눈 값 -1, 2로 나눈 값을 갖는 2개의 인덱스 문자를 리턴
function solution(s) {
  // var answer = '';
  let slength = s.length;
  let point = slength / 2;
  // 홀수 일 경우
  if (slength % 2 === 1) {
    return s[point - 0.5];
  }
  if (slength % 2 === 0) {
    return s[point - 1] + s[point];
  }
  // return answer;
}

// 후기
// 매우 단순한 방법을 통해서 문제를 해결 했는데
// 테스트 케이스를 통과하는 시간이 많이 걸리는 것으로 봐서
// 좋은 풀이는 아닌 것 같다

// 구글링을 통해서 짧고 간단한 풀이를 찾아봤다
// 반올림 함수를 사용했다
// 반올림 함수...를 쓸 생각도 못해봤다

// 포인트
// `Math.ceil()` 올림 메소드
// `String.prototype.substr(start, count)` 문자열에서 특정 위치에서 시작하여 특정 문자 수 만큼의 문자들을 반환합니다

function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
