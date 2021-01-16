/**
 * 237-删除链表中的节点
 *  请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点。传入函数的唯一参数为 要被删除的节点
 */
// 输入：head = [4,5,1,9], node = 5
// 输出：[4,1,9]
// 解释：给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 *      node
 *   2----3------4----5
 *
 *   2----4--x---4--x--5
 *
 *   2----4---5
 */

var deleteNode = function (node) {
  console.log('node :>> ', node);
  //无法拿到当前节点的前一个节点
  node.val = node.next.val;
  // 然后释放掉delnode指针的位置
  node.next = node.next.next;
};
