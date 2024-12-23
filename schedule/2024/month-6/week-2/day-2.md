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

2024/9/10 UPDATE:
今日总结：

1. 对接报表中心接口，完成发送设置和发送记录回显逻辑。添加发送设置和发送记录接口方法和接口类型。修改发送设置和呼叫设置表单逻辑，antd useForm仅创建一个实例，通过name来约束。修改CheckboxCalendar组件，添加useEffect回显值。



明日计划：

1. 补充模版获取修改后激活保存逻辑，跟进发送设置和重新发送接口对接。



卡位：暂无
approved：https://github.com/sj-distributor/ReportCenter.Web/pull/20

报表中心 模版库：https://github.com/sj-distributor/ReportCenter.Web/pull/23

## 三、每周总结

1.



## 四、目录

1. 作用领域（组件）form实例创建

   ~~~ts
   //当 formdata为[]时
   {(fields, opt) => {
               !fields.length && opt.add();
   ~~~

   





1. /api/ReportCenter/templates接口的sendTarget和/api/ReportCenter/template/records的区别（用于/api/ReportCenter/template/file/send的target）
2. /api/ReportCenter/send/setting/addOrUpdate接口关于”每*个月的“字段。
3. 表单修改状体