// Stores the start and end of the subArray
function maxSubArray(nums) {
  let maxSum = nums[0];
  let totalSum = nums[0];
  let startIndex = 0;
  let endIndex = 0;
  let tempStart = 0;

  for (let i = 1; i < nums.length; i++) {
    const sum = totalSum + nums[i];

    if (sum > nums[i]) {
      totalSum = sum;
    } else {
      totalSum = nums[i];
      tempStart = i;
    }

    if (maxSum > totalSum) {
    } else {
      maxSum = totalSum;
      startIndex = tempStart;
      endIndex = i;
    }
  }

  return [startIndex, endIndex];
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
