/**
 * 131. 分割回文串
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
回文串 是正着读和反着读都一样的字符串。

示例 1：

输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]
示例 2：

输入：s = "a"
输出：[["a"]]
 */

var partition = function (s) {
  let result = []; 
  let path = [];
  function backtracking(s, starIndex) {
    if (starIndex >= s.length) {
      result.push(path);
      return;
    }

    for (let i = starIndex; i < s.length; i++) {
      //判断回文
      if (isPalidrome(s, starIndex, i)) {
        let str = s.substr(starIndex, i - starIndex + 1);
        path.push(str);
      } else {
        continue;
      }
      backtracking(s, i + 1);
      path.pop();
    }
  }

  function isPalidrome(s, start, end) {
    for (let i = start, j = end; i < j; i++, j--) {
      if (s[i] === s[j]) return true;
    }
    return false;
  }
  backtracking(s, 0);
  return result;
};

