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

const letterCombinations = (digits) => {
  if (!digits.length) return [];
  // 设置哈希映射
  const hash = [
    '',
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
  ];
  //  设置结果集
  let result = [];
  const recursion = (letter, index) => {
    // 3.1 如果单个字符串到底了，那就添加它
    if (index === digits.length) {
      result.push(letter);
      return;
    }

    //获取当前数字对应的字母集合
    const nowStr = hash[Number(digits[index])];
    // 遍历这串字母，将其添加到下一次遍历中，同时位置向后挪一
    for (let i = 0; i < nowStr.length; i++) {
      recursion(letter + nowStr[i], index + 1);
    }
  };
  //递归
  recursion('', 0);
  return result;
};

console.log(letterCombinations('23')); // 返回数组长度：11664
