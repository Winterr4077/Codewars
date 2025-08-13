function solution(nums){
  let output = [];
  
  if (nums === null || nums.length === 0) {
    return output;
  } else {
    return nums.sort((a, b) => a - b);
  }
}
