/**
88-给你两个有序整数数组 nums1 和 nums2，
请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 */

// 输入：
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// 输出：[1,2,2,3,5,6]

let nums1 = [1, 2, 3];
let nums2 = [2, 5, 6];

/**
 * 第一种解法
 */
let merge = function (nums1, m, nums2, n) {
  const total = [...nums1, ...nums2];
  return total.sort((a, b) => {
    return a - b;
  });
};

console.log(
  '%c 🥘 merge: ',
  'font-size:20px;background-color: #3F7CFF;color:#fff;',
  merge(nums1, 3, nums2, 3)
);

let nums3 = [1, 2, 3, 0, 0, 0];
let nums4 = [2, 5, 6];
/**
 * 第二种解法
 */
let bt_merge1 = function (nums1, m, nums2, n) {
  let len1 = m - 1;
  let len2 = n - 1;
  let len = m + n - 1;
  while (len1 >= 0 && len2 >= 0) {
    // 注意--符号在后面，表示先进行计算再减1，这种缩写缩短了代码
    // if (nums1[len1] > nums2[len2]) {
    //   nums1[len--] = nums1[len1--];
    // } else {
    //   nums1[len--] = nums2[len2--];
    // }
    nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
  }
  function arrayCopy(src, srcIndex, dest, destIndex, length) {
    dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length));
  }
  // 表示将nums2数组从下标0位置开始，拷贝到nums1数组中，从下标0位置开始，长度为len2+1
  arrayCopy(nums2, 0, nums1, 0, len2 + 1);
  //返回
  return nums1;
};

console.log(
  '%c 🍌 bt_merge: ',
  'font-size:20px;background-color: #FFDD4D;color:#fff;',
  bt_merge1(nums3, 3, nums4, 3)
);

/**
 * 双指针 / 从后往前
 */
let best_merge = function (nums1, m, nums2, n) {
  //设置2个指针
  let p1 = m - 1;
  let p2 = n - 1;
  //总数组长度的索引
  let p = m + n - 1;
  while (p1 > 0 && p2 > 0) {
    // [1,2,3] 与 [4,5,6]
    if (nums1[p1] < nums2[p2]) {
      nums1[p] = nums2[p2];
      p2--;
    } else {
      nums1[p] = nums1[p1];
      p1--;
    }
    p--;
  }
  //返回
  return nums1;
};

console.log(
  '%c 🥒 best_merge: ',
  'font-size:20px;background-color: #2EAFB0;color:#fff;',
  best_merge(nums3, 3, nums4, 3)
);
