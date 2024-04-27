# useMemo

渲染时计算，缓存计算结果

## 缓存

点击按钮`+1`计算斐波那契数列,优化功能,避免多余的算式计算

```tsx
import { useState } from "react";

const fib = (n: number): number => {
  return n < 3 ? 1 : fib(n - 2) + fib(n - 1);
};

export const Grocery = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const result = fib(a);

  return (
    <div>
      <button onClick={() => setA(a + 1)}>+1</button>
      <button onClick={() => setB(b + 1)}>更改其余业务state</button>
      <div>斐波那契运算结果：{result}</div>
    </div>
  );
};
```

### `#`

1. calculateValue是一个没有参数的函数，dependencies表示依赖数组，当依赖发生变化时，就会执行calculateValue函数。调用函数并缓存结果

2. useState声明的state只要发生变化，就会引起整个组件的重新渲染

3. 函数顶层声明的变量和函数，重新渲染时会重新声明，等于赋予了一个新值

4. 当执行setA(a+1)时，才进行算式运算，但当进行了其他业务时，算式也运行了，这显然是不合理的

   ![image-20240427065241454](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240427065241454.png)

2. 当算式开销过于庞大时，多余的调用资源显然会造成浪费

   ![image-20240427070044840](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240427070044840.png)

3. 与useEffect不同的是，useEffect始终返回undefined

### `#`

1. 使用useMemo将计算结果缓存起来

   ```tsx
     const result = useMemo(() => {
       console.log("计算中...");
       return fib(a);
     }, [a]);
   ```

2. 使用useEffect实现

   ```tsx
   const [result, setResult] = useState(0);
     useEffect(() => {
       console.log("计算中...");
       setResult(fib(a));
     }, [a]);
   ```

## 组件跳过渲染 

>
>
>`TodoList` 组件将 `visibleTodos` 作为 props 传递给子 `List` 组件：
>
>```tsx
>export const TodoList = ({ todos, tab, theme }) => {
>
>  // ...
>
>  return (
>    <div className={theme}>
>      <List items={visibleTodos} />
>    </div>
>  );
>}
>```

### `#`

1. >**默认情况下，当一个组件重新渲染时，React 会递归地重新渲染它的所有子组件**。

2. 组件的 **State** 是其私有数据，而 **Props** 是它从父组件接收的数据。当 State 或 Props 发生变化时，React 会重新渲染该组件，使其反映这些变化。

3. React.memo缓存组件，允许组件props没有改变情况下不重新渲染

4. props的diff关键是使用Object.is()方法,对于基本数据类型，object.is比较的是数值，对于对象和数组，比较的是引用，props只关系引用是否不同。

   ```
   // false
   Object.is([],[])
   ```

### `#`

1. 使用React.memo跳过渲染

   ```tsx
   const Child = memo(({ arg }: { arg: any }) => {
     console.log("Child render");
     return <div>Child</div>;
   });
   
   // ...
   
   <Child/>
   ```

   

2. 使用useMemo + React.memo让子组件永远不重新渲染，即使props是引用数据对象

   ```tsx
   const Child = memo(({ data }: { data: any }) => {
     console.log("Child render");
     return <div>Child</div>;
   });
   
   //...
   
   const propData = useMemo(()=>{
   	const arr = []
   	return {data:arr}
   },[])
   
   <Child {...propData}/>
   ```

   

