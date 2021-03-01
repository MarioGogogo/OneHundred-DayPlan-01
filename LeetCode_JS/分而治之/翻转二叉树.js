/**
翻转一棵二叉树。

示例：

输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1
 */
//递归
var invertTree = function (root) {
  if (!root) return root;
  //递归
  return {
    val: root.val,
    left: invertTree(root.right),
    right: invertTree(root.left),
  };
};

//迭代  套用广度优先搜索的那个套路

var invertTree = function (root) {
  if (!root) return null;
  //创建队列
  let res = [root];
  while (res.length) {
    const p = [];
    let len = res.length;
    for (let i = 0; i < len; i++) {
      //如果没有叶子节点则退出
      if (!res[i].left && !res[i].right) return;
      //交换位置
      [res[i].left, res[i].right] = [res[i].right, res[i].left];
      //如果存在左子树
      if (res[i].left) {
        p.push(res[i].left);
      }
      //如果存在右子树
      if (res[i].right) {
        p.push(res[i].right);
      }
    }
    res = p;
  }

  return root;
};
