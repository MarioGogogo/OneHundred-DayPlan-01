/*
*111. 二叉树的最小深度

给定一个二叉树，找出其最小深度。
输入：root = [3,9,20,null,null,15,7]
输出：2
示例 2：

输入：root = [2,null,3,null,4,null,5,null,6]
输出：5
   2
   / \
null  3
    /  \
  null   4
        /  \
     null   5
           /  \
        null   6
***************/

var minDepth = function (root) {
  //边界判断
  if (!root) return 0;
  //广度优先  增加数组中层级
  const q = [[root, 1]];

  while (q.length) {
    const [n, l] = q.shift();
    console.log('n.val,l :>> ', n.val, l);
    //碰到无节点 直接返回层级
    if (!n.left && !n.right) return l;
    //  如果还有叶子节点 层级+1
    if (n.left) q.push([n.left, l + 1]);
    if (n.right) q.push([n.right, l + 1]);
  }
};
