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

1. [✅] 接口枚举



## 一、发掘



## 二、每日总结

2024/6/19 UPDATE:
今日总结：

1. 完成模版获取ui并处理pr comments。模版获取中使用固定选项value的选择器和直接使用字符串判断的逻辑改为定义枚举来实现，在对导入的其他组件的interface直接修改或添加属性的写法改为继承该属性。
1. 学习grid基本用法。使用grid布局替换了用flex实现的网格效果。repeat函数可以简化重复的列行数据，auto-fill关键字实现换行效果。在tailwind中样式表达式为 grid-cols-[repeat(auto-fit,minmax(...))]。




明日计划：

1. 处理模版获取pr comments



卡位：暂无

模版中心 模版获取 https://github.com/sj-distributor/AiRecognitionFile.Web/pull/12





2024/6/19 UPDATE:
今日总结：

1. 完成了模版获取UI并处理pr comments。在模版获取中使用固定选项value的选择器和直接进行字符串判断的逻辑改为定义枚举来实现。对于导入的其他组件的interface，将原先直接修改或添加属性的写法改为通过继承来添加这些属性。
2. 学习了Grid的基本用法。使用Grid网格布局替换了原先使用Flex实现的网格效果。其中，repeat函数简化了重复的列和行数据的定义，auto-fill关键字实现换行效果。Tailwind中使用grid-cols-[repeat(auto-fit,minmax(...))]来应用Grid布局。

明日计划：

1. 处理模版获取pr comments

卡位：暂无
模版中心 模版获取https://github.com/sj-distributor/ReportCenter.Web/pull/11

## 三、每周总结


1. 继续学习react 以及 react Router V6的api和组件


## 四、目录

gird布局

接口与枚举

## gitd布局

取代flex flex-warp

## 接口与枚举

为一些固定类型值用枚举写，使用继承防止修改其他文件的接口

默认值之类的固定字符串用枚举表示
