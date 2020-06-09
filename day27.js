// 단어 변환 - 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/43163

// 문제 설명
// 두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.

// 1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
// 2. words에 있는 단어로만 변환할 수 있습니다.
// 예를 들어 begin이 hit, target가 cog, words가 [hot,dot,dog,lot,log,cog]라면 hit -> hot -> dot -> dog -> cog와 같이 4단계를 거쳐 변환할 수 있습니다.

// 두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 각 단어는 알파벳 소문자로만 이루어져 있습니다.
// 각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.
// words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.
// begin과 target은 같지 않습니다.
// 변환할 수 없는 경우에는 0를 return 합니다.

// 입출력 예
// begin  = "hit" , target = "cog"
// words = ["hot", "dot", "dog", "lot", "log", "cog"]
// hit -> hot -> dot -> dog -> cog
// return 4
// ! 단어를 바꾸는게 아니고 한 글자만 바꾸는 거구나

// 분석
// 문자열, 문자배열 인풋, 숫자 리턴
// begin으로 시작해서 words에 존재하는 target까지 몇번 변해야 하는지?
// start vs words[i] count ++
// start[j] vs words[i][j]
// 글자가 같을 경우 넘어가고 다를 경우 start[j] = words[i][j]
// start = target ? return

// 수도코드 작성
// 1. 일단 target이 존재하지 않을 경우 return
function solution(begin, target, words) {
  var answer = 0;
  if (words.indexOf(target) === -1) {
    return answer;
  }

  let start = begin;
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    // 한 글자만 다를 경우 start vs words[i]
    // hit vs hot
    if (count > 1) {
      count = 0;
      continue;
    }
    for (let j = 0; j < begin.length; j++) {
      if (start[j] !== words[i][j]) {
        start[j] === words[i][j];
        count++;
      } else continue;
    }
    answer++;
    if (start === target) {
      return answer;
    }
  }
  return answer;
}

// 후기
// 입출력 예 1 dog 에서 lot 을 넘어갈 때 서로 한 글자만 다르다는 조건이 있어야 할 것 같다
// 비교하는 두 문자에서 같거나 틀린 갯수를 리턴하는 함수를 만들어서 해보는 것도?
// 글자 1개가 틀린 경우에 대해서만 비교를 실행하고 아닐 경우 통과해야 하는 과정이 중요허다

// 풀이 방법 : BFS
// BFS로 해결할 수 있는 문제이다.
// start를 큐에 넣으면서 탐색을 시작하고,
// 큐에서 꺼낸 단어가 target과 같은지 비교한다.
// target 단어와 같으면 탐색을 종료하고 탐색한 depth를 반환한다.
// target 단어와 다른 경우에는 words에 있는 단어들 중에서
// 서로 다른 알파벳이 1개인 단어들만 큐에 현재 depth를 설정하면서 추가 시킨다.
// 출처 : https://syundev.tistory.com/168

// solution
const diffOne = function (wordFirst, wordSecond) {
  let count = 0;
  for (let i = 0; i < wordFirst.length; i++) {
    if (wordFirst[i] !== wordSecond[i]) {
      count += 1;
      if (count >= 2) return false;
    }
  }
  return true;
};

const solution = function (begin, target, words) {
  if (!words.includes(target)) return 0;
  let arr = [[begin, 0]];
  while (arr) {
    let [a, c] = arr.shift();
    for (const word of words) {
      if (diffOne(a, word)) {
        if (a === target) return c;
        else arr.push([word, c + 1]);
      }
    }
  }
};
