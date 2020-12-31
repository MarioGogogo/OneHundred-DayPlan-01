/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 */

// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

const s = 'abcabc1232345';

/**
 * ******************
 * 思路： 1.设置滑动区间  2 遍历每一个字符串 把他们添加进去  如果发现数字钟
 * 3已经存在则删除最前面的那个元素  4.继续添加后面一个元素  直到遍历完字符串
 */
var lengthOfLongestSubstring = function (s) {
  let arr = []; //模拟滑动窗口
  let res = 0; //缓存最长字符串长度

  for (let i = 0; i < s.length; i++) {
    let index = arr.indexOf(s[i]);
    if (index !== -1) {
      //如果有这个值就需要  左边+1 缩小滑动窗口  ...a[bca]...
      //截取到重复字符后面的字符串
      arr.splice(0, index + 1);
    }
    //否则就把值加入滑动窗口
    arr.push(s.charAt(i));
    //获取连续的最大长度
    res = Math.max(res, arr.length);
  }
  return res;
};

console.log(
  '%c 🍓 lengthOfLongestSubstring: ',
  'font-size:20px;background-color: #42b983;color:#fff;',
  lengthOfLongestSubstring(s)
);
