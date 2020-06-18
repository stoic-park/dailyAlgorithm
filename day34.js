// 조이스틱 - 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/42860

// 문제 설명
// 조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.
// ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA

// 조이스틱을 각 방향으로 움직이면 아래와 같습니다.

// ▲ - 다음 알파벳
// ▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
// ◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
// ▶ - 커서를 오른쪽으로 이동
// 예를 들어 아래의 방법으로 JAZ를 만들 수 있습니다.

// - 첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성합니다.
// - 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
// - 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.
// 따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.
// 만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.

// 제한 사항
// name은 알파벳 대문자로만 이루어져 있습니다.
// name의 길이는 1 이상 20 이하입니다.

// 입출력 예
// "JEROEN" => return 56
// "JAN" => return 23

// JAZ를 만들기 위해서
// AAA => JAA => JAZ
// 9 + 1 + 1

// JAN
// AAA => JAA => JAZ
// 첫번째 위치에서 9번
// 왼쪽으로 조작해서 마지막으로 이동 +1
// A 를 N로 13
// 23

// a b c d e f g h i j k l m n o p q r s t u v w x y z

// JEAROEN
// AAAAAA => JAAAAA => JEAAAA => JERAAA => JEROAA => JEROEA => JEROEN
// 1. 첫번째 위치에서 A => J : +9
// 1-1. 두번째 위치에서 A => E : 이동 1번, 알파벳 4 => 5
// 2. 세번째 위치에서 A => R : 이동 2번 , 알파벳 17번? 9번? => 11
// 3. 네번째 위치에서 A => O : 이동 3번? , 알파벳 14번? 12번? => 15
// 4. 다섯번째 위치에서 A => E : 이동 2번 , 알파벳 4번  =>  6
// 5. 여섯번째 위치에서 A => N : 이동 1번 , 알파벳 13번 => 14
// 60?? 근데 왜 56이냐..?

// 분석
// 문자열 인풋 숫자 아웃풋
// 항상 A로 시작
// 최소이동
// sum += (이동하는 횟수를 + 알파벳 바꾸는 수)
// 최소로 이동하는 수를 구분하는 조건이 필요
// charAt , 문자열의 인덱스 값

// ! Hint : 핵심은 순간 순간에서 최소값을 구하는 방법으로 접근하면 안된다는 겁니다
// 그리드 알고리즘으로 접근, 재귀함수를 이용한 풀이
// 공백이 길면 방향을 바꾼다

// 수도코드
// 1. 총 합
// 2. 최소 이동 횟수 구하는 내부함수
// 3. 최소 알파벳 바꾸는 수 구하는 내부함수

function solution(name) {
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var answer = 0;
  let leng = name.length;
  // 최소 이동 횟수 구하는 내부함수
  function move(a) {
    // let right = name.indexOf(a);
    let right = a;
    let left = name.length - right;
    if (right <= left) {
      return right;
    } else {
      if (left < 0) return right;
      else return left;
    }
  }

  function changeAlpha(a) {
    let up = alpha.indexOf(a);
    let down = alpha.length - up;
    if (up <= down) {
      return up;
    } else {
      if (down < 0) return up;
      else return down;
    }
  }

  for (let i = 0; i < leng; i++) {
    let sum = 0;
    if (name[i] === "A") {
      sum = 0;
    } else {
      sum = move(i) + changeAlpha(name[i]);
    }
    console.log(sum);
    answer += sum;
  }

  return answer;
}

// 후기..?
// 커서의 위치가 항상 처음에서 시작하는게 아닌가보다?

// solution 1
// 11번 테스트 통과 못함
function solution(name) {
  var answer = 0;
  var exp = name.length - 1;
  var z = "Z".charCodeAt(0);
  var a = "A".charCodeAt(0);
  for (var i = 0; i < name.length; i++) {
    var c = name[i].charCodeAt(0);
    answer += z - c + 1 > c - a ? c - a : z - c + 1;
    if (c == a) {
      var nextIdx = i + 1;
      var countA = 0;
      while (nextIdx < name.length && name.charAt(nextIdx) == "A") {
        countA++;
        nextIdx++;
      }
      var tmp =
        (name.charAt(0) == "A" ? 0 : (i - 1) * 2) +
        (name.length - (1 + i + countA));
      if (exp > tmp) exp = tmp;
    }
  }
  answer += exp;
  return answer;
}
