# 学习笔记

第 5 天

2024/4/19

## todo

3. pr的comment v
4. StyleNote笔记结构 v
5. vscode使用指南 ?

#

2. react学框架学习路线 v
3. 开始学习react框架 v
4. cicd 上线 x
5. vue环境 x
6. webstorm 配置代码风格 ？

## 目录

- 处理 pr#3 comment

## 处理pr#3 comment

- Route 重定向与设计 处理error页面 
- vscode 快捷键和setting.json
- interface 
- react Hook钩子，处理报错：Too many re-renders......
- ts与JSDoc注释
- react组件设计-子组件嵌套
- 使用视口单位实现适配
- sass嵌套 css权值

## 每日总结

2024/4/19 UPDATE:
今日总结：

1. 完成pr的comment。
1. 完善考核项目路由重定向，/*代表所有未匹配路由，/代表空路由。
1. 学习useState和useEffect钩子，在组件顶层set状态或渲染过程调用时间出现`Too many re-renders`错误。useEffect必须有依赖项。1. useEffect传递空数组依赖作为第二个参数，只在组件的初始渲染时运行,2. 依赖非空时，依赖项有变化时会执行。3.return()=>{} 实现useEffect页面销毁，销毁定时器等。
1. 实现考核项目自适应, 根据页面px和vw比例定义vw函数，html的font-size使用vw单位，其他页面使用rem，应用rem根据html font-size自适应。

明天计划：

2. 处理comment并且继续开发考核项目
3. 继续学习react框架

卡位：

1.  暂无

考核项目：
完成底部Tabbar开发：https://gitlab.sjfood.us/solar/practiseforlevi/-/merge_requests/3（处理comment中）
