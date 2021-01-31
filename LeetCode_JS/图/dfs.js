/*
 * @Descripttion: 图的深度优先遍历
 * @Author: Mario
 * @Date: 2021-01-31 23:24:45
 * @LastEditors: Maroi
 * @LastEditTime: 2021-01-31 23:32:39
 */
const graph = require('./graph');

//set变量 缓存已经访问过的节点
const vistied = new Set();
const dfs = (n) => {
  console.log('n :>> ', n);
  vistied.add(n);
  graph[n].forEach((c) => {
    //跳过已经遍历的值
    if (!vistied.has(c)) {
      dfs(c);
    }
  });
};

dfs(2); //根节点
