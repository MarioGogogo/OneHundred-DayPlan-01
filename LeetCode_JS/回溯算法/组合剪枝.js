/**
 * 77. 组合
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
输入: n = 4, k = 4
输出:
[
  [1，2，3，4],
]
 */

/**
 * 思考：如果我们n = 4，k = 4的话，那么第一层for循环的时候，从元素2开始的遍历都没有意义了。 在第
二层for循环，从元素3开始的遍历都没有意义了。

因为已经不满足我们的数组个数要求了  [1,2,3,4]
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
    // 接下来看一下优化过程如下:
    // 1. 已经选择的元素个数:path.size();
    // 2. 还需要的元素个数为: k - path.size();
    // 3. 在集合n中至多要从该起始位置 : n - (k - path.size()) + 1，开始遍历 （包括起始位置
    for (let i = startIndex; i <= (k - path.length) + 1; i++) {
      path.push(i);
      //控制树的纵向遍历，注意下一层搜索要从i+1开始
      backtracking(n, k, i + 1);
      path.pop(); //回溯撤销  比如 [1,2] ==> [1] 继续回去找【1，3】
    }
  }
}


