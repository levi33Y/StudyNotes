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
10. [❓]css module
11. [❓]学习router V6 与 状态保存，并写文章
12. [❓]scroll總結
13. [❓]useReduer解析

## today

1. []step 1
1. [✅] flexbox
1. []tag缓存 hook组件

## 一、发掘

[console.log](https://developer.mozilla.org/zh-CN/docs/Web/API/console/info_static)



![image-20240522095155437](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240522095155437.png)



[大数值丢失精度](https://juejin.cn/post/7348712837849284644)



## 二、每日总结

2024/5/22 UPDATE:
今日总结：

1. 处理考核项目 pr comment。处理项目中ui样式，编写一个全局hook组件实现恢复grocery上一次离开的位置。
1. 清楚了flexbox在负分配空间原理。flex-shrink（shirnk）仅当在负分配空间生效，元素的shirnk因子为自身flex-basis（basis）加权乘积除全部元素basis加权乘积和，重点注意flex元素最小尺寸为min-content。收缩并不会超过元素min-content，此时剩下的分配空间将为新的负分配空间由剩下元素以上一次分配空间差作为basic参与收缩分配。


明日计划：

1. 跟进AI 识别文件。
1. 跟进考核项目 grocery页面。

卡位：

1.  暂无

识别文件pr https://github.com/sj-distributor/AiRecognitionFile.Web/pull/12

考核项目prhttps://gitlab.sjfood.us/solar/practiseforlevi/-/merge_requests/6

## 三、每周总结

## 四、目录

缓存组件

cache为目标了但是不会跳转到对应，而且屏幕闪了一下

~~~ts
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {IRouteItemProps} from "../router/props";

export const RouteStatus = ({ node }: { node: IRouteItemProps }) => {
  const navigate   = useNavigate();

  const { pathname } = useLocation();

  const [cache, setCache] = useState<string>("");

  const navTarget = node.path;

  const cachetTarget = node?.children?.map((item) => item.path).filter((item) => !!item) ?? [];

  useEffect(() => {
    if(!node.children) return

    if (navTarget.indexOf(pathname) !== -1 && cache.length) {
      console.log(cache)
      navigate(cache);
    }

    if (cachetTarget.indexOf(pathname) !== -1) {
      setCache(pathname);
    }

  }, [pathname]);

  return node.element;
};

~~~



