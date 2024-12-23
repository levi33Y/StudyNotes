# 学习笔记

2024/7/15



## Todo

1. [✅] xxx
2. [❌] xxx
3. [❓] xxx



## Yesterday

1. 




## Today

1. ai报表中心 新增模版ui调整
2. ai检测货品



## 一、掘





## 二、每日总结

2024/7/17 UPDATE:
今日总结：

1. 完成ai检测货品质量 导入ui，使用useDebounceEffect优化了素材列表和批次列表的条件查询。对form表单自定义校验规则vaildator使用pop操作value，pop会修改数组的值，导致表单值被修改了，改用slice返回新的数组。过程中遇到了上传文件时第一个上传的文件没有成功地发起请求上传，在调试时控制台也没有接收到异常。原因是upload的beforeUpload回调函数里面捕获了异常直接停止上传了，浏览器捕获不到异常，最后在逻辑里面trycatch调试找到是因为表单初始化时字段为undefine，访问了不存在的属性的错误，调整逻辑使用?.让逻辑返回undefined不要向beforeUpload抛出异常继续上传。




明日计划：

1. 开发ai检测货品质量开发批次详情列表ui



卡位：暂无



## 三、每周总结

1. 跟进ai识别文件开发
2. 继续开发ai检测货品素材列表ui，处理数据来源uipr
3. 学习ant ，upload开发文件上传
4. 学习react语法知识



## 四、目录

uload



### upload

vaildator 返回的value為表單值引用，注意不要直接改變value



beforeUpload 捕获异常，使控制台并没有提示且代码继续运行

