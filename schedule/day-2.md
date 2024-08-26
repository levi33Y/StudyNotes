# 学习笔记

2024/8/26



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

2024/8/26 UPDATE: 

今日总结：

1. 继续跟进Hi200GO开发，合并管理后台首页pr，完成workbench ui并发pr 。调整管理后台首页ui，调整最小宽度，在最外层嵌套div显示滚动条。完成workbench ui，使用boder绘制三角形条件渲染账号绑定状态 ui。修改Checkbox组件底层类，编写ConfigProvider theme主题颜色完成绑定账号 ui。修改Progress组件底层类，使用repeating-linear-gradient实现原型的进度条 ui。



明日计划：

1. 继续跟进Hi200GO开发

   

卡位：暂无

Hi200Go workbench ui：https://github.com/sj-distributor/Hi200Go.Web/pull/12

## 三、每周总结

1. 计划
2. argent体
3. 项目需求：hi200
4. planka




## 四、目录

1、antd

2、hasOwnProperty 判断对象属性

3、伪数组转数组

4、事件冒泡



#### antd

progress 进度条样式

1、format 定制上传成功



checkbox 背景 钩子样式 图标大小



#### hasOwnProperty

~~~js
//Do not access Object.prototype method ‘hasOwnProperty‘ from target object no-prototype-builtins
~~~



在eslint不通过，需要调用Object内置对象通过call指向要操作的对象



#### 伪数组



#### 事件冒泡

1、 e.stopPropagation()

2、e.nativeEvent.stopImmediatePropagation()

3、使用代码判断事件e target对象



>
>
>React并不是将click事件绑在该div的真实DOM上，而是在document处监听所有支持的事件，当事件发生并冒泡至document处时，React将事件内容封装并交由真正的处理函数运行。
>
>其中，由于event对象是复用的，事件处理函数执行完后，属性会被清空，所以event的属性无法被异步访问，详情请查阅[event-pooling](https://link.juejin.cn/?target=https%3A%2F%2Freactjs.org%2Fdocs%2Fevents.html%23event-pooling)。

![1730fdd3e9905793~tplv-t2oaga2asx-jj-mark-1512-0-0-0-q75.awebp](https://raw.githubusercontent.com/levi33Y/Pictures/main/1730fdd3e9905793~tplv-t2oaga2asx-jj-mark-1512-0-0-0-q75.awebp.webp)
