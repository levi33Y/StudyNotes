# 学习笔记

第 1 天

2024/5/2

## todo

1. [✅] xxx
2. [❌] xxx
3. [❓] xxx

## yesterday

1. [❓] 考核项目 - 笔记
2. [❓]ts type and interface 笔记
3. [❓]useImperaiveHandle hook
4. [❓]useState、useEffect、useRef 笔记
5. [❓]react-dom 组件 笔记

## today

1. []react-dom 组件概念
2. []reouter 6 笔记
3. [✅]grocery page ui 面包屑开发

## xxx

## 每日总结

2024/5/3 UPDATE:
今日总结：

1. 完成考核项目grocery page ui顶部面包屑开发。
1. 学习Router6。NavLink能够返回使用状态，className属性能够接受函数，这样控件跳转路由时能够对控件显示样式。使用Outlet呈现子组件内容，路由表中父Route要包含子Route。期间遇到匹配子路由，但是底部父路由激活样式失效，原因是底部控件使用了Link组件，激活状态逻辑用===对比路由字符。舍弃原来的方法，用NavLink组件来做样式控制，这样即使当前路由完全匹配子路由，父路由也是处于激活状态的。
1. 学习react中的常用事件处理，react中支持所有浏览器组件。其中e是调用事件处理函数返回的对象。使用input的onChange函数返回的dom引用保存在e的target属性中，使用e.target.value获取到input的value值。

明日计划：

1. 继续学习react框架。
1. 继续开发考核项目 grocery page ui

卡位：

1.  暂无
1.  

考核项目：

grocery page ui：https://gitlab.sjfood.us/solar/practiseforlevi/-/merge_requests/6（开发中）


## 每周总结