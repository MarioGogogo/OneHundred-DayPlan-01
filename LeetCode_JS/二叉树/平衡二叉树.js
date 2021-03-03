
/**
 * 110. 平衡二叉树
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 * 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。
 * @param {*} root 
 * 
 * 思路：分别求出左右子树高度差小于等于1  否则返回-1
 */
const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

//递归
var isBalanced = function(root) {
   return getDepth(root) ===  -1 
};

var getDepth = function(root){
  if(root === null) return 0

  let leftDepth = getDepth(root.left)
  if(leftDepth === -1) return -1  //说明左子树不是二叉平衡树
  let rightDepth = getDepth(root.right)
  if(rightDepth === -1) return -1

  return Math.abs(leftDepth - rightDepth) > 1 ? -1 : 1+ Math.max(leftDepth,rightDepth)



}