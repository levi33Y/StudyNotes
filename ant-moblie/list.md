# [list列表组件](https://github.com/ant-design/ant-design-mobile/tree/master/src/components/list)

>Demo
>
>```tsx
><List header='基础用法'>
>  <List.Item>1</List.Item>
>  <List.Item>2</List.Item>
>  <List.Item>3</List.Item>
></List>
>```
>
>![image-20240425134930796](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240425134930796.png)

## Index.ts

1. attachPropertiesToComponent方法将`list-item`作为`list`的属性合并起来

   ```ts
   for (const key in properties) {
     if (properties.hasOwnProperty(key)) {
     	ret[key] = properties[key]
   }
   ```

### `#`

1. `<List>`标签内怎么处理和识别`<List.item>`作为子组件的

   在index.ts中，将list-item包装成对象{item:list-item}传递给attachPropertiesToComponent，通过for循环对象，将list-item作为属性添加到list中

## List.tsx

1. 定义ListProps声明list属性，值为List基本属性、childern、合并通用类型
2. defaultPros声明了List的属性的默认值。
3. 使用`forwardRef<ListRef, ListProps>((p, ref)`将forwardRef作为内部的声明的nativeElementRef，然后使用useImperativeHandle暴露自定义方法。
4. withNavtieProps柔和props属性和自身jsx。

### dom结构

1. 第一层：卡片还是默认布局
2. 第二层：
   - 是否有标题
   - 包裹list-item的最外层div
3. 第三层：包裹list-item的div

```tsx
<div
  className={classNames(classPrefix, `${classPrefix}-${props.mode}`)}
  ref={nativeElementRef}
>
  {props.header && (
    <div className={`${classPrefix}-header`}>{props.header}</div>
  )}
  <div className={`${classPrefix}-body`}>
    <div className={`${classPrefix}-body-inner`}>{props.children}</div>
  </div>
</div>
```

### `#`

1. list的mode和type怎么处理

   在list.tsx中，props接受了list的属性，通过`${classPrefix}-${props.mode}`拼装了class类来获取每种mode的样式



## List-item.tsx

### dom

1. 第一层：最外层div
2. 第二层：
   - 右侧图标
   - *中间列表的副标题/描述，props.children代表列表中间的主内容区域
   - 右侧提示文字
   - 函数右侧箭头表示

```tsx
<div className={`${classPrefix}-content`}>
  {isNodeWithContent(props.prefix) && (
    <div className={`${classPrefix}-content-prefix`}>{props.prefix}</div>
  )}
  <div className={`${classPrefix}-content-main`}>
    {isNodeWithContent(props.title) && (
      <div className={`${classPrefix}-title`}>{props.title}</div>
    )}
    {props.children}
    {isNodeWithContent(props.description) && (
      <div className={`${classPrefix}-description`}>
        {props.description}
      </div>
    )}
  </div>
  {isNodeWithContent(props.extra) && (
    <div className={`${classPrefix}-content-extra`}>{props.extra}</div>
  )}
  {isNodeWithContent(arrow) && (
    <div className={`${classPrefix}-content-arrow`}>
      {arrow === true ? <RightOutline /> : arrow}
    </div>
  )}
</div>
```



### `#`

1. list-item的属性怎么处理

   content创建的内容中均使用`props.属性 &&  <div></div>`来条件渲染list-item的元素；使用模版字符串拼装class类。最后createElement（React 18中为过时的api方法）传入type，props和content创建React元素，然后使用withNativeProps传入props（list-item传入的属性）和react元素返回新的元素。



## withNavtieProps

1. 接收一个props属性和元素

```tsx
export function withNativeProps<P extends NativeProps>(
  props: P,
  element: ReactElement
)
```

2. 15-29行声明一个p对象获取元素存在的属性，30-35行获取传递过来的新属性值添加或更新到p中，最后cloneElement()方法，会将新添加的属性或更新值并入原有的属性，传入到返回的新元素中，而旧的子元素将被替换。将保留原始元素的键和引用。



## 最后

1. 怎么实现组件的封装

   - a) .tsx文件使用命名导出自己的组件

   - b) 在父组件使用时，导入组件，使用封装组件标签

2. 怎么实现组件的嵌套

   - a) 组件的props要接受children属性，然后使用{props.children} 或{children}渲染传递过来的jsx。自定义jsx写在标签内

3. 在调用自定义组件时自定义样式

   - a) css样式权重

     **行内样式（1000）>ID选择器（100）>类选择器（10）>标签选择器（1）>通用选择器（0）**

   - b）在withNativeProps方法的21-26行中，就是获取p和props的内联样式，然后通过cloneElement重置元素的props.style属性

   - c）如下代码所示，此时传入sytle修改组件的样式

     ```tsx
     <List
        style={{
          '--active-background-color': 'red',
          '--font-size': '16px',
        }}
      >
     ```

     

