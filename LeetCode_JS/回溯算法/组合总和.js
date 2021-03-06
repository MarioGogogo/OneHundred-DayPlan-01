/**
 * 
39. 组合总和 
给定一个无重复元素的数组 candidates 和一个目标数 target ，
找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的数字可以无限制重复被选取。
输入：candidates = [2,3,6,7], target = 7,
所求解集为：
[
  [7],
  [2,2,3]
]

输入：candidates = [2,3,5], target = 8,
所求解集为：
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
 */

var combinationSum = function (candidates, target) {
  let result = [];
  let path = [];

  function backtracking(candidates, target, sum, startIndex) {
    //终止条件 如果 sum 大于target则退出
    if (sum > target) return;
    if (sum === target) {
      result.push([...path]);
      return;
    }
    //单层循环遍历
    for (let i = startIndex; i < candidates.length; i++) {
      sum += candidates[i];
      path.push(candidates[i]);
     // i 不能 i+1 因为元素可以重复 
      backtracking(candidates, target, sum, i); 

      sum -= candidates[i]; //回溯
      path.pop();  //回溯
    }
  }

  backtracking(candidates, target, 0, 0);
  return result;
};

 console.log('combinationSum :>> ', combinationSum([2,3,6,7],7));