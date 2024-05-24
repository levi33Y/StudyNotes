# 自定义Hook

 use开头的utlis

## 目录

- hook规范
- 自定义hook共享逻辑状态
- 面向特定场景或功能自定义hook
- 第三方React Hooks库

知识很多，续继续学习补充.....

## hook规范

1. 自定义hook
   - 组件顶层声明，为组件声明获取组件的状态的函数
   
   - 以use开头，命名为小驼峰
   
2. ReactHook

   - 组件内顶层使用

   - 不能嵌套在if等条件语句以及其他函数中



## 自定义hook共享逻辑状态

自定义hook，能够让状态自增+1

```tsx
export const useAction = (initialValue: any) => {
  const [count, setCount] = useState(initialValue);
  function increment() {
    setCount(count + 1);
  }
  return [count, increment];
};

```

Count1与Count2组件使用自定义hook

```tsx
import { useAction } from "./hook";

export const Grocery = () => {
  const [count1, increment1] = useAction(0);
  const [count2, increment2] = useAction(0);
  return (
    <div>
      <p>Count1: {count1}</p>
      <button onClick={increment1}>Increment1</button>
      <p>Count2: {count2}</p>
      <button onClick={increment2}>Increment2</button>
    </div>
  );
};
```

### `#`

1. Count1和Count2的逻辑都是自增加一，但两个组件的状态相互独立

### `#`



## 面向特定场景或功能自定义hook

### input双向绑定hook

hook.ts

```ts
export const useAction = (initialValue: any) => {
  let [value, setValue] = useState(initialValue);
  const onChange = (event: { currentTarget: { value: any } }) => {
    setValue(event.currentTarget.value);
  };

  return {
    value,
    onChange,
  };
};
```



tsx

```tsx
import { useAction } from "./hook";

export const Grocery = () => {
  const { value, onChange } = useAction("");

  return (
    <>
      <input {...{ value, onChange }} />
      <div>{value}</div>
    </>
  );
};
```

运行结果：

![image-20240430170211715](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240430170211715.png)

### `#`

1. input标签有vlaue 和onChange属性和方法

### `#`



## 第三方React Hooks库

> 链接：https://juejin.cn/post/7112256252868034591
>- [ahooks](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Falibaba%2Fhooks) 一套由阿里巴巴开源的 React Hooks 库，封装了大量好用的 Hooks。
>- [react-use](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fstreamich%2Freact-use) 一个必不可少的 React Hooks 集合。其包含了传感器、用户界面、动画效果、副作用、生命周期、状态这六大类的Hooks。
>- [useHooks](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fuidotdev%2Fusehooks) 一组易于理解的 React Hook集合。
>- [react-recipes](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fcraig1123%2Freact-recipes) 一个包含流行的自定义 Hook 的 React Hooks 实用程序库。
>- [Rhooks](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fimbhargav5%2Frooks) 一组基本的 React 自定义Hooks。
>- [react-hanger](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fkitze%2Freact-hanger) 一组有用的 hooks，用于特定于某些基本类型的状态更改辅助函数。
>- [Beautiful React Hook](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fantonioru%2Fbeautiful-react-hooks) 一组漂亮的（希望有用的）React hooks 来加速你的组件和 hooks 开发。
>- [Awesome React Hooks ](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Frehooks%2Fawesome-react-hooks)一个很棒的 React Hooks 资源集合，该集合包含React Hooks教程、视频、工具，Hooks列表。其中Hooks列表中包含了众多实用的自定义Hooks。
>- [SWR](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fvercel%2Fswr) 一个用于获取数据的 React Hooks 库。只需一个Hook，就可以显着简化项目中的数据获取逻辑。
>- [React Hook Form](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Freact-hook-form%2Freact-hook-form) 一个用于表单状态管理和验证的 React Hooks (Web + React Native)。
