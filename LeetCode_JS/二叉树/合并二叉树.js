/**
 * 617. 合并二叉树
给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。

输入: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
输出: 
合并后的树:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7

注意：如果两个节点重叠，那么将他们的值相加作为节点合并后的新值

 */




/**
 * 递归
 */

var mergeTrees = function(root1, root2) {
  //边界 如果左节点没有 则用root2  如果root2 也没有 则为null
  if(root1 === null) return root2
  if(root2 === null) return root1
  
  //如果都有值 则合并相加
  root1.val += root2.val     //中
  //继续判断是否有左子树 右子树 递归
  root1.left = mergeTrees(root1.left,root2.left)  //左
  root1.right = mergeTrees(root1.right,root2.right) //右
   
  //返回 部分节点
  return root1


};