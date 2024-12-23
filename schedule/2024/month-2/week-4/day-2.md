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

2024/6/4 UPDATE:
今日总结：

1. 学习团队项目代码，学习了可以对useState的setter使用useCallback封装，然后更新object时仅传递键和值来优化更新操作。
2. 了解到了node版本的差异。openssl向node提供加密算法，node创建服务如https的TLS/SSL的加密算法等。node版本对opensll版本具有兼容性问题，在new Hash 时会出现unsupported的报错。在使用drew等依赖管理工具时，删除或切换node需要手动 openssl -version确保openssl的版本清理干净。
3. 完成模版库对象导入UI。


明日计划：

1. 继续开发报表中心模版库模版文件解析、分析呼叫需求与开发UI。

卡位：

1.  暂无

报表中心

模版库  https://github.com/sj-distributor/ReportCenter.Web/pull/6

## 三、每周总结

1. 

## 四、目录

hook的位置

input file 与 Offfice MS





### hook的位置

hook应该在函数的顶层

ESLint: React Hook "useAction" cannot be called inside a callback. React Hooks must be called in a React function component or a custom React Hook function.(react-hooks/rules-of-hooks)

### input file 与 Offfice MS、file

|      | type  | file.type                                                    |
| ---- | ----- | ------------------------------------------------------------ |
|      | .xlsx | application/vnd.openxmlformats-officedocument.spreadsheetml.sheet |
|      | .xlsm |                                                              |
|      | .xlsb |                                                              |
|      | .xltx |                                                              |
|      | .xltm |                                                              |
|      | .xls  | application/vnd.ms-excel                                     |
|      | .xlt  | application/vnd.ms-excel                                     |
|      | .xlam |                                                              |
|      | .xml  | text/xml, application/xml                                    |
|      | .xlr  |                                                              |
|      | .xlw  |                                                              |
|      | .xla  |                                                              |
|      | .xlc  | application/vnd.ms-excel                                     |
|      | .xlm  | application/vnd.ms-excel                                     |
|      | .xlw  | application/vnd.ms-excel                                     |

