/**
 * 117. 填充每个节点的下一个右侧节点指针 II
 * 
 *      1 --> Null
    / | 
   2->3 -> Null
 /  \
 5-> 6 -> Null
 * @param {*} root
 */
const root = [1,2,3,4,5,null,7]
var connect = function(root) {
  if (!root) return null
  const q = [root];
  while (q.length > 0) {
      const len = q.length;
      let last = null;
      for (let i = 1; i <= len; ++i) {
          let n = q.shift();
          if (n.left) q.push(n.left);
          
          if (n.right)q.push(n.right);
          
          if (i !== 1) {
              last.next = n;
          }
          last = n;
      }
  }
  return root;
};
