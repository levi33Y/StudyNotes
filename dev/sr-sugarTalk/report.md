2025/3/20

主题：sugartalk反馈

要点：

共享电脑音频：

windows系统在实现共享电脑音频时，使用web api难以隔离sugartalk自身应用部分的音频，导致其他参会人出现回声现象（存在也把其他参会人说话的声音也共享出去的情况）。所以想要使用这个功能就需要额外去安装音频驱动，windows和mac系统的音频驱动是不一样的，这个在使用的过程中会指引用户去安装不同系统的音频驱动。现在用户提出window会有一个问题就是在安装去使用这个驱动的时候需要管理员权限，但是有些同事是没有这个管理账号密码的。

目前想到的一种解决方案是：现在想到的就是op统一给windows的用户安装那个windows的音频驱动，应该就可以解决到这个问题



过滤窗口：

用户想要实现跟腾讯会议那一种共享屏幕后除了共享的人外其他参会人看不到腾讯会议的窗口，但是web api在获取桌面媒体流的时候时没有配置支持去过滤某个应用的窗口包括自己本应用的窗口。

总结：所以这个功能目前是实现不到的



批注功能：
因为换了新ui后，批注功能的逻辑需要重新调整。如果用户在共享桌面是共享整个屏幕的话，只需要将批注的画板覆盖在整个屏幕上，就可以实现共享端显示批注内容；但是如果是共享某个窗口的话，因为目前暂时也没有什么可用的第三方可以去定位到其他窗口应用在显示屏上面的位置，所以在共享端中，将批注画板覆盖在其他窗口上显示批注内容这个也是比较难实现的。

总结：共享整个屏幕可以实现，但是共享某个应用的窗口暂时无法实现





```
120.230.118.206
```

file:///Applications/SugarTalk.app/Contents/Resources/app.asar/dist/index.html#/room

file:///Applications/SugarTalk.app/Contents/Resources/app.asar/dist/index.html#/room?autoAudio=true&microphone=false&enableCamera=false&userName=Jessica.F&isDropdownVisible=false&meetingNumber=58652&isMuted=true&meetingStreamMode=1

k1mqkcX91XplLnl7nwF5o9690tm6



服务器部署环境：mindy的mac
測試人員:20
测试时常：5分钟

编码器1：vp9（目前用户使用的版本）
测试情况1：不共享屏幕，20人同时开麦，声音正常
测试情况2：共享屏幕，20人同时开麦，画面卡顿，共享人听到的声音杂音

编码器2：vp8
测试情况1：不共享屏幕，20人同时开麦，声音正常
测试情况2：共享屏幕，20人同时开麦，画面播放较稳定，声音都正常

编码器3：h264
测试情况1：不共享屏幕，20人同时开麦，声音正常
测试情况2：共享屏幕，20人同时开麦，画面卡顿，有点杂音

测试下来感觉vp8的效果会比较稳定些



## 系统架构图

### 打开应用

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

### 会议中

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

UserA->>LiveKit: 发布音轨
LiveKit-->>UserB: 订阅 UserA 的音轨
UserB->>UserB: 监听streamList变化，创建<audio>元素播放音频
UserB->>LiveKit: 发布音轨
LiveKit-->>UserA: 订阅 UserB 的音轨
UserA->>UserA: 监听streamList变化，创建<audio>元素播放音频

UserC->>Signaling: 加入房间请求 (roomid)
Signaling-->>UserC: 加入房间响应 (token)
UserC->>LiveKit: 连接 LiveKit
LiveKit-->>UserC: 订阅 UserA 的音轨
UserC->>UserC: 监听streamList变化，创建<audio>元素播放音频
LiveKit-->>UserC: 订阅 UserB 的音轨
UserC->>UserC: 监听streamList变化，创建<audio>元素播放音频

UserC->>LiveKit: 发布音轨
LiveKit-->>UserA: 订阅 UserC 的音轨
UserA->>UserA: 监听streamList变化，创建<audio>元素播放音频
LiveKit-->>UserB: 订阅 UserC 的音轨
UserB->>UserB: 监听streamList变化，创建<audio>元素播放音频

UserA->>LiveKit: 设置麦克风音频流静音
LiveKit-->>UserB: 静音默认取消订阅流
UserB->>UserB: 监听streamList变化，销毁对应的<audio>元素
LiveKit-->>UserC: 静音默认取消订阅流
UserC->>UserC: 监听streamList变化，销毁对应的<audio>元素

UserA->>UserA: 获取本地屏幕视频流
UserA->>LiveKit: 共享屏幕
LiveKit-->>UserB: 订阅 UserA 的共享桌面视频流
UserB->>UserB: 创建vedio播放视频
LiveKit-->>UserC: 订阅 UserA 的共享桌面视频流
UserC->>UserC: 创建vedio播放视频
~~~



### 桌面软件架构

~~~mermaid
graph LR
    subgraph Electron 主进程
        A[窗口管理] --> B[渲染进程通信]
    end

    subgraph Electron 渲染进程
        C[Vue3 应用]
    end

    subgraph Vue3 应用
        D[房间管理组件] --> E[LiveKit 客户端]
        F[视频播放组件] <-- G[LiveKit 客户端]
        H[用户界面组件] --> E
    end

    I[信令服务器] --> D
    E --> J[LiveKit 服务器]
    J --> G

    B --> C
    C --> I
    C --> E

~~~

~~~mermaid
block-beta
  columns 3
  a:3
  block:group1:2
    columns 2
    h i j k
  end
  g
  block:group2:3
    %% columns auto (default)
    l m n o p q r
  end

~~~

