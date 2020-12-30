/**
 * 167-给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。函数应该返回这两个下标值
 */
// 输入: numbers = [2, 7, 11, 15], target = 9
// 输出: [1,2]
// 解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。

const nums = [2, 7, 11, 15];
const target = 9;
/**
 * 暴力解法
 * @param {*} nums
 * @param {*} target
 */
var twoSum = function (nums, target) {
  let off = false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        off = true;
        return [i, j];
      }
      if (off) {
        break;
      }
    }
  }
};

console.log(
  '%c 🍒 twoSum: ',
  'font-size:20px;background-color: #F5CE50;color:#fff;',
  twoSum(nums, target)
);

/**
 * 二分查找法
 */

/**
 * 双指针  左  ......  右  对撞指针
 */
bt_twoSum = function (nums, target) {
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    if (nums[l] + nums[r] === target) {
      return [l, r];
    } else if (nums[l] + nums[r] < target) {
      l++;
    } else {
      r--;
    }
  }
  throw console.error('没有');
};

console.log(
  '%c 🍔 bt_twoSum: ',
  'font-size:20px;background-color: #33A5FF;color:#fff;',
  bt_twoSum(nums, target)
);
