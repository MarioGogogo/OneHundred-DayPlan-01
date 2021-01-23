/**
 * 145. 二叉树的后序遍历
 */

// 给定一个二叉树，返回它的 后序 遍历。

// 输入: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// 输出: [3,2,1]

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

let postorderTraversal = function (root) {
  let result = [];
  var postorderTraversalNode = (node) => {
    if (node) {
      // 先遍历左子树
      postorderTraversalNode(node.left);
      // 再遍历右子树
      postorderTraversalNode(node.right);
      // 最后根节点
      result.push(node.val);
    }
  };
  postorderTraversalNode(root);
  return result;
};
