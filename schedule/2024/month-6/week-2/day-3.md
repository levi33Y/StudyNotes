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

2024/9/11 UPDATE:
今日总结：

1. 对接报表中心接口。完成模版获取监听表单修改状态逻辑，完成发送记录接口对接。定义onFieldsChange方法，使用JSON.stringify比较所有引用类型值，dayjs类型值使用format保留指定格式的值。Form中，必填校验时机改为onValuesChange，监听修改时间为onFieldsChange



明日计划：

1. 跟进发送设置接口对接。



卡位：暂无

报表中心 模版库：https://github.com/sj-distributor/ReportCenter.Web/pull/23

## 三、每周总结

1.



## 四、目录

1. 利用数组以及对象解构实现set

   ```ts
   // value: boolen[] 
   const triggerChange = ({ changedValue }: { changedValue: boolean[] }) => {
       onChange?.([ ...value, ...changedValue ]);
     };
   
   ```

2. http 500 跨域， localhost 反向代理。浏览器资源
