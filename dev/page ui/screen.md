# 屏幕



## rc-resize-observer

RC-Resize-Observer 是一款基于 React 的组件，专门用于监测和响应 DOM 元素的尺寸变化。



## ahook useEventListener

优雅的使用 addEventListener。



## 自定义高度自适应hook

给出在排除高度上唯一的id/class的适应windows.innerHegiht/body的高度



**基础用法**

获取table的自适应高度

![image-20240809142752106](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240809142752106.png)

~~~ts
// 部分代码，为了展示dom结构
<div
  className="px-backStageContentX flex flex-col box-border"
>
  <div className="header h-[5rem] box-border flex items-center justify-between">
    <div>
      <Input className="w-[20.5rem] mr-5" />
      <Select className="w-[10.5rem] mr-5"/>
      <DatePicker.RangePicker showTime format="YYYY/MM/DD HH:mm:ss" />
    </div>
  </div>
  <div className="flex-1 flex flex-col justify-between">
    <Table
      className="snap-none"
      scroll={{ y: 500 }}
      pagination={false}
    />
    <Pagination
      className="h-pagination flex items-center"
      align="end"
      showTotal={(total) => `共 ${total} 條`}
    />
  </div>
</div>
~~~

实现table高度自适应，最终效果如下：

![123](https://raw.githubusercontent.com/levi33Y/Pictures/main/123.gif)

使用步骤：

首先要传入你的最外层dom，以至于获取你当前页面的dom。为了遵守react得设计规范，使用ref获取dom结构

```tsx
<div
  ref={historicalRef}
  className="px-backStageContentX flex flex-col box-border"
>
```



然后根据自己的需求，如上示例我想减去搜索框，分页器的高度，表格的头部来获取我表格的自适应高度是多少

```ts
const { contentHeight } = useScreen(historicalRef, [
  "header",
  "ant-table-thead",
  "ant-pagination",
]);
```



最后把计算的高度赋予给我的表格

```tsx
<Table
  className="snap-none"
  scroll={{ y: 500 }}
  pagination={false}
  scroll={{ y: contentHeight }}
/>
```



额外补充示例中的代码，如导航和面包屑，此处我解决办法用硬代码减去他们的高度，因为涉及这种主题组件或变量一般都有明确的固定高度。

```ts
const { contentHeight, screenFontSize, fontSize} = useScreen(historicalRef, [
  "header",
  "ant-table-thead",
  "ant-pagination",
]);

// 个人习惯使用rem，乘screenFontSize代表是当前页面的一些主题变量，乘fontSize表示一些公共的如上面面包屑等主题变量高度
const homeContentHeight =
  contentHeight - xxx * screenFontSize - xxx * fontSize;
```



hook源码：

~~~ts
import { useEventListener, useMemoizedFn } from "ahooks";
import { subtract } from "ramda";
import { MutableRefObject, useEffect, useState } from "react";

export const useScreen = (
  screenRef: MutableRefObject<HTMLElement | null>,
  ids: string[] = []
) => {
  // 浏览器font-size
  const [fontSize, setFontSize] = useState<number>(16);

  // 当前页面font-size
  const [screenFontSize, setScreenFontSize] = useState<number>(16);

  const [contentHeight, setContentHeight] = useState<number>(0);

  // 计算高度，传入的id/class选择器确保是在y坐标下的唯一dom
  const getHomeScrollHeight = useMemoizedFn(() => {
    const screen = subtract(window.innerHeight);

    const sum = ids.reduce(
      (accumulator, item) =>
        accumulator +
        ((screenRef?.current?.querySelector(`#${item}`) as HTMLDivElement)
          ?.offsetHeight ||
          (screenRef?.current?.querySelector(`.${item}`) as HTMLDivElement)
            ?.offsetHeight ||
          0),
      0
    );

    setContentHeight(screen(sum) > 0 ? screen(sum) : 0);
  });

  const watch = () => {
    setFontSize(() =>
      parseInt(
        window.getComputedStyle(document.documentElement)?.fontSize || "16"
      )
    );

    setScreenFontSize(() =>
      parseInt(
        screenRef.current
          ? window.getComputedStyle(screenRef?.current)?.fontSize
          : "16"
      )
    );

    getHomeScrollHeight();
  };

  useEventListener("resize", () => {
    watch();
  });

  useEffect(() => {
    watch();
  }, []);

  return {
    fontSize,
    screenFontSize,
    contentHeight,
  };
};

~~~

