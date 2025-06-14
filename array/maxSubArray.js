// Guarda apenas o valor máximo
function maxSubArray(nums) {
  let maxSum = nums[0];
  let totalSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const sum = totalSum + nums[i];

    totalSum = Math.max(sum, nums[i]);

    maxSum = Math.max(maxSum, totalSum);
  }
  return maxSum;
}
