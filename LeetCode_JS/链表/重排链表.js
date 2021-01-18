/**
 * 143. 重排链表
 */
// 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
// 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…

// 给定链表 1->2->3->4, 重新排列为 1->4->2->3.
// 通过一个数组，结合头尾双指针实现。
var reorderList = function (head) {
  //边界判断
  if (head === null || head.next === null) return;

  let t = [],
    temp = null;
  while (head) {
    temp = head.next;
    head.next = null;
    t.push(head);
    head = temp;
  }
  let len = t.length;
  let i = -1,
    j = len;
  while (++i < --j) {
    t[i].next = t[j];
    j !== i + 1 && (t[j].next = t[i + 1]);
  }
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
