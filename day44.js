// 스킬트리 - 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/49993

// 문제 설명
// 선행 스킬이란 어떤 스킬을 배우기 전에 먼저 배워야 하는 스킬을 뜻합니다.

// 예를 들어 선행 스킬 순서가 스파크 → 라이트닝 볼트 → 썬더일때, 썬더를 배우려면 먼저 라이트닝 볼트를 배워야 하고, 라이트닝 볼트를 배우려면 먼저 스파크를 배워야 합니다.

// 위 순서에 없는 다른 스킬(힐링 등)은 순서에 상관없이 배울 수 있습니다. 따라서 스파크 → 힐링 → 라이트닝 볼트 → 썬더와 같은 스킬트리는 가능하지만, 썬더 → 스파크나 라이트닝 볼트 → 스파크 → 힐링 → 썬더와 같은 스킬트리는 불가능합니다.

// 선행 스킬 순서 skill과 유저들이 만든 스킬트리1를 담은 배열 skill_trees가 매개변수로 주어질 때, 가능한 스킬트리 개수를 return 하는 solution 함수를 작성해주세요.

// 제한 조건
// 스킬은 알파벳 대문자로 표기하며, 모든 문자열은 알파벳 대문자로만 이루어져 있습니다.
// 스킬 순서와 스킬트리는 문자열로 표기합니다.
// 예를 들어, C → B → D 라면 CBD로 표기합니다
// 선행 스킬 순서 skill의 길이는 1 이상 26 이하이며, 스킬은 중복해 주어지지 않습니다.
// skill_trees는 길이 1 이상 20 이하인 배열입니다.
// skill_trees의 원소는 스킬을 나타내는 문자열입니다.
// skill_trees의 원소는 길이가 2 이상 26 이하인 문자열이며, 스킬이 중복해 주어지지 않습니다.

// 입출력 예
// skill	skill_trees	return
// "CBD"	["BACDE", "CBADF", "AECB", "BDA"]	2

// 입출력 예 설명
// BACDE: B 스킬을 배우기 전에 C 스킬을 먼저 배워야 합니다. 불가능한 스킬트립니다.
// CBADF: 가능한 스킬트리입니다.
// AECB: 가능한 스킬트리입니다.
// BDA: B 스킬을 배우기 전에 C 스킬을 먼저 배워야 합니다. 불가능한 스킬트리입니다.

// 분석
// 문자열, 배열 인풋, 숫자 리턴
// 1.일치하는 경우 카운트를 늘려가는 식으로
// 2. skill과 skill_trees의 하나씩 비교하는 방법으로
// 3. tree의  엘리먼트 하나씩 비교해서 일치하면 빈 박스에 담는다
// 4. 박스의 첫번째 값이 skill[0]과 같고
//    && 박스의 길이만큼 처음부터 skill을 자른 값이 박스와 같을 때 카운트 ++
// ! 꼭 첫번째랑 같을 필요가 ..? 있찌?
// : 무조건 스킬 첫번째는 배워야되는거잖아?

// 수도코드
// 1. 판단할 값들 선언( count, box )
// 2. 문자열 비교 반복(마지막엔 박스 비우기)
// 3. 리턴
function solution(skill, skill_trees) {
  let count = 0;
  let box = "";
  let target = "";
  for (let i = 0; i < skill_trees.length; i++) {
    for (let j = 0; j < skill_trees[i].length; j++) {
      if (skill.includes(skill_trees[i][j])) {
        box += skill_trees[i][j];
      }
    }
    target = skill.slice(0, box.length);
    console.log(box, "box");
    console.log(target, "target");
    if (box[0] === skill[0] && target === box) {
      count++;
    }
    if (box.length === 0) {
      count++;
    }
    box = "";
    target = "";
  }
  return count;
}

// 후기
// 테스트케이스 4개만 통과했다.
// 어떤 테스트케이스를 통과하지 못하는지 몰라서
// 다른사람들이 한 질문을 참고했더니
// ! 필수선행스킬이 없는 경우를 고려해줘야 한다는 것을 알았다
// skill_trees의 길이가 26으로 길지 않아서
// 이중 포문을 사용했는데
// 내부 함수를 만든다던가, map등 배열 메소드를 사용하면 더 클린한 코드가 될 것이다

// another_solution
function solution(skill, skill_trees) {
  return skill_trees.filter(
    (tree) =>
      skill.indexOf(
        tree
          .split("")
          .filter((s) => skill.split("").includes(s))
          .join("")
      ) === 0
  ).length;
}
