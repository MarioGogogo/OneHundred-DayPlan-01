/**
 * 给定两个数组，编写一个函数来计算它们的交集。
 * @param {*} nums1
 * @param {*} nums2
 */
// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]

let nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];
var intersection = function (nums1, nums2) {
  return nums1.filter(
    (v, i) => nums2.includes(v) && nums1.lastIndexOf(v) === i
  );
};

console.log(
  '%c 🍲 intersection: ',
  'font-size:20px;background-color: #6EC1C2;color:#fff;',
  intersection(nums1, nums2)
);

/**
 * 第二种解法
 */
var intersection = function (nums1, nums2) {
  //先把num1 num2重复值筛选出来
  return Array.from(new Set(nums1.filter((v) => nums2.includes(v))));
};
console.log(
  '%c 🍲 intersection: ',
  'font-size:20px;background-color: #6EC1C2;color:#fff;',
  intersection(nums1, nums2)
);
