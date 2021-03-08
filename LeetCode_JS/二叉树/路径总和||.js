/**
 * 113. 路径总和 II
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，
 * 找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
 * 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：[[5,4,11,2],[5,8,4,5]]

 */
var pathSum = function (root, targetSum) {
  let result = [];
  if (!root) return [];

  const path = [root.val]; //记录路径

  traversal(root, sum - root.val);

  return res;
};

function traversal(cur, count) {
  if (!cur.left && !cur.right && count === 0) return result.push(path);

  if (!cur.left && !cur.right) return;
  if (cur.left) {
    path.push(cur.left.val);
    count -= cur.left.val;
    traversal(cur.left, count);
    count += cur.left.val;
    path.pop(); //回溯
  }
  if (cur.right) {
    path.push(cur.right.val);
    count -= cur.right.val;
    traversal(cur.right, count);
    count += cur.right.val;
    path.pop(); //回溯
  }
  return;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
