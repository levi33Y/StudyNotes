## 处理 “number | undefined” 类型分配至 “number” 类型错误

在使用内置方法时，报错

### #

1. 类型断言(绕过类型检查)

   ```ts
   index as number
   ```

   

2. 条件赋值

   ```ts
   if(index !==undefind) {
   	index = 1
   } else {
   	index = 0
   }
   ```

   

3. 非空断言操作符(绕过类型检查)

   ```ts
   index = <number>!
   ```

   

4. 逻辑与或

   ```ts
   index = <number> || 0
   ```

   

5. 默认值

   ```tsx
   const BottomItem = ({ index = 0}: RouteListProps) => {
   ...
   	/*
     * RouteListProps (index?:number)
   	* index类型为number | undefined，添加默认值
   	*/
     [0, 2, 3, 4].includes(index)
   
   ```

   

6. 定义明确的类型

   ```ts
   index?:number 
   //=>
   index:number
   ```

   

### #



## 类型“Element”上不存在属性“offsetHeight”。

```js
//因为ts默认用的是Element，需要声明为HTMLElement

let top = <HTMLImageElement>document.querySelector('.Top');
let _offsetTop = top.offsetTop

&
let top = document.querySelector('.Top') as HTMLElement;
let _offsetTop = top.offsetTop

```



