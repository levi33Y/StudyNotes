# 学习笔记

2024/9/9

## Todo

1. [✅] xxx
2. [❌] xxx
3. [❓] xxx

## Yesterday

1.

## Today

1. [❓] py
2. [❓] llm
3. [❓] agent content
4. [❓] planka

## 一、掘

## 二、每日总结

2024/9/12 UPDATE:
今日总结：

1. 继续对接报表中心接口。处理使用变量访问对象的

明日计划：

1. 跟进发送设置接口对接。



卡位：暂无

报表中心 模版库：https://github.com/sj-distributor/ReportCenter.Web/pull/23

## 三、每周总结

1. 



## 四、目录

1. 对象索引





## 对象索引

报错：Element implicitly has an any type because expression of type string can't be used to index type



有特定类型的interface，field为string不能作为索引对象

~~~ts
//interface ITemplateFetchFormFieldsProps

const isFieldEmpty = (fields: string[], values: ITemplateFetchFormFieldsProps) =>
      fields.some((field) => ["", void 0, null].includes(values[field]));
~~~



直接断言

```typescript
as keyof typeof [object]
```

接口使用索引签名

```typescript
[key: string]: [type];
```