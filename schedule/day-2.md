# 学习笔记

2024/6/11

## Todo

1. [✅] xxx
2. [❌] xxx
3. [❓] xxx

## Yesterday

1. [❓] 考核项目 - 笔记

2. [❓]useState、useEffect、useRef、useImperaiveHandle 等 hook 笔记

3. [❓]reouter 6 笔记

4. [❓]react 事件处理、react-dom 笔记

5. [❓] recoil 笔记

6. [❓] html body 标签

7. [❓] 需求：解决 rem 和适口单位的混乱

8. [❓] 滚动条开发笔记

9. [❓]ts 笔记

10. [❓]css module

11. [❓]学习router V6 与 状态保存，并写文章

12. [❓]scroll總結

13. [❓]useReduer解析

14. [❓]css 溢出场景；溢出、BFC、流内流外、边距折叠

15. [❓]css 设置边框

    ~~~css
    .dotted-line{    
    border: 1px dashed transparent;    
    background: linear-gradient(white,white) padding-box, repeating-linear-gradient(-45deg,#ccc 0, #ccc .25em,white 0,white .75em);
    }
    
    ~~~

16. [❓]flex；浏览器紫色区域、flex:

17. [❓]display 与 background颜色

18. [❓] [html空格](https://blog.csdn.net/wuzhiyue2/article/details/117990898)

19. [❓]vite 项目配置

20. [❓]img标签的src属性

## Today

1. [❌] ai文件识别 tree
2. [❌] 报表中心 tree
3. [✅]文件獲取-呼叫設置需求 - ui



## 一、发掘



## 二、每日总结

2024/6/12 UPDATE:
今日总结：

1. 完成模版获取的表单结构，完善tab的ui和呼叫设置表单。在使用getFieldValue获取Switch组件的value时，发现值为undefined且监听不到变化，原因是Switch的值属性不是value而是checked，此时要设置valuePropName为checked，然后使用getFileValue传入Form.Item的name获取Switch的表单值。使用useWatch监听Switch的表单值。
1. 处理报表中心 pr comments。学习团队规范修改state的排序。学习了ahooks，useUpdateEffect替代了有依赖项open的useEffect，它能忽略首次执行，让open依赖项变化时进行操作。学习了useMemoizedFn，与useCallback的区别是，useMemoizedFn可以省略deps，同时它在依赖更新时不重新生成，使用 === 测试依赖更新前后变量引用，useCallback结果为false，useMemoizedFn为true。




明日计划：

1. 继续处理和开发报表中心pr comments和发送设置ui。



卡位：暂无

模版中心pr  https://github.com/sj-distributor/ReportCenter.Web/pull/6

## 三、每周总结

1. 继续处理和开发报表中心pr comment和模版获取。

2. 了解一下row的flex设置为什么会使table出现异常想象

3. ai文件识别和报表相似的权限功能，特别与选择框或列表交互功能，尝试封装起来。

4. 继续学习react 以及 react Router V6的api和组件standup

   



## 四、目录

switch form ValuePropName useWatch 表單綁定 與 表單監聽

ahook

### Form

1. 在dom消失時value也消失

### ahook

useMemoizedFn

1. 代替useMemoizedFn，切去除了第二个依赖参数。hook更关注持久化function
2. 与原先fn引用不同。函数也是对象，意味着它们不想等也没有继承自身属性
3. useMemoizedFn不会触发UI的修改

~~~tsx
  const [a, setA] = useState<number>(2);

  const [b, setB] = useState<number>(2);


  const ahookFun = useMemoizedFn(() => {
    console.log(`ahookFun: ${aa === ahookFun}`);
    setA(() => a + 1);
    return b + 1;
  });

  const aa = useMemo(() => ahookFun, [])

  const callbackFun = useCallback(() => {
    console.log(`callbackFun: ${bb === callbackFun}`);
    setB(() => b + 1)
    return a + 1;
  }, [a]);

  const bb = useMemo(() => callbackFun, [])

  console.log("reset")

  useEffect(()=>{
    console.log(123123)
  },[callbackFun])


  const onclick = () => {
    // setA(() => a + 1);
    // setB(() => b + 1);
    // ahookFun()
    callbackFun()
  }
~~~



