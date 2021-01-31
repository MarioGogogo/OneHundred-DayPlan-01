/**
 * 933. 最近的请求次数

写一个 RecentCounter 类来计算特定时间范围内最近的请求。

请你实现 RecentCounter 类：

RecentCounter() 初始化计数器，请求数为 0 。
int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，
并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。
确切地说，返回在 [t-3000, t] 内发生的请求数。
保证 每次对 ping 的调用都使用比之前更大的 t 值。

输入：
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
输出：
[null, 1, 2, 3, 3]
大致的意思是   1秒请求 [1]次 100毫秒请求 [1,2]次 300毫秒 [1,2,3] 超过3000了 还是[1,2,3]
 */

var RecentCounter = function () {
  //创建队列
  this.q = [];
};

RecentCounter.prototype.ping = function (t) {
  //入队列
  this.q.push(t);
  //不在3000毫秒内的请求全部出队 清除
  while (this.q[0] < t - 3000) {
    this.q.shift();
  }
  return this.q.length;
};
