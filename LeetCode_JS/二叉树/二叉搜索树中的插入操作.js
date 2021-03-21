/**
 *
 * 二叉搜索树中的插入操作
 * 给定二叉搜索树（BST）的根节点和要插入树中的值，、
 * 将值插入二叉搜索树。 返回插入后二叉搜索树的根节点。 输入数据 保证 ，新值和原始二叉搜索树中的任意节点值都不同。
 */

//递归
// 如果该子树不为空，则问题转化成了将val 插入到对应子树上。
// 否则，在此处新建一个以val 为值的节点，并链接到其父节点root 上。

var insertIntoBST = function (root, val) {
  if (root === null) {
    return new TreeNode(val);
  }

  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  }

  if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  }

  return root;
};

//迭代
var insertIntoBST = function (root, val) {
  //如果没有节点则插入
  if (root == null) {
    return new TreeNode(val);
  }
  let cur = root,
    parent = root; //记录上一个节点

  while (cur !== null) {
    parent = cur;
    if (cur.val > val) {
      cur = cur.left;
    } else {
      cur = cur.right;
    }
  }
  let node = new TreeNode(val)

  if(val < parent.val) {
    parent.left = node  //赋值
  }else(parent.right == node){
    return root
  }

};
