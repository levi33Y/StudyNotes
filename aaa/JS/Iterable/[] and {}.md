# 解构赋值

迭代、映射



## []

数组解构基于迭代器遍历再赋值。

在js中数组只是以索引为键值的对象，但与Object类型也是有差别的。

数组解构看作对象解构的语法糖。文中“实际上等同于...”表示数组的解构转化为对象解构来表示。

数组是有序的。

~~~js
const a = [1,2]

const [aa,ab] = a

// 实际上等同于...
const {0:aa,1:ab} = {0:1,1:2}
~~~



## {}

对象解构通过key 匹配，最后的写法为了表示对象里面是无序的。

~~~js
const b = {ba:1,bb:2}

const {ba,bb} = b

// 实际上等同于...
const {ba,bb} = {bb:2, ba:1}
~~~



## expect [] = {} toBe a=1,b=2

有等式

~~~js
const [a,b] = {a:1,b:2}
~~~

上面代码运行时报错，因为数据的解构依赖于变量是否存在迭代器

报错：`TS2488: Type { aa: number; bb: number; } must have a [Symbol.iterator]() method that returns an iterator.`



当然，使用Symol.interator可以修改对象原型，给对象添加迭代器属性方法

~~~js
// 使用 Object.values(this) 方法获取对象的所有值，并返回这些值的迭代器对象
Object.prototype[Symbol.iterator] = function(){
    return Object.values(this)[Symbol.iterator]()
}

//编译时ide会警告，运行时通过
const obj = {a:1,b:2}

const [a,b] = obj

//迭代对象调用next返回value，所以实际上等同于...
const {0:a, 1:b} = {0:obj.a, 1:obj.b}
~~~



为了达到这种效果，可以使用Object.value将{} 转化为以定义循序的[] value数组

~~~js
const [a,b] = Object.value({a:1,b:2})

const [a,b] = [1,2]
~~~



针对等式而言，要想使用数组解构对象且要实现key值的映射，此时将需要额外的定制化代码来实现功能。

~~~js
const deconstruction = (obj,keys) => {
  const result = []

  keys.forEach(key =>
    result.push(obj[key])
  )

  return result
}

const [b, a, c] = deconstruction({a:1,b:2},["b","a","c"]);

// 实际上等同于...
const {0:b, 1:a, 2:c} = [0:obj.b, 1:obj.a, 2:obj.c ]
~~~

此种方法也只是为了达到特定的目的，对于实际开发中，它们或许没有应用场景



## 最后

对于给原型添加属性，属于修改Object原型，这种方式断然不可取的。

而对于使用Object.value,在意义上说，数组解构是按照索引值的，对象是无序的。这种方式的也可以是应用场景微乎其微

最后的方式，保留映射关系，此时应该使用对象解构

~~~js
const {b，a} = {a:1,b:2}
~~~

🛏️🪨🥬🐶
