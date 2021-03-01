/**
 * 116. 填充每个节点的下一个右侧节点指针
 * @param {*} root 

解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，
以指向其下一个右侧节点，如图 B 所示。序列化的输出按层序遍历排列，
同一层节点由 next 指针连接，'#' 标志着每一层的结束。
      1 --> Null
    / | 
   2->3 -> Null
 /  \
 5-> 6 -> Null

  * 输入：root = [1,2,3,4,5,6,7]
输出：[1,#,2,3,#,4,5,6,7,#]

思路：
层次遍历基于广度优先搜索，它与广度优先搜索的不同之处在于，
广度优先搜索每次只会取出一个节点来拓展，
而层次遍历会每次将队列中的所有元素都拿出来拓展，
这样能保证每次从队列中拿出来遍历的元素都是属于同一层的，
因此我们可以在遍历的过程中修改每个节点的 \text{next}next 指针，
同时拓展下一层的新队列。

 */

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

var connect = function (root) {
  if (!root) return root;
  const q = [root];
  while (q.length > 0) {
    const size = q.length;
    for (let i = 0; i < size; i++) {
      //如果找不到下一个右侧节点，则将 next 指针设置为 NULL。当i==size-1时，
      const n = q.shift();
      //相当于到了这一层的最后一个节点，该层已经没有下一个右侧节点所以需要保持为NULL。
      if (i < size - 1) {
        n.next = q[0]; // [5] ---> [6][7]
      }
      if (n.left) q.push(n.left);
      if (n.right) q.push(n.right);
    }
  }
  return root;
};

connect(root)
