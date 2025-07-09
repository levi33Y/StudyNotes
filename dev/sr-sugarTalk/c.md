系统架构

~~~
block-beta
columns 1

block
    columns 3
    首页窗口 
    会议窗口 
    ...
end
  

block
    columns 3
    block
        columns 1
        登陆页面组件 房间页面组件...
    end
    pinia状态管理
    livekitJdk
end


block
    columns 3
    livekitServer
    后端接口
    webApi
end

block
    columns 2
    ElectronAPI
    windowManagement
end

~~~



核心业务时序

~~~
sequenceDiagram
    participant MainProcess as 主进程
    participant HomeRenderer as 首页渲染进程
    participant HomeWindow as 首页窗口
    participant RoomRenderer as 房间渲染进程
    participant RoomWindow as 房间窗口
    participant User as 用户

		MainProcess->>MainProcess: 初始化主进程
    MainProcess->>HomeWindow: new BrowserWindow创建首页窗口
    MainProcess->>HomeRenderer: win.loadFile加载dist资源
    HomeRenderer-->>HomeRenderer: 路由解析
    HomeRenderer-->>HomeWindow: 渲染首页UI

    User->>HomeRenderer: 加入会议
    HomeRenderer ->> MainProcess: 通过preload暴露的API调用主进程
    MainProcess->>RoomWindow: new BrowserWindow 创建首页窗口
    MainProcess->>RoomRenderer: win.loadFile加载dist资源
    RoomRenderer-->>RoomRenderer: 路由解析
    RoomRenderer-->>RoomWindow: 渲染房间UI
~~~



~~~
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



功能模块架构

~~~mermaid
mindmap
  root((sugartalk))
    登陆
    	输入帐号<br/>密码
    	点击登陆<br/>登陆应用
    加入会议/快速会议
    	快速会议<br/>创建房间并<br/>加入会议
    	输入会议号加入会议
    	选择预定会议加入会议
    预定会议
    	创建预定会议
    	设置会议初始化设置
    	指定会议参会人
    	首页查看<br/>预定会议<br/>列表
    	点击入会进入预定会议
    历史会议
    	查看历史会议
    	查看会议详情
    	重新选择入会
    	打开会议录制
    录制
    	查看会中录制内容
    	查看录制<br/>详情
    设置
    	设置本地<br/>应用设置
~~~



## 模块详情

核心架构

~~~mermaid
mindmap
  root((应用核心))
    vue
    	vue router
    	vue components
    	
    vite
    	构建静态html/css/js资源
   	Electron
    	fs
    	electron builder
    	electron api
    livekit sdk js
    	connect
    	Room Event
    	Participant Event
    axios
    	api
    
~~~



模块详情

src/screens/room/
- 连接房间
- 使用麦克风
- 使用摄像头
- 屏幕共享
- 互动批注
- 成员管理
- 会议录制

src/screens/home/

- 查看预定会议列表
- 创建快速会议

src/screens/join-meeting/

- 输入会议号进入会议

src/screens/schedule-meeting/

- 创建预定会议
- 修改预定会周期信息
- 修改预定会议房间设置
- 指定会议参会人

scr/screens/history-meeting/

- 查看历史会议记录
- 重新入会

scr/screens/intelligent-list/

- 查看会议录制记录
- 导出会议转写和纪要

scr/screens/login/

- 登陆

scr/screens/setting/

- 房间设置
- 应用媒体设置
- 关于我们

scr/screens/invite/

- 查看会议信息和网页链接











### 会议模块

