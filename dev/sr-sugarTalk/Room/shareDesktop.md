# 共享屏幕

## 共享桌面

本地获取媒体流

```ts
navigator.mediaDevices.getUserMedia
```

在房间发布曲目

```ts
room.value.localParticipant.publishTrack
```

触发房间（room）事件（广播）

```ts
room.value.on(RoomEvent.TrackSubscribed, () => {})
```

获取轨道信息（接受方）

```ts
const screenSharePub = room.value.localParticipant.getTrack(
  Track.Source.ScreenShareAudio
)

const videoTrack = screenSharePub?.videoTrack?.mediaStreamTrack

const shareStream = new MediaStream()
shareStream.addTrack(videoTrack)
```

播放视频（vedio）

```ts
<video:srcObject="stream"/>
```





## canvas-share

使用canvas覆盖共享内容，用户标识和显示轨迹



### 媒体流与房间

点击共享后，上传视频轨道，当共享声音时，上传音频轨道，且本地播放音频轨道



### 画笔

显示远端笔迹



### 需求/功能流程

点击共享-> 上传媒体轨道-> 页面显示画布-> 【播放音频源】-> 显示轨迹-> 结束共享



### 代码

main 

以node-window-manager为例（不兼容node版本，可以写脚本之类的获取），返回所有窗口信息

```ts
ipcMain.handle("get-desktop-application", async () =>
  {
    return  windowManager.getWindows()?.map((item)=>({
      ...item,
      bounds: item.getBounds()
    }))
  }
)
```



preload预加载脚本：

getSources获取卓面的可用媒体流，getDesktopApplication获取应用信息（不包含屏幕）

```ts
contextBridge.exposeInMainWorld("desktopCapturer", {
  getSources: async (options: SourcesOptions): Promise<ScreenSource[]> => {
    const sources: DesktopCapturerSource[] = await ipcRenderer.invoke(
      "getSources",
      options
    )

    return sources?.filter((source)=>!(source.name === "Gesture Blocking Overlay"
      || source.name === "App Icon Window"))?.map((source) => ({
      appIcon: source.appIcon?.toDataURL() ?? "",
      display_id: source.display_id,
      id: source.id,
      name: source.name,
      thumbnail: source.thumbnail.toDataURL(),
    })) ?? [] as ScreenSource[]
  },

  getDesktopApplication: async (winId?: number) => {
    const desktopWindows = await ipcRenderer.invoke("get-desktop-application")

    return winId ? [desktopWindows?.find(window => window.id === winId)] : desktopWindows;
  },
})
```



渲染进程：

应用可以共享屏幕或应用，displayId只有屏幕才会有，通过轮询，计算isNotEqul来监听共享应用的窗口是否发生了变化

```ts
const {pause, resume} = useTimeoutPoll(async ()=>{
  if(!desktopSource?.value?.id) {
    return
  }

  let newWindowSize:Electron.Rectangle | undefined

  if(desktopSource.value?.displayId) {
    const allDisplays = await window.electronAPI.allDisplays()

    const currentDisplay: Display = allDisplays.find(
      (display) => display.id === Number(desktopSource.value?.displayId)
    )

    newWindowSize = currentDisplay.workArea
  } else if(desktopSource.value?.id) {
    const winId = Number(desktopSource.value?.id?.split(":").at(1))

    const res = await window.desktopCapturer.getDesktopApplication(winId)

    newWindowSize=res?.at(0)?.bounds
  }

  const isNotEqual = Object.entries(windowSize.value).some(([key,value])=>{
    if(newWindowSize &&
      key in newWindowSize &&
      value !== (newWindowSize as any)[key]) {
      return true
    }
  })

},100)
```







