/*
 * @Descripttion:给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * @Author: Mario
 * @Date: 2020-12-28 23:33:32
 * @LastEditors: Maroi
 * @LastEditTime: 2020-12-29 00:12:06
 */
const arr = [0, 1, 0, 3, 12];
function moveZeroes(arr) {
  let n = [],
    w = [];
  arr.forEach((el) => {
    if (el !== 0) {
      n.push(el);
    } else {
      w.push(0);
    }
  });
  return [...n, ...w];
}

console.log(
  '%c 🥕 moveZeroes: ',
  'font-size:20px;background-color: #FCA650;color:#fff;',
  moveZeroes(arr)
);

//时间复杂度 O（n）
//空间复杂度O（1）
function bt_moveZeroes(arr) {
  let k = 0; //设置二个指针  k  i
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      arr[k++] = arr[i];
    }
  }
  for (let i = k; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}
console.log(
  '%c 🥜 bt_moveZeroes: ',
  'font-size:20px;background-color: #FCA650;color:#fff;',
  bt_moveZeroes(arr)
);

function bt2_moveZeroes(arr) {
  let k = 0; //[0...k] 均为0元素
  //遍历 保证[0...i] 不能为0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      //交换位置
      if (i != k) {
        swap(arr[k++], arr[i]);
      } else {
        k++;
      }
    }
  }
  return arr;
}

//交换位置
function swap(l, r) {
  return ([l, r] = [r, l]);
}

console.log(
  '%c 🍾 bt2_moveZeroes: ',
  'font-size:20px;background-color: #465975;color:#fff;',
  bt2_moveZeroes(arr)
);
