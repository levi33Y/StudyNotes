# 协调

> [18:](https://zh-hans.react.dev/learn/preserving-and-resetting-state)
>
> [在**18**以前](https://legacy.reactjs.org/docs/reconciliation.html)

协调算法，**更新**过程中的实现细节。



关键词：diffing算法、启发式算法、render、state的保留



## diffing

当对比两棵树时，React 首先比较两棵树的根节点。



### 根节点为不同类型的元素

**卸载**旧的树，建立新的树



eg：

```tsx
//销毁 Counter 组件并且重新装载一个新的组件
<div>
  <Counter />
</div>

//after
<span>
  <Counter />
</span>
```



### **对比同一类型的元素**

当对组件标签属性进行修改时，react仅对比更新的属性，在处理完当前节点之后，React 继续对子节点进行**递归**。



eg:

~~~tsx
//只需要修改 DOM 元素上的 color 样式，无需修改 fontWeight。
<div style={{color: 'red', fontWeight: 'bold'}} />
//after
<div style={{color: 'green', fontWeight: 'bold'}} />
~~~



### 对比同类型的组件元素

在React中，组件可以是函数和类，返回React元素。对比同类型的组件元素是对比组件内部state来决定如何更新它，它会**保留该组件的状态和 DOM**，并仅根据新的 `props` 和 `state` 进行更新。



eg:

~~~tsx
function MyComponent(props) {
  return <div>{props.text}</div>;
}

//
const element1 = <MyComponent text="Hello" />;
const element2 = <MyComponent text="World" />;
~~~



### 变更子节点

在一个列表中，在末尾添加子节点和之外位置添加对react开销是不同的。在末尾添加时，react仅仅是将新的元素插入到末尾中，而对与其他位置（如表头）react在匹配第一个元素时发现不同，react并不会保留原来的元素，而是重新构建每个元素。



eg：

~~~tsx
// react简单地在tree中添加节点
<ul>
  <li>first</li>
  <li>second</li>
</ul>

<ul>
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ul>

//react会重新渲染每个元素
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

<ul>
  <li>Connecticut</li>
  <li>Duke</li>
  <li>Villanova</li>
</ul>
~~~



因此引入keys能让tree更加高效（基本知识）

~~~tsx
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
~~~

