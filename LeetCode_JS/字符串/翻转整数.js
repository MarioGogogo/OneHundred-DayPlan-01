/**
 * 翻转字符串方法 则其数值范围为 [−231, 231 − 1]
 * 示例2:
输入: -123
 输出: -321
 */
// 方法一
function reverse(x){
   if(typeof x !== 'number') return

   //极值
const MAX = 2147483647;
const MIN = -2147483648;

  const rest = x > 0 ? String(x).split('').reverse().join('') : String(x).slice(1).split('').reverse().join('')

  const result = x > 0 ? parseInt(rest,10) : 0 - parseInt(rest,10) 
// 边界情况
  if(result >= MIN && result <= MAX) return result
   
  return 0 
}

console.log('reverse :>> ', reverse(-123));

/**
 *  
 *  获取到取余
 *  第一次 123 取余 num = 3  int 12
 *  第二次 12 取余 num= 3*10 2    int 1
 *  第三次 1 取余 num = 32*10  1   int 0
 *  最后 321
 */
function reverse2(x){
  let int = Math.abs(x)

   //极值
const MAX = 2147483647;
const MIN = -2147483648;

let num = 0;
  

while (int != 0) {
  num = (int % 10) + (num*10)
  //同步剔除掉被消费的部分
  int = Math.floor(int /10)
}

// 边界情况
if(result >= MIN && result <= MAX) return num

return 0

}