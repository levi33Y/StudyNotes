# 学习笔记

2024/5/7

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

## Today

1. [✅] ai 文件识别comment
2. [✅] ai文件识别 dto and updateDto
3. [❌] ai文件识别 tree
4. [✅] 报表中心 comment
5. [] 报表中心 dto and updateDto
6. [❌] 报表中心 tree
7. [舍弃] 报表中心 drawer and form
8. [] 诉职报告



## 一、发掘



## 二、每日总结

2024/6/8 UPDATE:
今日总结：

1. 处理报表中心pr comment。期间遇到当底部滚动条出现时，抽屉里的表格等flex元素宽度无限增加，解决办法是删除包裹在table的Row组件。百分比宽度和flex会造成这种现象的原理会继续研究。
1. 学习封装svg组件。把项目中通过img引用png的图表改成引用png组件的形式，定义prop SVGProps<SVGSVGElement>来接受所有原有的图表属性，过程发现通过color设置svg颜色没有生效，原因是fill指定了填充色，解决办法是用currentColor。




周一计划：

1. 继续处理和开发报表中心pr comment和模版获取。



卡位：暂无

模版中心pr  https://github.com/sj-distributor/ReportCenter.Web/pull/6

## 三、每周总结

1. 迁移并配置报表中心项目，了解Tailwind Preflight配置项。
1. 了解npm、npx的区别，学习yarn基本使用命令。学习node版本的差异和brew包管理工具，版本号的概念，以及如何锁版本。
1. 处理报表中心pr，学习与理解并使用setDto、 useCallback 去重构state以及setter。
1. 学习了FileReader和sheetJs以及基本用法，实现本地文件的解析和下载。
1. 学习ant 多个表单组件的使用，开发中发现自己的页面tabler在发生滚动时宽度无限增加并解决，抽屉组件销毁机制以及form表单字段、校验相关api。
1. 了解了route 6中的action，Form、fetcher、submission，From，以及提交、导航等、索引路由等概念。
1. 处理ai文件识别pr。
1. 学习如何封装svg组件以及fill要设置为currentColor。



1. 继续处理和开发报表中心pr comment和模版获取。

2. 了解一下row的flex设置为什么会使table出现异常想象

3. ai文件识别和报表相似的权限功能，特别与选择框或列表交互功能，尝试封装起来。

4. 继续学习react 以及 react Router V6的api和组件

   



## 四、目录

svg 组件、props、 currentColor





![image-20240608073939067](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240608073939067.png)

![image-20240608073945072](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240608073945072.png)



ant table flex-1 %height-width 问题