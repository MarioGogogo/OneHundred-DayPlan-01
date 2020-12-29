/*
 * @Descripttion:80-给定一个增序排列数组 nums ，你需要在 原地 删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。
 * @Author: Mario
 * @Date: 2020-12-29 00:49:03
 * @LastEditors: Maroi
 * @LastEditTime: 2020-12-29 00:50:06
 */

let nums = [1, 1, 1, 2, 2, 3]; // 输出：5, nums = [1,1,2,2,3]
/**
 * 增序排列数组 nums
 * 原地排序
 * @param {*} nums
 */
let removeDuplicates = function (nums) {
  //慢指针
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    // 一开始k小于2个交互位置并且k自增
    //重点后面这句分析 k如果是3 前面应该是[1,1,2]
    //如果2与 第一个下标1相同说明 有三个数相同了不符合 [1,1,1]
    if (k < 2 || nums[i] !== nums[k - 2]) {
      nums[k++] = nums[i];
    }
  }
  return k;
};

console.log('removeDuplicates', removeDuplicates(nums));
