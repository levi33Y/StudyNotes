# 学习笔记

第 1 天

2024/5/2

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

## today

1. [❌]grocery page ui 长列表开发
2. [❓] recoil 笔记
3. [] html body 标签
4. [] 需求：解决rem和适口单位的混乱
5. [] 滚动条开发笔记

## 目录

长列表

### 长列表

1. scoll 滑倒最后一个card底部时，刷新数据
2. 当刷新数据函数无内容时，显示对应提示
3. Overflow onscorll margin box-size 鼠标滚轮 鼠标拖动
4. 单位

## 每日总结

2024/5/6 UPDATE:
今日总结：

1. 开发考核项目grocery page ui。期间遇到onScroll函数失效问题，原因是当前元素没有设置height属性。页面出现两个滚动条问题，原因是当前元素滚动条，且元素本身自身的高度超过了窗口高度，html和body默认overflow: auto，解决办法是在上层元素设置高度并且设置overflow属性或者在html或body中设置overflow：hidden。盒模型默认为content-box，在元素占满窗口高度的情况下设置偏移量时，通过上层元素设置margin(元素要？？？减去margin？这不跟content-box下设置padding有区别吗)或者在border-box下设置padding。

   


明一计划：

1. 开发考核项目grocery page 的 delivery页面下拉刷新功能和pickup页面。
1. 继续学习react框架

卡位：

1.  暂无

考核项目：

grocery page ui：https://gitlab.sjfood.us/solar/practiseforlevi/-/merge_requests/6（开发中）

## 每周总结

