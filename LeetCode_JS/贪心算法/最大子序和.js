/**
 * 53. 最大子序和
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。s 
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
输入：nums = [1]
输出：1
 * 
 */

//暴力解法
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];
  let result = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    count = 0;
    for (let j = i; j < nums.length; j++) {
      count += nums[j];
      result = Math.max(count, result);
    }
  }
  return result;
};

console.log('object :>> ', maxSubArray(nums));

//贪心
var maxSubArray = function (nums) {
  let result = 0,
    count = 0;
  for (let i = 0; i < nums.length; i++) {
    // 如果count一旦加上nums[i]变为负数，那么就 应该从nums[i+1]开始从0累积count了，
    count += nums[i];
    if (count > result) {
      result = count;
    }
    // 因为已经变为负数的count，只会拖累总和 归0。
    if (count < 0) count = 0;
  }
  return result;
};
