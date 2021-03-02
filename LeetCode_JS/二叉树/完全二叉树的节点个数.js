/**
 * 222. 完全二叉树的节点个数
 * 
 * 完全二叉树 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，
 * 其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。
 * 若最底层为第 h 层，则该层包含 1~ 2h 个节点。
 * 
 * 
 * 输入：root = [1,2,3,4,5,6]
输出：6
输入：root = []
输出：0
输入：root = [1]
输出：1
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

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
    right: null,
  },
};
//递归
var countNodes = function (root) {
  if (!root) return 0;

  let leftNum = root.left ? countNodes(root.left) : 0;
  let rightNum = root.right ? countNodes(root.right) : 0;

  return leftNum + rightNum + 1;
};

//迭代
var countNodes = function (root) {
  if (!root) return 0;
  const q = [root];
  let res = 0;

  while (q.length > 0) {
    let len = q.length;
    for (let i = 0; i < len; i++) {
      const n = q.shift();
      //每次栈里出来一个 计算一个
      res++;
      if (n.left) q.push(n.left);
      if (n.right) q.push(n.right);
    }
  }

  return res;
};

//完全二叉树
var countNodes = function (root) {
  if (!root) return 0;
  let left = root.left;
  let right = root.right;

  let leftHeight = 0,
    rightHeight = 0;

  while (left) {
    left = left.left;
    leftHeight++;
  }

  while (right) {
    right = right.right;
    rightHeight++;
  }

  if (leftHeight === rightHeight) {
    return (2 << leftHeight) - 1;
  }

  return countNodes(root.left) + countNodes(root.right) + 1;
};


