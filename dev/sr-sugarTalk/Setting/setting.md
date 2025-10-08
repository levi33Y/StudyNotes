## RoomOptions 配置

AdaptiveStreamSettings

自动订阅视频，并且调整分辨率大小

- 像素密度: 分辨率与视频实际大小的比例。高分辨率屏幕上提供更清晰的视频，同时在低分辨率屏幕上节省带宽。

- 后台暂停视频：应用被切换时暂停视频订阅。

~~~ts
AdaptiveStreamSettings: {
    pauseVideoInBackground?: boolean;
    pixelDensity?: number | "screen";
}
~~~

優化帶寬和CPU：控制带宽使用。

默认捕获方案：

最大比特率：控制带宽使用。

最大帧速率：控制带宽使用。

发布默认优先级：决定哪些视频轨道优先发布和接收

视频编解码器：视频流使用的编解码器

屏幕共享联播层：屏幕共享时使用的联播（Simulcast）层数，优化不同的网络条件的质量和稳定



## 获取report

```
const getReport = () => {
  const _getInput = async (
    romates: Map<string, RemoteParticipant>,
    Type: Source
  ) => {
    let inbound: number = 0

    if (romates && Type) {
      for await (const [key, romate] of romates) {
        const peer = romate.getTrack(Type)?.track

        const report = await peer?.getRTCStatsReport()

        report?.forEach((item) => {
          if (item.type === "inbound-rtp") {
            inbound += ~~item?.bytesReceived
          }
        })
      }
    }

    return inbound
  }

  const _getOutPut = async (peer?: LocalTrack) => {
    let outbound: number = 0

    if (peer) {
      const report = await peer.getRTCStatsReport()

      report?.forEach((item) => {
        if (item.type === "outbound-rtp") {
          console.log(item)
          outbound = ~~item?.bytesSent
        }
      })
    }

    return outbound
  }

  setInterval(async () => {
    const microphonePeer = room.value.localParticipant.getTrack(
      Track.Source.Microphone
    )?.track

    const remoteCameraPeers = room.value.participants

    const microphoneO =
      (await _getOutPut(microphonePeer)) - report.audio.sentBytes

    const microphoneI =
      (await _getInput(remoteCameraPeers, Track.Source.Microphone)) -
      report.audio.receiveBytes

    report.audio.sentBytes = ~~microphoneO

    report.audio.receiveBytes = ~~microphoneI

    console.log("音频")
    console.log("⬆" + Math.floor((microphoneO * 8) / 1024) + "kbps")
    console.log("⬇" + Math.floor((microphoneI * 8) / 1024) + "kbps")
  }, 1000)
}
```





## 测试

```ts
// 自动管理订阅的视频质量
adaptiveStream: {
  pixelDensity: "screen",
  pauseVideoInBackground: false,
},
```

```ts
// 优化已发布曲目的发布带宽和CPU
dynacast: false,
```

```ts
// 默认捕获设置
videoCaptureDefaults: {
  resolution: VideoPresets.h1080.resolution,
},
```

```ts
// 发布默认值
publishDefaults: {
  screenShareEncoding: {
    maxBitrate: 8_000_000,
    maxFramerate: 60,
    priority: "high",
  },
  videoCodec: "vp9",
  screenShareSimulcastLayers: [VideoPresets.h1080],
},
```