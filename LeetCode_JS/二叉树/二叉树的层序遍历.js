/*
 * @Descripttion:
 * @Author: Mario
 * @Date: 2021-01-24 18:52:03
 * @LastEditors: Maroi
 * @LastEditTime: 2021-01-27 22:34:49
 */
/**
 * 102. 二叉树的层序遍历
 */
// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。
// （即逐层地，从左到右访问所有节点）。
// 二叉树：[3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层序遍历结果：

// [
//   [3],
//   [9,20],
//   [15,7]
// ]
const root = [3, 9, 20, null, null, 15, 7];
var levelOrder = function (root) {
  if (!root) return [];
  //边界判断
  const res = [];
  const queue = [];
  // 首先根元素入队
  queue.push(root);

  //循环
  while (queue.length !== 0) {
    const currSize = queue.length;
    //每次推中推入 新[]  ---> [[],[],[]]
    res.push([]);

    for (let i = 1; i < currSize; i++) {
      // 每次循环将队列出栈
      const node = queue.shift();

      res[res.length - 1].push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return res;
};

levelOrder(root);
