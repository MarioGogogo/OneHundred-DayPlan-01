/**
 * 216. 组合总和 III
 * 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
 * 输入: k = 3, n = 7
输出: [[1,2,4]]

输入: k = 3, n = 9
输出: [[1,2,6], [1,3,5], [2,3,4]]
 * @param {*} k 
 * @param {*} n 
 */

var combinationSum3 = function (k, n) {
  let result = []; //结果
  let path = []; //路径
  let startIndex = 1; //起始搜索位置
  let targtSum = n;
  let sum = 0;
  //递归
  backtracking(targtSum, k, sum, startIndex);
  return result;

  function backtracking(targtSum, k, sum, startIndex) {
    //如果长度相同 必须 相加相等n 否则返回
    if (path.length === k) {
      if (sum === targtSum) {
        result.push([...path]);
      }
      return;
    }

    for (let i = startIndex; i <= 9; i++) {
      sum += i;
      path.push(i);
      backtracking(targtSum, k, sum, i + 1);
      sum -= i;  // 回溯 [2,4] 
      path.pop(); //回溯
    }
  }
};
