/**
 * 513. 找树左下角的值
 * 输入:

    2
   / \
  1   3

输出:
1


输入:

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

输出:
7

1.找到最后一行  然后找到最左边的值
 */
let maxLeftValue = 0, maxLen = 0;
var findBottomLeftValue = function (root) {
  traveral(root, 0);
  return maxLeftValue;
};

function traveral(root, leftLen) {
  if (root.left === null && root.right === null) {
    //更新最大层级 更新最大值
    if (leftLen > maxLen) {
      maxLen = leftLen;
      maxLeftValue = root.val;
    }
    return;
  }

  if (root.left) {
    leftLen++;
    traveral(root.left, leftLen);
    leftLen--;
  }
  if (root.right) {
    leftLen++;
    traveral(root.right, leftLen);
    leftLen--;
  }
  return;
}
