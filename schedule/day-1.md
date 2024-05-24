# 学习笔记

2024/5/7

## todo

1. [✅] xxx
2. [❌] xxx
3. [❓] xxx

## yesterday

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

## today

1. [❌]学习router V6 与 状态保存，并写文章
1. [❌]scroll總結
1. [❌]useReduer解析

## 发掘

長列表

### 長列表

https://juejin.cn/post/7354940230301057033?utm_source=gold_browser_extension

https://juejin.cn/post/6844903938894872589



#V8執行代碼、頁面渲染、同步、宏、微

https://juejin.cn/post/7020328988715270157

js引擎與瀏覽器UI概念

前端中同步與異布任務

EventLoop流程

異步任務優先級

異步任務的宏任務與微任務之分

EventLoop執行微任務和宏任務流程

瀏覽器事件循環流程



#promise題目

https://juejin.cn/post/6844904077537574919#heading-56



#setTime 0 與 遞歸

setTime隊列與Hz造成的閃屏



#requestAnimationFrame + fragment时间分片

任务队列

优化动画的API？ 動畫楨率？



#虚拟列表

窗口



## 每日总结

2024/5/20 UPDATE:
今日总结：

1. 学习react开发中中长列表的处理方式。前端可以直接渲染、使用时间分片和虚拟列表来处理长列表，时间分片有值得了解的两个方法，requestAnimationFrame动画帧相对于setTime更优，能够适应屏幕刷新率执行，有效解决可能存在的闪屏问题。
2. 学习了浏览器GUI与事件循环。在整个EventLoop中，setTime是会进入浏览器队列中，而js处理任务实在浏览器GUI之后，可以使用setTime(()=>{},0)来打印浏览器渲染的时间，值得注意setTime似宏任务，在浏览器为任务队列。


明日计划：

1. 跟进AI 识别文件。
1. 跟进考核项目 grocery页面，学习cicd发布部署。

卡位：

1.  暂无

识别文件pr https://github.com/sj-distributor/AiRecognitionFile.Web/pull/12

考核项目prhttps://gitlab.sjfood.us/solar/practiseforlevi/-/merge_requests/6

## 每周总结

周一计划

- 跟进AI 识别文件

- 跟进考核项目 grocery页面

- 学习cicd发布部署

## 目录

### 需求报价

