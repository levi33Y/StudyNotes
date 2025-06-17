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

    MainProcess->>MainProcess: 创建首页窗口 (BrowserWindow)
    MainProcess->>HomeRenderer: 加载 HTML (home.html)
    HomeRenderer->>HomeRenderer: 执行 JavaScript 代码
    HomeRenderer->>HomeRenderer: 加载 CSS 样式
    HomeRenderer->>HomeRenderer: 渲染首页界面
    HomeRenderer-->>MainProcess: 通知窗口已准备好 (did-finish-load)
    MainProcess->>HomeWindow: 显示首页窗口

    User->>HomeWindow: 点击 "加入会议" 按钮
    HomeWindow-->>HomeRenderer: 用户操作传递给渲染进程
    HomeRenderer->>HomeRenderer: 处理用户交互
    HomeRenderer->>MainProcess: 发送 "加入会议" 请求 (IPC)

    MainProcess->>MainProcess: 收到 "加入会议" 请求
    MainProcess->>MainProcess: 创建房间窗口 (BrowserWindow)
    MainProcess->>RoomRenderer: 加载 HTML (room.html)
    RoomRenderer->>RoomRenderer: 执行 JavaScript 代码
    RoomRenderer->>RoomRenderer: 加载 CSS 样式
    RoomRenderer->>RoomRenderer: 渲染房间界面
    RoomRenderer-->>MainProcess: 通知窗口已准备好 (did-finish-load)
    MainProcess->>RoomWindow: 显示房间窗口

    User->>RoomWindow: 与房间窗口交互
    RoomWindow-->>RoomRenderer: 用户操作传递给渲染进程
    RoomRenderer->>RoomRenderer: 处理用户交互
    RoomRenderer->>MainProcess: 发送 IPC 消息 (可选)
    MainProcess->>RoomRenderer: 发送 IPC 消息 (可选)
    RoomRenderer->>RoomWindow: 更新用户界面
         
~~~



会议时序图

~~~mermaid
sequenceDiagram
    participant UserA as Clinet A
    participant UserB as Clinet B
    participant UserC as Clinet C
    participant LiveKit as LiveKitSever
    participant Signaling as API

    UserA->>Signaling: 加入房间请求 (roomid)
    Signaling-->>UserA: 加入房间响应 (token)
    UserA->>LiveKit: 连接 LiveKit

    UserB->>Signaling: 加入房间请求 (roomid)
    Signaling-->>UserB: 加入房间响应 (token)
    UserB->>LiveKit: 连接 LiveKit

    UserA->>LiveKit: 发布音频流
    LiveKit->>UserB: 订阅 UserA 的音视频流
    UserB->>UserB: 创建audio播放UserA音频流
    UserB->>LiveKit: 发布音频流
    LiveKit->>UserA: 订阅 UserB 的音视频流
    UserA->>UserA: 创建audio播放UserB音频流

    UserC->>Signaling: 加入房间请求 (roomid)
    Signaling-->>UserC: 加入房间响应 (token)
    UserC->>LiveKit: 连接 LiveKit
    LiveKit->>UserC: 订阅 UserA 的音视频流
    LiveKit->>UserC: 订阅 UserB 的音视频流

    UserC->>LiveKit: 发布音频流
    LiveKit->>UserA: 订阅 UserC 的音视频流
    UserA->>UserA: 创建audio播放UserC音频流
    LiveKit->>UserB: 订阅 UserC 的音视频流
    UserB->>UserB: 创建audio播放UserC音频流

~~~





## -

- [`app`](https://www.electronjs.org/zh/docs/latest/api/app) 模块，它控制应用程序的事件生命周期。
- [`BrowserWindow`](https://www.electronjs.org/zh/docs/latest/api/browser-window) 模块，它创建和管理应用程序 窗口。

**预加载** 脚本加载

- 脚本在渲染器进程加载之前加载，并有权访问两个 渲染器全局 (例如 `window` 和 `document`) 和 Node.js 环境。

node运行

- [`__dirname`](https://nodejs.org/api/modules.html#modules_dirname) 字符串指向当前正在执行脚本的路径 (在本例中，它指向你的项目的根文件夹)。
- [`path.join`](https://nodejs.org/api/path.html#path_path_join_paths) API 将多个路径联结在一起，创建一个跨平台的路径字符串。

