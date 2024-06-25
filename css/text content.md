# 文本内容样式

## 豎直排列

~~~html
<!-- 以下字符均為中文-->
<div>
  黃河之水天上来！
</div>

<!-- 以下字符均為英文-->
<div>
  Thou ignored the spray of Yellow River that scuttled down the sky, and forever it escaped from sight!
</div>
~~~

### `#`

1. writing-mode屬性
2. direction
3. 文本基線vertical-align
4. 中文設置和英文設置

### `#`

~~~css
div {
	writing-mode: vertical-lr;
}
~~~

## 文本省略

~~~html
  <div class="wrap">
    <span class="txt">
        这个世界还有很多你不懂的东西，比如你不明白那些东西就是你不懂的 -《懂？》2050-22-33
    </span>
  </div>
~~~

## `#`

1. min-content 与 max-content 代替 w、w、o三件套
1. white-space
1. overflow
1. text-overflow

## `#`

**设置文本不换行超出用”...“显示**

文本一行显示

隐藏超出的部分

替代超出的部分

~~~css
.txt {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
~~~



**设置鼠标停悬文本上方可以显示全部内容**

使用title属性

~~~html
<span
  class="txt"
  title="这个世界还有很多你不懂的东西，比如你不明白那些东西就是你不懂的 -《懂？》2050-22-33"
>
  这个世界还有很多你不懂的东西，比如你不明白那些东西就是你不懂的 -《懂？》2050-22-33
</span>
~~~



**设置文本不换行超出用“...更多”显示**

首先我们添加dom元素

~~~html
<span
  class="txt"
  title="这个世界还有很多你不懂的东西，比如你不明白那些东西就是你不懂的 -《懂？》2050-22-33"
>
  这个世界还有很多你不懂的东西，比如你不明白那些东西就是你不懂的 -《懂？》2050-22-33
</span>
<span class="algin">更多...</span>
~~~

我们尝试把自定义的溢出样式与目标同为一行,为了algin定位准确，我们给wrap设置高度，txt不换行。使用float将algin移动。

```css
  .wrap {
    height: 2rem;
    overflow: hidden;
    line-height: 2;
  }
  .txt {
    display: block;
    white-space: nowrap;
  }
  .algin {
    display: block;
    float: right;
    white-space: nowrap;
    position: relative;
    top: -2rem;
  }
```

运行结果：

![](https://raw.githubusercontent.com/levi33Y/Pictures/main/291891492291771432024-05-27-13-38-34.gif)

可以看得出来隐藏样式并没有很好的覆盖着内容，而且当宽度大于段落时隐藏样式并没有消失。尝试给txt padding-right发现没有效果，因为white-space: nowrap让txt强制不换行，即使设置了外边距内容还是溢出的，因此可以给txt设置max-height和利用父元素的属性来做隐藏内容，此时algin的定位应该增加max-height的宽度。

```css
  .wrap {
    height: 2rem;
    overflow: hidden;
    line-height: 2;
  }
  .txt {
    display: block;
    /*max-height使txt超出时换行但限制高度*/
    max-height: 4rem;
    padding-right: 3rem;
  }
  .algin {
    display: block;
    float: right;
    white-space: nowrap;
    position: relative;
    /*增加max-heiht/2*/
    top: -4rem;
  }
```



![](https://raw.githubusercontent.com/levi33Y/Pictures/main/291891492291771432024-05-28-15-05-00.gif)

可以发现现在溢出样式可以隐藏了，是因为top位移增加了2rem，当宽度大于txt时，algin就会在txt上方，而wrap设置了溢出隐藏，所以algin就隐藏了。

![image-20240528152232471](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240528152232471.png)

**省略中间部分**

此时溢出样式根据内容的变化而动态设置，比如省略号...自始至终都处于你段落的中间。

