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

2024/5/9 UPDATE:
今日总结：

1. 开发权限管理页面 添加用戶对话框 ui，查阅antDesign api文档 。对modal的footer、connet、button使用api，title等没有api的类根据其类名覆盖样式修改默认的样式来根据ui定制开发对话框。使用tree、list写对话框内容。
1. async函数返回promise，PromiseResult是promise对象未来的值，需要用链式.then或await获取里面的数值。开发测试中使用了setTime和promise模拟主函数阻塞线程来模拟页面中的数据请求测试页面加载的效果。
1. onclick等事件处理函数是一个函数，应该传递onclick(() => fun())或onclick(fun)。onclick(() => {fun()})和onclick(fun())都是函数调用都是不正确的。



明天计划：

1. 根据ui完成AI 识别文件的权限管理页面 添加用戶对话框tree和list的样式 。
2. 开发考核项目 grocery page ui 接口配置和 grocery page 接口对接。



卡位：

1.  暂无

考核项目：

grocery page ui：https://gitlab.sjfood.us/solar/practiseforlevi/-/merge_requests/6（开发中）

权限管理页面：https://github.com/sj-distributor/AiRecognitionFile.Web/pull/12（开发中）

## 每周总结

## 目录

Js setTiome promise async 線程理解

dialog子組件

()=>{}、()=>fun() 、fun、fun() 

#### dialog子組件

1. 打開與關閉
   1. dialogSetting對象，open屬性控制dialog子組件顯示。
   2. 取消或x或空白，子組件close自定義函數 子傳父方式通知
2. 數據渲染
   1. 綁定數據selectKeys
   2. 子組件內模擬請求數據，樹形控件暫時
3. 數據傳送
   1. tag列表渲染selectkeys
4. 確認提交
   1. 模擬uPost
   2. 關閉close

#### ()=>{}、()=>fun() 、fun、fun() 

onclick(()=>{fun()})

onclick(()=>fun())

onclick(fun

onclick(fun())

## 