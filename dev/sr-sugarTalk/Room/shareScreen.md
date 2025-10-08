共享窗口



其他窗口

 

electron窗体鼠标事件

透明边框 - 鼠标出入事件无法监听





## 应用全屏



level



全屏



roundedCorners 、 frame



鼠标抖动



窗口置顶



窗口边框



H262

bitsrate：屏幕分辨X2（倍数） 


## update-share-screen

### 共享屏幕

打开共享屏幕窗口

取消关闭共享屏幕窗口

推出会议关闭共享屏幕窗口

确认共享关闭共享屏幕窗口

窗口ui交互，大小固定，可拖拽

窗口UI：交通灯

### 房间菜单

主屏幕显示房间菜单

房间和菜单大小切换、位置切换

窗口层级置顶

结束共享关闭打开的窗口

菜单ui交互：鼠标事件显示与隐藏、可拖拽

窗口UI：交通灯、边框

### 互动批注

批注窗口透明显示

重新共享屏幕，窗口全屏位置更新，状态初始化

窗口鼠标事件穿透切换

初始化画笔

接收方-不显示笔记

发送端-全屏显示笔记



## mac

### 开始共享

强制关闭窗口没有提示 v

画图不可以结束共享

接收方，底部无背景，切无法互动批注v

#### 频繁开始、结束共享：

结束出现窗口大小变隐藏菜单大小、房间原先窗口大小限制失效 v

#### 菜单移入移出，拖动、固定大小

切换过程不流畅 v

拖动会出发判断

可拉动窗口放大缩小 v

#### 菜单UI：

无边框 v

#### 房间UI：

无边框v

#### 共享内容窗口UI

有交通灯 v

### 打开成员窗口

事件v

麦克风频率

### 打开屏幕画布

初始化画笔

### 关闭工具窗口再打开，作者和主持人可以清空笔记

清空要清空所有笔记

### 撤销、重做、橡皮擦笔记

没有关闭工具再打开，三个功能都有bug



## win

### 开始共享

菜单默状态背景益出

应用预览有看到菜单窗口

鼠标切换共享菜单，后续可能会被其他窗口覆盖，也失去了顶置效果

应用任务栏没有焦点后，等移上菜单时切换后去菜单任务栏的窗口就会高亮

在菜单中，鼠标样式移动就会疯狂频繁



### 共享时关闭窗口

拦截弹窗没有顶置





## 音频/视频/媒体流

### 共享屏幕

带宽消耗大



接受端

关闭adaptiveStream动态编码，避免currentBitrate过低，画面很糊

开发dynacast，没用的视频层订阅自动取消订阅，优化贷款



共享端

maxBitrate：参考VideoPresets等参数

videoCodec：av1。压缩率高，贷款小

手动screenShareSimulcastLayers，设置多个层，确保能在低网络下保持视频连贯性,但增加带宽

### 视频





### 音频

播放音频电音

页面重新渲染也不会正渲染



## 共享屏幕功能列表

打开选择共享内容窗口

send

anser



开始共享

win send

鼠标抖动

anser 

鼠标重影



mac send

anser 



重新共享

send

anser 



成员管理

send

麦克风无频率

anser 

麦克风无频率



互动批注

send

共享窗口刚渲染，操作过快导致画笔工具定位卡住

anser

网络延迟

默认不是蓝色

菜单开关无效，还是可以画

对方显示器分辨率变了（全屏），画图定位错位。（可以画到黑色区域了）



## 鼠标重影

window navigator->livekit push->livekitServer sub->vedio



使用RecordRTC录制本地stream

```
    yarn add recordrtc @types/recordrtc
    //
    <video
            ref="videoRef"
            class="video-container"
            controls
        />
 //
 const recordingFun = (strem?: MediaStream)=>{
    if(!isNil(record.value)) {
      record.value.stopRecording()

      const url = record.value.toURL()

      videoRef.value.src = url

      record.value = null
    } else if(strem) {
      record.value = new RecordRTC(strem,{
        type: 'video',
        mimeType: 'video/webm;codecs=vp9',
      })

      record.value.startRecording()
    }
  }
```

livekit engress看视频存储是否是push流后livekit编码问题。



### 本地stream已经出现重影

点击共享后，本地窗口聚焦鼠标异常，移动时失去焦点。不懂则重新获取焦点



打开windows显示鼠标轨迹设置，不会出现了





## 切换窗口

切换窗口大小发现dom元素和挂载事件载变化后就完成了

1. 问题，在f12录制每一帧分析问题
2. 优先度。重构罗姐还是调整逻辑
3. 测试列表。功能修复以及关联功能在开发后列入带测试列表，防止发布后再出错
4. 变化用css，其他透明隐藏背景，让背景变化看不到
