/**
 * 93. 复原 IP 地址
 * 给定一个只包含数字的字符串，用以表示一个 IP 地址，返回所有可能从 s 获得的 有效 IP 地址 。
 * 你可以按任何顺序返回答案。

有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），
整数之间用 '.' 分隔。

例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。

 * @param {*} s 
 */

var restoreIpAddresses = function (s) {
  let result = [];
  if (s.length > 12) return result;

  function backtracking(s, startIndex, pointNum) {
    //终止条件
    if (pointNum === 3) {
      if (isValid(s, startIndex, s.length - 1)) {
        result.push(path);
      }
      return;
    }

    for (let i = startIndex; i < s.length; i++) {
      //判断是否ip合法
      if (isValid(s, startIndex, i)) {
        s.insert(s[0 + i + 1], '.'); //在i的后面插入一个逗点
        pointNum++;
        backtracking(s, i + 2, pointNum); // 插入逗点之后下一个子串的起始位置为i+2
        pointNum--; // 回溯
        s.erase(s[0] + i + 1); //回溯删掉逗点
      }
      break; //不合法直接结束本次循环
    }
    //判断ip是否合法
    function isValid(s, start, end) {
      if (start > end) return false;
      if (s[start] === '0' && start !== end) return false;

      let num = 0;
      for (let i = start; i < end; i++) {
        if (s[i] > '9' || s[i] < '0') {
          return false;
        }
        num = num * 10 + (s[i] - '0');
        //ip不能大于255
        if (num > 255) return false;
        return true;
      }
    }
  }

  backtracking(s, 0, 0);

  return result;
};
