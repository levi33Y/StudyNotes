# 学习笔记

2024/7/15



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

2024/7/23 UPDATE:
今日总结：

1. 学习项目轮询。学习ai文件识别检测功能中等每一条请求数据状态为成功或失败时停止的实现，在轮询方法中发起请求后，在finally用setTimeout调用请求，continueExecution保存轮询状态当请求成功或失败时置为null，如果为null直接return退出轮询。ea实时获取音色列表的实现：选择音色后将音色信息传至clickToneDto中，调用轮询方法，使用setInterval创建定时器获取音色的列表并保存定时器id至cycleloadRef中。当离开页面时将清除计时器并将cycleloadRef置为null，此外在定义定时器之前判断cycleloadRef来清除已经存在的定时器。
2. 处理ai检测货品质量pr comments。调整素材管理modal样式，补充导入文件校验逻辑，修改路由层级。学习radma库使用isNil和isEmpty，isNil接收空数组返回false，接受undefine返回ture。




明日计划：

1. 处理ai检测货品质量pr comments



卡位：暂无

ai检测货品后台路由菜单：https://github.com/sj-distributor/AiQualityCheck.Web/pull/22

## 三、每周总结

1. 



## 四、目录

## 