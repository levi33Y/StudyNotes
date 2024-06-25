# 靜態方法



## 報錯

Static function can not consume context like dynamic theme. Please use 'App' component instead



`#`

1. 靜態方法如全局api，新建react元素導致app不能將concext傳遞
2. react框架的警告，不影響運行

`#`

 const {message} = App.useApp()與message.success()

hooks形式和全局message形式



App包裹組件的使用