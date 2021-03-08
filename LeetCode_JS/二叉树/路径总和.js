/**
 * 112. 路径总和
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，
 * 判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
 */
// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// 输出：true

//深度优先遍历
var hasPathSum = function (root, targetSum) {
  // 边界判断
  if (!root) return false;
  let res = false;
  //深度遍历
  const dfs = (n, t) => {
    //没有叶子节点则退出
    if (!n.left && !n.right && t === targetSum) {
      return (res = true);
    }
    //递归
    if (n.left) dfs(n.left, t + n.left.val);
    if (n.right) dfs(n.right, t + n.right.val);
  };

  dfs(root, root.val);

  return res;
};

//迭代
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  const stack = [[root, root.val]];
  while (stack.length > 0) {
    const [n, pathSum] = stack.shift();
    //如果没有子节点 值又相等则返回true
    if (pathSum === targetSum && !n.left && !n.right) return true;
    // 前序遍历，需要先将右节点入栈，这样出栈时为左节点先出栈
    if (n.right) stack.push([n.right, pathSum + n.right.val]);
    if (n.left) stack.push([n.left, pathSum + n.left.val]);
  }
  return false
};
