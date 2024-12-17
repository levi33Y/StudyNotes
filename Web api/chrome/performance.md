# Local Metrics



## [LCP](https://web.developers.google.cn/articles/lcp?hl=zh-cn#what-elements-are-considered)

含义：用户能交互的时间

值：最后一个lcp元素渲染结束的时间戳

浏览器会将一下元素视为lcp元素：

- `<img>` 元素（[第一帧呈现时间](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/speed/metrics_changelog/2023_08_lcp.md)适用于 GIF 或动画 PNG 等动画内容）
- `<svg>` 元素内的 `<image>` 元素
- `<video>` 元素（使用海报图片加载时间或视频的[第一帧呈现时间](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/speed/metrics_changelog/2023_08_lcp.md)，以两者中较早达到者为准）
- 使用 [`url()`](https://developer.mozilla.org/docs/Web/CSS/url()) 函数加载背景图片的元素（而不是 [CSS 渐变](https://developer.mozilla.org/docs/Web/CSS/CSS_Images/Using_CSS_gradients)）
- 包含文本节点或其他内嵌级文本元素子级的[块级](https://developer.mozilla.org/docs/Web/HTML/Block-level_elements)元素。

　

demo：



## CLS

含义：用户可交互后，最大布局偏移分数爆发

值：不稳定元素移动视口移动距离百分比 * 影响比例（移动区域）

[案例](https://web.developers.google.cn/articles/cls?hl=zh-cn#distance-fraction)

![image-20241028162907009](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20241028162907009.png)



demo：

witness列表因为网络加载的原因，导致表格内容在http请求结束后渲染内容，导致原来屏幕（当前屏幕窗口）下的**Claim Information**（不稳定元素）发生位移。

![cls](https://raw.githubusercontent.com/levi33Y/Pictures/main/cls.gif)

![image-20241028155830383](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20241028155830383.png)





## INP‼️

含义：衡量*下一次*绘制被阻塞的时间

值：主线程阻塞时间，在下一次操作， 宏更新任务所需要的时间



demo：

首先点击了show然后点击Other，因为show是长任务，所以阻塞了Other的更新任务，可以看出最后INP的计算也是在点击Other上面计算的。

![inp](https://raw.githubusercontent.com/levi33Y/Pictures/main/inp.gif)

![image-20241029104044529](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20241029104044529.png)