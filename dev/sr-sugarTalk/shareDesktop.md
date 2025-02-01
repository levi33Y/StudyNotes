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
