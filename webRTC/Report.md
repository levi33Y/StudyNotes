# [RTCStatsReport](https://developer.mozilla.org/zh-CN/docs/Web/API/RTCStatsReport)

## getStats方法

获取RTCStatsReport对象

1. 通过RTCPeerConnection对等连接对象方法获取。

   ~~~ts
   // 获取当前对等连接的视频RTP接收器对象
   const rtpVideoReceiver = pc:RTCPeerConnection.getReceivers().find(rece => rece.track.kind === 'video');
   // 获取当前对等连接的视频RTP发送器对象
   const rtpVideoSender = pc:RTCPeerConnection.getSenders().find(sender => sender.track.kind === 'video');
   ~~~

   

2. 通过RTP媒体管理API获取。

   ~~~ts
   // 获取视频RTP接收器的RTCStatsReport对象
   const receiVideoStats = await rtpVideoReceiver:RTCRtpReceiver.getStats();
   // 获取视频RTP发送器的RTCStatsReport对象
   const sendVideoStats = await rtpVideoSender:RTCRtpSender.getStats();
   ~~~

   

## RTCStatsReport对象

RTCStatsReport包含一个Map集合对象，键是字符串，值是从RTCStats派生的监控对象。