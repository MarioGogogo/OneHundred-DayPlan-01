/**
 * 75-颜色分类:
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，
 * 使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 */
// 0、 1 和 2 分别表示红色、白色和蓝色
let nums = [2, 0, 2, 1, 1, 0];
var sortColors = function (nums) {
  return nums.sort((a, b) => {
    return a - b;
  });
};

console.log('sortColors', sortColors(nums));

let nums1 = [2, 0, 2, 1, 1, 0];
let bt_sortColors = function (nums) {
  let count = [[], [], []];
  console.log(count);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0 && nums[i] <= 2) {
      count[nums[i]].push(nums[i]); //[[0,0],[1,1][2,2]]
    }
  }
  let index = 0;
  let arr = [];
  console.log(count);
  for (let i = 0; i < count[0].length; i++) {
    arr.push(0);
  }
  for (let i = 0; i < count[1].length; i++) {
    arr.push(1);
  }
  for (let i = 0; i < count[2].length; i++) {
    arr.push(2);
  }
  return arr;
};

console.log('bt_sortColors', bt_sortColors(nums1));

/**
 * 三路快排
 * 设置2个索引 [0...zero]
 * two  = [two...n-1]
 * [000] ===>[0...zero]
 * [222] ===>[two...n-1]
 * [[000][111][222]]
 */

let best_sortColors = function (nums) {
  let zero = -1;
  let two = nums.length;
  for (let i = 0; i < two; ) {
    if (nums[i] === 1) {
      i++;
    } else if (nums[i] === 2) {
      two--;
      //交换位置
      [nums[i], nums[two]] = [nums[two], nums[i]];
    } else if (nums[i] === 0) {
      zero++;
      //交换位置
      [nums[zero], nums[i]] = [nums[i], nums[zero]];
      i++;
    }
  }
  return nums;
};

console.log('best_sortColors', best_sortColors(nums1));
