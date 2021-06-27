
/**
 *  输入: s = "anagram", t = "nagaram"
    输出: true
 * @param {*} s 
 * @param {*} t 
 */
//方法一
function isAnagram(s,t){
  // 分解数组
  const sArr = s.split('')
  const tArr = t.split('')

  //比较回调 根据字母排序 ['a', 'a', 'a','g', 'm', 'n','r']
  const sortFn = (a,b)=>{
     return a.charCodeAt() - b.charCodeAt()
  }

  sArr.sort(sortFn)
  tArr.sort(sortFn)

  // console.log('sArr :>> ', sArr);

  return sArr.join('') === tArr.join('')
   
}

isAnagram('anagram','nagaram')

//方法二  计数累加
function isAnagram2(s,t){
  if (s.length !== t.length) return false

  const hash = {}
   
  //遍历s  存每一个计数 对象
  for(const k of s){
    hash[k] = hash[k] || 0
    hash[k]+=1
  }
  console.log('第一个遍历结束hash :>> ', hash);
  //遍历t 对每一个计数对象 减1
  for(const k of t){
     if(!hash[k])return false
     hash[k] -=1
  }
  return true
}

console.log('isAnagram2 :>> ', isAnagram2('anagram','nagaram'));
