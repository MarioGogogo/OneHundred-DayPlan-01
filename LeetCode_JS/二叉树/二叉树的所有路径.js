/**
 * '257. 二叉树的所有路径
 * 
 * 给定一个二叉树，返回所有从根节点到叶子节点的路径。

说明: 叶子节点是指没有子节点的节点。
输入:

   1
 /   \
2     3
 \
  5

输出: ["1->2->5", "1->3"]
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

//递归
var binaryTreePaths = function (root) {
  //创建 结果   记录路径
  let result, path;  
  if (!root) return result;
  traveral(root, path, result);

  return result;
};

var traveral = (cur, path, result) => {
  //找到当前路径
  path.push(cur.val);
  if (cur.left === null && cur.right === null) {
    let sPath;
    for (let i = 0; i < path.length; i++) {
      sPath += path[i];
      sPath += '->';
    }
    sPath += path[path.length - 1];
    return result.push(sPath);
  }

  if(cur.left){
    traveral(cur.left,path,result)
    path.pop()  //回溯
  }
  if(cur.right){
    traveral(cur.right,path,result)
    path.pop()
  }
};
