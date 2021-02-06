/*
 * @Descripttion:
 * @Author: Mario
 * @Date: 2021-02-06 21:56:07
 * @LastEditors: Maroi
 * @LastEditTime: 2021-02-06 22:12:24
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }
  swap(x, y) {
    const temp = this.heap[x];
    this.heap[x] = this.heap[y];
    this.heap[y] = temp;
    // [this.heap[x], this.heap[y]] = [this.heap[y], this.heap[x]];
  }
  getParentIndex(i) {
    return (i - 1) >> 1; // 除以2去商
  }
  shiftUp(index) {
    if (index === 0) return; //堆顶就不执行
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      // 递归继续执行
      this.shiftUp(parentIndex);
    }
  }
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
}

/******************
 1。遍历把每一个值插入到堆得底部
 2.上移操作 根它的父节点进行交换 直到节点大于或者等于这个插入的值
 *******************/
const h = new MinHeap();
h.insert(3);
h.insert(2);
h.insert(1);
console.log('h :>> ', h);
