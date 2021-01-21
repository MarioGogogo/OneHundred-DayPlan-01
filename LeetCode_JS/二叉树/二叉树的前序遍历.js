/**
 * 144  二叉树的前序遍历   94  145
 */
// 输入：root = [1,null,2,3]
// 输出：[1,2,3]

// 输入：root = []
// 输出：[]

// 输入：root = [1,null,2]
// 输出：[1,2]

// 递归实现
const preorderTraversal = function (root) {
  let result = [];
  const preOrderTraverseNode = (node) => {
    if (node) {
      //先存根节点
      result.push(node.val);
      // 遍历左子树
      preOrderTraverseNode(node.left);
      // 遍历右子树
      preOrderTraverseNode(node.right);
    }
  };

  //递归调用
  preOrderTraverseNode(root);
  return result;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

//创建栈
class Stack {
  constructor() {
    this._data = [];
  }
  push(e) {
    this._data.push(e);
  }
  pop() {
    return this._data.pop();
  }
}
/**
 * 迭代实现
 * 用栈来模拟递归的过程
 *首先根入栈
 *将根节点出栈，将根节点值放入结果数组中
 *然后遍历左子树、右子树，因为栈是先入后出，所以，我们先右子树入栈，然后左子树入栈
 *继续出栈（左子树被出栈）
 */
const preorderTraversal_1 = function (root) {
  const list = [];
  const stack = new Stack();

  if (root) {
    stack.push(root);
  }

  while (stack.length > 0) {
    // 将根节点出栈，将根节点值放入结果数组中
    const curNode = stack.pop();
    list.push(curNode.val);
    // 然后遍历左子树、右子树，因为栈是先入后出，所以，我们先右子树入栈，然后左子树入栈
    if (curNode.right !== null) {
      stack.push(curNode.right);
    }
    if (curNode.left !== null) {
      stack.push(curNode.left);
    }
  }
  // 继续出栈（左子树被出栈）
  return list;
};
