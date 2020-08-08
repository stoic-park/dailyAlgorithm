/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// 분석
// 빈 Map 객체를 만들고
// 해당 키값에 대해서 카운트하고
// 벨류값을 기준으로 sort
// k 만큼만 리턴

var topKFrequent = function (nums, k) {
  // let box = new Map();
  let box = {};
  // console.log(box);

  for (let i = 0; i < nums.length; i++) {
    // 해당 키 값이 없을 경우
    if (!box.hasOwnProperty(nums[i])) {
      box[nums[i]] = 1;
    }
    // 해당 키 값이 존재할 경우
    else {
      box[nums[i]]++;
    }
  }
  // console.log(box);
  // 배열로..?
  let newBox = [];
  for (let key in box) {
    newBox.push([key, box[key]]);
  }

  newBox.sort((a, b) => b[1] - a[1]);
  // console.log(newBox)

  let answer = [];
  for (let i = 0; i < k; i++) {
    answer.push(newBox[i][0]);
  }
  return answer;
};
