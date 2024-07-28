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

1. 分析检测货品自动检测需求，上传图片有数量限制，上传后模版分析成功自动选择该模版下一步为检测货品，否则手动选择检测模版检测货品。
2. 完成后台路由菜单开发并发pr。完成页面的自适应，在tailwind.config.js配置主题变量定义页面菜单和所有页面公共的高度。定义useScreen自定义hook获取指定高度来适应列表和编辑页表单高度，每个页面将dom信息存到ref中调用hook，hook中访问current通过querySelector选择指定的类对应的选择器高度，使用window.innerHeight减去指定的元素高度和主题高度得到滚动区域高度，学习useEventListener ahook，使用useEventListener监听window resize更新高度完成高度的自适应。




明日计划：

1. 处理ai检测货品质量pr comments



卡位：暂无

ai检测货品后台路由菜单：https://github.com/sj-distributor/AiQualityCheck.Web/pull/22

## 三、每周总结

1. 



## 四、目录

scorll



## scorll

useSize ref useEffect



## 监听变化 计算过程缓慢