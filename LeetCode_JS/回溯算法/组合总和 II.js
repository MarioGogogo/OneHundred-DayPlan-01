/**
 * 40. 组合总和 II
输入: candidates = [2,5,2,1,2], target = 5,
所求解集为:
[
  [1,2,2],
  [5]
]
输入: candidates = [10,1,2,7,6,1,5], target = 8,
所求解集为:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
 */

var combinationSum2 = function (candidates, target) {
  let use = [],
    result = [];
  // 首先把给candidates排序，让其相同的元素都挨在一起。
  candidates.sort((a, b) => {
    return a - b;
  });

  function backtracking(candidates, target, sum, startIndex, used) {
    if (sum === target) {
      result.push([...path]);
      return;
    }
    for (let i = startIndex; i < candidates.length; i++) {
      // 要对同一树层使用过的元素进行跳过
      if (
        i > 0 &&
        candidates[i] === candidates[i - 1] &&
        use[i - 1] === false
      ) {
        continue;
      }
      sum += candidates[i];
      path.push(candidates[i]);
      used[i] = true;
      //这里里是i+1，每个数字在每个组合中只能使用一次
      backtracking(candidates, target, sum, i + 1, used);
      used[i] = false; //回溯
      sum -= candidates[i]; //回溯
      path.pop(); //回溯
    }
  }

  backtracking(candidates, target, 0, 0, used);
  return result;
};
