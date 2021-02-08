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
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    // 左节点 大于 右节点 则交换位置
    if (this.heap[leftIndex] > this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex] > this.heap[index]) {
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
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }
}

const h = new MinHeap();

h.insert(3);
h.insert(2);
h.insert(1);
console.log(
  '%c 🥦 h: ',
  'font-size:20px;background-color: #FFDD4D;color:#fff;',
  h
);
