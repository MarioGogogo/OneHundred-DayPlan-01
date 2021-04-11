/**
 * 1005. K 次取反后最大化的数组和
给定一个整数数组 A，我们只能用以下方法修改该数组：我们选择某个索引 i 并将 A[i] 替换为 -A[i]，
然后总共重复这个过程 K 次。（我们可以多次选择同一个索引 i。）

输入：A = [4,2,3], K = 1
输出：5
解释：选择索引 (1,) ，然后 A 变为 [4,-2,3]。
 */



var largestSumAfterKNegations = function(A, K) {
  // 优先处理所有的负数
  A.sort(( a , b ) => {return a-b;});
  for(let i = 0 ; K > 0 && A[i] < 0 ; i++){
      A[i] = -A[i];
      K--;
  }
  // 没有负数时，对着数组最小数进行 （k-n）%2 次变化 ，n是负数个数
  A =  A.sort((a,b) => a-b);
  if(K % 2){
      A[0] = -A[0];
  }
  return eval(A.join('+'));
};