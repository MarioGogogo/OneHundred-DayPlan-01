// 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

// 输入: 1->2->3->4->5->NULL, m = 2, n = 4
// 输出: 1->4->3->2->5->NULL

// 模拟链表结构
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var reverseBetween = function (head, m, n) {
  let node = new ListNode(0);
  node.next = head;
  let tempHead = node;

  for (let i = 0; i < m - 1; i++) {
    tempHead = tempHead.next;
  }

  let prev = null;
  let curr = tempHead.next;

  for (let i = 0; i <= n - m; i++) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  tempHead.next.next = curr;
  tempHead.next = prev;
  return node.next;
};
