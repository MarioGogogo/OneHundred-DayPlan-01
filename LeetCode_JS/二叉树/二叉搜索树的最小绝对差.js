/**
 * 530. 二叉搜索树的最小绝对差
 * 给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。
 */


//递归
//思路 把二叉搜索树 转换成有序数组 然后 遍历数组求出最小值
let vec = []
var getMinimumDifference = function(root) {
  let result = Number.MAX_SAFE_INTEGER
   traversal(root)
   //边界值
   if(vec.length <2) return 0
   console.log('vec :>> ', vec);
   for (let i = 1; i < vec.length; i++) {
    result = Math.min(result,vec[i]-vec[i-1])
   }
   return result
};


function traversal(root){
   if(!root) return 
   traversal(root.left)
   vec.push(root.val)
   traversal(root.right)
}