~~~
├─ src
│  ├─ screens
│  │  ├─ room
│  │  │  ├─ components
│  │  │  │  ├─ action-btn
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ audio-manage
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ audio-player
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ echo-avatar
│  │  │  │  │  ├─ components
│  │  │  │  │  │  ├─ chat
│  │  │  │  │  │  │  ├─ index.scss
│  │  │  │  │  │  │  └─ index.vue
│  │  │  │  │  │  └─ footer
│  │  │  │  │  │     ├─ index.scss
│  │  │  │  │  │     └─ index.vue
│  │  │  │  │  ├─ hooks.ts
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  ├─ index.vue
│  │  │  │  │  └─ props.ts
│  │  │  │  ├─ echo-avatar-btn
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ footer
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ fullscreen
│  │  │  │  │  ├─ hooks.ts
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ invite
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ leave-meeting
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ member
│  │  │  │  │  ├─ components
│  │  │  │  │  │  └─ user
│  │  │  │  │  │     ├─ index.scss
│  │  │  │  │  │     └─ index.vue
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ message-pop
│  │  │  │  ├─ network
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ participate-duration
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ player
│  │  │  │  │  ├─ hooks.ts
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ recording
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ room-tab
│  │  │  │  │  ├─ hook.ts
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  ├─ index.vue
│  │  │  │  │  └─ props.ts
│  │  │  │  ├─ screen-share
│  │  │  │  │  ├─ components
│  │  │  │  │  │  ├─ footer
│  │  │  │  │  │  │  ├─ index.scss
│  │  │  │  │  │  │  └─ index.vue
│  │  │  │  │  │  ├─ screen
│  │  │  │  │  │  │  ├─ index.scss
│  │  │  │  │  │  │  └─ index.vue
│  │  │  │  │  │  └─ tabs
│  │  │  │  │  │     ├─ index.scss
│  │  │  │  │  │     └─ index.vue
│  │  │  │  │  ├─ hooks.ts
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ screen-share-btn
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ screen-share-menu
│  │  │  │  │  ├─ hooks.ts
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  ├─ index.vue
│  │  │  │  │  └─ props.ts
│  │  │  │  ├─ secure-btn
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ speaking
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ status-bar
│  │  │  │  │  ├─ components
│  │  │  │  │  │  └─ meeting-info
│  │  │  │  │  │     ├─ index.scss
│  │  │  │  │  │     └─ index.vue
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ tool-btn
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ user-list
│  │  │  │  │  ├─ components
│  │  │  │  │  │  └─ user
│  │  │  │  │  │     ├─ index.scss
│  │  │  │  │  │     └─ index.vue
│  │  │  │  │  ├─ hooks.ts
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ user-list-wait
│  │  │  │  ├─ user-panel
│  │  │  │  │  ├─ components
│  │  │  │  │  │  └─ user
│  │  │  │  │  │     ├─ index.scss
│  │  │  │  │  │     └─ index.vue
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ video-manage
│  │  │  │  │  └─ index.vue
│  │  │  │  └─ waiting-panel
│  │  │  │     ├─ index.vue
│  │  │  │     ├─ waiting-panel-audio.vue
│  │  │  │     └─ waiting-panel-video.vue
│  │  │  ├─ hooks.ts
│  │  │  ├─ index.scss
│  │  │  ├─ index.vue
│  │  │  ├─ loading.vue
│  │  │  ├─ props.ts
│  │  │  └─ utils.ts
│  │  ├─ room-member-list
│  │  │  ├─ hook.ts
│  │  │  ├─ index.scss
│  │  │  └─ index.vue
│  │  ├─ screen-share-canvas
│  │  │  ├─ hook.ts
│  │  │  ├─ index.scss
│  │  │  ├─ index.vue
│  │  │  └─ props.ts
│  │  ├─ screen-share-dialog
│  │  │  ├─ components
│  │  │  │  ├─ app-screen
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  └─ screen-tabs
│  │  │  │     ├─ index.scss
│  │  │  │     └─ index.vue
│  │  │  ├─ hook.ts
│  │  │  ├─ index.scss
│  │  │  └─ index.vue
~~~

src/screen/meeting

scr/screen/room-leave-dialog

scr/screen/screen-name

scr/screen/screen-border

