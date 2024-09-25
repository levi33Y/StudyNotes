# React Fiber

fiber架构下，运行时操作被拆开为很多部分，并且是可以中断的。



关键词：帧、空闲回调、effect副作用、current、workInProgress、UpdateQueue



## fiber

fiber是DOM树的节点，保存着对应元素的基本信息，还要保存一些用于任务调度的信息

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/3/25/1625d95bc781908d~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.png)



### updateQueue

链式队列（即使用链表实现的队列存储结构），存放Update



## 运行时

经典的搜索列表

react：更新list state。

交互：搜索框聚焦、失焦、输入文本。

~~~tsx
import {useState} from "react";

const raw = ["zhangShan", "liSi", "wangWu"]

export const Login = () => {
  const [list, setList] = useState(raw)

  return (
    //APP
    <div>
      {/*Input*/}
      <input
        onInput={(e) => {
          const name = raw.filter(item => item.indexOf(e.target.value) != -1)
          setList(name)
        }}
        type="text"/>

      {/*List*/}
      {list.map((item, index) =>
        <div key={index}>{item}</div>
      )}
    </div>
  );
};

~~~





### steup-1 初始化渲染

**ReactDOM.render**函数后，react进入**render**阶段，此时在内存中生成双缓冲树。

首先是fiber-tree，也叫current。列表初始化时获得所有列表数据，

fiber-tree：

···

workInprogress：

无。



当用户输入值时，通过InPut方法获取输入值筛选列表数据并调用setList，此时进入**更新**渲染。

react会把当前的更新送入list组件对应的update queue中

fiber-tree:

...

workInprogress:











## 总结

api：

window.requestIdelCallback

window.requestAnimationFrame

shouldComponentUpdate
