/**
 * 简化路径
 * 以 Unix 风格给出一个文件的绝对路径，你需要简化它。或者换句话说，将其转换为规范路径。
在 Unix 风格的文件系统中，一个点（.）表示当前目录本身；此外，两个点 （..） 
表示将目录切换到上一级（指向父目录）；两者都可以是复杂相对路径的组成部分
********************
请注意，返回的规范路径必须始终以斜杠 / 开头，并且两个目录名之间必须只有一个斜杠 /。
最后一个目录名（如果存在）不能以 / 结尾。
此外，规范路径必须是表示绝对路径的最短字符串。
 *************/
// 输入："/home/"
// 输出："/home"
// 解释：注意，最后一个目录名后面没有斜杠。

// 输入："/../"
// 输出："/"
// 解释：从根目录向上一级是不可行的，因为根是你可以到达的最高级。

// 输入："/a/./b/../../c/"
// 输出："/c"
// 输入："/a/../../b/../c//.//"
// 输出："/c"
// 输入："/a//b////c/d//././/.."
// 输出："/a/b/c"

//创建栈
class Stack {
  constructor() {
    this._data = [];
  }
  push(e) {
    this._data.push(e);
  }
  pop() {
    return this._data.pop();
  }
  join(s) {
    return this._data.join(s);
  }
}
var simplifyPath = function (path) {
  const stack = new Stack();

  //分割成数组  /a/./b/../../c/ ==> [a,.,b,..,..,c]
  const arr = path.split('/');

  for (const s of arr) {
    // 遇到 . 或者为空时，不修改当前 stack。
    if (s === '' || s === '.') {
      continue;
      // 遇到 .. 时，stack 弹出最近一个路径
    } else if (s === '..') {
      stack.pop();
    } else {
      // 遇到正常的字母时，推入 stack 中
      stack.push(s);
    }
  }
  //最后返回 '/' + stack.join('/') 为新的路径
  return '/' + stack.join('/');
};
