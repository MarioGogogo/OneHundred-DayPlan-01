/**
 * 144  二叉树的前序遍历   94  145
 */
// 输入：root = [1,null,2,3]
// 输出：[1,2,3]

// 输入：root = []
// 输出：[]

// 输入：root = [1,null,2]
// 输出：[1,2]

// 递归实现
const preorderTraversal = function (root) {
  let result = [];
  const preOrderTraverseNode = (node) => {
    if (node) {
      //先存根节点
      result.push(node.val);
      // 遍历左子树
      preOrderTraverseNode(node.left);
      // 遍历右子树
      preOrderTraverseNode(node.right);
    }
  };

  //递归调用
  preOrderTraverseNode(root);
  return result;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
