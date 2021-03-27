/**
 * 17. 电话号码的字母组合
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
输入：digits = ""
输出：[]
输入：digits = "2"
输出：["a","b","c"]
 */

var letterCombinations = function (digits) {
  let letterMap = [
    '', // 0
    '', // 1
    'abc', // 2
    'def', // 3
    'ghi', // 4
    'jkl', // 5
    'mno', // 6
    'pqrs', // 7
    'tuv', // 8
    'wxyz', // 9
  ];
  let result = [];

  if (digits.length === 0) return result;
  let s = [];
  function backtracking(digits, index) {
    if (index === digits.length) {
      return result.push(s);
    }
    //找到对应数字集合
    digits = digits[index] - '0';

    let letters = letterMap[digit];

    for (let i = 0; i < letters.length; i++) {
      s.push(letters[i]);
      backtracking(digits, index + 1);
      s.pop(); //回溯
    }
  }
  //递归
  backtracking(digits, 0);

  return result;
};
