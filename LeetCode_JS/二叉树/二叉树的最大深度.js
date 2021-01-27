/**
 * 104. 二叉树的最大深度
  二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7

**************************/

// 递归
var maxDepth = function (root) {
  //创建一个层次遍历;
  let res = 0;

  const dfs = (n, l) => {
    if (!n) return;
    if (!n.left && !n.right) {
      res = Math.max(res, l);
    }
    //递归左树
    dfs(n.left, l + 1);
    //递归右树 层数+1
    dfs(n.right, l + 1);
  };

  dfs(root, 1);
  return res;
};
