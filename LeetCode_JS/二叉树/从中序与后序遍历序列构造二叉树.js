/**
 * 106. 从中序与后序遍历序列构造二叉树
 * 根据一棵树的中序遍历与后序遍历构造二叉树。
 中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]'

返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7

 */
var buildTree = function (inorder, postorder) {
  let post_idx;
  const idx_map = new Map();

  //回家想想
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
