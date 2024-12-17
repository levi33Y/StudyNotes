# 海量数据处理

背景：

执行一个生成200000个色块的任务

```tsx
import { useEffect, useMemo, useRef, useState } from "react";

function getColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return "rgba(" + r + "," + g + "," + b + ",0.8)";
}

function getPostion(position) {
  const { width, height } = position;

  return {
    left: Math.ceil(Math.random() * width) + "px",
    top: Math.ceil(Math.random() * height) + "px",
  };
}

function Circle({ position }) {
  const style = useMemo(() => {
    return {
      background: getColor(),
      ...getPostion(position),
    };
  }, []);

  return <div style={style} className="absolute w-4 h-4" />;
}

const Index = () => {
  const indexRef = useRef<HTMLDivElement>(null);

  const [info, setInfo] = useState({
    dataList: [],
    renderList: [],
    position: { width: 0, height: 0 },
  });

  useEffect(() => {
    if (indexRef.current) {
      const { offsetHeight, offsetWidth } = indexRef.current;

      setInfo({
        position: { height: offsetHeight, width: offsetWidth },
        dataList: new Array(200000).fill(1),
        renderList: new Array(200000).fill(1),
      });
    }
  }, []);

  return (
    <div className="relative" ref={indexRef}>
      {info.renderList.map((item, index) => (
        <Circle position={info.position} key={index} />
      ))}
    </div>
  );
};

export const PermissionManagement = () => {
  const [show, setShow] = useState(false);

  const [btnShow, setBtnShow] = useState(true);

  const handleClick = () => {
    setBtnShow(false);

    setTimeout(() => {
      setShow(true);
    }, 0);
  };

  return (
    <>
      {btnShow && <button onClick={handleClick}>show</button>}
      {show && <Index />}
    </>
  );
};
```








## 时间切片

通过使用requestIdleCallback浏览器空闲执行下一批渲染, 其中自定义设置时间（代码中RENDERERLIMIT变量）

~~~tsx
import { message } from "antd";
import * as React from "react";
import { Fragment, useEffect, useMemo, useState } from "react";

const RENDERERMAX = 200000;

const RENDERERLIMIT = 500;

const Circle = () => {
  function getColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return "rgba(" + r + "," + g + "," + b + ",0.8)";
  }

  const style = useMemo(() => {
    return {
      background: getColor(),
    };
  }, []);

  return <span style={style} className="w-4 h-4 flex-shrink-0" />;
};

const Container = ({ show }: { show: boolean }) => {
  const [info, setInfo] = useState<{
    dataList: number[];
    renderList: React.ReactNode[];
  }>({
    dataList: new Array(RENDERERMAX).fill(1),
    renderList: [],
  });

  function renderNewList(index: number) {
    const list = info.dataList.slice(
      (index - 1) * RENDERERLIMIT,
      index * RENDERERLIMIT
    );

    return (
      <Fragment key={index}>
        {list.map((_, index) => (
          <Circle key={index} />
        ))}
      </Fragment>
    );
  }

  function toRenderList(index: number) {
    if (!index || index > Math.ceil(RENDERERMAX / RENDERERLIMIT)) return;

    // [纯函数](https://zh-hans.react.dev/learn/keeping-components-pure#side-effects-unintended-consequences)
    setInfo((prev) => ({
      ...prev,
      renderList: [...prev.renderList, renderNewList(index)],
    }));

    // [requestIdleCallback](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback)
    requestIdleCallback(() => {
      toRenderList(++index);
    });
  }

  // [useEffect](https://zh-hans.react.dev/reference/react/useEffect#my-effect-runs-twice-when-the-component-mounts)
  useEffect(() => {
    if (show) toRenderList(1);
  }, [show]);

  return (
    <div className="flex flex-wrap">
      {info.renderList}
    </div>
  );
};

export const Application = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="pb-10 flex gap-4">
        <button onClick={() => setShow(true)}>执行长任务</button>
        <button onClick={() => message.success("点击了Other")}>Other</button>
      </div>
      <Container show={show} />
    </>
  );
};

~~~

