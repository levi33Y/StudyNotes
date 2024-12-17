# Transition

过渡任务



## 什么是过渡任务

在react中，状态更新分为两类

- 第一类紧急更新任务。比如一些用户交互行为，按键，点击，输入等。
- 第二类就是过渡更新任务。比如 UI 从一个视图过渡到另外一个视图。

在渲染并发场景下（concurrent Mode），过渡更新任务会被降级更新优先级，中断更新。



## 过渡期

 在过渡期期间过渡更新任务是中断的，useTransition自带的isPending能够用户什么时候过渡任务处于 `pending` 状态，什么时候 `pending` 状态完毕



## startTransition中断任务

startTransition会把scope内的更新任务设置为过渡任务

![9.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a6cddf1d2a3541e88fa6998da9201e64~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp)

过渡任务通过事件优先级编译为react lane优先级，且过渡任务在scheduler中会进行时间切片，fiber架构支持渲染的中断和恢复



## [startTransition](https://zh-hans.react.dev/reference/react/startTransition)

> `startTransition` 可以让你在不阻塞 UI 的情况下更新 state。
>
> ~~~ts
> import { startTransition } from 'react';
> ~~~



## useTransition

>`useTransition` 是一个帮助你在不阻塞 UI 的情况下更新状态的 React Hook。
>
>~~~ts
>const [isPending, startTransition] = useTransition()
>~~~



## useDeferredValue

>`useDeferredValue` 是一个 React Hook，可以让你延迟更新 UI 的某些部分。
>
>~~~ts
>const deferredValue = useDeferredValue(value)
>~~~

