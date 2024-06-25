# Record

对索引类型约束



## `#`

>[阮一峰 TypeScript 教程](https://typescript.p6p.net/typescript-tutorial/utility.html#record-keys-type)
>
>`Record<Keys, Type>`返回一个对象类型，参数`Keys`用作键名，参数`Type`用作键值类型。



## `#`

Record参数

~~~ts
Record<Keys, Type>
~~~


Record源码实现

~~~ts
/**
 * Construct a type with a set of properties K of type T
 */
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
~~~



可以看出，Record可以约束索引类型。实现的原理是使用泛型和映射类型，JavaScript中对象键值可为 String Number Symbol，keyof any返回string | number | symbol。

## `#`ant FormItemProps

FormItem有一个属性叫messageVariables，代表默认验证信息变量（默认情况下messageVariables值为label）。

可以看出约束messageVariables索引对象键值tring，值string。

使用时:

~~~tsx
messageVariables={{ errorCn: '错误',errorEN:"error" }}

//TS2322: Type number is not assignable to type string
messageVariables={{ errorCn: 1,errorEN:1 }}
~~~



![image-20240625145842699](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240625145842699.png)



## #联合类型

### Keys为联合类型

~~~ts
//一个用户信息

type userTypes = "name" | "emil" | "address"

type T = Record<userTypes,string>

const userInfo:T = {
  name: "张三",
  emil:"1xxxxxxxxx@qq.com",
  address:"北京市xxx"
  
  //error: Object literal may only specify known properties, and age does not exist in type Record<userTypes, string>
  age:"12"
}
~~~



下面的用法并不常用

~~~ts

~~~



### Type为联合类型

~~~ts
type T = Record<string,number | string>

const test:T = {
  par1:"123",
  par2:123
}
~~~



### 不常用用法：

p只是索引类型中的一个占位符，可以为任意字符。

~~~ts
//{[p: string]: string, [p: number]: string}
type T = Record<string | number,string>

//{[p: string]: string, [p: number]: string, [p: symbol]: string}
type T = Record<any,string>

//{[p: string]: any}
type T = Record<string,any>

//{[p: string]: string | number, [p: number]: string | number}
type T = Record<string | number,string | number>
~~~

