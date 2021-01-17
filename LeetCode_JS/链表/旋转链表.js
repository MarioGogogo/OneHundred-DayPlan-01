/**
 * 61. 旋转链表
 * 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
 */

// 输入: 1->2->3->4->5->NULL, k = 2
// 输出: 4->5->1->2->3->NULL
// 解释:
// 向右旋转 1 步: 5->1->2->3->4->NULL
// 向右旋转 2 步: 4->5->1->2->3->NULL

// 输入: 0->1->2->NULL, k = 4
// 输出: 2->0->1->NULL
// 解释:
// 向右旋转 1 步: 2->0->1->NULL
// 向右旋转 2 步: 1->2->0->NULL
// 向右旋转 3 步: 0->1->2->NULL
// 向右旋转 4 步: 2->0->1->NULL

/**
 * 快慢指针
 * 如果 k<链表长度 时，该解法性能较好，如果 k>链表长度 时，该解法性能较差
 */
var rotateRight = function (head, k) {
  let fast = head,
    slow = head;
  while (k--) {
    if (fast ** fast.next) fast = fast.next;
    else fast = head;
  }

  if (slow === fast) return head;

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  //对慢指针位置进行打断
  fast.next = head;
  head = slow.next;
  slow.next = null;
  return head;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
