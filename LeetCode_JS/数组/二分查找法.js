/*
 * @Descripttion:
 * @Author: Mario
 * @Date: 2020-12-28 22:13:17
 * @LastEditors: Maroi
 * @LastEditTime: 2020-12-28 22:38:57
 */
function binarySearch(arr, n, target) {
  let l = 0;
  r = n - 1; //边界  [l....r]范围内寻找target
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] === target) return mid;
    if (target > arr[mid]) {
      l = mid + 1; //边界 [mid+1 ....r]
    } else {
      r = mid - 1;
    }
  }
  return -1;
}

binarySearch([1, 2, 3, 4, 5], 5, 5);
console.log('object :>> ', binarySearch([1, 2, 3, 4, 5], 6, 5));
