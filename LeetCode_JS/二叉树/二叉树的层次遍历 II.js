/**
 * 107二叉树的层次遍历 II
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 (即按从叶子节点所在层到根节点所在的层，逐 层从左向右遍历)
 * @param {*} root 
 */
var levelOrderBottom = function(root) {
  if(!root) return []
  const q = [[root,0]]
  const res = []
  while(q.length > 0){
      const [n,level] =q.shift()
      if(!res[level]){
        res.push([n.val])
      }else{
        res[level].push(n.val)  
      }
      if(n.left) q.push([n.left,level+1])
      if(n.right)q.push([n.right,level+1])
  }
  //反转
  return res.reverse()
};