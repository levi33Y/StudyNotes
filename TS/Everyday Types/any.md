# any

可以关闭类型检查,用于适应老项目

### `#`

1. 造成类型污染

   ```
   let x: any;
   let y: number;
   y = x; // 不报错
   y.toFixed(); // 不报错
   ```

### `#`

**给变量“无限制”状态**

```
let x: any;

x = 1; // 正确
x = "foo"; // 正确
x = true; // 正确
x(1); // 不报错
x.foo = 100; // 不报错

let y: number;
y = x; // 不报错
y.toFixed(); // 不报错
```

**隐形为 any**

```
// x，y，add均为any
function add(x, y) {
  return x + y;
}

add(1, [1, 2, 3]); // 不报错
```