/**
 * 429----给定一个 N 叉树，返回其节点值的层序遍历。
 *  (即从左到右，逐层遍历)。 例如，给定一个 3叉树 :
 * @param {*} root 

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

var levelOrder = (root) => {
    if(!root) return []
    const q = [root]
    const res = []
    while(q.length > 0){
      let len = q.length
      let temp = []
      for (let i = 0; i < len; i++) {
         const n = q.shift()
         temp.push(n.val)
         //将节点的孩子加入队列遍历
         for (let j= 0; j < n.children.length;j++) {
           if(n.children[j]) q.push(n.children[i])
         }
      }
    }
    return res
};
