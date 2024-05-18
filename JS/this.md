# this

学多少遍都会忘......



## 函数调用

方法一：

```js
const debounce = (fn:any, delay:number) => {
  let time:any = null

  function (...args){
    if(time!==null) {
      clearTimeout(time)
    }
    time = setTimeout(()=>{
      fn(...args)
    },delay)
  }
}
```
方法二：

```js
const debounce = (fn:any, delay:number) => {
  let time:any = null

  return function (){
    if(time!==null) {
      clearTimeout(time)
    }
    time = setTimeout(()=>{
      fn(arguments)
    },delay)
  }
}
```
方法三：

```js
  const debounce = (fn:any, delay:number) => {
    let time:any = null

    return (...args:any)=>{
      if(time!==null) {
        clearTimeout(time)
      }
      time = setTimeout(()=>{
        fn(...args)
      },delay)
    }
  }
```
方法四（err）：


```js
  const debounce = (fn:any, delay:number) => {
    let time:any = null

    return ()=>{
      if(time!==null) {
        clearTimeout(time)
      }
      time = setTimeout(()=>{
        fn(arguments)
      },delay)
    }
  }
```



`#`

1. arguments是指向函数类型原型，自定义的函数继承函数类型，arguments是其中参数的属性，类型是伪数组，只能通过[]方法读取对应下标的值（at方法是数组类型的方法）
2. apply不用多说
3. 箭头函数没有this，在严格模式下，指向undefine

`#`