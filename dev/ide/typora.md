# Typora

![img](https://raw.githubusercontent.com/levi33Y/Pictures/main/format,png-20240528151514036.png)



![img](https://raw.githubusercontent.com/levi33Y/Pictures/main/format,png-20240528151441922.png)



## 表情#

输出表情需要借助 ：符号。

栗子：:smile 显示为 ?,记住是左右两边都要冒号。

使用者可以通过使用ESC键触发表情建议补全功能，也可在功能面板启用后自动触发此功能。同时，直接从菜单栏Edit -> Emoji & Symbols插入UTF8表情符号也是可以的。

或者使用下面的方法

访问网站 https://emojikeyboard.org/，找到需要的符号，鼠标左键单击，然后粘贴到需要的地方就行了！?



## 数学公式#

你可以通过使用MathJax来实现LaTeX的数学符号的表达。

输入$$，然后按下Enter键就会弹出一个支持TeX/LaTeX语法的输入框，下面是一个栗子：

 

V1×V2=∣∣ijk ∂X∂u∂Y∂u0 ∂X∂v∂Y∂v0 ∣∣V1×V2=|ijk ∂X∂u∂Y∂u0 ∂X∂v∂Y∂v0 |


在Markdown源文件中，数学的公式块是通过利用$$标记借用LaTeX语言来实现的：


Copy

$$ \mathbf{V}_1 \times \mathbf{V}_2 = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial X}{\partial u} & \frac{\partial Y}{\partial u} & 0 \\ \frac{\partial X}{\partial v} & \frac{\partial Y}{\partial v} & 0 \\ \end{vmatrix} $$


## HTML#

Typora不能使用HTML元素，但是Typora可以解析和编译非常有限的HTML元素，作为Markdown功能的补充，这些有限的功能包括：

下划线： <u>underline</u>
图片：<img src="http://www.w3.org/html/logo/img/mark-word-icon.png" width="200px" />（HTML标签中的width, height 以及属于样式的width, height, zoom样式可以被识别和应用。）
评论：<!-- This is some comments -->
超链接： <a href="http://typora.io" target="_blank">link</a> 。
大多数这些属性、样式或分类会被忽略。对其他的标签，Typora会将它们以HTML片段的形式表达。

## 行内嵌数学符号#

想要使用这个功能，需要在设置面板的 Markdown栏启用它。然后使用$来启动TeX命令，栗如：$\lim_{x \to \infty} \exp(-x) = 0$ 会以LaTeX的命令形式表达出来。

为了触发行内内嵌数学符号的实时编译你需要：输入$然后按下ESC键之后输入TeX命令，之后就会弹出一个如图所示的工具提示栏：

![img](https://raw.githubusercontent.com/levi33Y/Pictures/main/aHR0cHM6Ly9waWMzLnpoaW1nLmNvbS92Mi00MDMzNTA4YjA0M2NhZDk2YzU5ZWM0ZWRiY2E5MmYzNl9iLmdpZg.gif)

## 下标#

想要使用这个功能，需要在设置面板的 Markdown 栏启动它，之后使用~来修饰下标文本。栗如：

H~2~O 和X~long\ text~ 显示为 H~2~O 和X~long text~ 。



## 上标#

想要使用这个功能，需要在设置面板的 Markdown 栏启动它，之后使用^来修饰下标文本。栗如：

X^2^ 显示为 X^2^ 。


## 高亮#

想要使用这个功能，需要在设置面板的`Markdown` 栏启动它，之后使用`==`来修饰高亮文本，栗如：

`==highlight==` 显示为 ==highlight== 。



## 给代码块设置快捷键:#

偏好设置->打开高级设置->conf.user.json文件


Copy

"keyBinding": { // for example: // "Always on Top": "Ctrl+Shift+P" "Always on Top": "Ctrl+Shift+P", "Code Fences": "Ctrl+Shift+F", "Ordered List":"Ctrl+Alt+o", "Unordered List": "Ctrl+Alt+u" },

Code Fences 代码块

Ordered List 数字有序列表

Unordered List 无序列表
