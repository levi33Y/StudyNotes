# 学习笔记

2024/6/25

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

24. []iterator，可以使用for..of等方法

25. []接口与类型

## Today

1. 处理模版中心 pr comments
1. 在修改文件并push到仓库时，发现github远程仓库小写文件共存，拉取到本地时大小写文件合并，原因是github更新了更改的大写文件，但git提交时大小写的删除等修改不会记录。在不修改git默认配置下修改文件名然后push，然后改回文件再提交。
1. 学习ts 。学习了Record，Record能够返回key为键Type为值对象类型。Pick返回Type里面被选定键名的对象类型



## 一、发掘



## 二、每日总结

2024/6/26 UPDATE:
今日总结：

1. 处理模版获取pr comments
2. 学习ts。收割、
3. 了解bsb 服务-服务承接 - 分配任务 业务逻辑 、 modal组件开发



1. 处理模版中心pr 并merge
2. 了解react-i18next插件。react-i18next是对React的i18next插件，在react项目中，useTranslation hook 中 t方法翻译文本，i18n对象changeLanguage方法能够修改用户语言
3. 学习busybee项目代码，了解服务承接订单分配分配订单需求，订单处理人员即是服务方对已确认需求报价任务进行指派服务人员，学习了team-reception模块的dom结构，开发分配任务ui。




明日计划：

1. 继续开发busybee 分配任务ui



卡位：暂无

模版中心 模版获取 https://github.com/sj-distributor/ReportCenter.Web/pull/11



## 三、每周总结

1. 处理模版获取pr comments
2. 学习busybee项目代码并了解项目需求




## 四、目录

i18n -- react上的应用



### i18n -- react上的应用

#### i18n 通常原理



#### react上的应用

1. use 钩子
2. t函数
3. i18n.change 函数



#### 项目未应用

1. 格式化器 插值文本格式化
2. npm install i18next-http-backend -- 资源文件地翻译
3. 三方平台