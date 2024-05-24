# 長列表

## 長列表

https://juejin.cn/post/7354940230301057033?utm_source=gold_browser_extension

https://juejin.cn/post/6844903938894872589



## #V8執行代碼、頁面渲染、同步、宏、微

https://juejin.cn/post/7020328988715270157

js引擎與瀏覽器UI概念

前端中同步與異布任務

EventLoop流程

異步任務優先級

異步任務的宏任務與微任務之分

EventLoop執行微任務和宏任務流程

瀏覽器事件循環流程



## #promise題目

https://juejin.cn/post/6844904077537574919#heading-56



## #setTime 0 與 遞歸

setTime隊列與Hz造成的閃屏

```js
function loop(curTotal){
  if(curTotal <=0) return

  let pageCount = Math.min(curTotal ,17);

  setTimeout(()=>{
    for(let i = 0; i < pageCount; i++){
      setPickupList((restaurantList) => restaurantList.concat(restaurants));
    }
    loop(curTotal - pageCount);
  },0)
}
loop(600)
```



## #requestAnimationFrame + fragment时间分片

任务队列

优化动画的API？ 動畫楨率？



## #虚拟列表

窗口