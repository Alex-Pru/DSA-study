function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(num, i);
  }

  return null;
}

console.log(twoSum([3, 2, 4], 6));
