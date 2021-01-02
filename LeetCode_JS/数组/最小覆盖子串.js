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

let s = 'aa',
  t = 'a';
var minWindow = function (s, t) {
  let hash = {};
  [...t].forEach((el) => (hash[el] ? hash[el]++ : (hash[el] = 1)));
  console.log('arr :>> ', hash);

  let c = 0,
    res,
    minL = Infinity,
    start = 0,
    count = t.length,
    l = 0,
    r = 0;

  while (r < s.length) {
    if (hash[s[r]] > 0) {
      hash[s[r]]--;
    }
    if (hash[s[r]] === 0) {
      count--;
    }

    //说明我找齐了几个字母 1.计算长度  2.试试收缩窗口
    while (count === 0) {
      if (r - l + 1 < minL) {
        minL = r - l + 1;
        start = l;
      }
      //我缩小窗口丢弃了一个元素 但这个元素存在 则要+1
      if (hash[s[l]] >= 0) {
        hash[s[l]]++;
      }
      if (hash[s[l]] > 0) {
        count++;
      }
      l++;
    }
    r++;
  }
  return minL === Infinity ? '' : s.substring(start, start + minL);
};

console.log(
  '%c 🌰 minWindow: ',
  'font-size:20px;background-color: #E41A6A;color:#fff;',
  minWindow(s, t)
);
