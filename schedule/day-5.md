# 学习笔记

2024/8/14



## Todo

1. [✅] xxx
2. [❌] xxx
3. [❓] xxx



## Yesterday

1. 




## Today

1. 



## 一、掘





## 二、每日总结

2024/8/23 UPDATE: 

今日总结：

1. 处理报表中心pr并approved。调整字段和类型逻辑放在文件上传beforeUpload方法中，使用promise包裹文件解析reader.load方法让beforeUpload异步执行。使用ramda处理条件逻辑，使用some优化for循环校验文件字段逻辑。
1. 跟进Hi200Go项目管理后台首页开发。使用tailwindcss重构css样式，在tailwind.config定义主题变量。根据原型调整ui。



明日计划：

1. 继续跟进开发Hi200Go项目开发。

   

卡位：暂无

报表中心：https://github.com/sj-distributor/ReportCenter.Web/pull/18

Hi200Go：https://github.com/sj-distributor/Hi200Go.Web/pull/8



## 三、每周总结

1. 




## 四、目录

1、组件懒加载

1、调整model间距

1、列表logic

1、树模版对象

1、组件 dir



### 组件懒加载

目的：

组件加载：在加载index时，也会加载组件，导致组件内部hook也加载了。在逻辑上，open只控制组件的显隐，

组件卸载：在open为false时，组件只是隐藏了return，但hook等变量任然保留



兼容性：

在index使用条件渲染将antd组件动画消除。

没采用路由，采用的是父子嵌套，导致了整个行为其实发生在一个页面，为一个大组件



**1、lazy  函数**

返回值

promse/thenable



接收值

作为default导出的组件



运行时机

在 React 首次调用 `load` 后，它将等待其解析，然后将解析值的 `.default` 渲染为 React 组件



2、Suspense 



3、hardCoding

&& 条件渲染





