/**
 * 515--在每个树行中找最大值--您需要在二叉树的每一行中找到最大的值。

      1
    / | \
   3  2  4
 /  \
 5    6

返回：
 [
   [1],
    [3,2,4],
     [5,6]
]
 */

var largestValues = (root)=>{
  if(!root) return []
  const q = [root]
   const res= []
  while (q.length > 0) {
    let len  = q.length
    let max = 0
    // 每一层最大值
    for (let i = 0; i < len ; i++) {
      const n = q.shift()
      max = Math.max(n.val,max)
      if(n.left) q.push(n.left)
      if(n.right) q.push(n.right)
    }
    res.push(max)
  }
  return res

}