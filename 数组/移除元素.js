/*
 * @Descripttion:27.给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * @Author: Mario
 * @Date: 2020-12-29 00:13:55
 * @LastEditors: Maroi
 * @LastEditTime: 2020-12-29 00:28:31
 */

// 给定 nums = [3,2,2,3], val = 3,

// 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。

const arr = [1, 2, 3, 4, 4];

function removeElement(arr, val) {
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[k++] = arr[i];
    }
  }
  return k;
}

console.log(
  '%c 🥤 removeElement: ',
  'font-size:20px;background-color: #B03734;color:#fff;',
  removeElement(arr, 4)
);
