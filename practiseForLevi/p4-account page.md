# 商品页面



## 一、业务组件

1. 创建src/page/grocery/index.tsx
2. 同目录下创建delivery、pickup组件，为业务模块其他页面
3. 同目录下创建components，为模块通用组件



## 二、路由重定向

页面从grocery离开时，保存delicery/pickup路由，当重新进入grocery时，重定向到保存的路由。



#### #

1. 创建src/hooks/route-status.ts 自定义hook，每次存储当前页面的路由
2. 将hook导出，并在route/index构造路由时，将hook包裹在每一个elment中，让其拥有重定向功能



## 三、页面组件缓存

当重新进入页面时，页面不会重新渲染而是保留离开时状态或位置



#### #

1. 安装react-router-dom，在index引入BrowserRouter并包裹整个`<APP/>`
2. 在route/index中，修改路由表数组，引入KeepAlive  使用KeepAlive包裹需要缓存的路由



## 四、接口对接

使用fetch 发起请求



#### #

1. 创建public/appsetting.json，配置服务器配置。
2. 创建.env，配置项目环境变量
3. 创建services/api/http-client.tsx，封装fetch请求
4. 同级目录下创建业务文件grocery/index.ts，封装模块的数据请求接口，services/dtos/grocery/index.ts, 定义请求类型接口。

   

   导出Get Post方法

   ~~~ts
   export async function Get<T>(url: string) {
     return base<T>(url, "get");
   }
   
   export async function Post<T>(url: string, data?: object) {
     return base<T>(url, "post", data);
   }
   ~~~

   

