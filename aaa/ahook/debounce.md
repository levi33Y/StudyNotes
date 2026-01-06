# 防抖



##  useDebounce

处理一个值



## useDebounceFn

处理一个函数





## useDebounceEffect

为useEffect添加防抖



```ts
useDebounceEffect(
  effect: EffectCallback, //回调 通useEffect
  deps?: DependencyList, //依赖 同useEffect
  options?: Options // 防抖
);
```



### ##为列表查询添加防抖

在对列表查询时，不是给条件添加防抖，而是将整个请求包在useDebounceEffect中，然后条件作为依赖项目