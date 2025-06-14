![image-20241113135727650](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20241113135727650.png)



![image-20241113135733343](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20241113135733343.png)





## 共享屏幕

获取视频流

```
  let interval: NodeJS.Timeout | null = null;

  let lastTimestamp: number | null = null;

  function analyzeVideoQuality(trackInfo) {
    console.log(trackInfo)

    const prevStats = trackInfo.track.prevStats;
    const packetsLost = prevStats.packetsLost;
    const packetsReceived = prevStats.packetsReceived;
    const framesReceived = prevStats.framesReceived;
    const frameWidth = prevStats.frameWidth;
    const frameHeight = prevStats.frameHeight;
    const currentBitrate = trackInfo.track._currentBitrate;
    const jitter = prevStats.jitter;
    const mimeType = trackInfo.mimeType;
    const nackCount = prevStats.nackCount;
    const pliCount = prevStats.pliCount;
    const firCount = prevStats.firCount;

    // 1. 计算丢包率
    const packetLossRate = (packetsLost / packetsReceived) * 100;

    // 2. 计算帧率 (需要记录上一次的时间戳)
    const currentTime = Date.now(); // 或者 trackInfo.track.prevStats.timestamp
    const frameRate = lastTimestamp && ( framesReceived / ((currentTime - lastTimestamp) / 1000))
    lastTimestamp = currentTime;

    // 3. 判断视频质量
    let quality = "良好";
    let suggestions = [];

    if (packetLossRate > 5) {
      quality = "较差";
      suggestions.push("丢包率较高，请检查网络连接。");
    } else if (packetLossRate > 2) {
      quality = "一般";
      suggestions.push("丢包率较高，可能影响视频质量。");
    }

    // ... 其他质量判断逻辑

    // 4. 构造弹窗内容
    const qualityReport = {
      "视频质量": quality,
      "帧率": frameRate,
      "丢包率": packetLossRate.toFixed(2) + "%",
      "视频宽度": frameWidth,
      "视频高度": frameHeight,
      "当前码率": currentBitrate + '/' + (currentBitrate / 1000).toFixed(2) + " kbps",
      "抖动": jitter.toFixed(2) + " ms",
      "编解码器": mimeType,
      "NACK计数": nackCount,
      "PLI计数": pliCount,
      "FIR计数": firCount,
      "建议": suggestions,
    };

    console.log(qualityReport)

    return qualityReport;
  }

  watch(()=>state.shareStream,(val)=>{
    console.log(room.value.participants)

    if(isNil(val)) {
      interval && clearInterval(interval)
      interval = null
      return
    }

    if(!isNil(interval)) return

    interval = setInterval(()=>{
      const info = room.value.participants.get("PA_bv8TzqdjW7zU").videoTracks.get("TR_VSc7JiJPuuG4T7")

      // const info = room.value.participants.values()[0].videoTracks.values()[0]

      info && analyzeVideoQuality({...info})
    },1000)
  })
```
