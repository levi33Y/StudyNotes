# 狀態保存



## 背景

>Vue keep Alive
>
>默认情况下，一个组件实例在被替换掉后会被销毁。这会导致它丢失其中所有已变化的状态——当这个组件再一次被显示时，会创建一个只带有初始状态的新实例。

案例：頁簽切換

通過tab狀態切換`<A/>`和`<B/>`頁面，其中每個頁面都有自己的状态

~~~js
    {tab ?
        <A/>
        : <B/>
    }
    <div onClick={() => setTab(!tab)}><button>切換</button></div>
~~~

![image-20240520150418661](/Users/levi/Library/Application Support/typora-user-images/image-20240520150418661.png)

当点击切换时，页面会重新计数，原因是组件卸载的默认行为是销毁

## 如何實現

1。 使用狀態提升保存狀態

css 屬性實現保存組件

2. 子組件的狀態通過

使用css属性将元素不显示

~~~tsx
<div style={{display: tab ? 'block' : 'none'}}>
  <A/>
</div>
<div style={{display: !tab ? 'block' : 'none'}} >
  <B/>
</div>
<div><button onClick={() => setTab(!tab)}>切换</button></div>
~~~

3. 基於 Router庫機制，重寫路由切換



4. 改變組件的默認行為



## 使用react-activation

