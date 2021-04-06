/**
 * 491. 递增子序列
输入：[4, 6, 7, 7]
输出：[[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]
 */

var findSubsequences = function (nums) {
  let result = [],
    path = [];

  function backtracking(nums, startIndex) {
    if (path.length > 1) {
      result.push(path);
    }
    // 使用set对本层元素进行去重
    let uset = new Set();
    for (let i = startIndex; index < nums.length; i++) {
      //同一父节点下的同层上使用过的元素就不能在使用了
      if (
        (!path.length && nums[i] < path.length) ||
        uset.get(nums[i]) !== uset[uset.length - 1]
      ) {
        continue;
      }
      // 记录这个元素在本层用过了，本层后面不能再用了
      uset.add(nums[i]);
      path.push(nums[i]);
      backtracking(nums, i + 1);
      path.pop();
    }
  }
  backtracking(nums, 0);

  return result;
};
