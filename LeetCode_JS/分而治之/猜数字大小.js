/**
 * 374. 猜数字大小
 * 
 * 示例 1：

输入：n = 10, pick = 6
输出：6
示例 2：

输入：n = 1, pick = 1
输出：1
示例 3：
输入：n = 2, pick = 1
输出：1
示例 4：

输入：n = 2, pick = 2
输出：2
 */

var guessNumber = function (n) {
  const fun = (low, high) => {
    //设置边界
    if (low > high) return;
    const mid = Math.floor((low + high) / 2);
    const res = guess(mid);
    if (res === 0) {
      return mid;
    } else if (res === 1) {
      return fun(mid + 1, high);
    } else {
      return fun(1, mid - 1);
    }
  };
  return fun(1, n);
};
