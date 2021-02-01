/**
 * 广度优先遍历
 */
const graph = require('./graph');

const visited = new Set();
//初始加入队列
visited.add(2);
const q = [2];

while (q.length) {
  const n = q.shift();

  console.log('n :>> ', n);

  graph[n].forEach((v) => {
    //筛选出没有访问过的节点
    if (!visited.has(v)) {
      q.push(c);
      //添加进去再次判断就不会再进来
      visited.add(c);
    }
  });
}
