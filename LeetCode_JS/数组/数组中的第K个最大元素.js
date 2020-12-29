/**
 * 215-在未排序的数组中找到第 k 个最大的元素。
 * 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 */
// 输入: [3,2,1,5,6,4] 和 k = 2  (不一定是有序数列)
// 输出: 5
let nums = [3, 2, 1, 5, 6, 4];
var findKthLargest = function (nums, k) {
  let res = nums.sort((a, b) => {
    return a - b;
  });
  return res[k - 1];
};
console.log(
  '%c 🍖 findKthLargest: ',
  'font-size:20px;background-color: #3F7CFF;color:#fff;',
  findKthLargest(nums, 2)
);

/**
 * 第二种解法
 */
var bt_findKthLargest = function (nums, k) {
  let arr = nums;
  let left = 0;
  let right = nums.length - 1;
  return quick(arr, left, right, k);
};

//递归
function quick(arr, left, right, k) {
  let index;
  if (left < right) {
    index = partition(arr, left, right);
    if (k === index) {
      console.log('arr', arr);
      return arr[index];
    } else if (k < index) {
      //左边
      return quick(arr, left, index - 1, k);
    } else {
      //右边
      return quick(arr, index + 1, right, k);
    }
  }
}
//分治策略的思想
//选择中间的数或通过 Math.random() 来随机选取一个数作为基准
function partition(arr, left, right) {
  let mid = arr[Math.floor(Math.random() * (right - left + 1)) + left];
  console.log('mid', mid);
  let i = left,
    j = right;

  while (i < j) {
    while (arr[i] < mid) {
      i++;
    }
    while (arr[j] > mid) {
      j--;
    }
    //交换位置
    if (i < j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
}

// 交换
let swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};
console.log(
  '%c 🌭 bt_findKthLargest: ',
  'font-size:20px;background-color: #3F7CFF;color:#fff;',
  bt_findKthLargest(nums, nums.length - 2)
);
