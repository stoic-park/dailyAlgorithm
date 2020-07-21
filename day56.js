// Destination City
// https://leetcode.com/problems/destination-city/

// 문제 설명
// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi.
// Return the destination city, that is, the city without any path outgoing to another city.
// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

// 입출력 예
// Example 1:

// Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// Output: "Sao Paulo"
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
// Example 2:

// Input: paths = [["B","C"],["D","B"],["C","A"]]
// Output: "A"
// Explanation: All possible trips are:
// "D" -> "B" -> "C" -> "A".
// "B" -> "C" -> "A".
// "C" -> "A".
// "A".
// Clearly the destination city is "A".
// Example 3:

// Input: paths = [["A","Z"]]
// Output: "Z"

// 제한 사항
// 1 <= paths.length <= 100
// paths[i].length == 2
// 1 <= cityAi.length, cityBi.length <= 10
// cityAi != cityBi
// All strings consist of lowercase and uppercase English letters and the space character.

// 분석
// 일단, 그래프에 대해서 알아야 할 것 같다
// 도착지와 출발지가 같을 경우, 아닐 경우
// 출발지를 담은 배열, 도착지를 담은 배열
// 도착지를 순서대로 탐색해서 출발지에 없을 경우 리턴

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  var heads = paths.map((path) => path[0]);
  var tails = paths.map((path) => path[1]);
  console.log(heads, tails);
  if (paths.length === 1) return paths[0][1];
  // 규칙..?
  for (let i = 0; i < paths.length; i++) {
    console.log(i);
    if (heads.indexOf(tails[i]) === -1) return tails[i];
  }
};

// solution1
var destCity = function (paths) {
  let citiesMap = {};
  for (let i = 0; i < paths.length; i++) citiesMap[paths[i][0]] = paths[i][1];
  for (let city in citiesMap) {
    if (citiesMap.hasOwnProperty(citiesMap[city])) continue;
    else return citiesMap[city];
  }
};

// solution2
var destCity = function (paths) {
  const seen = new Set(paths.map((el) => el[0]));

  for (let i of paths) {
    if (!seen.has(i[1])) return i[1];
  }

  return "";
};

// solution3
var destCity = function (paths) {
  var starts = paths.map((path) => path[0]);
  var ends = paths.map((path) => path[1]);
  for (var end of ends) {
    if (starts.indexOf(end) === -1) return end;
  }
  return "";
};
