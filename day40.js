// N개의 최소공배수 - 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/12953

// 문제 설명
// 두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.

// 제한 사항
// arr은 길이 1이상, 15이하인 배열입니다.
// arr의 원소는 100 이하인 자연수입니다.

// 입출력 예
// [2,6,8,14] => 168
// [1,2,3] => 6

// 분석
// 숫자 배열 => 숫자
// 최소 공배수
// 공통되는 배수
// ! 두 수를 비교하는것이 아니라 N개의 경우
// 시간 복잡도를 생각해야 하는 문제같다
// 2,6 의 최소공배수 6
// 6,8의 최소공배수 24
// 24, 14의 최소공배수
// 24, 48, 72, 96, 120, 144, 168
// 14, 28, 42, 56, 70, 84, 98, 112, 126, 140, 154, 168
// 두개씩 비교해나가는 방법?
// 1. 두 숫자를 비교해서 최소공배수를 비교하는 내부함수를 하나 만들고
// 2. 주어진 숫자배열의 길이만큼 반복하는?

// 최소공배수(lcd)를 구하는 방법
// 두 수의최대공약수(gcd)를 구한다
// 두 수의 곱을 최대공약수로 나눈다  a*b / gcd

// 수도코드 작성
// 1. 최대공약수를 구하는 내부함수
// 2. 최소공배수를 구하는 내부함수
// 3. arr의 길이만큼 반복

function solution(arr) {
  var answer = arr[0];

  // 1. 두 숫자의 최대공약수를 구하는 내부 함수
  const gcd = (a, b) => {
    return b ? gcd(b, a % b) : Math.abs(a);
  };

  // 2. 두 수의 최소공배수를 구하는 내부 함수
  const lcd = (a, b) => {
    return (a * b) / gcd(a, b);
  };

  // 3. arr의 길이만큼 반복
  // 2, 6
  // 6, 8
  // 24, 14
  let target = lcd(arr[0], arr[1]);
  for (let i = 0; i < arr.length - 2; i++) {
    answer = lcd(target, arr[i + 2]);
    target = answer;
  }

  return answer;
}

// 후기
// 최대공약수에 이어서 최소공배수를 구하는 문제
// 단순 두수의 비교가 아니라 N개의 최소공배수를 구하는 문제
// 수학적 개념을 바탕으로 한 문제이기 때문에 검색을 활용했다
// 재귀를 통해서 최대공약수를 구하는 방법이 아주 신기하고 재밌었다
// 최대공약수를 통해서 최소공배수를 구하는 방법을 선택했다

// solution 1
function nlcm(num) {
  return num.reduce((a, b) => (a * b) / gcd(a, b));
}

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}
// 신박허네..

// 정리
// 최대공약수를 구하는 방법 1
function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}
// 최대공약수를 구하는 방법 2
const gcd = (a, b) => {
  return b ? gcd(b, a % b) : Math.abs(a);
};

// 최대공약수를 구하는 방법 3
const gcd = (a, b) => {
  let num = a > b ? a : b;
  let max;

  for (let i = 1; i <= num; i++) {
    if (a % i === 0 && b % i === 0) {
      max = i;
    }
  }
  return max;
};
