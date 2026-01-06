# RNN CNN

## 循环神经网络（RNN）

## 卷积神经网络（CNN）

### 卷积(Convolutions)

通过将两个函数结合成新的函数，反应两者之间的相互关系

卷积运算的数学定义分为连续和离散两种情况：**连续卷积**、**离散卷积**

## 神经元 M-P模型

权重、激活公式（阶跃函数、Sigmoid）

### ![img](https://i-blog.csdnimg.cn/blog_migrate/a571d0c8bb308d19744d19f99a1a6603.png)

> 在这个模型中，神经元接收到来自 m 个其他神经元传递过来的输入信号，这些输入信号通过带权重（weights）的连接进行传递，神经元接收到的总输入值将与神经元的阈值进行比较，然后通过"激活函数" (activation function) 处理以产生神经元的输出。神经元在信号之和超过阈值时点火，不超过阈值时不点火。
>
> 所以点火的函数（激活函数）可以表示为：![y = \varphi (w_1x_1 + w_ 2x_1 + w_3x_3+ ... + w_mx_m - b)](https://raw.githubusercontent.com/levi33Y/Pictures/main/5bd4508a0737885cd6e2cf3bc3aa5ffe.gif)
>
> 阶跃函数：它将输入值映射为输出值 "0" 或 "1"
>
> Sigmoid：输出值值映射至[0,1]间
