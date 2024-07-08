# 学习笔记

2024/6/25



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

2024/7/2 UPDATE:
今日总结：

1. 
1. 对接busybee接口。期间解构axios返回的数据，发现即使定义了接口约束类型也出现属性不存在，原因是返回axios 等请求方法三个泛型T R D，R类型使用AxiosResponse包装T，而AxiosResponse定义了data为T，所以解决办法根据解构返回接口可以直接<any,定义类型>或者<自定义类型>返回data属性。
1. 在使用ant table expandedRowRender实现嵌套子列表时，出现嵌套子列表渲染两次情况，原因是dataIndex对应列路径，内置ColumnGroupType接口可以看出 当数据结构存在"children"属性数组时，table就会开启嵌套，数据结构不变使用record实现嵌套子列表时，解决办法是修改"children"属性名。




明日计划：

1. 跟进ai识别文件 cicd
1. 跟进busybee 分配任务需求



卡位：暂无





## 三、每周总结





## 四、目录

AxiosRespone interface



## AxiosRespone interface

get/...

~~~ts
 get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
~~~

AxiosResponse

~~~ts
export interface AxiosResponse<T = any, D = any>  {
  data: T;
  status: number;
  statusText: string;
  headers: AxiosResponseHeaders;
  config: AxiosRequestConfig<D>;
  request?: any;
}
~~~



~~~ts
export const GetRequirementServiceItemDetail = async (id: string) => {
  const response = await api.get<IGetRequirementServiceItemDetailResponse>(
    `/requirement/${id}/service-item/detail`
  );

  return response.data;
};
~~~



~~~ts
    const { serviceItemList }:IGetRequirementServiceItemDetailResponse = await GetRequirementServiceItemDetail(
      requirementId
    );
~~~



table 嵌套表格，dataIndex 下ColumnGroupType识别的是固定的数据格式 table children