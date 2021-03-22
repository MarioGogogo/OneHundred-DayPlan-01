/**
 * 450. 删除二叉搜索树中的节点
给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

一般来说，删除节点可分为两个步骤：

首先找到需要删除的节点；
如果找到了，删除它。
 */

/*
采用中序遍历
left 小于 key 为左边  right 大于 key

左子树 柚子树 都需要BST
*/

var deleteNode = function(root, key) {

  if(!root) return null

  if(key < root.val){
    root.left = deleteNode(root.left,key)
  }else if(key > root.val){
    root.right = deleteNode(root.right,key)
  }else if(key === root.val){
     //是否叶子节点
     if(!root.left && !root.right){
       root = null
     }else if(root.right){
       root.val = successor(root)
       root.right = deleteNode(root.right,root.val)
     }else if(root.left){
       root.val = predecessor(root)
       root.left =deleteNode(root.left,root.val)
     }
  }

     
  return root
};

function successor(root){
  if(!root) return null
  root = root.right
  while(root.left){
     root = root.left
  }

  return root.val
}

function predecessor(root){
  if(!root) return null
  root = root.left
  while(root.right){
     root = root.right
  }

  return root.val
}