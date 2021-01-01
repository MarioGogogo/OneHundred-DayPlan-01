/**
 * 76-给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。
 * 如果 s 中不存在涵盖 t 所有字符的子串，
 * 则返回空字符串 "" 。
 */

// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"

/**
 * 滑动窗口算法
 * @param {*} s
 * @param {*} t
 */

let s = 'ADOBECODEBANC',
  t = 'ABC';
var minWindow = function (s, t) {
  let count = {};
  [...t].forEach((el) => (count[el] ? count[el]++ : (count[el] = 1)));
  console.log('arr :>> ', count);
  let c = 0,
    res,
    minL = s.lenth;
  let l = 0;
  r = 0;
  for (let l = 0, r = 0; r < s.length; ++r) {
    count[s[r]]--;
    if (count[s[r]] >= 0) ++c;
    while (c == t.length) {
      if (r - l + 1 <= minL) {
        minL = r - l + 1;
        res = s.substr(l, r - l + 1);
      }
      count[s[l]]++;
      if (count[s[l]] > 0) --c;
      ++l;
    }
  }
  return res;
};

console.log(
  '%c 🌰 minWindow: ',
  'font-size:20px;background-color: #E41A6A;color:#fff;',
  minWindow(s, t)
);
