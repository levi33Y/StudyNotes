# useAntdTable



封装 ant table



### ##管理分页状态

整个分页信息以及dom使用useAntdTable返回值管理



将回调传给useAntdTable

~~~ts
const getTableData = ({ current, pageSize }): Promise<Result> => {
  const query = `page=${current}&size=${pageSize}`;

  return fetch(`https://randomuser.me/api?results=55&${query}`)
    .then((res) => res.json())
    .then((res) => ({
      total: res.info.results,
      list: res.results,
    }));
};
~~~





## ##管理搜索条件



