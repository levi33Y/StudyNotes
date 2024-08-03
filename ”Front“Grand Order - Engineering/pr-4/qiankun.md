# 使用Single-spa/Qiankun来对前后台耦合的项目改写为spa应用



## 主应用配置

以vite构建的主项目为例，实际上主项目的技术差异并不会造成配置上有差异



#### 安装 `yarn add qiankun`



#### 修改src下的入口文件 main.tsx

```ts
import {registerMicroApps, start} from "qiankun";

registerMicroApps([
  {
    name: "qiankunReactBg", // 子应用的名称，必须唯一。
    entry: "http://localhost:3332", // 子应用项目本地运行地址
    container: "#qiankunReactBg", //  子应用的容器（子应用嵌入到主项目id为container的容器）

    activeRule: "/micro", // 子应用激活时的路由规则（子应用路由）
  },
]);

start();
```



#### 为子应用创建容器

举例用路由控制

`router/index.tsx`

~~~ts
const routes: RouteObject = {
    path: "/",
    children: [
        {index: true, element: <Navigate to={"/frontDesk"}/>},
        {
          ......,
        },
      //子应用路由
        {
            path: "/micro/*",
            element: <Micro/>
        }
    ],
}
~~~



`micro.tsx`

~~~ts
return (
    <div className="w-full h-screen">
      <div id="qiankunReactBg"/>
    </div>
);
~~~





## webpack子应用项目



#### index.tsx导出声明周期 



#### packge.json配置

react-app-rewired插件



#### 重写webpack信息



## vite子应用项目

#### 安装 qiankuan、[vite-plugin-qiankun](https://github.com/tengmaoqing/vite-plugin-qiankun)

~~~shell
yarn add qiankun

yarn add vite-plugin-qiankun
~~~





#### 配置vite.config.ts

```ts
import qiankun from 'vite-plugin-qiankun';

export default defineConfig({
    plugins: [
        react(),
        qiankun(
            `qiankunReactBg`,
            {useDevMode: true}
        )],
    server: {
        cors: true,
        proxy: {
          ......,
        },
    },
  	......,
});
```



#### 修改src 入口main.tsx文件

~~~ts
import ReactDOM, {Root} from "react-dom/client";
import "./index.css";
import "./antd.css";
import {App} from "./app";
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let root: Root | null = null

function render(props:any) {
    const {container} = props;

    root = root || ReactDOM.createRoot(container ?
        container.querySelector("#root") :
        document.getElementById("root"));

    root.render(<App/>);
}

renderWithQiankun({
    mount(props) {
        render(props)
    },
    bootstrap() {
        console.log('%c%s', 'color: green;', 'vue3.0 app bootstraped')
    },
    unmount() {
        root?.unmount();
        root = null;
    },
    update() {
        console.log('update')
    }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    console.log(12312312)
    render({});
}

~~~



#### 修改router/index.tsx路由
