/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * ******************
 * 思路：
 * 1.用 HashMap 来映射 s 的字符和对应的出现次数。
2.然后遍历 t ，将对应的字符在 map 中的值减 1，如果所有 value 都变为 0，则返回 true。
3.最多只有 26 个小写字符，所以也可以用长度为 26 的整型数组
 */

// 输入: s = "anagram", t = "nagaram"
// 输出: true

// 输入: s = "rat", t = "car"
// 输出: false

let s = 'anagram',
  t = 'nagaram';
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const hash = new Array(26).fill(0);
  const aCode = 'a'.charCodeAt(0);
  console.log('aCode :>> ', aCode); //97

  console.log('hash :>> ', hash);
  for (let i = 0; i < s.length; i++) {
    hash[s.charCodeAt(i) - aCode]++;
    hash[t.charCodeAt(i) - aCode]--;
  }

  console.log('hash :>> ', hash);
  for (let c of hash) {
    if (c != 0) {
      return false;
    }
  }
  return true;
};
console.log(
  '%c 🍒 isAnagram: ',
  'font-size:20px;background-color: #465975;color:#fff;',
  isAnagram(s, t)
);
