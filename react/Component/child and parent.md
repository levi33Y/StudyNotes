## 父子组件传值

Parent.js

```
import React from 'react'
import Child from './Child';

export default function Parent() {
  return (
    <div>
      <Child/>
    </div>
  )
}
```

Child.js

```
import React from 'react'

export default function Child() {
  return (
      <div>

      </div>
  )
}
```

**Parent 传递给 Child**

```
```



**Child 传递给 Parent** 

```
```



传递 onclick或OnChange等事件,函数作为 prop 传递给子组件

```
```

