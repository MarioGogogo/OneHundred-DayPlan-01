/**
 * 最大二叉树
 * 给定一个不含重复元素的整数数组 nums 。一个以此数组直接递归构建的 最大二叉树 定义如下：

二叉树的根是数组 nums 中的最大元素。
左子树是通过数组中 最大值左边部分 递归构造出的最大二叉树。
右子树是通过数组中 最大值右边部分 递归构造出的最大二叉树。
输入：nums = [3,2,1,6,0,5]
输出：[6,3,5,null,2,0,null,null,1]
解释：递归调用如下所示：
- [3,2,1,6,0,5] 中的最大值是 6 ，左边部分是 [3,2,1] ，右边部分是 [0,5] 。
    - [3,2,1] 中的最大值是 3 ，左边部分是 [] ，右边部分是 [2,1] 。
        - 空数组，无子节点。
        - [2,1] 中的最大值是 2 ，左边部分是 [] ，右边部分是 [1] 。
            - 空数组，无子节点。
            - 只有一个元素，所以子节点是一个值为 1 的节点。
    - [0,5] 中的最大值是 5 ，左边部分是 [0] ，右边部分是 [] 。
        - 只有一个元素，所以子节点是一个值为 0 的节点。
        - 空数组，无子节点。



 */

/**
 * 思路 构造树一般采用前序遍历 因为先构造中间节点 然后 左  然后右
 *
 * @param {*} nums
 */
var constructMaximumBinaryTree = function (nums) {
  //递归
  return traversal(nums, 0, nums.length-1);
};

function traversal(nums, left, right) {
  // 终止条件，当左边的位置大于右边的位置。
  if (left > right) return null;

  // 默认第一个为最大值的index
  let maxValueIndex = left;
  //寻找最大值
  for (let i = left+1; i <= right; i++) {
    if (nums[i] > nums[maxValueIndex]){
      maxValueIndex = i;
    }
  }
  //创建根节点
  const root = new TreeNode(nums[maxValueIndex]);

  // 左子树

  root.left = traversal(nums,left,maxValueIndex-1)

  // 右子树
  root.right = traversal(nums,maxValueIndex+1,right)

  return root
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
