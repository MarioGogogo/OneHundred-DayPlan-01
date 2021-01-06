/**
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
 */
// 输入: [1,2,3,1]
// 输出: true
// 输入: [1,2,3,4]
// 输出: false

const nums = [1, 2, 3, 1];
//第一种 解法
var containsDuplicate = function (nums) {
  if (nums.length === 1) return false;
  return !(nums.length == Array.from(new Set(nums)).length);
};

//第二种解法
var containsDuplicate = function (nums) {
  const set = new Set();
  for (const x of nums) {
    if (set.has(x)) {
      return true;
    }
    set.add(x);
  }
  return false;
};

console.log(
  '%c 🍿 containsDuplicate: ',
  'font-size:20px;background-color: #7F2B82;color:#fff;',
  containsDuplicate(nums)
);
