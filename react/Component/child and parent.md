# 组件通信

Props将信息传递给JSX标签，是组件的唯一参数（Object)

## Props

### #

1. 建议的props传递方式

   通过{}解构需要的props属性

   ```tsx
   //Parent
   <Child id="101" name="张三"/>
   
   //Child
   export const Child = ({id,name}) => {return(...)}
   ```

   

1. 展开语法传递props

   ```tsx
   //Parent
   export const Parent = (props) => {
     return(
     <Child {...pros}/>
   )
   }
   
   //Child
   export const Child = (props) => {
     return(
       {props.id}
     )
   }
   ```

   

1. 指定props默认值

   ```tsx
   //Child
   export const Child = ({id="101",name="张三"}:{id:String,name:String}) => {return(...)}
   ```

   

2. 动态的props

   Child在time更新时都会重新渲染（执行log）

   ```tsx
   import { useState } from "react";
   
   function Child({ time }: { time?: number }) {
     console.log("更新");
   
     return <div>{time}</div>;
   }
   
   // 父组件传递state作为props
   export const Parent = () => {
     const [time, setTime] = useState(1);
   
     setInterval(() => {
       setTime(time + 1);
     }, 3000);
   
     return <Child time={time}></Child>;
   };
   
   ```

### #



## 父子组件通信

Parent.js

```tsx
import React from 'react'
import Child from './Child';

export default function Parent() {
  return (
    <div>
      <Child/>
    </div>
  )
}
```

Child.js

```tsx
import React from 'react'

export default function Child() {
  return (
      <div>

      </div>
  )
}
```

### #

1. 父传子：父组件通过props将信息传递给子组件，子组件通过结构对应参数来获取信息

2. 子传父：值得注意的是，不能将set方法传递给子组件，然后子组件调用set方法更新父祖件信息

   ![image-20240423091824695](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240423091824695.png)

3. 子传父：更新函数应该是使用箭头函数包装，否则将在函数将立即执行

**Parent 传递给 Child**

1. 将props传递给子组件

```
export default function Parent() {
  return (
    <div>
      <Child
      	id="111111"
      	name = "zhangshan"
      />
    </div>
  )
}
```

2. 子组件接收props

```
export const Grocery = () => {
  return (
    <div>
      <Child id="111" name="zhangshan" />
    </div>
  );
};
```

3. 控制台输出

   ![image-20240423074636759](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240423074636759.png)



**Child 传递给 Parent** 

1. 在父组件中定义一个`updateState`的函数

   ```tsx
   const updateState = () => {
   
   };
   ```

   

2. 将函数作为prop传递给子组件

   ```tsx
   <Child id={id} name={name} updateState={updateState} />
   ```

   

3. 子组件调用函数，并且传递更新值。**使用箭头函数包装函数调用**，**函数在触发时执行**

   ```tsx
       <div>
         id：{id}，name：{name}
         <button onClick={() => updateState({ id: "102", name: "李四" })}>
           更新
         </button>
       </div>
   ```

   

4. 父组件接受值，并且使用set方法更新数据

   ```tsx
     const updateState = ({ id, name }: { id: string; name: string }) => {
       setId(id);
       setName(name);
     };
   ```

5. 完整代码

   ```tsx
   function Child({
     id,
     name,
     updateState,
   }: {
     id: string;
     name: string;
     updateState: (data: { id: string; name: string }) => void;
   }) {
     return (
       <div>
         id：{id}，name：{name}
         <button onClick={() => updateState({ id: "102", name: "李四" })}>
           更新
         </button>
       </div>
     );
   }
   
   export const Parent = () => {
     const [id, setId] = useState("101");
     const [name, setName] = useState("张三");
   
     const updateState = ({ id, name }: { id: string; name: string }) => {
       setId(id);
       setName(name);
     };
   
     return (
       <div>
         <div>Mr.{name}:</div>
         <Child id={id} name={name} updateState={updateState} />
       </div>
     );
   };
   ```

6. 运行结果

   ![image-20240423092540785](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240423092540785.png)

   ![image-20240423092546704](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240423092546704.png)

## 兄弟组件通信

### #

1. 最好的办法：声明一个公共的父组件，将state存储在父组件中，声明共享 state。

### #

1. 完整代码

   ```tsx
   import { useState } from "react";
   
   const Square = ({
     value,
     onSquareClick,
   }: {
     value: string;
     onSquareClick: () => void;
   }) => {
     return (
       <button className="square" onClick={onSquareClick}>
         {value}
       </button>
     );
   };
   
   export const Grocery = () => {
     const [squares, setSquares] = useState(Array(9).fill(null));
   
     function handleClick(i: number) {
       const nextSquares = squares.slice();
       nextSquares[i] = "X";
       setSquares(nextSquares);
     }
   
     return (
       <>
         <div className="board-row">
           <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
           <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
           <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
         </div>
         <div className="board-row">
           <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
           <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
           <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
         </div>
         <div className="board-row">
           <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
           <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
           <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
         </div>
       </>
     );
   };
   
   ```

   

## 将jsx作为子组件传递

### #

1. children prop接受传递的所有jsx标签内的内容
2. 通过组件嵌套的方式，来填充Parent的内容，实现更多复杂的功能，这种功能类似于插槽（引用官方的一张图）

​	![image-20240423080831176](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240423080831176.png)



3. children prop 接受任意jsx标签内任意内容, 包括文本、变量、表达式以及函数

   ```
     <Parent>
       <div id="1">html标签</div>
       变量：{aaa}
       函数表达式：{handleClick()}
     </Parent>
   ```

​	注意的是，对于函数要显现地返回结果

### #

1. 定义Parent接受children prop并渲染

```tsx
function Parent({ children }: { children: React.ReactNode }) {
  return <div>List :{children}</div>;
}
```

2. 传递组件作为参数

```tsx
<Parent>
  <Child id="101" name="zhangshan" />
  <Child id="102" name="lisi" />
  <div>id：101，name：zhangshan</div>
  <div>id：102，name：lisi</div>
</Parent>
```

3. 控制台输出：

​	![image-20240423081009980](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240423081009980.png)
