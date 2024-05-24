# 学习笔记

2024/5/7

## todo

1. [✅] xxx
2. [❌] xxx
3. [❓] xxx

## yesterday

1. [❓] 考核项目 - 笔记
2. [❓]useState、useEffect、useRef、useImperaiveHandle 等 hook 笔记
3. [❓]reouter 6 笔记
4. [❓]react 事件处理、react-dom 笔记
5. [❓] recoil 笔记
6. [❓] html body 标签
7. [❓] 需求：解决 rem 和适口单位的混乱
8. [❓] 滚动条开发笔记
9. [❓]ts 笔记
10. []css module

## today

1. [✅]处理AI 识别文件pr comment。
1. [✅]处理AI 识别文件pr comment
1. [❌]学习router V6 与 状态保存，并写文章

## 发掘

环形对象

~~~js
const person = { name: 'kalory', age:18}
person.onwer = person
~~~



### `#`

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

### `#`

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



## 每日总结

2024/5/16 UPDATE:
今日总结：

1. JSON.stringfy序列化环形对象会报错，可以根据JSON.stringfy方法抛出异常tryCatch或通过===判断引用来检测对象是否是环形对象。
1. writing-mode可以改变页面流，在vertical-lr下，英文字符可以翻转让其竖直，中文等标点符号需要平移实现“基线对齐”。
1. 分析采購貨品質量識別平臺需求报价，分析了项目需求与原型，梳理功能的流程，对功能上的ui、组件封住、逻辑设计、接口对接等进行拆解与并报价，基本的需求都过了一遍，但是发现分析的不够清楚，页面上模块的拆分不够好，明天继续参照AI智能对话的报价来完善这部分。




明日计划：

1. 继续完善采購貨品質量識別平臺报价
1. 跟进AI 识别文件
1. 跟进考核项目 grocery页面

卡位：

1.  暂无

识别文件pr https://github.com/sj-distributor/AiRecognitionFile.Web/pull/12

考核项目prhttps://gitlab.sjfood.us/solar/practiseforlevi/-/merge_requests/6

## 每周总结

## 目录



