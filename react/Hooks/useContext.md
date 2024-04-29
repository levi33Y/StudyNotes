# useContext

useContext订阅， createContext发布，实现上下级通信

**目录**

- 概念
  - context
  - createContext
  - useContext
- 实践
  - 远亲组件传值
  - 创建动态组件
  - props、children、context



## context

createContext的返回值，发布的信息对象

1. `<SomeContext.Provider value={arg}></SomeContext.Provider>`
   - 使用标签包裹‘订阅者’
   - SomeContext为createContext返回的一个上下文对象
   - value是固定的传参形式，用`value={xxx}`来决定发布的信息
2. 覆盖：子组件包裹到一个提供不同值的 context provider 中，来覆盖来自原先上层的context
3. 使用场景
   - 繁琐的props数据流
   - 组件过于庞大，抽象出来直接传递props困难

## createContext

React.createContext()，创建上下文对象

1. const SomeContext = createContext(defaultValue)
   - 在组件外使用
   - SomeContext为自定义变量，createContext返回的一个上下文对象
   - 当使用useContext获取不到SomeContext.Provider的值是，会返回defaultValue默认值
2. 添加状态

## useContext

react hooks

1. const value = useContext(SomeContext)。
   - 在组件的顶层使用
   - value为自定义的变量，组件上方最近的 SomeContext.Provider 的 `value`
   - someContext，用createContext创建的context

## 远亲组件传值

Grocey传递信息给C

```tsx
const C = () => {
  return <div>get(C): </div>;
};

const Qqemil = () => {
  return (
    <div>
      <C></C>
    </div>
  );
};

export const Grocery = () => {
  
  const msg = `To C. Hello C! I am Grocery!`;
  return (
    <>
      <div>send(Grocery): {msg}</div>
      <Qqemil></Qqemil>
    </>
  );
};


```



### ##

1. 不能在组件内使用createContext，在任意组件外调用 createContext创建一个上下文
2. 在组件的最顶级调用 useContext 来读取和订阅 context

### ##

1. Grocery定义上下文，并设置上下文的值

   ```tsx
   const someContext: any = createContext("");
   //...
   <someContext.Provider value={msg}>
      <Qqemil></Qqemil>
   </someContext.Provider>
   ```

2. C获取订阅信息

   ```tsx
    const some: any = useContext(SomeContext);
   
    return <div>get(C): {some}</div>;
   ```

   输出：

   ![image-20240429094735190](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240429094735190.png)

## 创建自适应组件

博客系统的个人主页。标题组件为同一个组件，根据在个人介绍，我的发布，帖子内容显示不同的标题大小。

### ##

1. useContext返回传递给树中调用组件上方最近的 SomeContext.Provider的 value
2. createContext创建的 context，只代表着信息类型不是信息，createContext里面的参数只是为context指定了默认值
3. 从 provider 接收到不同的 value 开始，会重新渲染此组件下所有子组件

### ##

```tsx
import { createContext, useContext } from "react";

// 标题
const Heading = ({ children }: any) => {
  const level = useContext(LevelContext);
  switch (level) {
    case 0:
      throw Error("Heading 必须在 Section 内部！");
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    default:
      throw Error("未知的 level：" + level);
  }
};

// 内容
const Post = ({ title, body }: any) => {
  return (
    <Section>
      <Heading>{title}</Heading>
      {body && <p>{body}</p>}
    </Section>
  );
};

// 区域
const Section = ({ children }: any) => {
  const level = useContext(LevelContext);
  return (
    <section
      style={{
        margin: "5px",
        padding: "10px",
        border: "1px solid #aaa",
      }}
    >
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
};

export const LevelContext = createContext(0);

const RecentPosts = () => {
  return (
    <Section>
      <Heading>最近发布</Heading>
      <Post title="useContext那些事" body="学习了..." />
      <Post title="..." body="..." />
    </Section>
  );
};

const AllPosts = () => {
  return (
    <Section>
      <Heading>我的发布</Heading>
      <div>{"帖子"}</div>
      <RecentPosts />
    </Section>
  );
};

export const Grocery = () => {
  return (
    <Section>
      <Heading>个人中心</Heading>
      <div>{"这个人很神秘，什么都没写......"}</div>
      <AllPosts />
    </Section>
  );
};

```

运行结果：

![image-20240429135207225](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240429135207225.png)

## props、children、context

使用单选框控制图片的大小，使用props太繁琐了，而且中间的组件根本不需要size信息，只需要将信息传递题img就行了

```tsx
const Place = ({ imageSize }: { imageSize: number }) => {
  const places = [
    {
      id: 0,
      imageId: "K9HVAGHl.jpg",
    },
    {
      id: 1,
      imageId: "9EAYZrtl.jpg",
    },
  ];

  return (
    <ul>
      {places.map((place) => (
        <li key={place.id}>
          <PlaceImage imageSize={imageSize} imageId={place.imageId} />
        </li>
      ))}
    </ul>
  );
};

const PlaceImage = ({
  imageSize,
  imageId,
}: {
  imageSize: number;
  imageId: string;
}) => {
  return (
    <img
      src={"https://i.imgur.com/" + imageId}
      width={imageSize}
      height={imageSize}
      alt=""
    />
  );
};

export const Grocery = () => {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 200 : 100;
  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </div>
      <Place imageSize={imageSize} />
    </>
  );
};

```



### ##

1. props是指传递props使用组件的props属性，这样传递参数有明确的数据流，但是组件距离较远层级太多时，就会出现逐层传递，导致一些不需要用到值的中间组件也要声明props来接收属性值
1. children是指props中的children属性，children属性是指自定义组件标签内的jsx内容，通过children形式能够将组件抽象出来，即是将要数据的组件以children形式传递给中间组件组件，省去中间组件显性声明props，减少层级。

### ##

**使用context重构**

1. 在组件外使用createContext

   ```tsx
   const ImageSizeContext = createContext(500);
   ```

   

2. 在需要订阅的地方使用useContext

   ```tsx
   const imageSize = useContext(ImageSizeContext);
   ```

   

3. 删除props的数据流

   ```tsx
   import { createContext, useContext, useState } from "react";
   
   const Place = () => {
     const places = [
       {
         id: 0,
         imageId: "K9HVAGHl.jpg",
       },
       {
         id: 1,
         imageId: "9EAYZrtl.jpg",
       },
     ];
   
     return (
       <ul>
         {places.map((place) => (
           <li key={place.id}>
             <PlaceImage imageId={place.imageId} />
           </li>
         ))}
       </ul>
     );
   };
   
   const PlaceImage = ({ imageId }: { imageId: string }) => {
     const imageSize = useContext(ImageSizeContext);
   
     return (
       <img
         src={"https://i.imgur.com/" + imageId}
         width={imageSize}
         height={imageSize}
         alt=""
       />
     );
   };
   
   const ImageSizeContext = createContext(500);
   
   export const Grocery = () => {
     const [isLarge, setIsLarge] = useState(false);
     const imageSize = isLarge ? 200 : 100;
     return (
       <>
         <div>
           <input
             type="checkbox"
             checked={isLarge}
             onChange={(e) => {
               setIsLarge(e.target.checked);
             }}
           />
           Use large images
         </div>
         <ImageSizeContext.Provider value={imageSize}>
           <Place />
         </ImageSizeContext.Provider>
       </>
     );
   };
   
   ```

   