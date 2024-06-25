# Pick

从一个接口类型挑选需要、指定的的类型、键名



## `#`

>[阮一峰 TypeScript 教程](https://typescript.p6p.net/typescript-tutorial/utility.html#pick-type-keys)
>
>`Pick<Type, Keys>`返回一个新的对象类型，第一个参数`Type`是一个对象类型，第二个参数`Keys`是`Type`里面被选定的键名。



## `#`

Pick的参数

```ts
Pick<Type, Keys>
```

Pick的源码实现

![image-20240625191952345](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240625191952345.png)



## `#`ant model footer

下面是ant model组件的footer，Pick了modalProps类型来约束Model的footer

```ts
export declare const Footer: React.FC<FooterProps & Pick<ModalProps, 'footer' | 'okText' | 'okType' | 'cancelText' | 'confirmLoading' | 'okButtonProps' | 'cancelButtonProps'>>;
```



## `#`

~~~ts
interface suecessProple {
  name:"LX111",
  houseId:"LX1111",
  carId:"LX1111",
}

type prople = Pick<suecessProple, "name">
~~~

