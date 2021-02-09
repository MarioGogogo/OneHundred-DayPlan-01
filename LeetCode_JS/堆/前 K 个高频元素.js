/**
 * 347. 前 K 个高频元素
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
 */
// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]
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
    if (this.heap[parentIndex].value > this.heap[index].value) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    // 左节点 大于 右节点 则交换位置
    if (this.heap[leftIndex].value > this.heap[index].value) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex].value > this.heap[index].value) {
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
  size() {
    return this.heap.length;
  }
}
//======================================
const nums = [1, 1, 1, 2, 2, 3],
  k = 2;
// 暴力解法  时间复杂度O（n * logn）
var topKFrequent = (nums, k) => {
  const map = new Map();
  nums.forEach((n) => {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  });
  //根据出现次数排序
  const list = Array.from(map).sort((a, b) => b[1] - a[1]);
  //遍历出现k次数的元素 [[1,2],[2,2],[3,1]]
  return list.slice(0, k).map((n) => n[0]);
};

var topKFrequent = (nums, k) => {
  const map = new Map();
  nums.forEach((n) => {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  });

  const h = new MinHeap();
  map.forEach((value, key) => {
    h.insert({ value, key });
    //当插入的[[1,2],[2,1]] 如果大于k 则删除第一个数组剩下继续添加
    if (h.size() > k) {
      h.pop();
    }
  });
  return h.heap.map((n) => n.key);
};
