/**
 * 199.二叉树的右视图
 * 思路
层序遍历的时候，
判断是否遍历到单层的最后面的元素 (重点分析 对每一层q的数组进行while len–操作)
如果是，就放进result数组中，随后返回result 就可以了。
 */
var rightSideView = function(root) {
  if(!root) return []
  const q = [root]
  const res = []
   while(q.length > 0){
       let len = q.length
       //对每一层进行遍历 [1]  [2,3 ]  [4,5,6]   [7]
       while(len){
         let n = q.shift()
           //每一层最后一位
           if(len === 1) res.push(n.val)
           if(n.left) q.push(n.left)
           if(n.right) q.push(n.right)
           len--
       }
   }
   return res

};