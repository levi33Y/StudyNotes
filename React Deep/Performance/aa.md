```
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