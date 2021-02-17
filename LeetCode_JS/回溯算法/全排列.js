/**
 * 46. 全排列
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 * 输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
 */
// 时间复杂度 n！ n的阶乘   空间复杂度 On n指递归长度
const nums = [1,2,3]
var permute = function(nums) {
     const res = []
     const backtrack = path =>{
       //递归终止条件  长度相等
       if(path.length === nums.length){
          return res.push(path)
       }
        nums.forEach(n => {
          //如果已经存在则退出
          if(path.includes(n)) return
          backtrack(path.concat(n))
        });
     }
     backtrack([])
     return res
};