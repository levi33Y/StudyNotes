# useEffect

与外部系统交互

## useEffect一直循环

1. 没有添加依赖项

   ```
   useEffect(() => {
     // ...
   }); 
   ```

2. 依赖声明在了useEffect外面

   渲染期间: 进入页面或者依赖state变化时，`option`声明在useEffect每次渲染都等于重新声明

   警告：`The 'options' object makes the dependencies of useEffect Hook (at line 17) change on every render`

   ```tsx
   function ChatRoom({ roomId }) {
     const [message, setMessage] = useState('');
   
     const options = { // 🚩 这个对象在每次渲染时都是从头创建的
       serverUrl: serverUrl,
       roomId: roomId
     };
   
     useEffect(() => {
       const connection = createConnection(options); // 它在 Effect 内部使用
       connection.connect();
       return () => connection.disconnect();
     }, [options]); // 🚩 因此，这些依赖在重新渲染时总是不同的
   ```

   

## useEffect的依赖项应该写什么

1. 空数组：渲染期间执行
2. 函数中用到的响应式数据：依赖项更新，进行`steup-cleanup-steup`更新状态

## 鼠标跟踪器

### #

### #

```tsx
import { useState, useEffect } from 'react';

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('pointermove', handleMove);
    return () => {
      window.removeEventListener('pointermove', handleMove);
    };
  }, []);

  return (
    <div style={{
      position: 'absolute',
      backgroundColor: 'pink',
      borderRadius: '50%',
      opacity: 0.6,
      transform: `translate(${position.x}px, ${position.y}px)`,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
    }} />
  );
}

```

