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



## 二、每日总结

2024/6/16 UPDATE:
今日总结：

1. 学习form组件嵌套结构与自定义控件。在动态嵌套的场景下，GetFieldsValue获取不到值且控件发生变化导致其余字段清空，原因是FormItem的name不是以field.name为第一索引的路径数组名称，form更新form对象刷新移除无效的路径。自定义控件要指定自定义组件value和onChange同名属性方法。
1. 继续开发发送设置，完成了月类型的表单结构。过程中field.name被判断为否导致FormItem name冲突，原因是使用了 || ，解决办法是使用??。




周一计划：

1. 继续开发模版获取ui



卡位：暂无

模版中心 模版获取 https://github.com/sj-distributor/AiRecognitionFile.Web/pull/12



处理报表中心 pr comments。学习团队规范修改state的排序。学习了ahooks，useUpdateEffect替代了有依赖项open的useEffect，它能忽略首次执行，让open依赖项变化时进行操作。学习了useMemoizedFn，与useCallback的区别是，useMemoizedFn可以省略deps，同时它在依赖更新时不重新生成，使用 === 测试依赖更新前后变量引用，useCallback结果为false，useMemoizedFn为true。

## 三、每周总结

1. 处理并合并模版中心 模版对象 pr comments，学习了state的命名和导出规范
1. 学习了ahook中的useMemoizedFn和useUpdateEffect，并对比useCallback和useEffect的区别
1. 开发模版获取，完成了顶部tab以及呼叫设置ui。
1. 开发模版获取发送设置ui，完成了发送设置的表单结构与动态增减
1. 学习了ant中form组件动态增减、嵌套结构、自定义控件的知识，在List且嵌套的情况下FormItem的name要使用路径
1. 学了了form开发中的报错，在使用form组件是要注意FormItem不能直接返回<></>，name一般不能重复以为控件的value类型不同。
1. 循环使用逻辑运算符要注意|| 和 ?? ,map循环的index从0开始，||会把0判断为否
1. 处理并合并ai文件识别pr。




1. 开发模版获取发送设置控件ui、字段的条件渲染
2. 开发模版获取发送记录ui
3. 继续学习react 以及 react Router V6的api和组件


## 四、目录

name 为路径



## name 为路径

![image-20240615070816042](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240615070816042.png)

注意 0 与 ??