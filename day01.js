// 완주 하지 못한 선수
// https://programmers.co.kr/learn/courses/30/lessons/42576

// 제한시간 30분

// 문제 설명
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.
// 입출력 예
// participant	completion	return
// [leo, kiki, eden]	[eden, kiki]	leo
// [marina, josipa, nikola, vinko, filipa]	[josipa, filipa, marina, nikola]	vinko
// [mislav, stanko, mislav, ana]	[stanko, ana, mislav]	mislav
// 입출력 예 설명
// 예제 #1
// leo는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

// 예제 #2
// vinko는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

// 예제 #3
// mislav는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.

// 분석
// 1. 인풋 문자열이 담긴 배열, 아웃풋 문자열을 리턴
// 2. participant - completion 빼서 남은 문자열을 리턴하는 방식
// 3. 인풋 값들의 길이의 차이가 1
// 4. participant와 completion을 요소들을 하나씩 비교해서 남은 하나를 리턴하는 방식
// 시간복잡도 1

// 수도 코드
// 1. answer 라는 빈 문자열
// 2. 인풋값들을 Array.sort() 정렬을 시킨다
// 3. for문 비교
// 4. 남은 하나를 리턴

function solution(participant, completion) {
  var answer = "";
  let partSort = participant.sort();
  let compSort = completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (partSort[i] !== compSort[i]) {
      answer.concat(compSort[i]);
    }
  }
  return answer;
}

// #### 문제 풀이 보완할 점

// 1. 빈 에디터에서 시작할 경우 테스트 케이스가 없기 때문에 직접 인풋 값들을 만들어서 테스트하자
// 2. 내 코드가 맞는지 아닌지 확인하면서 진행하자

// #### 후기

// 1. 30분이라는 짧은 시간동안 문제를 풀어낸다는 것이 어렵게 느껴졌다
// 2. 시간이 부족하기 때문에 문제의 정답을 맞추는 것 보다도 나의 풀이 과정을 자세히 설명하면서 진행해야겠다
// 3. 프로젝트를 함께 하는 분과 진행을 해서 심적으로 편한 느낌이었는데, 실제 면접이라면 얼마나 떨릴까? 연습을 많이 해야겠다..!
