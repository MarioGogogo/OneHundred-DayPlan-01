/**
 * 23. 合并K个升序链表
 * 给你一个链表数组，每个链表都已经按升序排列。
请你将所有链表合并到一个升序链表中，返回合并后的链表。
输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6
 */

var mergeKLists = function (lists) {
  //创建链表头部
  const res = new ListNode(0);
  // 创建一个p指针用于存新链表
  let p = res;
  //创建最小堆
  const h = new MinHeap();
  // 遍历最链表 插入到堆中
  lists.forEach((l) => {
    //防止空链表
    if (l) h.insert(l);
  });
  //比较堆
  while (h.size()) {
    const n = h.pop();
    //生产新链表
    p.next = n;
    p = p.next;
    //如果链表next节点还有值 继续插入新堆 比较
    if (n.next) h.insert(n);
  }

  return res.next;
};

// 链表
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
// 堆
class MinHeap {
  constructor() {
    this.heap = [];
  }
  swap(x, y) {
    [this.heap[x], this.heap[y]] = [this.heap[y], this.heap[x]];
  }
  getParentIndex(i) {
    return (i - 1) >> 1; //===相当于除2
  }
  getLeftIndex(i) {
    return i * 2 + 1;
  }
  getRightIndex(i) {
    return i * 2 + 2;
  }
  shiftUp(index) {
    if (index == 0) return;
    const parentIndex = this.getParentIndex(index);
    // 如果父节点 大于子节点 则调换位置
    if (
      this.heap[parentIndex] &&
      this.heap[parentIndex].val > this.heap[index].val
    ) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    // 左节点 大于 右节点 则交换位置
    if (
      this.heap[leftIndex] &&
      this.heap[leftIndex].val > this.heap[index].val
    ) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (
      this.heap[rightIndex] &&
      this.heap[rightIndex].val > this.heap[index].val
    ) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
  pop() {
    // 尾部删除并赋值给头部元素
    //如果堆得数量只有1 那么直接弹出 不需要比较
    if (this.size() === 1) return this.heap.shift();
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
    // 返回堆顶值
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}
