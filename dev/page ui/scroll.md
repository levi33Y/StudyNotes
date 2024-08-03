# 滚动条



## 获取页面合适的滚动高度

遇到这样一个业务场景，如下图的页面，页面都不能移除，就是说table的高度随着页面缩放滚动条会出现。

ant的table有scroll属性，其中y控制高度，那我们在页面缩放的时候动态给y赋值就好了。

以下是用react中的ref和ahook的hook解决思路，

xxx

有可能有疑问为什么不直接使用documnet来操作，原因是你使用document直接操作dom，这似乎是违背react设计理念的，如下例子，使用document直接操组了父组件，违背了react单项数据流的设计理念

xxx

当你的dom里面存在你的自定义组件时，即使你给了子组件classname属性，但此时ref获取到的子组件是null，这里react也给出了解释，此时需要用forwref来解决

xxx

初次之外，你可以对页面自适应的元素进行调整了，只需要

xxx