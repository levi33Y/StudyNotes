## 条件渲染

#

1. `If`条件语句，单独或else用。
2. `&&` 逻辑运算符，在react中，将`flase`是为空值`null`;在javaScript中，数字0为假值，当 `0&&any`时会返回0而非`false`
3. ? : 三目运算符，等于if-else

#

1. 返回false/null时

使用三目运算符

```tsx
<div className={`${pathname === item.path ? style.active : null}`}>
```



使用&&优化后

```tsx
<div className={`${pathname === item.path && style.active}`}>
```



2. 组件渲染与实例

使用条件渲染，返回一个jsx元素

```tsx
{isPlayerA ? <Counter person="Taylor" /> : <Counter person="Sarah" />}
```



使用逻辑运算符,返回两个jsx元素

```tsx
      {isPlayerA &&
        <Counter person="Taylor" />
      }
      {!isPlayerA &&
        <Counter person="Sarah" />
      }
```

在dom树中，前一种Tayloar`和`Sarah`为一个组件，后一种为两个不同的组件

<figure class="half">
<img src="https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240420082619130.png">  
<br/>
<img src="https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240420082223741.png"> 
</figure>



计数器：当Counter重新渲染时，前一种不会生产新的实例，后一种因为dom树结构不同，销毁了`Taylor`生成了新的组件`Sarah`

```tsx
import { useState } from 'react';

export default function Scoreboard() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
    //begin再次加入两种不同的方式
    
    
    //end
      <button onClick={() => {
        setIsPlayerA(!isPlayerA);
      }}>
        下一位玩家！
      </button>
    </div>
  );
}

function Counter({ person }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{person} 的分数：{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        加一
      </button>
    </div>
  );
}
```



3. 当存在一对多映射条件时

```tsx
  <dl>
    <dt>Part of plant</dt>
    <dd>{name === 'tea' ? 'leaf' : 'bean'}</dd>
    <dt>Caffeine content</dt>
    <dd>{name === 'tea' ? '15–70 mg/cup' : '80–185 mg/cup'}</dd>
    <dt>Age</dt>
    <dd>{name === 'tea' ? '4,000+ years' : '1,000+ years'}</dd>
  </dl>
```

使用变量+if优化

```tsx
let pro = ["bean", "80–185 mg/cup", "1,000+ years"];
if (name === "tea") {
  pro = ["leaf", "15–70 mg/cup", "4,000+ years"];
}
......
<dl>
  <dt>Part of plant</dt>
  <dd>{pro.at(0)}</dd>
  <dt>Caffeine content</dt>
  <dd>{pro.at(1)}</dd>
  <dt>Age</dt>
  <dd>{pro.at(2)}</dd>
</dl>
```





