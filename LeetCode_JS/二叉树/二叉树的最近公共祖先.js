/**
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出：3
解释：节点 5 和节点 1 的最近公共祖先是节点 3 。

输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出：5
解释：节点 5 和节点 4 的最近公共祖先是节点 5 。因为根据定义最近公共祖先节点可以为节点本身。

 */


/**
 * 
思路：自低向上查找 回溯方法 最先处理叶子节点

如果找到一个节点 发作左子树出现p 右子树出现q 或者左子树出现 q  右子树出现p
那么该节点一定是最近公共祖先

后序遍历  左右根  是天然的回溯过程

 */
var lowestCommonAncestor = function(root, p, q) {
   //边界条件
   if(root == q || root == p || root == null) return root

   //搜索整个树要有返回值
   let left = lowestCommonAncestor(root.left,p,q)

   let right = lowestCommonAncestor(root.right,p,q)

   //如果左子树不为空  右子树不为空 那快点是root节点
   if(left !=null && right !=null) return root

   if(left === null) return right

   return left
    
};