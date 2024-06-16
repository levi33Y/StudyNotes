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

## Today

1. [❌] ai文件识别 tree
2. [❌] 报表中心 tree
3. [✅]文件獲取-发送設置-动态表单



## 一、发掘



## 二、每日总结

2024/6/14 UPDATE:
今日总结：

1. 完成发送设置动态增减表单。Form.List解构fields和Opt，通过map循环fields渲染所有表单，field.name 应用于控制字段，add和remove增加和删除表单项。在渲染时发现表单页面空白，原因是没有指定initialValues与初始Form.List一致。遇到了"child ...unique "key" prop. map"报错，原因是指定key不能使用简写<></>要使用Fragment。name is only used... If you are using Form报错原因是Form.List仅有<></>，<></>并不是表单元素且可控的表单元素。Form.Item下存在多个表单组件或可校验组件用Form.Item noStyle包裹。




明日计划：

1. 学习嵌套FormItem和自定义表单控件的规则，继续开发模版获取ui



卡位：暂无

模版中心 模版获取 https://github.com/sj-distributor/AiRecognitionFile.Web/pull/12

## 三、每周总结

1. 继续处理和开发报表中心pr comment和模版获取。

2. 了解一下row的flex设置为什么会使table出现异常想象

3. ai文件识别和报表相似的权限功能，特别与选择框或列表交互功能，尝试封装起来。

4. 继续学习react 以及 react Router V6的api和组件standup

   



## 四、目录

动态表单



## 动态表单

1 初始化表单为空 initialValues

2 Each child in a list should have a unique "key" prop. map下 <></>也要设置key

3  `name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead.  布局 Item包裹

4 A `Form.Item` with a `name` prop must have a single child element. For information on how to render more complex form items, see https://u.ant.design/complex-form-item.	<></>并不是表单元素且可控的表单元素

5 form list 并不能根据 tabs切换而切换

6 row div <> key 用Fragment

7 row 空隙 rowfelx佈局，直接使用同名formItem



嵌套的并不能get到值

![image-20240614183612526](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240614183612526.png)

