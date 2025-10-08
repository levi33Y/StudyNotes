# 学习笔记

2024/5/7

## todo

1. [✅] xxx
2. [❌] xxx
3. [❓] xxx

## yesterday

1. [❓] 考核项目 - 笔记
2. [❓]useState、useEffect、useRef、useImperaiveHandle等hook笔记
3. [❓]reouter 6 笔记
4. [❓]react 事件处理、react-dom 笔记
5. [❓]ts 笔记
6. [❓] recoil 笔记
7. [❓] html body 标签
8. [❓] 需求：解决rem和适口单位的混乱
9. [❓] 滚动条开发笔记

## today

1. [✅]grocery page ui delivery 长列表开发
2. [✅]grocery page ui pickup 
3. [✅] enum

## 目录

下拉刷新

dom结构与结构选择伪类

### 下拉刷新

数据请求

api

|--model

​	|--index.tsx

|--http-client.tsx

下拉刷新

1. 滚动条件
2. 刷新函数

初始化刷新

1. 发起请求，获取第一页

逻辑

初始化刷新->

数据是否超过clientHeight？：显示tips->

下拉刷新->

发起请求->

是否有数据？：显示tip->

改变list数组->下

拉刷新-发起请求->......

## 每日总结

2024/5/7 UPDATE:
今日总结：

1. 完成grocery page ui delivery页面下拉刷新功能和pickup页面，期间遇到frist-list失效问题，原因是使用结构伪类父节点下的兄弟节点元素要一致，解决：使用first-of-type指定兄弟组或者修改dom结构。

1. 学习enum，eumn在ts中可以作为类型和值，在编译成对象而不会被移除。学习基本的语法。用enum重构switch、unio逻辑代码块。

   


明天计划：

1. 开发考核项目grocery page ui接口配置和grocery page 接口对接。
1. 跟进AI 识别文件的权限管理页面ui 。

卡位：

1.  暂无

考核项目：

grocery page ui：https://gitlab.sjfood.us/solar/practiseforlevi/-/merge_requests/6（开发中）

## 每周总结

