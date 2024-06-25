# 类组件与 hook

react16 无状态组件 hook

C：类组件，继承自 React.Component，包含 state 和生命周期。

F：函数式组件，纯粹的 JavaScript 函数，函数定义的无状态组件。

*知识很多，续续学习补充.....*



## **目录**

- React Class 组件
- React Hook 实现类组件中的周期函数



## React class 组件

![16版本React生命周期钩子](https://img-blog.csdnimg.cn/20190917145748327.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3OTcwOTY0,size_16,color_FFFFFF,t_70)

**挂载**

> 当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：
>
> - [**`constructor()`**](https://zh-hans.legacy.reactjs.org/docs/react-component.html#constructor)
> - [`static getDerivedStateFromProps()`](https://zh-hans.legacy.reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
> - [**`render()`**](https://zh-hans.legacy.reactjs.org/docs/react-component.html#render)
> - [**`componentDidMount()`**](https://zh-hans.legacy.reactjs.org/docs/react-component.html#componentdidmount)

**更新**

> 当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：

> - [`static getDerivedStateFromProps()`](https://zh-hans.legacy.reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
> - [`shouldComponentUpdate()`](https://zh-hans.legacy.reactjs.org/docs/react-component.html#shouldcomponentupdate)
> - [**`render()`**](https://zh-hans.legacy.reactjs.org/docs/react-component.html#render)
> - [`getSnapshotBeforeUpdate()`](https://zh-hans.legacy.reactjs.org/docs/react-component.html#getsnapshotbeforeupdate)
> - [**`componentDidUpdate()`**](https://zh-hans.legacy.reactjs.org/docs/react-component.html#componentdidupdate)

**卸载**

> 当组件从 DOM 中移除时会调用如下方法：
>
> - [**`componentWillUnmount()`**](https://zh-hans.legacy.reactjs.org/docs/react-component.html#componentwillunmount)

**错误处理**

> 当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：
>
> - [`static getDerivedStateFromError()`](https://zh-hans.legacy.reactjs.org/docs/react-component.html#static-getderivedstatefromerror)
> - [`componentDidCatch()`](https://zh-hans.legacy.reactjs.org/docs/react-component.html#componentdidcatch)

**APIs**

> 组件还提供了一些额外的 API：
>
> - [`setState()`](https://zh-hans.legacy.reactjs.org/docs/react-component.html#setstate)
> - [`forceUpdate()`](https://zh-hans.legacy.reactjs.org/docs/react-component.html#forceupdate)

**class**

> 组件还提供了一些额外的 API：
>
> - [`setState()`](https://zh-hans.legacy.reactjs.org/docs/react-component.html#setstate)
> - [`forceUpdate()`](https://zh-hans.legacy.reactjs.org/docs/react-component.html#forceupdate)

**实例**

> - [`props`](https://zh-hans.legacy.reactjs.org/docs/react-component.html#props)
> - [`state`](https://zh-hans.legacy.reactjs.org/docs/react-component.html#state)

### `#`

1. 在构造函数中，不应包含任何存在副作用或者事件监听相关的代码
1. 一个组件的生命周期大致为，挂载（生成期）、更新（存在期，组件在页面上依赖可能会发生更新，组件重新渲染）、卸载（销毁期）

### `#`



## React Hook 实现类组件中的周期函数

### `#`

1. useState 代替类组件中的 state 对象和 setState 方法
2. useEffect 代替类式组件中一起定义 componentDidMount，componentDidUpdate 和 componentWillUnmount 逻辑块

### `#`

**定义 state、更新 state**

- C：

  ```tsx
  class Counter extends Component {
    // 声明state，this.state 来访问一个类式组件的 state
    state = {
      age: 42,
    };

    handleAgeChange = () => {
      //调用 setState 来更新 React 组件的 state。
      this.setState({
        age: this.state.age + 1,
      });
    };

    render() {
      return (
        <>
          <button onClick={this.handleAgeChange}>增加年龄</button>

          <p>你{this.state.age}岁了。</p>
        </>
      );
    }
  }
  ```

- F：

  ```tsx
  //使用useState声明组件的状态
  const [age, setAge] = useState(0);
  
  return (
    <>
      <button
        //调用 setAge 来更新 React 组件的 state。
        onClick={() => {
          setAge(age + 1);
        }}
      >
        增加年龄
      </button>
      <p>你{age}岁了。</p>
    </>
  );
  ```

**创建连接、切换频道、退出连接**

- C:

  ```tsx
  // componentDidMount 初始化渲染，建立连接
  componentDidMount() {
    this.setupConnection();
  }
  // componentDidUpdate 更新和重新渲染props或state，切换频道时重新建立连接
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.roomId !== prevProps.roomId ||
      this.state.serverUrl !== prevState.serverUrl
    ) {
      this.destroyConnection();
      this.setupConnection();
    }
  }
  // componentWillUnmount 组件销毁，退出连接
  componentWillUnmount() {
    this.destroyConnection();
  }
  ```

- F:

  ```tsx
  useEffect(() => {
    // setup函数，建立连接
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
  
    //清理函数（cleanup），退出连接
    return () => {
      connection.disconnect();
    };
    // useEffect依赖项列表，切换频道时重新建立连接
  }, [serverUrl, roomId]);
  ```
