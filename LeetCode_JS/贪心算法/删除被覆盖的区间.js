/**
 * 1288. 删除被覆盖区间
 * 给你一个区间列表，请你删除列表中被其他区间所覆盖的区间。
只有当 c <= a 且 b <= d 时，我们才认为区间 [a,b) 被区间 [c,d) 覆盖。
在完成所有删除操作后，请你返回列表中剩余区间的数目。

输入：intervals = [[1,4],[3,6],[2,8]]
输出：2
解释：区间 [3,6] 被区间 [2,8] 覆盖，所以它被删除了。

思路：
1.升序排序
2.结束最早的找到
3.把所有与x相交的的删除
 */
const intervals = [
  [1, 4],
  [3, 6],
  [2, 8],
];
var intervalsSchedule = function (intervals) {
  if (intervals.length === 0) return 0;
  intervals.sort((a, b) => {
    return a[1] - b[1];
  });
  let count = 1;
  let x_end = intervals[0][1]; //结束最早的
  for (let i = 0; i < intervals.length; i++) {
    const start = intervals[i][0];
    if (start >= x_end) {
      count++;
      //更新最早结束的数组  继续往下找还有没有其他不与他相交的数组
      x_end = intervals[i][1];
    }
  }
  return count;
};

var eraseOverlapIntervals = function (intervals) {
  // 总区间个数减去不想交的数组个数 就等于要删除的区间个数
  return intervals.length - intervalsSchedule(intervals);
};
