# 音频



## 分贝（声压）

声学中，1dB = 20B，声音的强度定义为声压。计算分贝值时采用 20 微帕斯卡为参考值。这个参考值大约对应于人类在最安静的环境中能够感知到的最低声音强度。声压是场量，因此使用声压计算分贝时使用下述公式：

![img](https://bkimg.cdn.bcebos.com/formula/816e9312b65463868e727ebc9b85af55.svg)

*L*p 表示声压级（SPL），*p*rms 是声波的均方根压力，而 *p*ref 是参考声压值，即 20 微帕斯卡（*µ*Pa）



## AudioNode

处理音频的通用模块

音频有：

- 音频源（ [`audio`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio) 或 [`video`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video) 元素，[`OscillatorNode`](https://developer.mozilla.org/zh-CN/docs/Web/API/OscillatorNode)）；
- 音频地址；
- 中间处理模块（[`BiquadFilterNode`](https://developer.mozilla.org/zh-CN/docs/Web/API/BiquadFilterNode) 或 [`ConvolverNode`](https://developer.mozilla.org/zh-CN/docs/Web/API/ConvolverNode) 这样的滤波器）
- 音量控制器（如 [`GainNode`](https://developer.mozilla.org/zh-CN/docs/Web/API/GainNode))。



## AnalyserNode

提供实时频域和时域分析信息



创建8-bit分析节点

```js
const context = new AudioContext();
analyser = context.createAnalyser();
analyser.minDecibels = -90;
analyser.maxDecibels = -10;
analyser.fftSize = 256;

//
const analyserNode = new AnalyserNode(audioCtx, {
  fftSize: 256,
  minDecibels: -90,
  maxDecibels: -10,
});
```



创建dataArray，获取音频数据

```js
let dataArray = new Uint8Array(analyser.frequencyBinCount);

analyser.getByteFrequencyData(dataArray)
```

minDecibels =-90，因此小于-90分贝的数据映射为255，大于-10分贝的映射为0



计算分贝大小

8-bit音频数据中：avgEnergy ： rms；振幅：可以高达255。

```js
const sum = this.dataArray.reduce((sum, value) => sum + value * value, 0);

const rms = Math.sqrt(sum / this.dataArray.length);

/*
* 将参考值设为最大振幅，当volume=0时，代表最响
* 在声学中，贝尔有240分贝
*/
const volume = 20 * Math.log10(rms / this.analyser.fftSize - 1);
```



EnhancedSoundMeterClass：

```ts
class EnhancedSoundMeterClass {
  context: AudioContext;

  analyser: AnalyserNode;

  dataArray: Uint8Array = new Uint8Array();

  videoVolume: number = 0;

  frameVolume?: number = 0;

  mic?: MediaStreamAudioSourceNode;

  constructor(context: AudioContext, stream?: MediaStream) {
    this.context = context;

    this.analyser = this.context.createAnalyser();

    this.analyser.minDecibels = -90;

    this.analyser.maxDecibels = -10;

    this.analyser.fftSize = 256;

    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);

    if (stream) {
      this.mic = this.context.createMediaStreamSource(stream);

      this.mic.connect(this.analyser);
    }
  }

  update(stream: MediaStream) {
    this.mic = this.context.createMediaStreamSource(stream);

    this.mic.connect(this.analyser);
  }

  getRadioVolume() {
    if (this.analyser) {
      this.analyser.getByteFrequencyData(this.dataArray);

      const sum = this.dataArray.reduce((sum, value) => sum + value * value, 0);

      const rms = Math.sqrt(sum / this.dataArray.length);

      const volume = 20 * Math.log10(rms / (this.analyser.fftSize - 1));

      this.videoVolume = Math.abs(Math.floor(~~volume));

      this.frameVolume = requestAnimationFrame(() => this.getRadioVolume());
    }
  }

  stop() {
    this.analyser.disconnect();

    this.mic && this.mic.disconnect();

    this.frameVolume && cancelAnimationFrame(this.frameVolume);
  }
}
```



## 麦克风

在webRTC+LiveKit中，从本地流的音轨中获取麦克风信息，代码如下：

```ts
const room = shallowRef() as ShallowRef<Room>

// 获取音轨发送码率信息,获取的是此刻该条轨道总码率数，可根据时间来进行相减得到变化量
let outbound: Partial<RTCOutboundRtpStreamStats> = {},
const report = await room.value.localParticipant
  ?.getTrack(Track.Source.Microphone)
  ?.track?.getRTCStatsReport();
report?.forEach((item) => {
  if (item.type === "outbound-rtp") {
    outbound = item;
  }
});
outbound.bytesSent

// 获取音轨分贝
let volume = 0;
const context = new AudioContext();
const soundMeter = new EnhancedSoundMeterClass(context);
const streamTrack = room.value.localParticipant?.getTrack(Source.Microphone)!
      ?.audioTrack!?.mediaStreamTrack!;
if (!isNil(streamTrack)) {
  const stream = new MediaStream([streamTrack]);
  soundMeter.update(stream);
  !streamTrack?.muted && (volume = soundMeter.videoVolume);
}
```



## 扬声器

远端参会人的麦克风轨道即使本地扬声器的声音，此时可以将所有人连接到一个节点节点即可统计信息

```ts
let bitrate: number = 0;

let track: MediaStreamTrack;

if (props.remotePeers) {
  for await (const [key, remote] of props.remotePeers) {
    const report = await remote
      ?.getTrack(Track.Source.Microphone)
      ?.track?.getRTCStatsReport();

    report?.forEach(
      ({ type, id, bytesReceived = 0 }: RTCInboundRtpStreamStats) => {
        if (type === "inbound-rtp") {
          if (speaker.value.members.has(id)) {
            bitrate += Math.floor(
              ~~bytesReceived - ~~speaker.value.members.get(id)!
            );
          } else {
            bitrate += Math.floor(~~bytesReceived);
          }

          speaker.value.members.set(id, bytesReceived);
        }
      }
    );

    track = remote?.getTrack(Source.Microphone)?.audioTrack!
      ?.mediaStreamTrack;

    if (track!) {
      const stream = new MediaStream([track!]);

      soundMeter.update(stream);
    }
  }
}

speaker.value = {
  bitrate,
  members: speaker.value.members,
  audioLevel: soundMeter.videoVolume,
};
```