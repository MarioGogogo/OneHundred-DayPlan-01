/**
 * 417. 太平洋大西洋水流问题
 * 给定下面的 5x5 矩阵:

  太平洋 ~   ~   ~   ~   ~ 
       ~  1   2   2   3  (5) *
       ~  3   2   3  (4) (4) *
       ~  2   4  (5)  3   1  *
       ~ (6) (7)  1   4   5  *
       ~ (5)  1   1   2   4  *
          *   *   *   *   * 大西洋

返回:

[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (上图中带括号的单元).
解题思路
主要问题，就是要知道退出搜索的条件和“满足流入海洋”的条件

一、对于太平洋
1、退出搜索的条件：
- a、已搜索到大西洋的边界，即坐标（i，j），其中i > matrix.length-1 || j > matrix[0].length-1
- b、当前位置已搜索过
- c、当前坐标的值大于上一个坐标的值
2、满足流入海洋的条件
- a、已搜索到太平洋的边界,即坐标（i，j），其中i <= 0 || j <= 0

一、对于大西洋
1、退出搜索的条件：
- a、已搜索到太平洋的边界，即坐标（i，j），其中i < 0 || j < 0
- b、当前位置已搜索过
- c、当前坐标的值大于上一个坐标的值
2、满足流入海洋的条件
- a、已搜索到大西洋的边界，即坐标（i，j），其中i >= matrix.length-1 || j >= matrix[0].length-1

 */

var pacificAtlantic = function (matrix) {
  //边界条件
  if (!matrix || matrix[0]) return [];

  // 创建2个矩阵
  const m = matrix.length;
  const n = matrix[0].length;
  const flow1 = Array.from({ length: m }, () => new Array(n).fill(false));
  const flow2 = Array.from({ length: m }, () => new Array(n).fill(false));
};
