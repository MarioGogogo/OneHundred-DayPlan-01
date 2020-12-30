/**
 * 209-给定一个含有 n 个正整数的数组和一个正整数 s ，
 * 找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，
 * 并返回其长度。如果不存在符合条件的子数组，返回 0
 */

// 输入：s = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
const s = 7,
  nums = [2, 3, 1, 2, 4, 3];
/**
 * 暴力求解
 * @param {*} s
 * @param {*} nums
 */
var minSubArrayLen = function (s, nums) {
  let l = 0,
    r = 0;
  res = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      res = res > 0 ? res + nums[j] : nums[i] + nums[j];
      if (res >= s) {
        return [nums[i], nums[j]];
      }
    }
  }
};

console.log(
  '%c 🍷 minSubArrayLen: ',
  'font-size:20px;background-color: #E41A6A;color:#fff;',
  minSubArrayLen(s, nums)
);

/**
 * 滑动双指针解法 [.[..].....] ==>  [...[..]...] ==> [.....[..].]
 * @param {*} s
 * @param {*} nums
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 */
let bt_minSubArrayLen = function (s, nums) {
  let l = 0,
    r = -1, //nums[l...r] 滑动窗口
    sum = 0, // 缓存计算和
    res = nums.length + 1; //连续子数组长度 用于比较最小值
  // 边界条件如果 l 小于数组长度 还能移动
  while (l < nums.length) {
    //判断边界条件 r+1 必须小于nums长度
    if (r + 1 < nums.length && sum < s) {
      r++;
      sum += nums[r];
    } else {
      sum -= nums[l];
      l++;
    }
    if (sum >= s) {
      //求最小长度 缓存
      res = Math.min(res, r - l + 1);
    }
  }
  if (res === nums.length + 1) {
    return 0;
  }
  return res;
};
console.log(
  '%c 🍟 bt_minSubArrayLen: ',
  'font-size:20px;background-color: #B03734;color:#fff;',
  bt_minSubArrayLen(s, nums)
);
