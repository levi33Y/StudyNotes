# 学习笔记

2024/5/7

## Todo

1. [✅] xxx
2. [❌] xxx
3. [❓] xxx

## Yesterday

1. [❓] 考核项目 - 笔记
2. [❓]useState、useEffect、useRef、useImperaiveHandle 等 hook 笔记
3. [❓]reouter 6 笔记
4. [❓]react 事件处理、react-dom 笔记
5. [❓] recoil 笔记
6. [❓] html body 标签
7. [❓] 需求：解决 rem 和适口单位的混乱
8. [❓] 滚动条开发笔记
9. [❓]ts 笔记
10. [❓]css module
11. [❓]学习router V6 与 状态保存，并写文章
12. [❓]scroll總結
13. [❓]useReduer解析
14. css 溢出场景；溢出、BFC、流内流外、边距折叠
15. css 设置边框

    ~~~css
    .dotted-line{    
    border: 1px dashed transparent;    
    background: linear-gradient(white,white) padding-box, repeating-linear-gradient(-45deg,#ccc 0, #ccc .25em,white 0,white .75em);
    }
    
    ~~~
16. flex；浏览器紫色区域、flex:
17. display 与 background颜色
18. [html空格](https://blog.csdn.net/wuzhiyue2/article/details/117990898)
19. vite 项目配置
20. img标签的src属性

## Today

1. [✅]一个完成的编辑页面
1. 模版库页面结构流程图
1. 模版库数据流图
1. 拓展

## 一、发掘

## 二、每日总结

2024/6/3 UPDATE:
今日总结：

1. 迁移并配置报表中心项目。上手过程中了解了nvm与npx，区别是npx是临时安装依赖包，例如利用脚手架搭建项目时，nvm下载脚手架然后使用脚手架命令搭建项目，npx临时安装后删除。学习了yarn基本命令。了解vite --template，template由vite团队维护，template的版本与vite版本挂钩 。 
2. 了解到了配置Tailwind Preflight可以防止ant与tailwind应用样式冲突。
3. 学习route 6在父路由提交，索引路由没有路径与父路由共享，查询参数是以url上?index形式存在的，提交不是导航，因此提交将会发布到索引路由。了解了route 6中的action，Form、fetcher、submission，From可以发起提交，两个hook与From组件同类，使用提交需要使用数据在路由加载时的数据路由。Object.fromEntries常用于URLSearchParams操作查询参数。


明日计划：

1. 继续开发报表中心模版库模版导入UI。

卡位：

1.  暂无

报表中心

模版库  https://github.com/sj-distributor/ReportCenter.Web/pull/6

项目初始化 https://github.com/sj-distributor/ReportCenter.Web/pull/2

## 三、每周总结

了解react 错误边界。

1. 处理文本溢出并写demo，学习了BFC、溢出、流内与流外等CSS布局的概念
2. 完成了慧模版库审批中心审批内容UI
3. 分析报表中心项目需求和功能业务流程，初始化项目安装依赖和配置应用的主题和上下文环境
4. 完成报表中心的模版库列表UI、模版库对象UI、模版库新增UI
5. 学习ant组件库，留意grid、form、select组件使用时要注意的知识点
6. 了解React Router V6中的延迟数据解决方案，了解了Suspense、defer、Await组件和useAsyncValue方法
7. 了解到React错误边界的概念



下周计划：

1. 继续开发模版库模版对象导入UI

2. 分析模版库模版获取需求并开发开发呼叫、发送UI
3. 继续学习tailwindcss，在项目开发应用
4. 继续学习react-router相关知识点
5. 继续学习react框架

## 四、目录

mac:nvm、npx 、npm、yarn。

项目node版本

vite构建命名

[WAL](https://www.cnblogs.com/xuwc/p/14037750.html):数据库的日志算法，改变插入和恢复数据行为

preflight

​	![image](https://private-user-images.githubusercontent.com/109784975/335936126-cb76d038-f8fc-45e9-a135-f1d629f3c910.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTczOTUxNDcsIm5iZiI6MTcxNzM5NDg0NywicGF0aCI6Ii8xMDk3ODQ5NzUvMzM1OTM2MTI2LWNiNzZkMDM4LWY4ZmMtNDVlOS1hMTM1LWYxZDYyOWYzYzkxMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjAzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYwM1QwNjA3MjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mYjlmM2EyZmM1ZWUyYzYxZWEyNzk1NGQ2ZDc2MTc4NTk0NmY5MjU4MjNkOTAxZTNjMmE5MzI2MThlYmE0OTVlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.FTY1cleR3J6iLHCoSDRNJW3oAm35o2P_G5R8fsZwvZ4)



route



### route

索引路由v

查询参数v

数据路由v

Form、fetcher、submission v

数据突变和加载

导航v

object.fromEntries v

#

在父路由提交，索引路由没有路径与父路由共享，查询参数是以url上?index形式存在的，提交不是导航，因此提交将会发布到索引路由。了解了route 6中的action，Form、fetcher、submission，From可以发起提交，两个hook与From组件同类，使用提交需要使用数据在路由加载时的数据路由。Object.fromEntries常用于URLSearchParams操作查询参数。



#
