// 큰 수 만들기 - 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/42883

// 문제 설명
// 어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.

// 예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.

// 문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.

// 제한 조건
// number는 1자리 이상, 1,000,000자리 이하인 숫자입니다.
// k는 1 이상 number의 자릿수 미만인 자연수입니다.

// 입출력 예
// "1924" , 2 => "94"
// "1231234" , 3 => "3234"
// "4177252824" , 4 => "775841"

// 분석
// 문자열, 숫자 인풋 문자열 아웃풋
// 큰 숫자를 구하기 위해 단순히 내림차순, 오름차순 정렬을 사용할 수 없다
// k개의 숫자를 랜덤으로 제거하는게 아니라 선형적으로 지운다
// ! 주어진 숫자를 변형해서는 안된다

// ? 탐욕법(greedy)
// 미래를 생각하지 않고 각 단계에서 가장 최선의 선택을 하는 기법입니다.
// 이렇게 각 단계에서 최선의 선택을 한 것이 전체적으로도 최선이길 바라는 알고리즘이죠.
// https://www.zerocho.com/category/Algorithm/post/584ba5c9580277001862f188 (제로초 블로그)

// 수도코드작성
// 1. max, current
// 2. 선형적으로 비교
// 3. max 보다 작으면 current 에 해당하는 값 지우고 current + 1
// 4. max 보다 크면 : max에 해당하는 값 지우고, max =  current , current + 1
// ? 같으면 건너뛰어야 하나?
// 5. 이거를 주어진 값 만큼 반복

function solution(number, k) {
  // console.log(typeof number === "string")
  let answer = number;
  let max = 0;
  let current = 1;
  let count = 0;
  // for (let i = 0; i < k; i++) {
  while (count < k) {
    for (let j = 0; j < answer.length; j++) {
      if (answer[max] < answer[current]) {
        answer = answer.replace(answer[max], "");
        max = current;
        current += 1;
        break;
      }
      if (answer[max] > answer[current]) {
        answer = answer.replace(answer[current], "");
        // current += 1;
        break;
      } else {
        current += 1;
        continue;
      }
    }
    count++;
  }
  return answer;
}

// 후기
// 그리드..?
// 그리드 탐색에 대해서 대략적으로 파악한 후에 풀이에 들어갔다
// 다만, 이 문제에서 나를 힘들게 했던 것은
// 문자열에서 특정 인덱스 값을 지우는 방법과
// 내가 만든 for loof에 내가 빠져버렸다는 것...?

function solution(number, k) {
  var stack = []; // b : 최종 글자들이 저장될 스택 (숫자가 큰!)
  for (var i = 0; i < number.length; i++) {
    // 모든 숫자 비교
    var now = number[i]; // 현재 인덱스 숫자. 처음에는 그냥 push

    // 무조건 push 하고 다음 for 문에서 이전인덱스 숫자와 나랑 비교해서 현재인덱스가 이전인덱스보다 크면 pop하고 넣어줌. 제거하는 숫자인 (k)를 1 감소
    // 제거할 숫자를 다 채웠으면 그냥 넣음
    while (k > 0 && stack[stack.length - 1] < now) {
      stack.pop();
      k--;
    }
    stack.push(now);
  }
  // k가 0일 경우 스택은 그대로,
  // but k가 남아있으면 뒤에서부터 제거해준다. (ex. 1010,2 -> 11)
  // ? 이걸 해주지 않으면 테스트 12를 통과하지 못한다
  stack.splice(stack.length - k, k);
  var answer = stack.join("");

  return answer;
}

// 출처 : https://velog.io/@kimtaeeeny/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%81%B0-%EC%88%98-%EB%A7%8C%EB%93%A4%EA%B8%B0-javascript

function solution(number, k) {
  const answer = [];
  let head = 0;
  let del = k;

  answer.push(number[head++]);
  while (answer.length < number.length - k || head < number.length) {
    if (del && answer[answer.length - 1] < number[head]) {
      answer.pop();
      del--;
      continue;
    }
    answer.push(number[head++]);
  }

  return answer.slice(0, number.length - k).join("");
}
