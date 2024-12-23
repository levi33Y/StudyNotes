# 学习笔记

2024/5/7

## todo

1. [✅] xxx
2. [❌] xxx
3. [❓] xxx

## yesterday

1. [❓] 考核项目 - 笔记
2. [❓]useState、useEffect、useRef、useImperaiveHandle 等 hook 笔记
3. [❓]reouter 6 笔记
4. [❓]react 事件处理、react-dom 笔记
5. [❓] recoil 笔记
6. [❓] html body 标签
7. [❓] 需求：解决 rem 和适口单位的混乱
8. [❓] 滚动条开发笔记
9. [❓]ts 笔记
10. []css module

## today

1. [✅]处理AI 识别文件pr comment。
1. [✅]处理AI 识别文件pr comment

## 每日总结

2024/5/15 UPDATE:
今日总结：

1. 处理考核项目pr comment，修改代码格式，调整页面自适应效果，将适口单位的dom改为响应式单位。
1. 考核项目中触发下拉刷新后改变窗口大小频繁发起请求。修改滚动监听判断逻辑，当前一次请求无数时将不调用请求方法。使用setTime和闭包，在满足delivery和pickup需求下实现页面scorll监听防抖
1. 处理文件识别pr comment ，调整页面自适应效果，根据document.boy获取可视窗口、querySelector获取的自定义的dom，getElementsByClassName获取的ant组件宽度使用resize事件动态设置列表内容的宽度。
1. 考核项目delivery和pickup切换会重新渲染组件并请求，使用react-activation，在main中使用AliveScope包裹顶层，然后在路由中，使用KeepAlive包裹delivery和pickup并配置不同唯一的cacheKey。react-activation改变React组件移除默认方式，当跳转至pickup时，delivery会被导出到AliveScope下为Keeper实现组件状态缓存




明日计划：

1. 处理AI 识别文件 pr comment
1. 处理考核项目 pr comment



卡位：

1.  暂无

识别文件pr https://github.com/sj-distributor/AiRecognitionFile.Web/pull/12

考核项目prhttps://gitlab.sjfood.us/solar/practiseforlevi/-/merge_requests/6

## 每周总结

## 目录

This

自适应

keepALive

### this

```
const debounce = (fn:any, delay:number) => {
  let time:any = null

  function _debounce(...args: any[]) {
    if(time!==null) {
      clearTimeout(time)
    }

    time = setTimeout(()=>{
      // @ts-ignore
      fn.apply(this,args)
    },delay)
  }

  return _debounce
}
```



```
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