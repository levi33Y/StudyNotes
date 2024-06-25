# flexbox

>Flexible Box 模型，通常被称为 flexbox，是一种一维的布局模型。它给 flexbox 的子元素之间提供了强大的空间分布和对齐能力。

一维布局、操作空间分布和对齐。



## 组成

1. **主轴与交叉轴**

2. **起始线和终止线**

3. **Flex容器**

>文档中采用了 flexbox 的区域就叫做 flex 容器。为了创建 flex 容器，我们把一个容器的 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 属性值改为 `flex` 或者 `inline-flex`。完成这一步之后，容器中的直系子元素就会变为 **flex 元素**。由于所有 CSS 属性都会有一个初始值，所以 flex 容器中的所有 flex 元素都会有下列行为：
>
>- 元素排列为一行（`flex-direction` 属性的初始值是 `row`）。
>- 元素从主轴的起始线开始。
>- 元素不会在主维度方向拉伸，但是可以缩小。
>- 元素被拉伸来填充交叉轴大小。
>- [`flex-basis`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis) 属性为 `auto`。
>- [`flex-wrap`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap) 属性为 `nowrap`。
>
>这会让你的元素呈线形排列，并且把自己的大小作为主轴上的大小。如果有太多元素超出容器，它们会溢出而不会换行。如果一些元素比其他元素高，那么元素会沿交叉轴被拉伸来填满它的大小。

4. **对齐与空间分配**

align-item与justify-content

5. **flex元素（flexbox 下的直系元素）的属性**

>
>
>- `flex-grow`：该元素获得（伸张）多少正可用空间（positive free space）？
>- `flex-shrink`：该元素要消除（收缩）多少负可用空间（negative free space）？
>- `flex-basis`：在该元素未伸张和收缩之前，它的大小是多少？

6. **正负可用空间**

## flex-basis

分配发生之前初始化弹性元素的尺寸。

**默认行为：**

无设置-> auto -> width value ? Px : max-content

auto-> width value ? Px : max-content

width value -> width value

**习题：**

flex 1 1 0

所有元素的basis都为min-content

**抢占：**



## flex-grow

增长因子，在正分配空间中，相对于其他flex元素的增长程度

**默认行为：**none

**习题：**

1. flex：1 1 auto

每个元素的basic都为max-content，在分配占用空间时，每个元素的分配额度都一样，但最终可能长度不一样。

![image-20240521191210174](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240521191210174.png)

![image-20240521191223126](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240521191223126.png)

2. flex: 1 1 0

每个元素的basic都为min-content，所有空间都用与抢占，每个元素一样长度一样的可能性最大，但是由于min-content，因此不一定等长

```shell
<div class="box">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three Three Three Three</div>
</div>

...

.box {
  display: flex;
}
.one {
  flex: 1 1 0;
}
.two {
  flex: 1 1 0;
}
.three {
  flex: 1 1 0;
}
```

运行结果:

![image-20240521192420745](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240521192420745.png)

将`<div class="three">Three</div>`改为``Three ThreeOhhhhhhhh！`时,运行结果:

![image-20240521192529279](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240521192529279.png)





3. 不同的grow值

```css
flex: 1 0 auto //a
flex: 1 0 auto //b
flex: 2 0 auto //c
```

三个元素的分配情况为

a:  x * 1 / (1+1+2)

b: x * 1 / (1+1+2)

c: x * 2 / (1+1+2)

**习题：**

## flex-shrink

>负值是不被允许的
>
>只要 `flex-shrink` 有正值，元素就会收缩以至于它们不会溢出容器。

收缩因子，在负分配空间中，相对于其他flex元素的收缩程度

**默认行为**：none

**习题：**

1. 0: 元素不允许收缩，即使溢出盒子

2. 1: 等比收缩

**抢占：**

```css
<div class="box">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
</div>
```

1. 正分配空间下，flex-shrink不生效

~~~css
.box {
  width: 600px;
  display: flex;
}
.one {
  flex: 2 1 100px;
}
.two {
  flex: 2 1 100px;
}
.three {
  flex: 2 1 100px;
}
~~~

one: basic为 100px，

two:basic为 100px，

three：basic为100px，

容量NT = 600 - 100 -100 -100 = 300, 正分配空间

one的宽度：

two的宽度：

three的宽度：



2. 

~~~css
.box {
  width: 200px;
  display: flex;
}
.one {
  flex: 1 1 150px;
}
.two {
  flex: 1 2 100px;
}
.three {
  flex: 1 3 50px;
}
~~~

容量：｜150+100+50  - 200｜ = 100 负空间

加权总和：（150 * 1 + 100 * 2  + 50 * 3） *  1/100 = 5

one的高度：150 - 150 * 1/5 ～ 120

two的高度：100 - 100 * 2/5 ～ 60

three的高度：50 - 50 * 3/5 ～ 20

运行效果：

可以看出three并不等于20，因为min-content

继续分配42.41-20

A: basic : 120 sherik 1 加权比例 120 * 1 / (120*1 + 60 * 2)

B: basic : 60 shrik 2







3. padding等对basic的影响

```
.box {
  width: 300px;
  display: flex;
}
.one {
  flex: 1 1 150px;
}

.two {
  flex: 1 2 100px;
}

.three {
  flex: 1 3 50px;
}
```



4. 

~~~css
.box {
  width: 400px;
  display: flex;
}
.one {
  flex: 1 1 150px;
}
.two {
  flex: 1 2 100px;
}
.three {
  flex: 1 3 50px;
}
~~~





## 有多少东西参与影响flex布局

### min-content 与 max-content 关键字

>
>
>在 CSS 中还有 [`min-content`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/min-content) 和 [`max-content`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/max-content) 这两个概念；这两个关键字可以用来代替[长度单位](https://developer.mozilla.org/zh-CN/docs/Web/CSS/length)。

width

padding等

基本的属性



## 参考：

https://www.cnblogs.com/liyan-web/p/11217330.html

https://segmentfault.com/a/1190000039964970

[离不开钱的flex](https://juejin.cn/post/7339042131467747368?utm_source=gold_browser_extension#heading-0)

[flex 元素上的属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox#flex_元素上的属性)

[flex-shrink 属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#flex-shrink_属性)

[flex shrink factor](https://drafts.csswg.org/css-flexbox/#flex-flex-shrink-factor)

