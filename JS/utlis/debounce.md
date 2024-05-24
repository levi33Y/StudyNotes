# 防抖



## 使用遞歸



```js
const debounce = (fn: any, delay: number) => {
  let time: any = null;

  return function () {
    if (time !== null) {
      clearTimeout(time);
    }
    time = setTimeout(() => {
      // @ts-ignore
      fn.apply(this, arguments);
    }, delay);
  };
};
```