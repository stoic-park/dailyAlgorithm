// 소수 찾기 - 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/42839

// 문제 설명
// 한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

// 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers는 길이 1 이상 7 이하인 문자열입니다.
// numbers는 0~9까지 숫자만으로 이루어져 있습니다.
// 013은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.

// 입출력 예
// "17" => return 3
// "011" => return 2

// 입출력 예 설명
// "17" => [1,7] => [1,7,17,71] => [7,17,71] => return 3
// "011" => [0,1,1]
// 가능한 숫자의 조합 => [0,1,01,01,10,11,10,11,011,011,101,110,101,110]
// 중복된 숫자 제거 => [1,10,11,101,110]
// 소수 확인 => [11,101]

// 분석
// 숫자로 이루어진 문자열 인풋, 숫자 아웃풋
// 1. 주어진 숫자로 만들 수 있는 숫자의 조합을 알아야 한다
// 2. 소수인지 아닌지 확인할 수 있어야 한다
// 소수란?
// 1과 자신을 제외한 어떠한 정수로도 나누어지지 않는 수가 소수이다
// : 선형적으로 1을 제외한 2부터 나눴을때 0으로 나누어 떨어지면 소수가 아니다

// 수도코드
// 1. 빈 배열
// 2. 주어진 숫자 문자열을 숫자 배열로 변환?
// ? 가능한 숫자 조합을 만들기 위해서 숫자로 바꿀 필요가 있을까?
// 3. 변환된 숫자 배열로 가능한 숫자 조합을 빈 배열에 푸쉬
// 4. 중복된 숫자 제거
// 5. 소수 찾기

function solution(numbers) {
  // console.log(typeof numbers)
  // 1. 빈 배열
  let box = [];
  // 2. 배열로 전환
  let strNums = numbers.split("");

  // 3. 가능한 모든 숫자 조합을 만드는 재귀 함수
  function recurNum(array, start) {
    if (start.length > 0) {
      if (box.includes(Number(start)) === false) {
        box.push(Number(start));
      }
    }
    if (array.length > 0) {
      for (let i = 0; i < array.length; i++) {
        let temp = array.slice(0); // 0번째 인덱스부터 복사
        temp.splice(i, 1);
        recurNum(temp, start + array[i]); // 이게 핵심
      }
    }
  }

  recurNum(strNums, "");
  console.log(box);

  // 4. 소수 제거 내부 함수
  function primeNums(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  // 5. 해당되는 경우 카운트++
  let count = 0;
  for (let i = 0; i < box.length; i++) {
    if (primeNums(box[i])) count++;
  }

  return count;
}

// 후기
// 재귀함수를 사용해서 모든 가능한 숫자의 조합을 구할 수만 있다면
// 처음 접근한 방법 자체는 나쁘지 않다
// 그런데 다른사람들의 풀이를 봤을 때 효율성 부분에서 걸릴수도 있겠다
// : 여러 가지 정보를 확인하고 처음 생각했던데로 풀었더니 통과했다
// 접근에는 문제가 없었다
// 중복되지 않는 모든 숫자의 조합을 구하는 방법이 핵심이었던 것 같다!
// 그를 위해서 재귀함수를 사용할 수 있느냐가 포인트!

// 중복되지 않는 모든 숫자의 조합을 구하는 방법
// :
let box = [];
let strNums = numbers.split("");
function recurNum(array, start) {
  if (start.length > 0) {
    if (box.includes(Number(start)) === false) {
      box.push(Number(start));
    }
  }
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      let temp = array.slice(0); // 0번째 인덱스부터 복사
      temp.splice(i, 1);
      recurNum(temp, start + array[i]); // 이게 핵심
    }
  }
}

// solution1
function solution(numbers) {
  var answer = 0;
  var set = new Set();
  makeNumbers(set, "", numbers.split(""));
  return set.size;
}

function issosu(num) {
  if (num < 2) return false;
  for (var i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function makeNumbers(set, cur, nums) {
  if (nums.length === 0) return;
  var clone = nums.slice().reverse();
  nums.forEach(function (i) {
    var su = clone.pop();
    var num = Number(cur + su);
    if (issosu(num)) {
      set.add(num);
    }

    makeNumbers(set, cur + su, clone);
    clone.unshift(su);
  });
}
