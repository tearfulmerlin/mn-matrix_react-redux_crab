const calcAverage = (nums, cellIndex) => {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i][cellIndex]['value'];
  }

  return Math.trunc(sum / nums.length);
};

export default calcAverage;
