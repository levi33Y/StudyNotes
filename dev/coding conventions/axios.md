# 请求



每个都应该对axios（或者你在用其他的http模块或三方插件），都应该对你的请求模块进行封装（把每一次烦人的请求路径等格式在你的业务组件中移除，仅仅使用一个函数就能获取数据，这种感觉真好）



而对于暴露出去的方法，命名也要直观 XxxYyyApi

~~~ts
export const GetUserListApi = async (data: IGetUserListRequireProps) => {
  const response = await api.get<IGetUserListResponseProps>(
    "/api/xxx/xxx/xxx",
    { params: data }
  );

  return response.data;
};
~~~

