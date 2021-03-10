/**
 * 106. 从中序与后序遍历序列构造二叉树
 * 根据一棵树的中序遍历与后序遍历构造二叉树。
 中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]'

返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7
1.选择后序遍历的最后一个节点作为根节点。
2.根据根节点在中序遍历中的下标判断 中序数组中根节点左右代表左子树右子树
3.
 */
var buildTree = function (inorder, postorder) {
  let post_idx;
  const idx_map = new Map();

  const helper = (in_left, in_right) => {
     //判断节点为空
    if (in_left > in_right) return null;
    
    //寻找根节点 后序遍历的最后一个元素
    const root_val = postorder[post_idx];
    
    //创建根节点树  
    const root = new TreeNode(root_val);

    // 拿到根节点在中序遍历中的下标位置
    const index = idx_map.get(root_val);
    //下一个子树中 根节点就是下标的前一个  [[3,15,20],3] 那就是20
    post_idx--;
    //创建右子树  [根节点下标+1....数组长度-1]
    root.right = helper(index + 1, in_right);
    //创建左子树   [初始位置0 .... 根节点位置-1]
    root.left = helper(in_left, index - 1);

    return root;
  };

  //表示后序遍历的最后一个元素
  post_idx = postorder.length - 1;

  //中序遍历中设置字典键值对
  inorder.forEach((val, idx) => {
    idx_map.set(val, idx);
  });

  return helper(0, inorder.length - 1);
  
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
