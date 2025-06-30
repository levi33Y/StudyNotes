# run



应用运行时序图

~~~mermaid
sequenceDiagram
    participant MainProcess as 主进程
    participant HomeRenderer as 首页渲染进程
    participant HomeWindow as 首页窗口
    participant RoomRenderer as 房间渲染进程
    participant RoomWindow as 房间窗口
    participant User as 用户

		MainProcess->>MainProcess: 初始化主进程
    MainProcess->>HomeWindow: new BrowserWindow() 创建首页窗口
    MainProcess->>HomeRenderer: win.loadFile() 加载（）资源
    HomeRenderer-->>HomeRenderer: 解析（）资源
    HomeRenderer-->>HomeRenderer: 路由解析
    HomeRenderer-->>HomeWindow: 渲染页面

    User->>HomeWindow: 加入会议
    HomeWindow ->> HomeRenderer: window.api
    HomeRenderer ->> MainProcess: ipc
    MainProcess->>RoomWindow: new BrowserWindow() 创建首页窗口
    MainProcess->>RoomRenderer: win.loadFile() 加载（）资源
    RoomRenderer-->>RoomRenderer: 解析（）资源
    RoomRenderer-->>RoomRenderer: 路由解析
    RoomRenderer-->>RoomWindow: 渲染页面
         
~~~







## -

- [`app`](https://www.electronjs.org/zh/docs/latest/api/app) 模块，它控制应用程序的事件生命周期。
- [`BrowserWindow`](https://www.electronjs.org/zh/docs/latest/api/browser-window) 模块，它创建和管理应用程序 窗口。

**预加载** 脚本加载

- 脚本在渲染器进程加载之前加载，并有权访问两个 渲染器全局 (例如 `window` 和 `document`) 和 Node.js 环境。

node运行

- [`__dirname`](https://nodejs.org/api/modules.html#modules_dirname) 字符串指向当前正在执行脚本的路径 (在本例中，它指向你的项目的根文件夹)。
- [`path.join`](https://nodejs.org/api/path.html#path_path_join_paths) API 将多个路径联结在一起，创建一个跨平台的路径字符串。

