/**
 * 404. 左叶子之和
 * 
 * 计算给定二叉树的所有左叶子之和。
    3
   / \
  9  20
    /  \
   15   7
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

//递归
var sumOfLeftLeaves = function (root) {
  if (!root) return 0;

  //递归左节点
  let leftValue = sumOfLeftLeaves(root.left); //左
  let rightValue = sumOfLeftLeaves(root.right); //右

  let midValue = 0;

  //左节点 == 左节点不为空 && 该节点的节点为空 && 该节点的节点为空
  if (root.left && !root.left.left && !root.left.right) {
    midValue = root.left.val;
  }
  // 左节点 + 递归获取的左节点 +  右节点中左节点之和
  let sum = midValue + leftValue + rightValue;

  return sum;
};

//迭代
var sumOfLeftLeaves = function (root) {
  if (!root) return 0;
  let q = [root];
  let res = 0; //结果
  while (q.length > 0) {
    let n = q.shift();
    //判断左叶子
    if (!n.left && n.left.left === null && n.left.right === null) {
      res += n.left.val;
    }
    if (n.left) q.push(n.left);
    if (n.right) q.push(n.right);
  }

  return res
};
