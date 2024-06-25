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

1. []跟进 AI 识别文件的权限管理页面 添加用戶功能 ui 。
2. []开发考核项目 grocery page ui 接口配置和 grocery page 接口对接。

## 每日总结

2024/5/10 UPDATE:
今日总结：

1. 完成添加用戶对话框tree和list的样式，实现将树选择结果关联列表内容，期间遇到树节点父子关联，但列表值显示最后一条数据的问题，原因是set函数是更新当前的state，因此在循环中都在更新重复的state，解决办法向set函数传递更新函数。在对state解构并且使用splice处理数组后当作下一次状态，发现数据没有发生变化，原因是splice是改变数组，而且 = 解构对象是浅拷贝，数据的引用还是指向原数组，state的diff引用数据类型只看引用。解决办法是使用filter返回一个新数组当作新的状态值来更新数组。



明天计划：

1. 根据需求完成AI识别文件 添加用戶对话框 tree搜索和list删除功能 。
2. 开发考核项目 grocery page ui 接口配置和 grocery page 接口对接。



卡位：

1.  暂无

考核项目：

grocery page ui：https://gitlab.sjfood.us/solar/practiseforlevi/-/merge_requests/6（开发中）

权限管理页面：https://github.com/sj-distributor/AiRecognitionFile.Web/pull/12（开发中）

## 每周总结

## 目录

数据穿梭

dialog子組件

1. 数据穿梭
   1. tag列表渲染selectkeys
2. 確認提交
   1. 模擬uPost
   2. 關閉close

useState更新数据 循环坑

state的diff 引用坑

## 

### 数据穿梭

1. 获取数选择的ids

   选择->整个ids

   update selectList

2. 过滤ids作为list值

3. 左右穿梭關連

   同一個方法

### useState更新数据 循环坑



### 引用坑

变量仍然引用了最初的数组

