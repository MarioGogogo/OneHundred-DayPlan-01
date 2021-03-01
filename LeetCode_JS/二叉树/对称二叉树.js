/**
 * 101. 对称二叉树
 *给定一个二叉树，检查它是否是镜像对称的。
     1
   / \
  2   2
 / \ / \
3  4 4  3
 */

var isSymmetric = function (root) {
  if (!root) return root;
  return compare(r.left, r.right);
};

function compare(left, right) {
  if(left === null && right !== null){
    return false
  }
  else if(left !== null && right === null){
     return false
  }else if(left === null && right === null){
    return true
  }else if(left.val !== right.val){
     return false
  }else{
     return compare(left.left,right.right) && compare(left.right,right.left)
  }
}
