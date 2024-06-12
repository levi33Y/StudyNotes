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

1. [❌] ai文件识别 tree
2. [✅] 报表中心 dto and updateDto
3. [❌] 报表中心 tree
4. [✅] 报表中心 drawer and form
5. [✅] 诉职报告



## 一、发掘



## 二、每日总结

2024/6/11 UPDATE:
今日总结：

1. 处理模版中心 pr comments，根据团队命名规范修改了dto之类的state根据组件来区分，比如分页的信息应该单独写成一个paginationDto。在使用自定义的工具函数直接赋值onClick时内部this undefine,原因是onClick直接等于函数使this指向onclick的上下文，解决办事时onClick等于箭头函数传递工具函数的结果，或者使用bind手动指向自定义的工具实例。
1. 完成模板获取呼叫设置ui。




明日计划：

1. 继续处理和开发报表中心pr comments和模版获取。



卡位：暂无

模版中心pr  https://github.com/sj-distributor/ReportCenter.Web/pull/6

## 三、每周总结

1. 继续处理和开发报表中心pr comment和模版获取。

2. 了解一下row的flex设置为什么会使table出现异常想象

3. ai文件识别和报表相似的权限功能，特别与选择框或列表交互功能，尝试封装起来。

4. 继续学习react 以及 react Router V6的api和组件

   



## 四、目录

state命名规范

onclick(()=>fun())与onclick(fun)

form的使用

### state命名规范

