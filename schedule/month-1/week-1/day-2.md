# 学习笔记

第二天

2024/4/16

## 目录

- 学习 DevOps

- 考核项目初始化

- 学习react

- 学习CSS Modules

## 学习 DevOps

1、devops 的概念：通过 ci/cd 去自动化持续集成，迭代与交付

2、devops 的流程：写完代码，使用 git 提交，使用自动化部署工具打包与发布

3、devops 的重点：vsc 的选择，gitflow 和 github Desktop 的选择，写好每一个 pr，ci/cd 的运用

4、devops 可以提高项目代码的质量，有很好的风险控制，每一步流程都应该做的足够细致

## 考核项目初始化

**发起考核项目pr并处理comments**

- 使用 react + typeScript + sass 初始化 reacrt 项目，
- 创建分支 init-project 并且推送到仓库
- gitLab 中新建里程碑 1.0.0，提交 issues Init Project，发起 Init Project pr

**遇到的问题**

- pr 描述不够简介明确，要添加规则，命名要简洁规范，首字母大写
- Commit 提交信息经历简介并且全英文
- pr 与 issue 命名统一
- 整体的命名和注释要规范统一，大驼峰、小驼峰、横线要统一风格
- 函数式组件的写法、sass在项目中实现。

## 学习 react

组件：

1. React 组件只能返回一个 JSX 元素，可使用 Fragment 返回多个相邻的 JSX 元素
2. 组件名称大写
3. 父子传值 props，子组件通过{}获取和转译父组件传递过来的属性值
4. 给标签添加点击事件
5. index.js的顶层组件

Hook:

1. 认识 useState 函数，声明 state 变量并 set 变量

组件状态管理中“状态提升”和“不变性”概念:

1. 状态提升：所有子组件 state 提升到父组件中，父组件通过传递 props 与子组件通信，所有子组件声明共享 state
2. 不变性：不改变底层数据更新数据，这种方法有多个好处，保留了原数据方便后续功能的实现，如果底层数据是state，不频繁变更 state 能够跳过重新渲染来降低性能成本

## 学习 CSS Modules

CSS Modeles 让样式加入了局部作用域和模块依赖，在项目中将样式表导入到一个对象中，然后引用这个对象的属性来代表一个 clsss 来实现一个独一无二的 class，实现局部作用域。



## 总结

## 事情

1. 8.30 分系统日程填写 v
1. typrao激活与设计picGo v
2. picGo配置 V
3. webstorm 配置代码风格 x

1. react Router V3学习 V
2. 初始化项目并且配置Router v
3. 实现底部bar v
4. 学习sass基础 v

## 每日总结

2024/4/16 UPDATE:
今日总结：

1. 学习devops视频，cicd运维平台去做自动化持续集成，注重每一次pr。
2. 初始化考核项目，发起pr并且处理commcont。
3. 学习了react开发中的状态提升和不变性概念，状态提升：所有子组件 state 提升到父组件中，父组件通过传递 props 与子组件通信，所有子组件共享 state。不变性：不改变底层数据更新数据，这种方法有多个好处，保留了原数据方便后续功能的实现，如果底层数据是state，不频繁变更 state 能够跳过重新渲染来降低性能成本。
4. 学习CSS Modules，CSS Modeles 让样式加入了局部作用域和模块依赖，在项目中将样式表导入到一个对象中，然后引用这个对象的属性即独一无二的 class，实现局部作用域。

明天计划：

1. 继续学习react框架
2. 考核项目首页底部bar开发

笔记：
https://github.com/levi33Y/StudyNotes/blob/main/day-2.md

卡位：

1.  暂无

考核项目：
https://gitlab.sjfood.us/solar/practiseforlevi/-/merge_requests/1（初始化了项目，提交了一个pr）
