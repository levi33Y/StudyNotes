# useState

组件依赖状态

## **在组件顶层调用useState来声明组件的状态**

### #

- 第一个参数age是状态值。
- 第二个参数setAge是更新状态值方法。
- useState接受任意值28作为第一个参数age初始值。

### #

```
const [age, setAge] = useState(28);
```

## 在一次调用中连续更新state

### #

- set函数仅更新 \*下一次\* 渲染的状态变量
- react重新渲染：state的更新不等于原来的值，并在事件处理函数运行 并调用其 `set` 函数后

### # 

使用更新函数，连续更新state

```tsx
setAge(a => a + 1); // setAge(42 => 43)
setAge(a => a + 1); // setAge(43 => 44)
setAge(a => a + 1); // setAge(44 => 45)
```

## useState参数

useState接受任意类型的参数

### #todolist代码

```tsx
import { useState } from "react";

function createInitialTodos() {
  setTimeout(() => {
    console.log("upload");
  }, 1000);
  return [{ id: Math.floor(Math.random() * 1000), text: "test" }];
}

export const Grocery = () => {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState("");

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          setText("");
          setTodos([
            {
              id: todos.length,
              text: text,
            },
            ...todos,
          ]);
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
};

```



### #

当使用`useState(createInitialTodos`时，每次控制台只会输出一次`console.log('upload');`只会调用一次

当使用`useState(createInitialTodos()`每次提交时控制台都将运行console，严格模式下将调用两次

## 储存上次的状态

计数器代码

```tsx
import { useState } from "react";

function CountLabel({ count }: { count: number }) {
  return (
    <>
      <h1>{count}</h1>
    </>
  );
}

export const Grocery = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <CountLabel count={count} />
    </>
  );
};

```



#

添加 `prevCount` 状态变量来跟踪它，再添加另一个状态变量 `trend` 来表示状态信息。

```tsx
  const [prevCount, setPrevCount] = useState(count);
  const [trend, setTrend] = useState("");
```



比较 `prevCount` 和 `count`，如果它们不相等，则更新 `prevCount` 和 `trend`

```tsx
  if (prevCount !== count) {
    setPrevCount(count);
    setTrend(count > prevCount ? "递增" : "递减");
  }
```

完整代码

```tsx
import { useState } from "react";

function CountLabel({ count }: { count: number }) {
  const [prevCount, setPrevCount] = useState(count);
  const [trend, setTrend] = useState("");
  if (prevCount !== count) {
    setPrevCount(count);
    setTrend(count > prevCount ? "递增" : "递减");
  }
  return (
    <>
      <h1>{count}</h1>
      {trend && <p>正在 {trend}</p>}
    </>
  );
}

export const Grocery = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <CountLabel count={count} />
    </>
  );
};

```

#

