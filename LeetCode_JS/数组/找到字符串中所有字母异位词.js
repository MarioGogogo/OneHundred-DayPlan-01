/**
 * 438-给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。
字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。
 */

// s: "cbaebabacd" p: "abc"
// s 'abab'  p 'ba'  返回[0，1，2]
// 输出:
// [0, 6]

const s = 'cbaebabacd',
  p = 'abc';
/**
 * 滑动窗口解题原理是使用双指针不能找到pattern长度的字符串进行比较，而每次找到长度相同的字符串后进行匹配
 * （比如：排序后进行字符串比较）都是比较耗时的，
 * 这里可以通过每个字符出现的次数来实现只用O(n)时间复杂度解题。
 * @param {*} s
 * @param {*} p
 */
var findAnagrams = function (s, p) {
  let list = [];
  //判断边界
  if (!s || !p) return list;
  //转数组
  s = [...s];
  //存对象 比较好判断 hash: { a: 1, b: 1, c: 1 }
  let hash = {};
  [...p].forEach((el) => (hash[el] ? hash[el]++ : (hash[el] = 1)));
  console.log('hash:', hash);
  //设置双指针
  let r = 0,
    l = 0,
    count = p.length;

  while (r < s.length) {
    //r 下标0  判断 hash.a > 0 表示存在则总长度-1
    if (hash[s[r]] > 0) {
      count--;
    }
    hash[s[r]]--; //这一步移到外面
    r++;

    //存一下下标位置
    if (count === 0) {
      list.push(l);
    }
    //字符串相等
    if (r - l === p.length) {
      if (hash[s[l]] >= 0) {
        count++;
      }
      hash[s[l]]++;
      l++;
    }
  }
  return list;
};
console.log(
  '%c 🍧 findAnagrams: ',
  'font-size:20px;background-color: #4b4b4b;color:#fff;',
  findAnagrams(s, p)
);
