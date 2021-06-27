/**
 *  􏱊入: "4193 with words"
2 􏱊出: 4193
 */
//方法一
function stringToInt(str){
   const result = str.trim().math(/^(-|\+)?\d+/g)
   const min = Math.min(Number(result[0]),Math.pow(2,31)-1)
   const max = Math.max(min, -Math.pow(2,31))
   return result ?  max : 0
}

// 方法二
function stringToInt2(str){
  const news = str.trim()
  if(parseInt(news)){
     return returnNum(parseInt(news))
  }else{
    return 0
  }
}

function returnNum(num){
   if(num >= -Math.pow(2, 31) && num <= Math.pow(2, 31) - 1){
     return  num
   }else{
      //处理边界情况 超过范围则去最大值
      num > 0 ? Math.pow(2, 31) - 1 : -Math.pow(2, 31)
   }
}
