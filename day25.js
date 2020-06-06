// 멀쩡한 사각형
// https://programmers.co.kr/learn/courses/30/lessons/62048

// 문제 설명
// 가로 길이가 Wcm, 세로 길이가 Hcm인 직사각형 종이가 있습니다.
// 종이에는 가로, 세로 방향과 평행하게 격자 형태로 선이 그어져 있으며, 모든 격자칸은 1cm x 1cm 크기입니다.
// 이 종이를 격자 선을 따라 1cm × 1cm의 정사각형으로 잘라 사용할 예정이었는데,
// 누군가가 이 종이를 대각선 꼭지점 2개를 잇는 방향으로 잘라 놓았습니다.
// 그러므로 현재 직사각형 종이는 크기가 같은 직각삼각형 2개로 나누어진 상태입니다.
// 새로운 종이를 구할 수 없는 상태이기 때문에,
// 이 종이에서 원래 종이의 가로, 세로 방향과 평행하게 1cm × 1cm로 잘라 사용할 수 있는 만큼만 사용하기로 하였습니다.
// 가로의 길이 W와 세로의 길이 H가 주어질 때,
// 사용할 수 있는 정사각형의 개수를 구하는 solution 함수를 완성해 주세요.

// 제한사항
// W, H : 1억 이하의 자연수

// 분석
// 숫자 인풋 숫자 아웃풋
// 대각선이 지나가는 정사각형의 갯수를 파악하는게 포인트
// 64 + 144 =  208

// ! 힌트 : 가로길이+세로 길이 - 최대 공약수
// 최대공약수 : 공통으로 갖는 약수 중 가장 큰 수

// 수도코드 작성
// 1. 전체 사각형의 갯수
// 2. 최대공약수 구하기
// 3. 대각선이 지나가는 사각형의 갯수
// 4. 빼기
function solution(w, h) {
  // 1. 전체 사각형의 갯수
  let squareAll = w * h;
  // console.log(squareAll)
  // 2. 최대 공약수 구하기

  // 2-1. 큰 수 구하기
  let maxNum = (w, h) => (w >= h ? w : h);
  let maxNumber = maxNum(w, h);
  // console.log(maxNumber)

  // ! 작은 수로 풀기?
  let divisor;
  var min = Math.min(w, h);
  for (var i = min; i > 0; i--) {
    if (w % i === 0 && h % i === 0) {
      divisor = i;
      break;
    }
  }

  // 2-2 ,최대 공약수 구하기
  //   let divisor;
  //   for (let i = 0; i < maxNumber; i++) {
  //     if (w % i === 0 && h % i === 0) {
  //       divisor = i;
  //     }
  //   }
  //   console.log(divisor);

  // 3. 대각선이 지나는 사각형의 갯수
  let squareLine = w + h - divisor;
  // 4. 리턴
  return squareAll - squareLine;
  //   return answer;
}

// 후기
// 1. 최대공약수를 통해 풀었다는 힌트를 통해서 풀었다
// 2. 모든 테스트를 통과하지는 못했다. (4개의 테스트 통과X)
// 3. 문제에 대한 이해를 조금 더 해보는 것이 좋겠다

// 큰 수가 아니라 작은 수를 통해서 반복을 뒤에서부터 하면서..?해결할 경우 통과했다

// solution

function solution(w, h) {
  const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b);
  };

  return w * h - (w + h - gcd(w, h));
}

// 수학적인 개념 이해가 가장 중요했던 문제였다
