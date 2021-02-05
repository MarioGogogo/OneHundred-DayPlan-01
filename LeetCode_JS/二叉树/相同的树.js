/**
 * 100. 相同的树
 * @param {*} p
 * @param {*} q
 * 输入：p = [1,2,3], q = [1,2,3]
    输出：true
    输入：p = [1,2], q = [1,null,2]
    输出：false
 */

const p = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};

const q = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};
// 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
// 思路： 左子树是否相同 右子树是否相同  根节点是否相同
//递归
var isSameTree = function (p, q) {
  //边界条件
  if (!q && !p) return true;
  if (
    p &&
    q &&
    p.val == q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  ) {
    return true;
  }
  return false;
};
