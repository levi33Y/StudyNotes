# 运行时

React运行时大概流程是：

1. 从ReactDOM.render开始，形成一个FiberTree挂载到App上，在渲染成真是Dom

接收参数：element、真实DOM、callback回调

2. 察觉更新后，执行scheduleUpdateOnFiber函数，然后开始处理filber并开始render和commit阶段。



关键词：

1. ReactDOM.render
2. React Fiber
3. 函数式组件
4. 任务体系
5. 应用从创建到第一次内容呈现经历流程（首次渲染）
6. 初始化结束，第一次更新State如何更新（更新渲染）

## 基础

VNode：虚拟dom

react Filber：

数据结构：链表

## 渲染阶段

react的render阶段，双缓冲，在内存构造一颗Fiber树，然后在树种寻找更新节点记录。

## commit

根据**渲染阶段**计算结果，执行更新操作。这个过程是同步执行的

## State

## Context

## ref

## scheduler异步调度

## React事件
