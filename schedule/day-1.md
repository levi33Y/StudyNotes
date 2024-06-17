# 学习笔记

2024/6/11

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

14. [❓]css 溢出场景；溢出、BFC、流内流外、边距折叠

15. [❓]css 设置边框

    ~~~css
    .dotted-line{    
    border: 1px dashed transparent;    
    background: linear-gradient(white,white) padding-box, repeating-linear-gradient(-45deg,#ccc 0, #ccc .25em,white 0,white .75em);
    }
    
    ~~~

16. [❓]flex；浏览器紫色区域、flex:

17. [❓]display 与 background颜色

18. [❓] [html空格](https://blog.csdn.net/wuzhiyue2/article/details/117990898)

19. [❓]vite 项目配置

20. [❓]img标签的src属性

21. [❓]了解一下row的flex设置为什么会使table出现异常想象

22. [❓]ai文件识别和报表相似的权限功能，特别与选择框或列表交互功能，尝试封装起来。

23. [❓]继续学习react 以及 react Router V6的api和组件

## Today

1. [✅]文件獲取-发送設置-表单ui



## 一、发掘

router 学习目录

Github中那些迷之缩写？LGTM?

软件alpha、beta、rc、stable各个版本有什么区别？

Class 

网关、路由器、DNS等网络术语的通俗比喻

https://www.bookstack.cn/read/es6-3rd/sidebar.md

node  error:0308010C openssl

brew

input file类型 sheetJS

RegExp方法

JavaScript 新增两个原始数据类型Record 和 Tuple

tailwindcss calc

form onchange https://github.com/ant-design/ant-design-mobile/issues/5752

form model Warning: Instance created by useForm is not connected to any Form element. Forget to pass form prop

TypeScript项目实践之 Omit 特性

一遍文章搞清楚VO、DTO、DO、PO的概念、区别

锁版本

()=>fun()和 fun

### table 无限变宽

currentColor

useMemoizedFn ahook

单点登录(SSO)看这一篇就够了！❤️这次不慌了



## Object Map

构造函数：Object()

键值形式存储数据

object 内置方法

删除键值对 delete



new Map（）

Hash结构 键值对

（） ==> js數據結構

## 二、每日总结

2024/6/17 UPDATE:
今日总结：

1. 继续开发模版获取。完成发送设置表单的条件渲染、发送记录ui、异常详情ui。通过获取选择框的值与字段设定的自定义属性做对比来做条件渲染，在使用getFieldsVlue时获取不到字段的值，原因是FormList里面的字段name路径第一层应该还要包含FormList的name，因此完成的路径是[formList,field.name,name]。
2. 学习JS，简单了解Map和Object。使用get set是直接访问数组索引，这类操作复杂度是1。Map有iterator，有forEach操作顺序遍历map。Map的key和value可以是任意值。




明日计划：

1. 继续开发模版获取保存逻辑、根据原型修改表单ant组件ui。



卡位：暂无

模版中心 模版获取 https://github.com/sj-distributor/AiRecognitionFile.Web/pull/12

## 三、每周总结


1. 开发模版获取发送设置控件ui、字段的条件渲染
2. 开发模版获取发送记录ui
3. 继续学习react 以及 react Router V6的api和组件


## 四、目录

getValues 路径参数

