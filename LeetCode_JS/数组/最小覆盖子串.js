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
 * ***************************
 * 思路：1.双指针做一个滑动窗口
 * 2.移动右指针 找到包含t的子串 移动左指针，
 * 3 尽量减少包含t的子串长度
 */

let s = 'ADOBECODEBANC',
  t = 'ABC';

var minWindow = function (s, t) {
  //设置左右指针
  let l = 0,
    r = 0,
    res = '';
  let start = -1;
  let minLen = s.length + 1;
  const need = new Map();
  for (let c of t) {
    need.set(c, need.has(c) ? need.get(c) + 1 : 1);
  }
  console.log('need :>> ', need);
  //设置类型数量
  let needType = need.size;
  //设置边界
  while (r < s.length) {
    const c = s[r];
    if (need.has(c)) {
      need.set(c, need.get(c) - 1);
      if (need.get(c) === 0) needType--;
    }
    while (needType === 0) {
      // 滑动窗口宽度如果比minLen小，就更新minLen
      if (r - l + 1 < minLen) {
        minLen = r - l + 1;
        start = l; // 更新最小窗口的起点
      }
      const c2 = s[l];
      if (need.has(c2)) {
        need.set(c2, need.get(c2) + 1);
        if (need.get(c2) === 1) needType++;
      }
      l++;
    }
    r++;
  }
  if (start == -1) return '';
  return s.substring(start, start + minLen);
};

console.log(
  '%c 🌰 minWindow: ',
  'font-size:20px;background-color: #E41A6A;color:#fff;',
  minWindow(s, t)
);
