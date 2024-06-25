# 类型断言



## as const

确定是这样的

### `#`



### `#`

**长度是x的数组**

```ts

const args = [8, 5];//ts ->0 or more
const angle = Math.atan2(...args); //error! Expected 2 arguments, but got 0 or more.

const args = [8, 5] as const; //ts -> Array(2)
const angle = Math.atan2(...args); // sucess
```



