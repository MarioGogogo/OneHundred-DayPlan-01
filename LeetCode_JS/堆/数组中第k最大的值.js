/**
 * 215. 数组中的第K个最大元素
 * 在未排序的数组中找到第 k 个最大的元素。请注意，
 * 你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 */
// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
const minHeap = require('./最小的堆.js');
const nums = [3, 2, 1, 5, 6, 4],
  k = 2;
const findKthLargest = function (nums, k) {
  //构建一个最小堆
  nums.forEach((n) => {
    minHeap.insert(n);
    //  当堆容量超过k，就删除堆顶
    if (minHeap.size() > k) {
      // 插入结束后,堆顶就是第K个最大的元素（最大值里面最小的那个数）
      minHeap.pop();
    }
  });
};
findKthLargest(nums, k);
