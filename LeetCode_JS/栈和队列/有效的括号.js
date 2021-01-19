/**
 * 20. 有效的括号
 */
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 输入: "([)]"
// 输出: false

// 输入: "()[]{}"
// 输出: true

/*
1、定义数组 缓存括号状态
2、定义Map建立 括号映射关系
3、通过循环遍历输入字符串判断：
- 如果输入字符串在Map中存在（正括号存在即合理），继续循环
- 如果不存在，再获取缓存中最后一项的值进行配对～配对成功即合理、移除当前缓存
- 继续循环直到遍历完成
4、遍历完成后如果缓存中仍有数据、说明有正括号未匹配结果，则return false，反之return true
*/

const s = '()[]{}';
var isValid = function (s) {
  //排除奇数长度
  const n = s.length;
  if (n % 2 === 1) return false;

  const pairs = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ]);

  //模拟一个栈
  const arr = [];

  for (let i = 0; i < n; i++) {
    //如果匹配上这个字符就推出栈
    if (pairs.has(s[i])) {
      //如果长度
      if (!arr.length || arr[n - 1] !== pairs.get(s[i])) {
        return false;
      }
      arr.pop();
    } else {
      //没有这个字符就推入栈
      arr.push(s[i]);
    }
  }

  return !arr.length;
};
