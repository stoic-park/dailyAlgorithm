// Increasing Triplet Subsequence - leetcode
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/781/

// 문제 설명
// Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.
// Formally the function should:
// Return true if there exists i, j, k
// such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.

// 제한사항
// Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  // 0번째 인덱스에서 시작해서 순서대로 탐색
  // 1번째 인덱스에서 ..
  // 2번째 인덱스에서 ..
  // 매 반복마다 현재 인덱스 값과 그 다음 인덱스 값을 비교해서 크면 카운트++
  // 아니면 break;
  // 카운트의 값이 3이상일 경우 true;

  // 카운트를 하고 확인을 해줘야 하는데?

  // 0. 기본 예외 조건
  if (nums.length < 3) return false;

  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    //         for(let j=i; j<nums.length-1; j++) {
    //             if(nums[j] < nums[j+1]) {
    //                 count++;
    //             }
    //             // 아닐 경우
    //             // else {
    //             //     break;
    //             // }
    //         }
    //         return count >= 3 ? true : false;

    if (nums[i] < nums[i + 1]) count++;
  }
  console.log(count);
  return count >= 3 ? true : false;
};

// 문제를 잘못 이해한듯..?
// 다시 풀어보자

// 문제를 다시 잘 보면
// 연속적으로 3개가 되는 조건이 있다
// : such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.

// [5,1,5,5,2,5,4]
// 근데 이게 왜 true 가 나오느거야?
// 1,2,4 를 선택해서 true가 되는건가?
// 그럼 타겟을 고정해야 하는건가?
// first, second가 존재하고, nums[i]가 second보다 크다면 true?

var increasingTriplet = function (nums) {
  // 0. 기본 예외 조건
  if (nums.length < 3) return false;
  let first = nums[0];
  let second = Infinity;
  for (let i in nums) {
    if (nums[i] < first) first = nums[i];
    if (nums[i] > first && nums[i] < second) second = nums[i];
    if (nums[i] > second) return true;
  }
  return false;
};

// 후기
// 문제가 이해가 안간다잉
// first를 지정함에 있어서 nums[0]은 통과가 되고, Math.min을 사용했을 경우는 안되는 이유 ???
// 문제 자체가 말하는 경우가 뭐지?
// 연속적으로 3개가 증가하는 경우가 아니라
// 0 <= first < second < target 인 경우가 있으면 true를 리턴하라는 것 같다
// Infinity를 사용하는 이유?

// if (n > second) return true;
// if (n > first) second = n;
// else first = n;
// 의 경우는 통과하고

// if (nums[i] < first) first = nums[i];
// if (nums[i] > first && nums[i] < second) second = nums[i];
// else return true;
// 의 경우는 통과하지 않는 이유?

// console.log( first, second ) 를 찍어봤을 때
// 1의 경우에는
// undefined undefined
// 1 undefined
// 1 2

// 2의 경우에는
// undefined undefined

// 결론 : target을 지정하는 순서의 차이

// reference
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/781/discuss/79010/JavaScript-solution-emphasizing-logical-clarity

// solution
var increasingTriplet = function (nums) {
  let first, second; //first and second smallest

  for (let n of nums) {
    if (n > second) return true;
    if (n > first) second = n;
    else first = n;
  }
  return false;
};
