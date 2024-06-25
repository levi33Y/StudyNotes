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

1. [✅] ant 组件
2. [✅] 保存逻辑
3. [❌] 接口枚举



## 一、发掘



## 二、每日总结

2024/6/18 UPDATE:
今日总结：

1. 完成模版获取的保存逻辑开发。使用col对嵌套的表单项拆解，学习了noStyle会移除FormItem所有包括自定义样式和label等样式。使用required对嵌套字段label单独设置校验样式。
1. 完善发送设置字段ui，完成”每个月“日历多选选择器自定义校验组件开发。在span中使用onClick触发onChange方法来更新value。使用flex-wrap实现日历的网格效果，使用flex居中解决第一和最后一列不对称的问题。学习Array.from静态方法，设置mapfn参数让数组从1开始循环渲染31天的日历dom。




明日计划：

1. 优化模版获取表单逻辑，根据模版获取的需求和原型对部分ui进行调整。



卡位：暂无

模版中心 模版获取 https://github.com/sj-distributor/ReportCenter.Web/pull/11

## 三、每周总结


1. 继续学习react 以及 react Router V6的api和组件


## 四、目录

保存逻辑

ant组件

checkbox

### 保存逻辑

忽略了初始值。（不是formList的表单有undefine初始值）

## ant组件

并排效果；两个form->嵌套

noStyle去除classname、noStyle

直接复制ant * 的样式

### checkbox

![image-20240618153338249](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240618153338249.png)

自定义校验组件

grid布局

Array.from
