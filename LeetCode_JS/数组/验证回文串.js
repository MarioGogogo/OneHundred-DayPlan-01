/**
 * 125-给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 */

// 输入: "A man, a plan, a canal: Panama"
// 输出: true
const s = 'A man, a plan, a canal: Panama';
/**
 * 双指针做法  指针对撞
 */
let isPalindrome = function (s) {
  if (!s.trim()) return false;
  //过滤空格大小写
  let str = s.toLowerCase().match(/[A-Za-z0-9]+/g);
  if (!str) return true;
  //拼接字符串
  let nstr = str.join('');
  let l = 0,
    r = nstr.length - 1;
  while (l < r) {
    if (nstr[l] === nstr[r]) {
      l++;
      r--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(
  '%c 🍠 isPalindrome: ',
  'font-size:20px;background-color: #465975;color:#fff;',
  isPalindrome(s)
);
/**
 * 字符串翻转
 * 1、去重空格 特殊符号
 * 2.字符串反转  拼接
 * 3.如果相等 返回true
 * @param {*} s
 */
let bt_isPalindrome = function (s) {
  if (!s.trim()) return false;
  //过滤空格大小写
  let str = s.toLowerCase().match(/[A-Za-z0-9]/g);
  if (!str) return true;
  return str.join('') === [...str].reverse().join('');
};

console.log(
  '%c 🥦 bt_isPalindrome: ',
  'font-size:20px;background-color: #2EAFB0;color:#fff;',
  bt_isPalindrome(s)
);
