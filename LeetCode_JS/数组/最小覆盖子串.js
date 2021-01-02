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
var minWindow1 = function (s, t) {
  let hash = {};
  [...t].forEach((el) => (hash[el] ? hash[el]++ : (hash[el] = 1)));
  console.log('arr :>> ', hash);

  let minL = Infinity,
    start = 0,
    count = t.length, //类型数量
    l = 0,
    r = 0,
    res = '';

  while (r < s.length) {
    //判断如果hash对象中有这个字符就-1：表示找到了一个字符
    if (hash[s[r]] > 0) {
      hash[s[r]]--;
    }
    //如果某一个字符找到了 类型数量也要相应 -1 表示不需要它了
    if (hash[s[r]] === 0) {
      count--;
    }

    //说明我找齐了几个字母 开始移动左指针 1.计算长度  2.试试收缩窗口
    while (count === 0) {
      console.log('s.substring :>> ', s.substring(l, r + 1));
      const result = s.substring(l, r + 1);
      //最小长度
      if (!res || result.length < res.length) {
        res = result;
      }
      if (hash[s[l]] === 0) {
        //移动左指针
        hash[s[l]]++;
      }
      //如果移动到的字符 等于1 那就表示需要这个字符  类型数量相应+1
      if (hash[s[l]] === 1) {
        count++;
      }
      l++;
    }
    r++;
  }
  return res;
};

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
