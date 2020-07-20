// 위장 - 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/42578

// 문제 설명
// 스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.

// 예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.

// 종류	이름
// 얼굴	동그란 안경, 검정 선글라스
// 상의	파란색 티셔츠
// 하의	청바지
// 겉옷	긴 코트
// 스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
// 스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.
// 같은 이름을 가진 의상은 존재하지 않습니다.
// clothes의 모든 원소는 문자열로 이루어져 있습니다.
// 모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.
// 스파이는 하루에 최소 한 개의 의상은 입습니다.

// 입출력 예
// [[yellow_hat, headgear], [blue_sunglasses, eyewear], [green_turban, headgear]]	return  : 5
// [[crow_mask, face], [blue_sunglasses, face], [smoky_makeup, face]]	return  : 3

// 입출력 예 설명
// headgear에 해당하는 의상이 yellow_hat, green_turban이고
// eyewear에 해당하는 의상이 blue_sunglasses이므로 아래와 같이 5개의 조합이 가능합니다.
// 1. yellow_hat
// 2. blue_sunglasses
// 3. green_turban
// 4. yellow_hat + blue_sunglasses
// 5. green_turban + blue_sunglasses

// 분석
// 해시..?
// 배열 인풋 숫자 아웃풋
// 중복되지 않는 모든 조합의 경우의 수를 리턴해야 한다
// 배열을 객체로 바꾼다?

// ! Hint : 집합으로 생각하면 좋다!
// 헤드기어 2 : 안입을 경우 포함 3
// 아이웨어 1 : 안입을 경우 2
// 3 * 2 - 1(모두 안입는 경우) = 5

// 1.배열을 분석해서 종류별 갯수를 파악
// 2.그거에 맞는 집합을 계산

function solution(clothes) {
  var answer = 1;
  let clo = {};
  for (let i in clothes) {
    if (clo.hasOwnProperty(clothes[i][1]) === false) {
      clo[clothes[i][1]] = 1 + 1;
    } else {
      clo[clothes[i][1]]++;
    }
  }
  //   console.log(clo);
  for (let key in clo) {
    answer *= clo[key];
  }
  return answer - 1;
}

// 후기
// 해쉬 라는 키워드 때문에 굉장히 어렵게 다가갔다
// 힌트를 통해서 수학적 규칙(집합)을 통하면 쉽게 해결 할 수 있다는 것을 알았다
// 객체를 이용한 풀이를 자주 사용하지 않아서
// 매번 어렵게 느껴지는 것 같다
// clo[clothes[i][1]] = 1 + 1;
// 를 clo.clothes[i][1] or clo.[clothes[i][1]] 로 할 경우 읽지 못한다는
// 간단한 표현에서 시간을 조금 보냈다 ㅎㅎ;;
// 해쉬에 대해서도 정리하고 가자

// solution
function solution(clothes) {
  return (
    Object.values(
      clothes.reduce((obj, t) => {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
      }, {})
    ).reduce((a, b) => a * (b + 1), 1) - 1
  );
}

// 메소드 사용이 돋보이는 풀이였다
// 1. clothes.reduce(function, {}) : 최초값을 빈 객체로 생성, clothes를 순차적으로 키값 검색
// 2. undefined 는 논리연산에서 false이므로 해당 키의 값이 undefined이면 해당 키값에 1을 넣어줌
// ! 3. 생성된 key와 value를 Object.values를 통해 값만 불러옴
// 4. reduce(function, 1) 최초 값을 1로 설정하고 배열을 순차적으로 돌며 (이전 값 + 1) 을 곱함
// 5. 모든 옷을 입지 않은 경우 -1
