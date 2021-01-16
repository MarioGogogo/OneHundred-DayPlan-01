/**
 * 19. 删除链表的倒数第N个节点
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 */

// 给定一个链表: 1->2->3->4->5->null, 和 n = 2.

// 当删除了倒数第二个节点后，链表变为 1->2->3->5.
// 解决一：添加虚拟 节点
var removeNthFromEnd = function (head, n) {
  //先处理边界情况
  if (!head) {
    return head;
  }
  if (!head.next && n === 1) {
    return null;
  }
  //创建虚拟头节点
  let preHead = new ListNode(0);
  preHead.next = head;
  let fast = preHead,
    slow = preHead;
  // 快先走 n+1 步
  while (n--) {
    fast = fast.next;
  }

  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  //如果循环中没有返回，那么头指针就没有变，就返回原来的头指针
  return preHead.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
