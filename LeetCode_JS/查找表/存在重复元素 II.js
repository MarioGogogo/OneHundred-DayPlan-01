/**
 * 219-给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。
 */
// 输入: nums = [1,2,3,1], k = 3
// 输出: true
// 输入: nums = [1,2,3,1,2,3], k = 2
// 输出: false
const nums = [1, 2, 3, 1],
  k = 3;
//第一种 暴力解法
var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = Math.max(i - k, 0); j < i; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }
  return false;
};

console.log(
  '%c 🍖 containsNearbyDuplicate: ',
  'font-size:20px;background-color: #B03734;color:#fff;',
  containsNearbyDuplicate(nums, k)
);

//第二种解法
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i] && i - map.get(nums[i]) <= k)) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
};
//第三种解法
var containsNearbyDuplicate = function (nums, k) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    // 添加进set表中
    set.add(nums[i]);
    //如果超过限制，移除set中第一位
    if (set.size > k) {
      set.delete(nums[i - k]);
    }
  }
  return false;
};
