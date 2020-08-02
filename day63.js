// 테스트 - 펠린드롬

// s => string ex: abab
// 주어진 문자열에 대해서
// 만들 수 있는 가장 짧은 팰린드롬의 길이를 출력하시오!

// 분석
// 선형적으로 1글자, 2글자, 3글자 ... 형식으로 뒤집어서 붙였을 때
// 팰린드롬일 경우 길이를 리턴;
// 팰린드롬 여부는 어떻게 확인할 것인가?
// point
// 1. 선형적인 탐색
// 2. 어떤 방식으로 뒤집어서 붙일 것인가?
// 3. 팰린드롬인지는 어떻게 확인할 것인가?
// - 그 자체로 팰린드롬인지도 확인해야 한다
// - 길이를 2로 나눈 값을 Math.floor() 나온 값 만큼.
// 앞 뒤를 확인 했을 때 같으면 팰린드롬..?!

// 이 문제를 어찌 dp로 푸느냐?
function solution(s) {
  // 0. 예외 조건
  if (s.length <= 1) return s.length;

  // 그 자체로 팰린드롬인지도 확인해야 한다

  function isPalin(s) {
    // let isFalsy = false;
    let target = s.split("");
    let leng = s.length;
    let half = Math.floor(leng / 2);
    let head = target.slice(0, half).join("");
    let tail = target
      .slice(leng - half)
      .reverse()
      .join("");
    console.log(head, "head", tail, "tail");
    // if (head === tail) return true;
    // else return false;
    return head === tail ? true : false;
  }

  // 1. 그 자체로 펠린드롬인가?
  if (isPalin(s)) return s.length;

  // 2. 선형적인 탐색
  // 하나씩 뒤집어서 추가한 문자가 팰린드롬인지 확인?
  let target = s.split("");
  let box = [];
  let addString = s;
  for (let i = 0; i < target.length; i++) {
    box.push(target[i]);
    let addTarget = box.reverse().join("");
    addString += addTarget;
    if (isPalin(addString) === true) return addString.length;
  }
}