~~~shell
sugartalk
├─ Dockerfile
├─ electron
│  ├─ electron-env.d.ts
│  ├─ main
│  │  ├─ Timer.ts
│  │  ├─ auto-updater.ts
│  │  ├─ handle.ts
│  │  ├─ index.ts
│  │  └─ utils.ts
│  └─ preload
│     └─ index.ts
├─ electron-builder.yaml
├─ electron-test-builder.yaml
├─ index.html
├─ makefile
├─ nginx.conf
├─ package.json
├─ scripts
│  ├─ changArms.js
│  └─ changeBuild.js
├─ src
│  ├─ App.vue
│  ├─ arms
│  │  ├─ arms.json
│  │  └─ index.ts
│  ├─ assets
│  │  ├─ images
│  │  │  ├─ echo-avatar.png
│  │  │  ├─ facebook.png
│  │  │  ├─ google.png
│  │  │  ├─ icon-ea.png
│  │  │  ├─ invite-logo.png
│  │  │  ├─ metis-logo.jpg
│  │  │  ├─ not-found.png
│  │  │  ├─ sugarTalkLogo.png
│  │  │  └─ wechat.png
│  │  └─ locales
│  │     └─ sourcehansansk.ts
│  ├─ components
│  │  ├─ arms
│  │  │  └─ index.vue
│  │  ├─ avatar
│  │  │  ├─ index.scss
│  │  │  └─ index.vue
│  │  ├─ common-dialog
│  │  │  ├─ index.scss
│  │  │  └─ index.vue
│  │  ├─ confirm-dialog
│  │  │  ├─ index.scss
│  │  │  └─ index.vue
│  │  ├─ dialog-window
│  │  │  ├─ index.scss
│  │  │  └─ index.vue
│  │  ├─ drawing-board
│  │  │  ├─ components
│  │  │  │  ├─ brush-status
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ drawing-tools
│  │  │  │  │  ├─ hooks.ts
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  └─ laser-point
│  │  │  │     ├─ hooks.ts
│  │  │  │     ├─ index.scss
│  │  │  │     └─ index.vue
│  │  │  ├─ hooks.ts
│  │  │  ├─ index.scss
│  │  │  ├─ index.vue
│  │  │  └─ utils.ts
│  │  ├─ header
│  │  │  ├─ index.scss
│  │  │  └─ index.vue
│  │  ├─ member-list
│  │  │  ├─ hook.ts
│  │  │  ├─ index.scss
│  │  │  ├─ index.vue
│  │  │  ├─ member-list-avatar.vue
│  │  │  ├─ member-list-meeting.vue
│  │  │  ├─ member-list-microphone.vue
│  │  │  ├─ member-list-tab.vue
│  │  │  ├─ member-list-wait.vue
│  │  │  ├─ props.ts
│  │  │  └─ utlis.ts
│  │  ├─ microphone
│  │  │  └─ index.vue
│  │  ├─ screen
│  │  │  ├─ index.scss
│  │  │  └─ index.vue
│  │  ├─ traffic-light
│  │  │  ├─ index.scss
│  │  │  └─ index.vue
│  │  ├─ transfer-dialog
│  │  └─ watermark
│  │     └─ index.vue
│  ├─ config
│  │  ├─ config.json
│  │  └─ index.ts
│  ├─ dependencies.d.ts
│  ├─ directives
│  │  ├─ index.scss
│  │  └─ index.ts
│  ├─ entity
│  │  ├─ enum.ts
│  │  ├─ response.ts
│  │  └─ types.ts
│  ├─ hooks
│  │  ├─ useGetFrequencyByParticipantStream.ts
│  │  ├─ useMessage.ts
│  │  ├─ useNavigation.ts
│  │  ├─ useReload.ts
│  │  ├─ useScroll.ts
│  │  └─ userGetFrequency.ts
│  ├─ icon
│  │  ├─ avatar
│  │  │  └─ index.vue
│  │  ├─ chevron-down-double
│  │  │  └─ index.vue
│  │  ├─ chevron-right-s
│  │  │  └─ index.vue
│  │  ├─ chevron-up-double
│  │  │  └─ index.vue
│  │  ├─ close
│  │  │  └─ index.vue
│  │  ├─ copy
│  │  │  └─ index.vue
│  │  ├─ draw-edit
│  │  │  └─ index.vue
│  │  ├─ echo-avatar
│  │  │  ├─ index.scss
│  │  │  └─ index.vue
│  │  ├─ edit
│  │  │  └─ index.vue
│  │  ├─ ellipsis
│  │  │  └─ index.vue
│  │  ├─ help-circle
│  │  │  └─ index.vue
│  │  ├─ invite
│  │  │  └─ index.vue
│  │  ├─ logo
│  │  │  └─ index.vue
│  │  ├─ mute
│  │  │  └─ index.vue
│  │  ├─ people
│  │  │  └─ index.vue
│  │  ├─ recording
│  │  │  └─ index.vue
│  │  ├─ search
│  │  │  └─ index.vue
│  │  ├─ secure
│  │  │  └─ index.vue
│  │  ├─ setting
│  │  │  └─ index.vue
│  │  ├─ share
│  │  │  └─ index.vue
│  │  ├─ share-screen
│  │  │  └─ index.vue
│  │  ├─ translate
│  │  │  └─ index.vue
│  │  ├─ user-add
│  │  │  └─ index.vue
│  │  ├─ video
│  │  │  └─ index.vue
│  │  ├─ video-close
│  │  │  └─ index.vue
│  │  └─ warring
│  │     └─ index.vue
│  ├─ main.ts
│  ├─ renderer.d.ts
│  ├─ router
│  │  ├─ index.ts
│  │  └─ routes.ts
│  ├─ screens
│  │  ├─ feedback-list
│  │  │  ├─ hook.ts
│  │  │  ├─ index.scss
│  │  │  ├─ index.vue
│  │  │  └─ props.ts
│  │  ├─ history-meeting
│  │  │  ├─ hooks.ts
│  │  │  ├─ index.scss
│  │  │  └─ index.vue
│  │  ├─ home
│  │  │  ├─ components
│  │  │  │  ├─ join-btn
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ meeting-minutes
│  │  │  │  │  ├─ hooks.ts
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  └─ user-info
│  │  │  │     ├─ hooks.ts
│  │  │  │     ├─ index.scss
│  │  │  │     └─ index.vue
│  │  │  ├─ hooks.ts
│  │  │  ├─ index.scss
│  │  │  └─ index.vue
│  │  ├─ intelligent-detail
│  │  │  ├─ components
│  │  │  │  ├─ intelligent-menu-button
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ intelligent-message
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ intelligent-result
│  │  │  │  │  ├─ hooks.ts
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  └─ intelligent-summary
│  │  │  │     ├─ index.scss
│  │  │  │     └─ index.vue
│  │  │  ├─ hooks.ts
│  │  │  ├─ index.scss
│  │  │  ├─ index.vue
│  │  │  └─ props.ts
│  │  ├─ intelligent-list
│  │  │  ├─ hooks.ts
│  │  │  ├─ index.scss
│  │  │  └─ index.vue
│  │  ├─ invite
│  │  │  ├─ hooks.ts
│  │  │  ├─ index.scss
│  │  │  └─ index.vue
│  │  ├─ join-meeting
│  │  │  ├─ hooks.ts
│  │  │  ├─ index.scss
│  │  │  └─ index.vue
│  │  ├─ login
│  │  │  ├─ hooks.ts
│  │  │  ├─ index.scss
│  │  │  └─ index.vue
│  │  ├─ meeting
│  │  │  ├─ components
│  │  │  │  ├─ action-btn
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ audio-manage
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ chat
│  │  │  │  │  ├─ components
│  │  │  │  │  │  ├─ image
│  │  │  │  │  │  │  ├─ index.scss
│  │  │  │  │  │  │  └─ index.vue
│  │  │  │  │  │  └─ message
│  │  │  │  │  │     ├─ index.scss
│  │  │  │  │  │     └─ index.vue
│  │  │  │  │  ├─ hooks.ts
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  ├─ index.vue
│  │  │  │  │  └─ props.ts
│  │  │  │  ├─ drawing-board
│  │  │  │  │  ├─ components
│  │  │  │  │  │  ├─ brush-status
│  │  │  │  │  │  │  ├─ index.scss
│  │  │  │  │  │  │  └─ index.vue
│  │  │  │  │  │  ├─ drawing-tools
│  │  │  │  │  │  │  ├─ hooks.ts
│  │  │  │  │  │  │  ├─ index.scss
│  │  │  │  │  │  │  └─ index.vue
│  │  │  │  │  │  ├─ laser-point
│  │  │  │  │  │  │  ├─ hooks.ts
│  │  │  │  │  │  │  ├─ index.scss
│  │  │  │  │  │  │  └─ index.vue
│  │  │  │  │  │  └─ share-bar
│  │  │  │  │  │     ├─ index.scss
│  │  │  │  │  │     └─ index.vue
│  │  │  │  │  ├─ hooks.ts
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  ├─ index.vue
│  │  │  │  │  ├─ props.ts
│  │  │  │  │  └─ utils.ts
│  │  │  │  ├─ footer
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ invite
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ leave-meeting
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ member
│  │  │  │  │  ├─ components
│  │  │  │  │  │  └─ user
│  │  │  │  │  │     ├─ index.scss
│  │  │  │  │  │     └─ index.vue
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ player
│  │  │  │  │  ├─ hooks.ts
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ screen-share
│  │  │  │  │  ├─ components
│  │  │  │  │  │  ├─ footer
│  │  │  │  │  │  │  ├─ index.scss
│  │  │  │  │  │  │  └─ index.vue
│  │  │  │  │  │  ├─ screen
│  │  │  │  │  │  │  ├─ index.scss
│  │  │  │  │  │  │  └─ index.vue
│  │  │  │  │  │  └─ tabs
│  │  │  │  │  │     ├─ index.scss
│  │  │  │  │  │     └─ index.vue
│  │  │  │  │  ├─ hooks.ts
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ speaking
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ status-bar
│  │  │  │  │  ├─ components
│  │  │  │  │  │  ├─ fullscreen
│  │  │  │  │  │  │  ├─ hooks.ts
│  │  │  │  │  │  │  └─ index.vue
│  │  │  │  │  │  ├─ meeting-duration
│  │  │  │  │  │  │  ├─ index.scss
│  │  │  │  │  │  │  └─ index.vue
│  │  │  │  │  │  ├─ meeting-info
│  │  │  │  │  │  │  ├─ index.scss
│  │  │  │  │  │  │  └─ index.vue
│  │  │  │  │  │  └─ network
│  │  │  │  │  │     ├─ index.scss
│  │  │  │  │  │     └─ index.vue
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ user-list
│  │  │  │  │  ├─ components
│  │  │  │  │  │  └─ user
│  │  │  │  │  │     ├─ index.scss
│  │  │  │  │  │     └─ index.vue
│  │  │  │  │  ├─ hooks.ts
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ user-panel
│  │  │  │  │  ├─ components
│  │  │  │  │  │  └─ user
│  │  │  │  │  │     ├─ index.scss
│  │  │  │  │  │     └─ index.vue
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  └─ video-manage
│  │  │  │     └─ index.vue
│  │  │  ├─ hooks.ts
│  │  │  ├─ index.scss
│  │  │  └─ index.vue
│  │  ├─ meeting-detail
│  │  │  ├─ hooks.ts
│  │  │  ├─ index.scss
│  │  │  └─ index.vue
│  │  ├─ meeting-dropdown-menu
│  │  │  └─ index.vue
│  │  ├─ meeting-member
│  │  │  ├─ index.scss
│  │  │  └─ index.vue
│  │  ├─ room
│  │  │  ├─ components
│  │  │  │  ├─ action-btn
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ audio-manage
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ audio-player
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ echo-avatar
│  │  │  │  │  ├─ components
│  │  │  │  │  │  ├─ chat
│  │  │  │  │  │  │  ├─ index.scss
│  │  │  │  │  │  │  └─ index.vue
│  │  │  │  │  │  └─ footer
│  │  │  │  │  │     ├─ index.scss
│  │  │  │  │  │     └─ index.vue
│  │  │  │  │  ├─ hooks.ts
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  ├─ index.vue
│  │  │  │  │  └─ props.ts
│  │  │  │  ├─ echo-avatar-btn
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ footer
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ fullscreen
│  │  │  │  │  ├─ hooks.ts
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ invite
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ leave-meeting
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ member
│  │  │  │  │  ├─ components
│  │  │  │  │  │  └─ user
│  │  │  │  │  │     ├─ index.scss
│  │  │  │  │  │     └─ index.vue
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ message-pop
│  │  │  │  ├─ network
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ participate-duration
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ player
│  │  │  │  │  ├─ hooks.ts
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ recording
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ room-tab
│  │  │  │  │  ├─ hook.ts
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  ├─ index.vue
│  │  │  │  │  └─ props.ts
│  │  │  │  ├─ screen-share
│  │  │  │  │  ├─ components
│  │  │  │  │  │  ├─ footer
│  │  │  │  │  │  │  ├─ index.scss
│  │  │  │  │  │  │  └─ index.vue
│  │  │  │  │  │  ├─ screen
│  │  │  │  │  │  │  ├─ index.scss
│  │  │  │  │  │  │  └─ index.vue
│  │  │  │  │  │  └─ tabs
│  │  │  │  │  │     ├─ index.scss
│  │  │  │  │  │     └─ index.vue
│  │  │  │  │  ├─ hooks.ts
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ screen-share-btn
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ screen-share-menu
│  │  │  │  │  ├─ hooks.ts
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  ├─ index.vue
│  │  │  │  │  └─ props.ts
│  │  │  │  ├─ secure-btn
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ speaking
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ status-bar
│  │  │  │  │  ├─ components
│  │  │  │  │  │  └─ meeting-info
│  │  │  │  │  │     ├─ index.scss
│  │  │  │  │  │     └─ index.vue
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ tool-btn
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ user-list
│  │  │  │  │  ├─ components
│  │  │  │  │  │  └─ user
│  │  │  │  │  │     ├─ index.scss
│  │  │  │  │  │     └─ index.vue
│  │  │  │  │  ├─ hooks.ts
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ user-list-wait
│  │  │  │  ├─ user-panel
│  │  │  │  │  ├─ components
│  │  │  │  │  │  └─ user
│  │  │  │  │  │     ├─ index.scss
│  │  │  │  │  │     └─ index.vue
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ video-manage
│  │  │  │  │  └─ index.vue
│  │  │  │  └─ waiting-panel
│  │  │  │     ├─ index.vue
│  │  │  │     ├─ waiting-panel-audio.vue
│  │  │  │     └─ waiting-panel-video.vue
│  │  │  ├─ hooks.ts
│  │  │  ├─ index.scss
│  │  │  ├─ index.vue
│  │  │  ├─ loading.vue
│  │  │  ├─ props.ts
│  │  │  └─ utils.ts
│  │  ├─ room-leave-dialog
│  │  │  └─ index.vue
│  │  ├─ room-member-list
│  │  │  ├─ hook.ts
│  │  │  ├─ index.scss
│  │  │  └─ index.vue
│  │  ├─ schedule-meeting
│  │  │  ├─ hooks.ts
│  │  │  ├─ index.scss
│  │  │  ├─ index.vue
│  │  │  └─ props.ts
│  │  ├─ schedule-meeting-cycle
│  │  │  ├─ components
│  │  │  │  ├─ monthly-option
│  │  │  │  │  └─ index.vue
│  │  │  │  └─ weekly-option
│  │  │  │     └─ index.vue
│  │  │  ├─ hooks.ts
│  │  │  ├─ index.scss
│  │  │  ├─ index.vue
│  │  │  └─ props.ts
│  │  ├─ schedule-meeting-detail
│  │  │  ├─ hook.ts
│  │  │  ├─ index.scss
│  │  │  └─ index.vue
│  │  ├─ schedule-meeting-host
│  │  │  ├─ hooks.ts
│  │  │  ├─ index.scss
│  │  │  └─ index.vue
│  │  ├─ schedule-meeting-participant
│  │  │  ├─ hooks.ts
│  │  │  ├─ index.scss
│  │  │  ├─ index.vue
│  │  │  └─ props.ts
│  │  ├─ schedule-meeting-setting
│  │  │  ├─ hooks.ts
│  │  │  ├─ index.scss
│  │  │  ├─ index.vue
│  │  │  └─ props.ts
│  │  ├─ screen-border
│  │  │  └─ index.vue
│  │  ├─ screen-name
│  │  │  └─ index.vue
│  │  ├─ screen-share-canvas
│  │  │  ├─ hook.ts
│  │  │  ├─ index.scss
│  │  │  ├─ index.vue
│  │  │  └─ props.ts
│  │  ├─ screen-share-dialog
│  │  │  ├─ components
│  │  │  │  ├─ app-screen
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  └─ screen-tabs
│  │  │  │     ├─ index.scss
│  │  │  │     └─ index.vue
│  │  │  ├─ hook.ts
│  │  │  ├─ index.scss
│  │  │  └─ index.vue
│  │  ├─ settings
│  │  │  ├─ components
│  │  │  │  ├─ about-us
│  │  │  │  │  ├─ hook.ts
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  ├─ index.vue
│  │  │  │  │  └─ props.ts
│  │  │  │  ├─ audio-manage
│  │  │  │  │  ├─ audio-manage.ts
│  │  │  │  │  ├─ hooks.ts
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ check-box
│  │  │  │  │  └─ index.vue
│  │  │  │  ├─ screen-settings
│  │  │  │  ├─ scroll
│  │  │  │  │  └─ index.vue
│  │  │  │  └─ settings
│  │  │  │     ├─ index.scss
│  │  │  │     └─ index.vue
│  │  │  ├─ index.scss
│  │  │  └─ index.vue
│  │  └─ version-update
│  │     ├─ hook.ts
│  │     ├─ index.scss
│  │     └─ index.vue
│  ├─ services
│  │  ├─ api
│  │  │  └─ api.ts
│  │  ├─ apis
│  │  │  ├─ account
│  │  │  │  ├─ index.ts
│  │  │  │  └─ types.ts
│  │  │  ├─ feedback
│  │  │  │  ├─ index.ts
│  │  │  │  └─ types.ts
│  │  │  ├─ foundation
│  │  │  │  ├─ index.ts
│  │  │  │  └─ types.ts
│  │  │  ├─ home
│  │  │  │  └─ index.ts
│  │  │  └─ meeting
│  │  │     ├─ index.ts
│  │  │     └─ types.ts
│  │  └─ index.ts
│  ├─ stores
│  │  ├─ index.ts
│  │  ├─ plugins
│  │  │  └─ pinia-plugin-communication.ts
│  │  ├─ useAppStore.ts
│  │  ├─ useDrawingStore.ts
│  │  ├─ useMeetingStore.ts
│  │  ├─ useScheduleStore.ts
│  │  └─ useSettingsStore.ts
│  ├─ styles
│  │  ├─ animation.css
│  │  ├─ element-theme.scss
│  │  ├─ index.scss
│  │  └─ var.css
│  ├─ utils
│  │  ├─ fileUtils.ts
│  │  ├─ livekit
│  │  │  └─ ParticipantStream.ts
│  │  ├─ loudness.ts
│  │  ├─ manage-devices.ts
│  │  ├─ media.ts
│  │  ├─ message-box.ts
│  │  ├─ moment.ts
│  │  ├─ utils.ts
│  │  └─ webrtc
│  │     ├─ media-manager.ts
│  │     ├─ soundmeter.ts
│  │     ├─ webrtc-adaptor.ts
│  │     └─ websocket-adaptor.ts
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
~~~



