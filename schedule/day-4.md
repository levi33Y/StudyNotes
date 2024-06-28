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

1. 



## 一、掘

jest ts测试插件

迭代器 之 对象



## 二、每日总结

2024/6/26 UPDATE:
今日总结：

1. 继续开发分配任务需求，完成ui页面开发。学习了ant嵌套子列表，ant中expandedRowRender传递新的table组件实现表格嵌套子列表。使用margin实现Category在第一列的视觉效果
1. 学习forwardRef api。组件接受父组件ref并传递给子组件，子组件内使用ref，父组件可以接受组件属性，useImperativeHandle hook能够限制dom信息来指定返回值给ref




明日计划：

1. 继续开发busybee 分配任务需求



卡位：暂无



## 三、每周总结

1. 处理模版获取pr comments
2. 学习busybee项目代码并了解项目需求




## 四、目录

Warning: Favicon: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.

bsb编辑页面设计



#### bsb team-reception

#router/ 业务 组件

#弹窗 ModalBox

条件条件：handle ref  父组件调用ModalBox的ref？

所以ref并不是父组件传递给modalBox然后modalBox转发给modalBox的子组件，来达到父组件控制ModalBox里面的简单控件的？

ModalBox并没有向父组件船体起子组件content的信息

--结果：舍弃 / 项目



子组件：通过props content属性 

--结果：舍弃



content 子组件/req-edit

条件渲染：与传递的ref无关，子组件useEffect 逻辑

ref传递给子组件，ref与modalBox一致，此时ref管理req-edit下的子组件，req-edit转发了父组件的ref

req-edit子组件 team-edit，ref只用来关闭弹窗

最总，ref只是 父组件-ModalBox-子组件/req-edit-子组件 team-edit， team-edit传递close方法 关闭ModalBox弹窗

--结果：



#### ant 嵌套表格

通过expandable传递expandable对象