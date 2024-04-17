# 学习笔记

第 3 天

2024/4/17

## 目录

- 学习react router v6
- 了解CSS in JS
- 学习sass
- 完成考核项目底部bar开发

## raact router v6

**学习重点**

- 嵌套路由
- 发票路由
- 索引路由
- 索引路由
- 动态链接

**开发中使用**

- 路由的使用，index.tsx使用BrowserRouter包裹应用
- link进行路由跳转
- 创建路由，路由为单独文件，文件的位置理由进行“”
- 路由不匹配的处理方式
- 读取参数
- 搜索参数
- 自定义路由行为
- 编程式导航

## CSS In JS

css in js指用js实现css，是js语法，与css预处理器大不相同，‘关注点混合‘在react得以体现，jsx使用js实现html，使用react开发应该注重组件化实现

## sass

### 变量

使用$声明变量，并且直接通过$使用变量

### 嵌套

1. 同一个父选择器通过嵌套来写，在编译时父选择器通过空格连接到自选择器前边。&接嵌套伪类和伪元素。
2. 群组选择器：群组选择器搭配嵌套只是在开发减小了样式表代码量，但实际编译后大小体积并没有减小。
3. 子选择器和同级选择器：在嵌套中 在选择器前使用
4. 属性：-用{}代替，然后接属性

### 导入

css@import：浏览器发请求发在import的文件，页面加载速度会降低

sass@import：引入样式片段合并至当前文件，无需请求,引入文件能缺省。避免导入.css文件、url地址、css的url地址导致额外http请求

### 注释

//会让注释存在样式表中，用/**/静默注释

### 混合器

可以复用代码

使用 @include 混用 @mixin开头的样式片段

### 继承

使用 @extend继承样式片段

## 考核项目

- 通过路由表定义路由规则

- 使用iconfont图标配置文件

  1. 引入iconfont文件

  2. 使用类名引入，类名在根据dome.html在iconfont.css查找

     ![image-20240417204930557](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240417204930557.png)

- 通过font-size修改伪元素content大小

**问题**

1. 路由一般使用路由表定义

2. 结构一样的代码用map去循环

3. 重复结构用map

   ![image-20240417200828652](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240417200828652.png)

   思路：使用路由表和路由传参props，link封装起来

4. 删除没用的代码

5. tsx的逻辑放到组件的hook文件中
