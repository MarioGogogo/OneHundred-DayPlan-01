/**
 * 435. 无重叠区间
 * 给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。
注意:
可以认为区间的终点总是大于它的起点。
区间 [1,2] 和 [2,3] 的边界相互“接触”，但没有相互重叠。
输入: [ [1,2], [2,3], [3,4], [1,3] ]
输出: 1
解释: 移除 [1,3] 后，剩下的区间没有重叠。

输入: [ [1,2], [1,2], [1,2] ]
输出: 2
解释: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。
 */

const intervals = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
];
// 开始小：按开始升序，遍历先遇到的开始小。开始相同，谁在前一样
// 重复：r最后不重复区间的结束

var eraseOverlapIntervals = function (intervals) {
  if (intervals.length === 0) return 0;
  intervals.sort((a, b) => a[0] - b[0]);
  let r = intervals[0][1],
    res = 0,
    i = 0;
  while (++i < intervals.length) {
    if (intervals[i][0] < r) {
      res++;
      if (intervals[i][1] < r) r = intervals[i][1];
    } else {
      r = intervals[i][1];
    }
  }
  return res;
};
