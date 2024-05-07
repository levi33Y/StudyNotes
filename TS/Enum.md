# Enum

Enum类型，TS的Enum值

## 目录

## 基本语法

**不能同名**

**Enum作为类型时，并不会校验值是否是Enum**

**Enum 成员可以是除了Bigint外任意值或表达式等**

**初始化Enum时，成员内部无显性定义时，值为1或者上一个值递增**

**Enum成员只读**

**Enum 名字在作用域为同一个值**

很多很多...



## 变量名就是值,用Enum写switch

### `#`

### `#`

```ts
enum Operator {
  ADD,
  DIV,
  MUL,
  SUB,
}

function compute(op: Operator, a: number, b: number) {
  switch (op) {
    case Operator.ADD:
      return a + b;
    case Operator.DIV:
      return a / b;
    case Operator.MUL:
      return a * b;
    case Operator.SUB:
      return a - b;
    default:
      throw new Error("wrong operator");
  }
}

compute(Operator.ADD, 1, 3); // 4
```



## 代替 as const

```ts
const Bar = {
  A: 0,
  B: 1,
  C: 2,
} as const;

// 等同于
if (x === Bar.A) {}
```

### `#`

### `#`

```ts
enum Foo {
  A,
  B,
  C,
}

if （x === Foo.A）{}
```



## 取代联合类型

```ts
function move(where: "Up" | "Down" | "Left" | "Right") {
  // ...
}
```



### `#`

### `#`

使用联合类型

```ts
enum Where {
	UP,
	Down,
	Left,
	Right
}

function move(where: Where) {
  // ...
}
```



获取Eumn的类型值

```tsx
enum Where {
	UP,
	Down,
	Left,
	Right
}

// "Up" | "Down" | "Left" | "Right"
type WhereTypes = keyof typeof Where;

function move(where: WhereTypes) {
  // ...
}
```

