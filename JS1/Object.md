## Object



## Is.()

Object.is()、===、== 对于基本数据类型,比较值，而对于对象会判断是否是一个引用，使用Object.is([],[])为false。===会对

### #is()与===、==区别



## 环形对象

js对象是否存在循环引用

~~~js
const person = { name: 'kalory', age:18}
person.onwer = person
~~~



`#`

1. **JSON**.**stringfy**

   序列化对象，遇到错误时抛出异常

2. **Object**.**values**

   返回可枚举字符串键属性值组成的数组

3. **new** **Set**

   集合，元素不能重复的特效

4. **DFS（Deep First Search）**与**BFS（Breadth First Search）**

   共性：探索树深、最短路

   DFS：栈。时间上最快解，组件相邻链、时间换空间

   BFS：队列。层级遍历、空间换时间

   Dijkstra：带权最短路

5. Array.shift

   删除**第一个**元素，并返回该元素的值。此方法更改数组的长度

6. try catch

   捕获异常，程序继续执行

7. WeakMap

   将对象当作键值，且为弱引用。对于吗对象当作map的键，因为对象被引用了，所以在内存中并不会被垃圾回收处理，只有手动释放才能让对象和map被回收，而weakMap能够在对象不用的情况下，也能自动被回收

   

8. === 引用对象

   普通对比值，引用对象对比引用

`#`**判斷方法**

递归 和 ===

~~~js
const existCircular(obj) => {
  let cache = new Set()
  
  function helper(obj){
    let stack = Object.value(obj)
    
    for(let i=0,item;item=stack[i+++];){
      if(cache.has(item)) {
        return true
      }
      
      if(typeof item !== 'object' || item === null) continue
      
      cache.add(item)
      if(halper(item)) {
        return true
      }
      
     	return false
    }
  }
  
  return helper(obj)
}
~~~





队列 和 ===

~~~js
const existCircular(obj) => {
  let queue = Object.value(obj)
  
  while(queue.length){
    item = queue.shift()
    
    if(typeof item !== 'object' || item === null) continue
    
    if(item === obj) return true
    
    queue.push(...Object.value(item))
  }
  
  return false
}
~~~



try Catch捕获异常

~~~js
const existCircular(obj) = () => {
  try{
    return JSON.stringify(obj);
  } catch(e){
    if(e.message.includes('circular'){
       ...
    }
    else {
      ...
    }
  }
}
~~~