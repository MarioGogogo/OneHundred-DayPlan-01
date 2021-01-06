/**
 * 220-在整数数组 nums 中，是否存在两个下标 i 和 j，
 * 使得 nums [i] 和 nums [j] 的差的绝对值小于等于 t ，
 * 且满足 i 和 j 的差的绝对值也小于等于 ķ 。
 */
// 输入: nums = [1,2,3,1], k = 3, t = 0
// 输出: true
// 输入: nums = [1,5,9,1,5,9], k = 2, t = 3
// 输出: false
// 滑动窗口+桶排序
const nums = [1, 2, 3, 1],
  k = 3,
  t = 0;
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  // 排除边界条件
  const b = t + 1;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const index = Math.floor(nums[i] / b);

    if (map.get(index) !== undefined) {
      return true;
    } else if (
      map.get(index + 1) !== undefined &&
      Math.abs(map.get(index + 1) - nums[i]) <= t
    ) {
      return true;
    } else if (
      map.get(index - 1) !== undefined &&
      Math.abs(map.get(index - 1) - nums[i]) <= t
    ) {
      return true;
    }
    map.set(index, nums[i]);

    if (i >= k) {
      map.delete(Math.floor(nums[i - k]) / b);
    }
  }
  return false;
};
console.log(
  '%c 🥪 containsNearbyAlmostDuplicate: ',
  'font-size:20px;background-color: #B03734;color:#fff;',
  containsNearbyAlmostDuplicate(nums, k, t)
);
