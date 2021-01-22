/**
 * 94. 二叉树的中序遍历
 */
// 给定一个二叉树的根节点 root ，返回它的 中序 遍历
// 输入：root = [1,null,2,3]
// 输出：[1,3,2]

// 输入：root = [1,null,2]
// 输出：[1,2]

/**
 * 递归实现
 * 中序遍历，它是将 do something with root（处理当前节点）
 * 放在了访问完它的左子树之后。
 * 比方说，打印节点值，就会产生「左 根 右」的打印顺序。
 */
const inorderTraversal = function (root) {
  const res = [];
  const midSort = (root) => {
    if (root == null) return;
    midSort(root.left);
    res.push(root.val);
    midSort(root.right);
  };

  midSort(root);
  return res;
};

/**
 * 用栈来实现
 */
const inorderTraversal_1 = function (root) {
  const res = [];
  const stack = [];

  //栈的左子节点都压进来
  while (root) {
    stack.push(root);
    root = root.left;
  }

  while (stack.length) {
    // 栈顶的节点出栈
    let node = stack.pop();
    res.push(node.val);
    //获取它的右子树
    node = node.right;
    // 右子树存在，执行while循环
    while (node) {
      stack.push(node);
      node = node.left;
    }
  }
  return res;
};
