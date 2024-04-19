# 学习笔记

第 4 天

2024/4/18

## 目录

- 处理 pr#3 的 comment
- React Router 继续学习

## pr#3 总结

![image-20240418165038655](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240418165038655.png)

- ### gitflow

  1. 无用的代码与文件夹无需 commit，影响 pr 的完整

- ### TS 规范

  1. 定义类型借口

     在组件根目录新建 props.ts 文件，声明接口类型

     ![image-20240418192057267](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240418192057267.png)

     在使用处直接导入文件路径

  2. 需要标注类型

     在一般函数、变量注明类型标识外，在循环结构中也应该注明类型标识

     ![image-20240418193009487](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240418193009487.png)

- ### 路由规范

  1. 路由重定向：路由重定向用 Route 代码实现

     ![image-20240418155835284](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240418155835284.png)

  2. 路由表设计: 统一使用路由表编写路由规则

     router/index.tsx 文件：

  ![image-20240418155934580](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240418155934580.png)

  3. 路由文件导出，App 直接引入调用

     router/index.tsx 使用 map 渲染路由列表，最后导出整个路由表

     ![image-20240418190841234](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240418190841234.png)

     在 App.tsx 文件中引入组件

     ![image-20240418191042551](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240418191042551.png)

- ### 组件规范

  1. 逻辑块的换行，且数据放在组件根目录 hook 处理
  2. 去掉多余的<></>

- ### JS 规范

  1. 多余的嵌套，箭头函数能简化函数的长度

  多余的 return：

  ![image-20240418162948038](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240418162948038.png)

  简化后：

  ![image-20240418162931160](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240418162931160.png)

  2. 当三元表达式 else 为 null 时，用&&代替
  3. concat 的性能最好，...本质是对 concat 的封装

- ### SASS 书写规范

  1. 类的名称使用小驼峰

  2. 普通属性不换行，嵌套标签间换行

     ![image-20240418193300794](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240418193300794.png)

- ### CSS 规范

  1. html font-size 不做标准值处理；统一使用 rem 使得页面根据浏览器变化

## React Router 继续学习

- Link：为一个元素，通常用于 ui 开发中，实现路由的跳转

​ 使用 link 编写一个 tabbar

​ ![image-20240418200223604](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240418200223604.png)

- Routes 与 Routes：

  Routes：

  标签内包含 Routes，不能使用引入的组件，引入的组件的类型时 Element 类型，不符合 commpent<Routes>类型；控制台报错：

  ![image-20240418200836197](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240418200836197.png)

  Routes：

  应该将组件作为“元素”传递，如：

  ```
  <Route path="/" element={<Dashboard/>}>
  ```

- useRoutes：

  [接收 js 对象，功能与 Routes 一致](https://www.reactrouter.cn/docs/api#useroutes)
