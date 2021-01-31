/**
 * 70-爬楼梯
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。
 */
var climbStairs = function (n) {
  //小于2就只有一种可能
  if (n < 2) return 1;
  //初始化默认1  小于等于2的情况下 都是 二种方法 1，1 和 2
  const dp = [1, 1];
  for (let i = 2; i <= n; i++) {
    //解决子问题规律
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  console.log('dp :>> ', dp);
  return dp[n];
};

//4 --> dp :>>  [ 1, 1, 2, 3, 5 ]
//5 --> dp :>>  [ 1, 1, 2, 3, 5, 8 ]

/**
 * 优化空间复杂度
 */
var climbStairs = function (n) {
  //小于2就只有一种可能
  if (n < 2) return 1;
  //初始化默认1  小于等于2的情况下 都是 二种方法 1，1 和 2
  let dp0 = 1;
  let dp1 = 1;
  for (let i = 2; i <= n; i++) {
    //反复替换 dp0 dp1
    const temp = dp0;
    dp0 = dp1;
    dp1 = temp + dp0;
  }
  return dp1;
};
