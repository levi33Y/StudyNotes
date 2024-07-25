# 学习笔记

2024/7/15



## Todo

1. [✅] xxx
2. [❌] xxx
3. [❓] xxx



## Yesterday

1. 




## Today

1. 



## 一、掘





## 二、每日总结

2024/7/22 UPDATE:
今日总结：

1. 继续开发ai检测货品后台路由。完成菜单和面包屑ui以及后台路由全部的逻辑开发。学习数据路由，在router的index中，移除Routes组，保留原来的jsx结构，使用createRoutesFromChildren和createBrowserRouter创建路由对象，然后将对象传到RouterProvider组件中，RouterProvider是接受所有数据路由的组件，此时App不用修改，最后移除main文件的BrowserRouter标签。学习useMatches hook，开发面包屑，在router路由结构数组中，添加handle为路由提供元信息，将 Route handle 与 useMatches 配对，在layout中用用useEffect监听matches来根据页面路由获取页面路由信息动态渲染面包屑。开发菜单的交互逻辑，在handle给菜单路由标识，在layout中使用useMemo监听matches，用栈将当前页面路由最近的菜单项的id取出来传到menu组件的selectedKeys属性中实现菜单项的自动选择。




明日计划：

1. 处理ai检测货品质量pr comments，调整后台页面样式。



卡位：暂无

ai检测货品后台路由pr：https://github.com/sj-distributor/AiQualityCheck.Web/pull/22

## 三、每周总结

1. 处理ai识别文件pr，包括条件分页查询、保存重置查询参数、树节点的disable等问题
1. 继续了解null和undefine在window全局环境的定义
1. 了解ahook所有api并学习防抖、请求相关api
1. 完成ai检测货品质量 导入ui、检测记录模块、开发后台路由、处理素材列表pr
1. 了解和对比了浏览器缩放css属性transform:scale和zoom



## 四、目录

面包屑

数据路由



### 面包屑

bfs找到路径

修改路由对象有根节点才方便



菜单

点击路由失效了，跳转错误 --- 要在menu点击，e返回整个项目的信息。为什么在item里main点击永远都是跟菜单项目



数据路由