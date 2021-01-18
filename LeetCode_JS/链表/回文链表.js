/*
 * @Descripttion:
 * @Author: Mario
 * @Date: 2021-01-18 22:07:19
 * @LastEditors: Maroi
 * @LastEditTime: 2021-01-18 22:12:24
 */
/**
 * 回文链表
 */

//请判断一个链表是否为回文链表。
// 输入: 1->2
// 输出: false

// 输入: 1->2->2->1
// 输出: true

var isPalindrome = function (head) {
  const arr = [];

  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  //设置双指针
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] !== arr[j]) return false;
    ++i;
    --j;
  }
  return true;
};
