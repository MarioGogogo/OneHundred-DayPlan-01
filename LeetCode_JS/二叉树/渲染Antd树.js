/*
 * @Descripttion:
 * @Author: Mario
 * @Date: 2021-01-29 22:18:25
 * @LastEditors: Maroi
 * @LastEditTime: 2021-01-29 22:24:24
 */
const json = [
  {
    title: '一',
    key: '1',
    children: [{ title: '三', key: '3', children: [] }],
  },
  {
    title: '二',
    key: '2',
    children: [{ title: '四', key: '4', children: [] }],
  },
];

/*深度遍历应用
一
   二
     四
       五
二
  三
*/

const render = () => {
  dfs = (n) => {
    return (
      <TreeNode title={n.title} key={n.key}>
        {/* 无限递归 */}
        {n.children.map(this.dfs)}
      </TreeNode>
    );
  };
};
