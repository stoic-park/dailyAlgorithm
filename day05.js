// 2016년 - 프로그래머스 lv1
// https://programmers.co.kr/learn/courses/30/lessons/12901

// 제한시간 30분

// 문제 설명
// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

// 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 TUE를 반환하세요.

// 제한 조건
// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

// 문제 분석
// 1. 윤년? 1월 1일 금요일

// 수도 코드
// 1. 빈 문자열
// 2. 요일 문자 배열
// 3. new Date
// 4. getday

function solution(a, b) {
  //   var answer = "";
  let dayString = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let date = new Date(2016, a - 1, b);
  return dayString[date.getDay()];
}

// 후기
// new Date, getday 메서드
// 메서드를 잘 몰라서 해맸다
// 날짜 관련된 메소드를 이용할 수 있다면..?
