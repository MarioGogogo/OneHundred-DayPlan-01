/**
 * 150. 逆波兰表达式求值
 */

// 有效的运算符包括 +, -, *, / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

// 输入: ["2", "1", "+", "3", "*"]
// 输出: 9
// 解释: 该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9

/*
输入: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
输出: 22
解释: 
该算式转化为常见的中缀算术表达式为：
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
*/

// 创建一个栈
class Stack {
  constructor() {
    this._data = [];
  }

  push(c) {
    this._data.push(c);
  }
  pop() {
    return this._data.pop();
  }
}

//封装一个算术方法
const Sign = {
  '*': (x, y) => x * y,
  '/': (x, y) => (x / y) | 0,
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
};
const tokens = ['2', '1', '+', '3', '*'];
var evalRPN = function (tokens) {
  const stack = new Stack();

  tokens.forEach((item) => {
    //遇见 加减乘除 出栈 运算后的值 再进栈
    if (item in Sign) {
      //后进先出
      const y = stack.pop();
      const x = stack.pop();
      const res = Sign[item](x, y);
      stack.push(res);
    } else {
      //入栈
      stack.push(+item);
    }
  });
  //推出最后一个数
  return stack.pop();
};

console.log(
  '%c 🍺 evalRPN: ',
  'font-size:20px;background-color: #93C0A4;color:#fff;',
  evalRPN(tokens)
);
