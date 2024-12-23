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

2024/7/19 UPDATE:
今日总结：

1. 处理素材列表pr comments，调整列表分页逻辑，使用一个useDebounceEffect将所有分页条件添加进依赖，学会使用ahook的usePrevious，它能记录上一次状态，记录整个分页dto，然后通过用两个变量接收分页信息和搜索等控件的是否发生改变，当分页信息改变时触发数据获取，当搜索控件改变时将页码设为1，同时也要判断更新是页面前后都是为1，因为依赖为dto的属性值，此时就需要获取数据。依赖为分页dto全部属，不能直接监听整个dto对象,因为dto在每一次更新后都是一个新的对象。
2. 完成检查记录ui开发并发pr。使用react中的dangerouslySetInnerHTML属性能直接插入html，设置时要传入__html属性的对象，使用JSON.stringify对比日期数组是否为空，使用dayJs的IsBetween查日期是否两者之间，IsBetween时dayJs额外插件，需要手动import，然后手动挂在到导入的dayJs实例中。




明日计划：

1. 处理ai检测货品质量素材列表和检测记录pr comments



卡位：暂无

ai检测货品质量：

素材列表：https://github.com/sj-distributor/AiQualityCheck.Web/pull/12

检测记录：https://github.com/sj-distributor/AiQualityCheck.Web/pull/16

## 三、每周总结

1. 



## 四、目录

usePrevious

ant



### usePrevious

### ant

时间选择器 dayjs isbetweent