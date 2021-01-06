/*
 * @Descripttion:
 * @Author: Mario
 * @Date: 2021-01-03 15:45:08
 * @LastEditors: Maroi
 * @LastEditTime: 2021-01-03 16:22:14
 */
/**
 * 给定两个数组，编写一个函数来计算它们的交集。
 */
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2,2]
// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[4,9]
/**
 ***********************************
 思路：
 1.利用 map 记录较短数组中每个数组出现的次数
2.遍历较长数组到 map 中检查这个数组是否在 map 中且遇到次数不为 0
3.次数大于 0，存放到结果数组中，且更新 map 中统计的个数
4.小于等 0，则这个数字在较短数组没出现
 */
let nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];
var intersect = function (nums1, nums2) {
  //判断哪个数组小
  if (nums1.length > nums2.length) {
    return intersect(num2, nums1);
  }

  //创建map
  const map = new Map();
  for (let i = 0; i < nums1.length; i++) {
    const n = nums1[i];
    map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  }
  let result = [];
  for (let j = 0; j < nums2.length; j++) {
    const m = nums2[j];
    let res = map.get(m) || 0;
    if (res > 0) {
      result.push(m);
      // 找到了相同数字之后 要减为0
      map.set(m, res - 1);
    }
  }
  return result;
};
console.log(
  '%c 🍟 intersect: ',
  'font-size:20px;background-color: #F5CE50;color:#fff;',
  intersect(nums1, nums2)
);

/**
 * 第二种解法
 * 先对两个数组排序优化循环
1.从零遍历两个数组，比较两个数组不用指针下的元素大小
2.其中一个数组当前指针下数字小，则后移指针去查询到比另外一个数组指针下等于小于其的数
两数相同记录到结果中切两个指针同时后移
 */

var intersect = function (nums1, nums2) {
  // 先排序
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let len1 = nums1.length,
    len2 = nums2.length,
    res = [], //结果
    i = 0,
    j = 0,
    index = 0; //记录相同数组下标
  while (i < len1 && j < len2) {
    // 如果num1 比 nums2 小 则移动 i指针
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      res[index] = nums1[i];
      i++;
      j++;
      index++;
    }
  }
  return res;
};
console.log(
  '%c 🍥 intersect: ',
  'font-size:20px;background-color: #B03734;color:#fff;',
  intersect(nums1, nums2)
);
