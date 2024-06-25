# 接口与类型

ts中常用的类型声明



## 类型关键词

静态系统，所以都是规定编写时而已



### keyof

xx的key值



### `#概念`

1. 使用keyof返回对象字面量联合类型
2. 索引类型查询操作符
3. 返回对象字面量联合类型，即使返回接口或类对象的以key字符串联合类型



### `#`基本用法

~~~ts
interface it {
  name: string;
  address: string;
  age: number;
  company: string;
  email: string;
  phone: string;
}

type tt = {
  name: string;
  address: string;
  age: number;
  company: string;
  email: string;
  phone: string;
}

type a = keyof it;

type b = keyof tt;

const aa:a = "name"
  
const bb:b = "age"
~~~

定义类型a获取联合类型

`type a = keyof it` ![image-20240624084951870](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240624084951870.png)

a类型是字面量类型，类型为对象的键值

`const aa:a = 123`![image-20240624085227934](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240624085227934.png)



### `#`keyof any

teyof any = string | number | symbol

### in

对联合类型 for...in



### `#`概念

1. 使用in遍历枚举类型



### `#`基本用法

使用映射类型（mapped type），对联合类型进行迭代

~~~ts
type it = {
  [key in a]: string
}
~~~

![image-20240624114054722](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240624114054722.png)

使用in遍历枚举类型，将enum转为普通对象

~~~ts
enum et  {
  Name="aa",
  Name2="bb",
  Name3="cc",
}

type cc = {
  [key in keyof typeof et]: string
}
~~~

![image-20240624153633219](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240624153633219.png)



接口的定义要是明确的类型

```ts
interface ii  {
  [key in a]: string
}
```

![image-20240624112235030](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240624112235030.png)





## 工具类方法

### Omit



## 索引类型

