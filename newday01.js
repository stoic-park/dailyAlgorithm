// 두 개 뽑아서 더하기 - 프로그래머스

// 정수배열

// 1. 오름차순 정렬
// 2. 본인을 제외한 인자들과 순차적으로 합한 값을 결과 배열에 푸쉬
// 2-1. 결과배열에 존재하지 않을 경우에만 푸시
// 3. 오름차순으로 담아

// Set을 이용한 풀이를 원하는 것 같은데?
function solution(numbers) {
  var answer = [];
  // 1. 오름차순 정렬
  numbers.sort((a, b) => a - b);
  console.log(numbers);

  // 2. 반복
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      if (!answer.includes(sum)) answer.push(sum);
    }
  }
  // 3. 오름차순으로 담아
  return answer.sort((a, b) => a - b);
}
