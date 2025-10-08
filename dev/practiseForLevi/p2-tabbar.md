# 底部导航



## 一、路由设计

### #

1. 定义路由接口
2. 创建路由表数组routes，使用map和`<Route />`生产PageList

   #### 创建路由

   `<Route />`代表了一条路由，path路由路径，element代表页面

   

   #### 路由间跳转

   可以通过html的a、routev6的Link等组件实现跳转

3. 使用`<Routes />`包裹路由数组，并手动定义根路由、其他路由
4. 导出RouterLink组件，return 为`<Routes />`
5. 使用`<BrowserRouter>`



### #

1. useRoutes
2. suspense
3. 声明式路由
4. 编程式路由
5. 路由表



## 二、引入iconfont字体

Unicode 引用

### #

1. 定义iconfont.css，拷贝`@font-face`和`iconfont`的定义，拷贝所有ttf、woff、woff2等字体文件

2. 在iconfont.css定义好字体类，如下形式

   ~~~css
   /* iconCopy 为一个Icon了 */
   .iconCopy:before {
     content: "\e6b5";
   }
   ~~~

3. 在src/index 导入字体



### #

1. unicode
2. Font class
3. Symbol





## 三、开发tabbar 底部导航

1. 创建 src/page/tabbar/index，return 组件内容
2. 导入routes 数组，使用map和Link 渲染导航列表
3. 同目录下定义hook处理逻辑，style.model.css定义样式
4. 在app中导入导航



## 四、屏幕自适应

1. 在项目根目录 css全局样式表中定义html 文档的font-size为vw
2. 根据UI比例，组件样式使用rem



## Coding Conventions



## 🔧
