/*
 * @Descripttion:26-给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * @Author: Mario
 * @Date: 2020-12-29 00:34:28
 * @LastEditors: Maroi
 * @LastEditTime: 2020-12-29 00:54:53
 */

// 给定数组 nums = [1,1,2],

// 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。

const arr = [0, 0, 1, 1, 1, 2, 2, 2];

function removeDuplicates(arr) {
  const set = new Set(arr);
  return Array.from(set);
}
console.log(
  '%c 🍲 removeDuplicates: ',
  'font-size:20px;background-color: #B03734;color:#fff;',
  removeDuplicates(arr)
);

//双指针思路
function bt_removeDuplicates(nums) {
  // 慢指针初始为0;
  let k = 0;
  // 循环中的变量i是快指针
  for (let i = 0; i < nums.length; i++) {
    // 如果 快慢指针指向的元素不同
    if (nums[i] !== nums[k]) {
      // 慢指针++; 快指针是 循环变量每次都会自增，不需要单独操作
      // 将快指针 指向的元素覆盖慢指针当前的元素
      k++;
      nums[k] = nums[i];
    }
  }
  return k + 1;
}

console.log(
  '%c 🍜 removeDuplicates: ',
  'font-size:20px;background-color: #33A5FF;color:#fff;',
  bt_removeDuplicates(arr)
);
