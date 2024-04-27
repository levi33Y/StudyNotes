# useCallback

渲染时计算，返回计算函数



## useMemo有必要返回函数来代替useCallback吗

1. 从useCallback[源码](https://github.com/facebook/react/blob/cae635054e17a6f107a39d328649137b83f25972/packages/react-dom/src/server/ReactPartialRendererHooks.js#L446)可以看出，useCallback就是用useMemo返回一个callback，因此useMemo没必要自己写成别人封装好的语法糖。

>```tsx
>// 446-451行
>export function useCallback<T>(
>  callback: T,
>  deps: Array<mixed> | void | null,
>): T {
>  return useMemo(() => callback, deps);
>}
>```
>
>`useCallback` 的唯一好处是它可以让你避免在内部编写额外的嵌套函数。它没有做任何其他事情。

### `#`

### `#`

## 子传父对callback进行缓存

demo：

```tsx
const Child = ({
  updateState,
}: {
  updateState: (data: { id: string; name: string }) => void;
}) => {
  console.log(123);

  return (
    <div>
      <button onClick={() => updateState({ id: "102", name: "李四" })}>
        更新
      </button>
    </div>
  );
};

export const Grocery = () => {
  const [id, setId] = useState("101");
  const [name, setName] = useState("张三");

  const updateState = ({ id, name }: { id: string; name: string }) => {
    setId(id);
    setName(name);
  };

  return (
    <div>
      <div>Mr.{name}:</div>
      id：{id}，name：{name}
      <Child updateState={updateState} />
    </div>
  );
};
```

1. 当点击更新时，因为props是一个函数，父组件state的改变，Child会重新渲染显然很不合理

### `#`

### `#`

1. 使用useCallback缓存函数

   ```tsx
     const updateState = useCallback(
       ({ id, name }: { id: string; name: string }) => {
         setId(id);
         setName(name);
       },
       []
     );
   ```

   

2. 因为函数为引用类型，要使用memo包装组件

   ```tsx
   const Child = memo(
     ({
       updateState,
     }: {
       updateState: (data: { id: string; name: string }) => void;
     }) => {
       console.log(123);
   
       return (
         <div>
           <button onClick={() => updateState({ id: "102", name: "李四" })}>
             更新
           </button>
         </div>
       );
     }
   );
   ```

   
