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

1. 



## 一、发掘



## 二、每日总结

2024/6/21 UPDATE:
今日总结：

1. 开发模版架构对象自定义校验组件，完成树与选择框交互功能。根据checkedKeys父子联动的特性。select onchange时setFieldValue表单值，在自定义校验组件定义onChange提供选择节点时监听时机然后setFieldValue表单值。
1. 处理模版获取pr。学习数组some方法，将保存逻辑独立的for与if逻辑判断写成some的一个测试，然后用flag接受结果来判断保存状态。




周一计划：

1. 处理模版获取pr comments



卡位：暂无

模版中心 模版获取 https://github.com/sj-distributor/ReportCenter.Web/pull/11



## 三、每周总结




## 四、目录

树组件



### 树组件

#Tree API

fieldNames 树数据结构

checkedKeys 存在复选框下、父子联动的属性

checkStrictly 存在复选框下、父子联动的属性

expandedKeys: 暂开节点

selectedKeys：选中节点



#Form API

id value onchange

getFieldValue

setFieldValue

ß

#树数据结构

扁平化