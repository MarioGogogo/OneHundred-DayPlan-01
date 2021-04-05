/**
 * 93. 复原 IP 地址
 * 给定一个只包含数字的字符串，用以表示一个 IP 地址，返回所有可能从 s 获得的 有效 IP 地址 。
 * 你可以按任何顺序返回答案。

有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），
整数之间用 '.' 分隔。

例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，
但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
输入：s = "25525511135"
输出：["255.255.11.135","255.255.111.35"]
 */

//ip地址 [[0...255].[0...255].[0...255].[0...255]]
var restoreIpAddresses = function (s) {
  let result = [];
  //大于12 超过最大有效ip总长度
  if (s.length > 12) return result;
  // pointNum，记录添加逗点的数量
  function backtracking(s, startIndex) {
    if (s.length == 4 && startIndex === s.length) {
      result.push(s.join('.'));
      return;
    }
    if (s.length === 4 && startIndex < s.length) return;

    for (let i = 1; i <= 3; i++) {
      if (startIndex + i - 1 >= s.length) return;
      if (i !== 1 && s[startIndex] === '0') return;
      const str = s.substring(start, start + len);
      if (len === 3 && +str > 255) return;
      s.push(str);
      backtracking(s, startIndex + i);
      s.pop(); //回溯
    }
  }

  backtracking([], 0);

  return result;
};
