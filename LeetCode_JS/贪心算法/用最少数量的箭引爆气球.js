/**
 * 452. 用最少数量的箭引爆气球
 * 在二维空间中有许多球形的气球。对于每个气球，提供的输入是水平方向上，
 * 气球直径的开始和结束坐标。由于它是水平的，所以纵坐标并不重要，
 * 因此只要知道开始和结束的横坐标就足够了。开始坐标总是小于结束坐标。
 * 
输入：points = [[10,16],[2,8],[1,6],[7,12]]
输出：2
解释：对于该样例，x = 6 可以射爆 [2,8],[1,6] 两个气球，以及 x = 11 射爆另外两个气球
输入：points = [[1,2],[3,4],[5,6],[7,8]]
输出：4
输入：points = [[1,2],[2,3],[3,4],[4,5]]
输出：2
 * 
 */
const intervals = [
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
];
//获取没有交集区间的个数
var findMinArrowShots = function (intervals) {
  if (intervals.length === 0) return 0;
  //排序
  intervals.sort((a, b) => {
    return a[1] - b[1];
  });
  //初始化区间个数至少有一个
  let count = 1;
  let x_end = intervals[0][1];
  for (let i = 0; i < intervals.length; i++) {
    const x_start = intervals[i][0];
    //如果起始点
    if (x_start > x_end) {
      count++;
      x_end = intervals[i][1];
    }
  }
  return count;
};
