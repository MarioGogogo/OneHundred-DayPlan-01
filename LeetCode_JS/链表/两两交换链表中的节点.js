/**
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 */

// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var swapPairs = function (head) {
  //创建初值 也就是 0 节点
  const myHead = new ListNode(0);
  //head 指向 next节点
  myHead.next = head;

  //创建一个临时节点
  let temp = myHead;
  //循环
  while (temp.next != null && temp.next.next != null) {
    const node1 = temp.next;
    const node2 = temp.next.next;

    // 开始交换位置
    temp.next = node2;
    // node1的next  指向 node2.next
    node1.next = node2.next;
    // node2的next  指向 node1
    node2.next = node1;
    temp = node1;
  }

  return myHead.next;
};
