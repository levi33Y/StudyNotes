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

1. []导入UI
1. []分析呼叫需求

## 一、发掘

1. 学习路线
2. object map hsah

## 二、每日总结

2024/6/5 UPDATE:
今日总结：

1. 实现了模版文件解析与上传，学习了FileReader和sheetJs的基本用法。在开发过程中，注意区分js static方法，实例不能使用静态方法改变成员，因为静态方法指向类的本身。声明私有属性#file，访问file完成上传和下载逻辑。过程中遇到上传文件后file丢失，原因是react机制execl重新实例化了。使用memo声明永久存在于页面的实例。
2. 补充与完善页面中的表单校验与二次确认提示，学习团队的代码优化自己页面useState的更新方式。form中onValuesChange里直接触发校验会出现输入了正确的内容但是校验一直不通过，因为每次校验都会使上一次校验变成outofDate数据不足。可通过交互和直接检验字段做来实现内联登录栏效果。
3. 在tailwind使用calc时，与css中的calc不同是不要输入空格。




明日计划：

1. 继续开发报表中心模版库模版文件解析、分析呼叫需求与开发UI。



卡位：暂无

模版库pr  https://github.com/sj-distributor/ReportCenter.Web/pull/6

## 三、每周总结

1. 实现了模版文件解析与上传，学习了FileReader和sheetJs的基本用法。在开发过程中，注意区分js static方法，实例不能使用静态方法改变成员，因为静态方法指向类的本身。声明私有属性#file，访问file完成上传和下载逻辑。过程中遇到上传文件后file丢失，原因是react机制execl重新实例化了。使用memo声明于页面永久存在的实例。
2. 补充与完善页面中的表单校验与二次确认提示，学习团队的代码优化自己页面useState的更新方式。form中onValuesChange里直接触发校验会出现输入了正确的内容但是校验一直不通过，因为每次校验都会使上一次校验变成outofDate数据不足。可通过交互和直接检验字段做来实现内联登录栏效果。
3. 在tailwind使用calc时，与css中的calc不同是不要输入空格。

## 四、目录

ts

class

memo

form组件

twilwindcss

![image-20240606150641357](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240606150641357.png)

### ts

obj[obj1[key]] => 报错

