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
3. [✅]文件獲取-呼叫設置需求 - ui



## 一、发掘



## 二、每日总结

2024/6/13 UPDATE:
今日总结：

1. 处理并合并ai文件识别pr。
1. 处理并合并报表中心模版对象pr。
1. 继续开发模版获取发送设置ui。期间遇到了在TextArea输入值后出现date.isValid is not a function异常，原因是TextArea的表单name和DatePikcer的name一致，两个字段控制一个值，TextArea傳入的是string，DatePikcer的value是dayjs类型，String并没有dayjs库的方法导致报错。在对DatePicker的页脚样式修改时，修改了元素hover，但这样导致disabled的样式有问题，修正思路用important修改disabled的属性。为了修改点击页脚的确认按钮时的样式，修改了active等伪元素发现都不生效，最后在控制台元素中知道ant-picker-ok确认时添加div元素来实现点击时边框样式的，最后通过ant-picker-ok div来修改样式。




明日计划：

1. 继续开发模版获取ui并学习ant的动态动态增减表单项。



卡位：暂无

模版中心 模版获取 https://github.com/sj-distributor/AiRecognitionFile.Web/pull/12

## 三、每周总结

1. 继续处理和开发报表中心pr comment和模版获取。

2. 了解一下row的flex设置为什么会使table出现异常想象

3. ai文件识别和报表相似的权限功能，特别与选择框或列表交互功能，尝试封装起来。

4. 继续学习react 以及 react Router V6的api和组件standup

   



## 四、目录

date.isValid is not a function

DatePicker 修改样式



### date.isValid is not a function

![image-20240613161718203](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240613161718203.png)

TextArea傳入的是string，DatePikcer的value是dayjs类型。name相同導致表單的值由兩個表單項控制

## DatePicker 修改样式

display状态hover会改变颜色。控制台样式

点击时有边框显示。看控制台元素找到了div
