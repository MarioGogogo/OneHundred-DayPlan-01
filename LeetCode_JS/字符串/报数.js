function  countAndSay(n){
    let result = '1'
    for(let i=1;i<n;i++){
      result = result.replace(/(\d)\1*/g,item=>`${item.length}${item[0]}`)
    }
    return result
}

console.log('countAndSay :>> ', countAndSay(4));