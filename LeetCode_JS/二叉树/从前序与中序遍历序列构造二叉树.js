/**
 * 105. 从前序与中序遍历序列构造二叉树
 * 
 * 前序遍历 preorder = [3,9,20,15,7]  -> 根 左 右
中序遍历 inorder = [9,3,15,20,7]  -> 左 根 右

返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7
 */

/**
 * 思路：
 *前序遍历：根-左-右
中序遍历：左-根-右
因此
1.对于preorder，每个首元素即为一个子树的根元素
2.对于inorder，查找preorder中的根元素
3.左边为preorder当前根元素的左子树
4.右边为preorder当前根元素的右子树
 */
var buildTree = function (preorder, inorder) {
  let build = (inorder) => {
    //边界条件
    if (!inorder || !inorder.length) return null;
    //根元素
    let root_val = preorder.shift(),
      //找到根元素下标
      mid = inorder.indexOf(root_val);
    //创建树
    let root = new TreeNode(root_val);
    //创建左子树
    root.left = build(inorder.slice(0, mid));
    //创建右子树
    root.right = build(inorder.slice(mid + 1));
    return root;
  };
  return build(inorder);
};
