## 路由重定向

当输入的路由没有匹配时，希望进行重定向

### #

1. `/`根路径，空路由
2. `*`通配符，非贪婪
3. `/*`所有未匹配路由

### #

1. 重定向到404页面,首页和未匹配路由为`</>`

````tsx
<Route path="/" element={<Navigate to={"/grocery"} />} />
{pageList(routes)}
<Route path="/*" element={<Error />} />
````

2. 重定向到首页

首页为`<>`，未匹配路由指向`</Err>`

```tsx
<Route path="/*" element={<Navigate to={"/grocery"} />} />
{pageList(routes)}
```

使用导航元素 `<Navigate to="/" replace />` 

```tsx
<Route path="/" element={<Navigate to={"/grocery"} />} />
{pageList(routes)}
<Route path="*" element={<Navigate to="/" replace />} />
```

## 使用路由表集中管理路由

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
