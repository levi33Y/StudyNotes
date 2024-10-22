# Diff

Diff 算法的本质就是**对比 current Fiber Tree 和 JSX 对象，生成 workInProgress Fiber Tree**。

当组件的状态或者属性发生变化时，React 需要决定如何更新 DOM 来反映这些变化。Diff 算法就是**用来决定哪**

**些部分的 DOM 需要更新的算法**。



## diff的三个机制

**分层，同级比较**：根据参与对比的dom树，只比较同一层级的节点，如果节点前后中跨越层级React默认舍弃不复用。同级比较时按照从左到右的顺序进行比较。

**元素类型对比**： 当前节点元素标签如果变化了，包括此节点在内及其子孙节点默认舍弃，react会重新创建此节点及子孙节点。

**key 属性**：React 使用 key 属性来标识节点的唯一性，从而在比较时能够快速定位到需要更新的节点，同时也暗示哪些元素可以复用。



> [实现函数reconcileChildFibers源码](https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactChildFiber.js#L1612)



## diff运算过程

> 
>
> [参考](https://juejin.cn/post/7407370502416891956?searchId=202410211623245559FFC8D9E98B7D6469#heading-3)

React 的 diff 算法分为两轮遍历：

第一轮遍历，处理可复用的节点。

第二轮遍历，遍历第一轮剩下的 fiber。



第一遍遍历时，采用左到右循序对比，对比元素type和key（元素无key时key=null，而两个key=null元素对比key是相同的），当遇到type或key不同时，结束遍历。

第二遍遍历，第一遍剩下的节点添加到map中，然后current Fiber Node(剩下的节点).get(jsx(更新后的dom树)的元素), get不到的删除React后面重新创建。get到就复用。



## 开发过程的操作：

