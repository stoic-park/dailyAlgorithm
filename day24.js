// H-Index
// https://programmers.co.kr/learn/courses/30/lessons/42747

// 문제 설명
// H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.

// 어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.

// 어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
// 논문별 인용 횟수는 0회 이상 10,000회 이하입니다.

// 입출력 예
// [3,0,6,1,5] => return 3
// 이 과학자가 발표한 논문의 수는 5편이고,
// 그중 3편의 논문은 3회 이상 인용되었습니다.
// 그리고 나머지 2편의 논문은 3회 이하 인용되었기 때문에 이 과학자의 H-Index는 3입니다.

// 분석
// 문제를 이해하기가 조금..
// 발표한 논문의 수 n,
// 논문 당 인용된 수
// h번 이상 인용된 논문이 h편 나머지 논문이 h번 이하.. h의 최댓값 \
// 1 : 4편, 나머지 2편 x
// 2 : 3편, 나머지 3편 x
// 3 : 3편, 나머지 3편 o
// 4 : 2편, 나머지 4편 x
// 5 : 2편, 나머지 4편 x
// 6 : 1편 .나머지 5편 x

// 1. citation의 길이만큼 반복
// 2. target , 조건을 만족하는 논문의 수 count , 남은 논문의 수 isRemaining
// 3. target = count , target >= isRemaining 일 경우 answer = target, break
function solution(citations) {
  var answer = 0;
  let cLength = citations.length;
  for (let i = 0; i < cLength; i++) {
    let target = i;
    let count = 0;
    citations.forEach((element) => {
      if (element >= target) {
        count++;
      }
    });
    // console.log(count)
    let isRemaining = cLength - target;
    if (target === count && target >= isRemaining) {
      answer = target;
      //   break;
    }
  }
  return answer;
}

// 후기
// 테스트케이스 9번과 11번을 통과하지 못했다
// 문제 분석을 천천히 했고
// 그에 따라 어떻게 풀면 괜찮겠다.. 생각했고
// 그대로 풀었다
// 두 테케를 통과하기 위한 조건이 더 필요한 것 같은데
// 그것을 제외하면 문제를 푸는 과정은 나쁘지 않았다고 생각한다
// 솔루션을 찾아보면서 어떤 조건이 필요한지 알아보자!

// solution
function solution(citations) {
  var answer = 0;
  // 내림차순 정렬
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] > i) answer++;
    // 6 > 0
    // 5 > 1
    // 3 > 2
    // 1 < 3 break
    else break;
  }
  return answer;
}

// 내림차순을 이용한 풀이가 인상적이었다
// 조건문이 굉장히 간단하게 표현되었는데 이해하기에는 어려웠던 이유가
// H-Index라는 개념 자체에 대한 이해가 부족했던 것 같다
// 수학적인 개념이 조금 필요한 것 같기도 하다
