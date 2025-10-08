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

## today

1. [✅]开发考核项目 grocery page ui 接口配置和 grocery page 接口对接。
1. [❓]处理AI 识别文件pr comment

## 每日总结

2024/5/13 UPDATE:
今日总结：

1. 完成考核项目grocery page ui 和接口配置并发pr，src下，新建appsettings封装fetch，AppHook用于应用渲染时获取配置，新建services文件夹，新services/api/http-client.tsx封装post和get方法，/services/api/grocery为业务模块封装方法调用请求数据。期间遇到../appsetting.json获取不到配置文件，原因是编译后应用内的浏览器请求的本地资源要放在pubilc文件夹下。请求发生跨域，原因是代理端口是8080，新建.env文件让项目在要求端口下运行。
1. 使用import 'index.moduel.scss' 类名選擇器失效，原因是css moduel下，css-loader匹配/\.module\.scss$/i使用local对类名运行哈希算法，此时并不能在页面用类名匹配scss文件作用域下类名。解决办法是改为index.scss或者.css，这样即使import loader也会把文件当作普通的css，或者使用:global声明全局规则。值的注意的是:local()是显式表达，等于直接写类名。



明日计划：

1. 处理AI 识别文件pr comment
1. 处理 考核项目 pr comment



卡位：

1.  暂无

识别文件pr https://github.com/sj-distributor/AiRecognitionFile.Web/pull/12

考核项目prhttps://gitlab.sjfood.us/solar/practiseforlevi/-/merge_requests/6

## 每周总结

## 目录

无插件：接口配置

自定义hook是干嘛的，一个组件内的小分页、数据请求要在组件的hook里吗

public文件夹

跨域

import css 與sass cssmodel使類選擇棄全局變量失效

### 接口配置

1. 配置文件
2. 接口封装
3. 业务请求
4. 使用

### 自定义hook

1. use开头的，可以获取特定组件功能
   1. 在useAction可以获取请求/分页状态
   2. 组件tsx实例化，调用方法/改变数据

### Css moduel

使用import 'index.moduel.scss' 類名選擇器失效，原因是css moduel下，css-loader匹配/\.module\.scss$/i使用local對类名运行哈希算法，此时并不能在页面用类名匹配scss文件作用域下类名。解决办法是改为index.scss或者.css，这样即使import loader也会把文件当作普通的css，或者使用:global声明全局规则。值的注意的是:local()是显式表达，等于直接写类名。

