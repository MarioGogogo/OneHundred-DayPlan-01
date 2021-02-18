/**
 * 45. 跳跃游戏 II
 * 输入: [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。

⭐️⭐️⭐️⭐️假设你总是可以到达数组的最后一个位置。

 */
const nums = [2, 3, 1, 1, 4];
var jump = function (nums) {
  const n = nums.length;
  //能跳到的索引i
  let end = 0;
  //最远距离
  let farthest = 0;
  //跳跃次数
  let jumps = 0;
  for (let i = 0; i < n - 1; i++) {
    //更新最远距离
    farthest = Math.max(farthest, i + nums[i]);
    //如果遍历值与第二次跳跃值相等则次数++
    if (end === i) {
      jumps++;
      end = farthest;
    }
  }
  return jumps;
};
