# 学习笔记

第 5 天

2024/4/19

## todo

1. webstorm 配置代码风格 
1. vscode使用

#

1. pr approved
2. useState
3. state状态的保留和重制
4. 列表渲染

## 目录

- 处理

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

2024/4/20 UPDATE:
今日总结：

1. 处理考核项目comment并approved。
1. 学习useState钩子。组件的state发生变化更新时，组件会重新渲染。set函数接收任意类型的参数，传入函数本身时，React仅在初始化时调用，传入调用的结果在每次state变化时都将调用函数。
1. 学习react条件渲染。通过if、&&、?:选择性渲染JSX。if和变量的形式最灵活。&&能够取代else条件为null的条件渲染代码。0属于假值，0 && 任意值将返回0而不是false。
1. 学习State的重置和保留。条件渲染组件不满足条件即停止渲染时，state会完全消失。使用if-else条件渲染组件，多个组件在树的位置一致时，此时就算条件变化，state还是保留下来。

周一计划：

1. 学习react，重点学习hook以及在项目中实践使用。

2. 继续开发考核项目。

卡位：

1.  暂无

考核项目：
完成底部Tabbar开发：https://gitlab.sjfood.us/solar/practiseforlevi/-/merge_requests/3（approved）

## 每周总结

本周总结:

1. 初始化考核项目，处理pr的comment并approved。
2. 完成考核项目底部tabbar开发，处理pr的comment并approved。
3. 学习react的jsx和hook基本用法，并在项目中实践。
4. 学习react Router，学会路由表设计。
5. 学习Ts，学习团队TS接口定义规范。
6. 学习Sass，使用sass实现应用的自适应。
7. 学习CSS model与CSS in JS概念。
8. 学习gitflow和devops，学会了github和gitlab新建issue、发起pr并处理comment的流程。

下周计划:

1. 学习react，重点学习hook以及在项目中实践使用。
1. 继续开发考核项目，完成user menu页面开发。

学习心得:

1. 团队的开发规范在开发中尤其重要，良好的代码规范不但能够提高开发人员的编程水平，还能减少开发资源之间的学习成本，并且提高项目的开发效率。
2. 熟悉git工具的使用以及流程，能够加强团队之间的开发效率，还能和团队成员一起成才。
3. react作为当前最流行的前端框架之一，学习意义对于前端开发者着尤为重要。在项目中实践react的用法，并且明确react基本用法、hooks、Router的学习路线。
4. sass是成熟、最稳定、最强大的专业级CSS扩展语言。sass能够实现嵌套等功能，还有很多优秀的语法。
5. TS是一种静态类型检查的 JavaScript超集，它提供了更严格的类型系统和类型推断功能，以帮助开发者在编写代码时发现潜在的错误。