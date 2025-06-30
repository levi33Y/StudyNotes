# 會議中

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



~~~mermaid

~~~

