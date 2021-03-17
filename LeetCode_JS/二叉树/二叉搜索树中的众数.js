/**
 * 一个有相同值的二叉搜索树（BST），找出 BST 中的所有众数（出现频率最高的元素）。
 * 假定 BST 有如下定义：
结点左子树中所含结点的值小于等于当前结点的值
结点右子树中所含结点的值大于等于当前结点的值
左子树和右子树都是二叉搜索树
给定 BST [1,null,2,2],
1
    \
     2
    /
   2
   返回[2].
 */

//递归
var findMode = function (root) {
  let base = 0,
    count = 0,
    maxCount = 0;
  let answer = [];

  //计数 更新最大值
  const update = (x) => {
    if (x === base) {
      count++;
    } else {
      count = 1;
      base = x;
    }

    if (count === maxCount) {
      answer.push(base);
    } else if (count > maxCount) {
      maxCount = count;
      answer = [base];
    }
  };
  const dfs = (cur) => {
    if (cur == null) return;
    dfs(cur.left); //左
    update(cur.val); //中
    dfs(cur.right); //右
  };

  dfs(root);
  return answer;
};
