/**
 * 77. 组合
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
 */

function combine(n, k) {
  let result=[];
  let path=[];
  let startIndex = 1;
  backtracking(n, k, startIndex);
  return result;

  function backtracking(n, k, startIndex) {
    //终止条件 如果找到 符合k长度的组合则加入 res保存
    if (path.length === k) {
      return result.push([...path]);
    }
    // for循环每次从startIndex开始遍历，然后用path保存取到的节点i。
    for (let i = startIndex; i <= n; i++) {
      path.push(i);
      //控制树的纵向遍历，注意下一层搜索要从i+1开始
      backtracking(n, k, i + 1);
      path.pop(); //回溯撤销  比如 [1,2] ==> [1] 继续回去找【1，3】
    }
  }
}


