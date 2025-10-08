# 学习笔记

第 5 天

2024/4/19

## todo

1. webstorm 配置代码风格 ?
1. vscode 使用 ?

#

1. pr approved v
2. useState v
3. state 状态的保留和重制 v
4. 列表渲染 v

## 目录

- 处理

## 处理 pr#3 comment

- Route 重定向与设计 处理 error 页面
- vscode 快捷键和 setting.json
- interface
- react Hook 钩子，处理报错：Too many re-renders......
- ts 与 JSDoc 注释
- react 组件设计-子组件嵌套
- 使用视口单位实现适配
- sass 嵌套 css 权值

## 每日总结

2024/4/20 UPDATE:
今日总结：

1. 处理考核项目 comment 并 approved。
1. 学习 useState 钩子。组件的 state 发生变化更新时，组件会重新渲染。set 函数接收任意类型的参数，传入函数本身时，React 仅在初始化时调用，传入调用的结果在每次 state 变化时都将调用函数。
1. 学习 react 条件渲染。通过 if、&&、?:选择性渲染 JSX。if 和变量的形式最灵活。&&能够取代 else 条件为 null 的条件渲染代码。0 属于假值，0 && 任意值将返回 0 而不是 false。
1. 学习 State 的重置和保留。条件渲染组件不满足条件即停止渲染时，state 会完全消失。使用 if-else 条件渲染组件，多个组件在树的位置一致时，此时就算条件变化，state 还是保留下来。

周一计划：

1. 学习 react，重点学习 hook 以及在项目中实践使用。

2. 继续开发考核项目。

卡位：

1.  暂无

考核项目：
完成底部 Tabbar 开发：https://gitlab.sjfood.us/solar/practiseforlevi/-/merge_requests/3（approved）

## 每周总结

本周总结:

1. 初始化考核项目，处理 pr 的 comment 并 approved。
2. 完成考核项目底部 tabbar 开发，处理 pr 的 comment 并 approved。
3. 学习 react 的 jsx 和 hook 基本用法，并在项目中实践。
4. 学习 react Router，学会路由表设计。
5. 学习 Ts，学习团队 TS 接口定义规范。
6. 学习 Sass，使用 sass 实现应用的自适应。
7. 学习 CSS model 与 CSS in JS 概念。
8. 学习 gitflow 和 devops，学会了 github 和 gitlab 新建 issue、发起 pr 并处理 comment 的流程。

下周计划:

1. 学习 react，重点学习 hook 以及在项目中实践使用。
1. 继续开发考核项目，完成 user menu 页面开发。

学习心得:

1. 团队的开发规范在开发中尤其重要，良好的代码规范不但能够提高开发人员的编程水平，还能减少开发资源之间的学习成本，并且提高项目的开发效率。
2. 熟悉 git 工具的使用以及流程，能够加强团队之间的开发效率，还能和团队成员一起成才。
3. react 作为当前最流行的前端框架之一，学习意义对于前端开发者着尤为重要。在项目中实践 react 的用法，并且明确 react 基本用法、hooks、Router 的学习路线。
4. sass 是成熟、最稳定、最强大的专业级 CSS 扩展语言。sass 能够实现嵌套等功能，还有很多优秀的语法。
5. TS 是一种静态类型检查的 JavaScript 超集，它提供了更严格的类型系统和类型推断功能，以帮助开发者在编写代码时发现潜在的错误。
