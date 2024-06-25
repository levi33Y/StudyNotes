# 类型定义

A = (a:number):number => {return a+1}

## any

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

## unknown

any 的优化版

### `#`

1. 只能进行比较运算（运算符`==`、`===`、`!=`、`!==`、`||`、`&&`、`?`）、取反运算（运算符`!`）、`typeof`运算符和`instanceof`运算符这几种，其他运算都会报错。

   ```
   let v1: unknown = { foo: 123 };
   v1.foo; // 报错
   
   let v2: unknown = "hello";
   v2.trim(); // 报错
   
   let v3: unknown = (n = 0) => n + 1;
   v3(); // 报错
   ```

### `#`

**变量‘无限制‘状态**

```
let x: unknown;

x = true; // 正确
x = 42; // 正确
x = "Hello World"; // 正确

```

**使用 unkonwn 类型**

```
let a: unknown = 1;

if (typeof a === "number") {
  let r = a + 10; // 正确
}
```

## never

对现象的一种描述

### `#`

### `#`

抛出异常

```
function f(): never {
  throw new Error("Error");
}

let v1: number = f(); // 不报错
let v2: string = f(); // 不报错
let v3: boolean = f(); // 不报错
```

存在的隐形 never

```
function fn(x: string | number) {
  if (typeof x === "string") {
    // ...
  } else if (typeof x === "number") {
    // ...
  } else {
    x; // never 类型
  }
}
```

## boolaen

Boolean

### `#`

### `#`**使用**

```
const x: boolean = true;
```

## string

String

### `#`

### `#`**使用**

```
const x: string = "hello";
const y: string = `${x} world`;
```

## number

Number

### `#`

### `#`使用

```
const x: number = 123;
const y: number = 3.14;
const z: number = 0xffff;
```

## bigint

BigInt

### `#`

### `#`使用

```
const x: bigint = 123n;
const y: bigint = 0xffffn;

const x: bigint = 123; // 报错
const y: bigint = 3.14; // 报错
```

## undefined

Undefined

### `#`

1. ts 中类型被推断为 any

2. strictNullChecks 编译选项。可以输出原类型

   ```
   // tsc --strictNullChecks app.ts
   ```

3. 任何类型的变量都可以赋值为 undefined

### `#`使用

```
let x: undefined = undefined;
```

## null

Null

### `#`

1. ts 中类型被推断为 any

2. strictNullChecks 编译选项。可以输出原类型

   ```
   // tsc --strictNullChecks app.ts
   ```

3. 任何类型的变量都可以赋值为 null

### `#`使用

```
const x: null = null;
```

## 值类型

没有用:进行类型声明

### `#`

### `#`使用

```
let x: 5 = 5;
let y: number = 4 + 1;

const z: 5 = (4 + 1) as 5; // 正确
x = y; // 报错
y = x; // 正确
```

## 联合

满足｜内其中之一的自定义新类型

### `#`

### `#`

**类型范围**

```
let setting: true | false;
let name: string | null;
```

**值范围**

```
let x: "one" | "two" | "three" | "four";
```

**类型放大与缩小**

```
//放大参数
function getPort(scheme: "http" | "https") {
//缩小处理
  switch (scheme) {
    case "http":
      return 80;
    case "https":
      return 443;
  }
}
```

## 交叉

满足&内所有的的自定义新类型

### `#`

### `#`

隐性 never 类型

```
let x: number & string;
```

对象的合成

```
let obj: { foo: string } & { bar: string };

obj = {
  foo: "hello",
  bar: "world",
};
```

对象添加新的属性

```
type A = { foo: number };

type B = A & { bar: number };
```

## type

储存自定义类型

### `#`

1. type 时块级作用领，内部可定义同名 type

### `#`使用

```
type Age = number;
type Color = "red";

type World = "world";
type Greeting = `hello ${World}`;
```

## typeof

返回声明的‘type’值

### `#`

1. JavaScript 的 typeof 遵守 JavaScript 规则，TypeScript 的 typeof 遵守 TypeScript 规则

### `#`

```
const a = { x: 0 };

type T0 = typeof a; // { x: number }
type T1 = typeof a.x; // number
```

## 块级类型

只在当前代码块有效

### `#`

### `#`

## 类型兼容

子类型

### `#`

### `#`

```
let a: "hi" = "hi";
let b: string = "hello";

b = a; // 正确
a = b; // 报错
```
