# 学习笔记

2024/8/26



## Todo

1. [✅] xxx
2. [❌] xxx
3. [❓] xxx



## Yesterday

1. 




## Today

1. [❓] py
2. [❓] llm
3. [❓] agent content
4. [❓] planka



## 一、掘





## 二、每日总结

2024/8/28 UPDATE: 

今日总结：

1. 开发Hi200GO菜单。完成后台路由ui。优化项目目录结构，创建routes编写路由表，定义IRouteObjectProps路由接口。新增workbench组件定义Header，Outlet接收子路由，新增Management组件定义管理后台的Menu，Outlet接收子路由。将dom的ref的fontSize该用document的fontSize保持页面一致。



明日计划：

1. 完成Hi200GO股东菜单 ui。

   

卡位：暂无

Hi200GO菜单：https://github.com/sj-distributor/Hi200Go.Web/pull/16

## 三、每周总结




## 四、目录

```ts
// 在浏览器缩放下，保持16（chome
window.getComputedStyle(document.documentElement)?.fontSize

// 在浏览器缩放下，会由16变为14（chome
window.getComputedStyle(screenRef?.current)?.fontSize
```
