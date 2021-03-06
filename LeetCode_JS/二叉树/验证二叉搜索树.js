/**
 * 98. 验证二叉搜索树
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
输入:
    2
   / \
  1   3
输出: true
输入:
    5
   / \
  1   4
     / \
    3   6
输出: false
解释: 输入为: [5,1,4,null,null,3,6]。
     根节点的值为 5 ，但是其右子节点值为 4 。
 */

//递归
let pre = null; //用于记录前一个节点
var isValidBST = function (root) {
  if (root == null) return true;

  const left = isValidBST(root.left);

  //这一步很重要
  if (pre != null && pre.val >= root.val) return false;
  pre = root; //记录前一个节点

  const right = isValidBST(root.right);

  return left && right;
};

//迭代
var isValidBST = function (root) {
  let str = [];
  let cur = root;
  let pre = null; //记录前一个

  while (cur != null || st.length > 0) {
    if (cur != null) {
      st.push(cur);
      cur = cur.left;
    } else {
      cur = st.shift();
      if (pre != null && cur.val <= pre.val) {
        return false;
      }
      pre = cur;
      cur = cur.right;
    }
    return true;
  }
};
