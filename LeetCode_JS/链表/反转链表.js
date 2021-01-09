/**
 * 反转一个单链表。
 */

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

var reverseList = function (head) {
  let prev = null; //前一个指针
  let curr = head; //当前头部指针

  while (curr != null) {
    let next = curr.next;
    curr.next = prev; //下一个指针
    prev = curr;
    curr = next; //下一个指针赋值 给当前指针
  }
  // 因为头部curr为null 第一个元素就是prev
  return prev;
};
