/**
 * 对链表进行插入排序
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 插入排序算法：

// 插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
// 每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
// 重复直到所有输入数据插入完为止。

// 输入: 4->2->1->3
// 输出: 1->2->3->4

var insertionSortList = function (head) {
  if (head === null) return head;

  const myHead = new ListNode(0);
  myHead.next = head;
  let lastSorted = head,
    curr = head.next;

  while (curr != null) {
    if (lastSorted.val <= curr.val) {
      lastSorted = lastSorted.next;
    } else {
      let prev = myHead;
      while (prev.next.val <= curr.val) {
        prev = prev.next;
      }
      // 交换位置
      lastSorted.next = curr.next;
      curr.next = prev.next;
      prev.next = curr;
    }
    curr = lastSorted.next;
  }
  return myHead.next;
};
