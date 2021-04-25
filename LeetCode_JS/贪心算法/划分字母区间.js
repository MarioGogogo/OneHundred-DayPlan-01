/**
 * 763. 划分字母区间
 输入：S = "ababcbacadefegdehijhklij"
输出：[9,7,8]
解释：
划分结果为 "ababcbaca", "defegde", "hijhklij"。
每个字母最多出现在一个片段中。
像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。
 */

var partitionLabels = function (S) {
  //生成数组长度
  const last = new Array(26);
  const length = S.length;
  const codePointA = 'a'.codePointAt(0);
  for (let i = 0; i < length; i++) {
    last[S.codePointAt(i) - codePointA] = i;
  }
  const result = []; //纯结果
  let start = 0,end = 0;
  for (let i = 0; i < length; i++) {
    end = Math.max(end, last[S.codePointAt(i) - codePointA]);
    if (i == end) {
      result.push(end - start + 1);
      start = end + 1;
    }
  }
  return result;
};
