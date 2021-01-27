/*
 * @Descripttion:
 * @Author: Mario
 * @Date: 2021-01-26 22:07:44
 * @LastEditors: Maroi
 * @LastEditTime: 2021-01-26 22:47:47
 */
const bt = require('./bt');
// 先序遍历
const preorder = (root) => {
  if (!root) return;
  let link = '';
  const stack = [root];

  while (stack.length) {
    //推出栈
    const n = stack.pop();
    link += n.val + '->';
    //后进先出  所有 [里面要放右节点, 再放左节点]
    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
  console.log('link :>> ', link);
};

preorder(bt.tree);

//中序遍历
const inorder = (root) => {
  if (!root) return;
  //遍历左边
  const stack = [];
  let p = root;

  while (stack.length || p) {
    while (p) {
      stack.push(p);
      // 不断的取left
      p = p.left;
    }
    //左边的值 每一个都推出栈  取一下
    const n = stack.pop();
    console.log('n.val :>> ', n.val);
    //走到这步说明二叉树左边遍历完了
    p = n.right;
  }
};
inorder(bt);
