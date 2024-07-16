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



2024/7/3 UPDATE:
今日总结：

1. 完成分配任务需求并发pr。分析分配任务需求，对接后端接口处理数据结构。在处理服务人员下拉选项间的父子关联、默认文案逻辑时，发现第二次变更表格内下拉选项时会出现人员统一但仍然是默认方案等问题，原因是onValuesChange触发时间在下拉表单控件onChange方法之前，导致逻辑是以除当前控件以未更新的其他值进行，解决办法是将onValuesChange的逻辑方法房在下拉表单控件onChange方法里。嵌套表单defaultExpandAllRows无效，原因是defaultExpandAllRows机制是table初次渲染而不是data的更新，解决办法是将table组件条件渲染。在dataSource数据结构不存在key属性时，此时table的column key 值为undefine,要制定rowKey以免抛出unique "key" warning。




明日计划：

1. 处理busybee 分配任务pr
1. 跟进ai识别文件 cicd



卡位：暂无

busybee分配任务 pr https://github.com/sj-distributor/BusyBee4User.Web/pull/742



## 三、每周总结





## 四、目录

