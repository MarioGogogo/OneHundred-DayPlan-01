/*
 * @Descripttion:
 * @Author: Mario
 * @Date: 2021-01-25 22:24:55
 * @LastEditors: Maroi
 * @LastEditTime: 2021-01-25 22:45:43
 */

const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'c',
          children: [],
        },
        {
          val: 'd',
          children: [],
        },
      ],
    },
    {
      val: 'e',
      children: [
        {
          val: 'f',
          children: [],
        },
        {
          val: 'g',
          children: [],
        },
      ],
    },
  ],
};

/**
 * 深度优先
 */
let link = '';
const dfs = (tree) => {
  link += tree.val + '-->';
  tree.children.forEach(dfs);
};

dfs(tree);
console.log('link :>> ', link);

/**
 * 广度优先
 */
let b_link = '';
const bfs = (root) => {
  //根节点加入队列
  const q = [root];
  //  循环
  while (q.length > 0) {
    //  队头出队
    const n = q.shift();
    //打印
    b_link += n.val + '-->';
    // 队头的子节点遍历
    n.children.forEach((child) => {
      q.push(child);
    });
  }
};

bfs(tree);
console.log('b_link :>> ', b_link);
