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



## 音频卡顿



我是windows系统，当我使用audio播放远端媒体流时，随着我开会时间变长，我应用播放的声音就会有电流声，随着时间变长，声音就完全变成杂音了，即使我不同窗口（同一应用）播放视频或者项目本地保存时测试音频，都是卡的听不清的，当我把会议窗口关了，不同窗口（同一应用）播放视频或者项目本地保存时测试音频的声音立即就正常了。期间非应用内其他应用或系统的声音都正常





我当时打开了我房间窗口的控制台，有一个警告【Violation】‘requestAnimationFrame’ handler took 55ms，打开我的设置窗口控制台，我设置窗口是可以加载扬声器和麦克风设备来进行切换的，有报错Uncaught（in promise）DOMException： AudioContext.setSinkId() failed: the request for device xxx is timed out 和警告【violation】forced reflow while excuting jacaScript took 30ms



重新渲染livekit，情况还在。

检查音频资源使用情况：

```
export class SoundMeterByMandatory {
  context:AudioContext =  new AudioContext();

  mic: MediaStreamAudioSourceNode;

  analyser: AnalyserNode;

  dataArray: Uint8Array = new Uint8Array();

  constructor(stream: MediaStream) {
    this.mic = this.context.createMediaStreamSource(stream);
    this.analyser = this.context.createAnalyser();
    this.mic.connect(this.analyser);
    this.analyser.fftSize = 256;
    this.analyser.minDecibels = -90;
    this.analyser.maxDecibels = -10;
    this.analyser.smoothingTimeConstant = 0.85;
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
  }

  getByteFrequencyData() {
    this.analyser.getByteFrequencyData(this.dataArray);
  }

  close() {
    this.context.close()
  }
}
```







node:electron/js2c/asar_bundle:2 Uncaught Error: \\?\C:\Users\LEVI\AppData\Local\Programs\SugarTalkTest\resources\app.asar.unpacked\node_modules\trtc-electron-sdk\build\Release\trtc_electron_sdk.node is not a valid Win32 application.
\\?\C:\Users\LEVI\AppData\Local\Programs\SugarTalkTest\resources\app.asar.unpacked\node_modules\trtc-electron-sdk\build\Release\trtc_electron_sdk.node
    at process.func [as dlopen] (node:electron/js2c/asar_bundle:2:1869)
    at Module._extensions..node (node:internal/modules/cjs/loader:1354:18)
    at Object.func [as .node] (node:electron/js2c/asar_bundle:2:2096)
    at Module.load (node:internal/modules/cjs/loader:1124:32)
    at Module._load (node:internal/modules/cjs/loader:965:12)
    at f._load (node:electron/js2c/asar_bundle:2:13377)
    at o._load (node:electron/js2c/renderer_init:2:3109)
    at Module.require (node:internal/modules/cjs/loader:1148:19)
    at require (node:internal/modules/cjs/helpers:110:18)
    at Object.<anonymous> (C:\Users\LEVI\AppData\Local\Programs\SugarTalkTest\resources\app.asar\node_modules\trtc-electron-sdk\liteav\vod_player.js:12:24)



1.1(master)



1.2(test)



trtc





----	123	----

prd 灰屏



1.2 改成 1.1ui的时间



trtc



prd



处理1.2反馈



改成1.2



prd



```
import { Participant, Track } from "livekit-client";
import { SoundMeter } from "../webrtc/soundmeter";

export class ParticipantStream {
  id: string;

  name: string = "";

  participant: Participant;

  isLocal: boolean;

  cameraStream: MediaStream | undefined;

  microphoneStream: MediaStream | undefined;

  isMuted: boolean = false;

  isSpeaking: boolean = false;

  isEnableAudioLevel: boolean = false;

  frequency: number = 0;

  frame: number = 0;

  soundMeter: SoundMeter | undefined;

  static audioContext = new AudioContext();

  private audioContextAnalysis: AudioContext | null = null;

  // api properties

  isActive: boolean = false;

  constructor(participant: Participant, isLocal = false) {
    this.id = participant.identity;

    this.participant = participant;

    this.isLocal = isLocal;

    this.updata(participant);
  }

  updata(participant: Participant) {
    this.participant = participant;

    const cameraPub = this.participant?.getTrack(Track.Source.Camera);
    const micPub = this.participant?.getTrack(Track.Source.Microphone);

    const cameraEnabled =
      cameraPub && cameraPub?.isSubscribed && !cameraPub.isMuted;
    const micEnabled = micPub && micPub?.isSubscribed && !micPub.isMuted;

    if (cameraEnabled && cameraPub.videoTrack?.mediaStream) {
      this.cameraStream = cameraPub.videoTrack.mediaStream;
    } else {
      this.cameraStream = undefined;
    }

    if (micEnabled && micPub.audioTrack?.mediaStream) {
      if (
        this.microphoneStream?.getAudioTracks()[0]?.getSettings()?.deviceId !==
        micPub?.audioTrack?.mediaStreamTrack?.getSettings()?.deviceId
      ) {
        this.microphoneStream = new MediaStream([
          micPub.audioTrack.mediaStreamTrack,
        ]);

        this.setFrequency();
      } else {
        !this.audioContextAnalysis && this.setFrequency();
      }
    }

    this.isMuted = !micEnabled;

    this.isSpeaking = this.participant.isSpeaking;

    this.name = this.participant.name ?? "";
  }

  awaken() {
    this.isActive = true;
  }

  sleep() {
    this.isActive = false;
  }

  getByteFrequency() {
    if (!this.isEnableAudioLevel) return;
    this.soundMeter?.getByteFrequencyData();
    const dataArray = this.soundMeter!.dataArray;
    let frequency = 0;
    let count = 0;
    for (let i = 0; i < dataArray.length; i++) {
      const value = dataArray[i];
      if (value > 0) {
        frequency += value;
        count += 1;
      }
    }
    this.frequency = frequency === 0 ? 0 : frequency / count;
    this.frame = requestAnimationFrame(() => this.getByteFrequency());
  }

  enableAudioLevel() {
    this.soundMeter = new SoundMeter(
      ParticipantStream.audioContext,
      this.microphoneStream!,
    );
    this.getByteFrequency();
  }

  private setFrequency() {
    if (this.audioContextAnalysis) {
      this.cleanupAudioResources(this.audioContextAnalysis);
    }

    if (!this.microphoneStream) {
      return;
    }

    const stream = this.microphoneStream;
    const context = new AudioContext();
    this.audioContextAnalysis = context;

    let source: MediaStreamAudioSourceNode | undefined;
    let analyser: AnalyserNode | undefined;

    try {
      source = context.createMediaStreamSource(stream);
      analyser = context.createAnalyser();
      source.connect(analyser);
      analyser.fftSize = 256;

      const frequencyBinCount = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(frequencyBinCount);

      const loop = () => {
        if (!this.audioContextAnalysis || !source || !analyser) {
          this.audioContextAnalysis &&
            this.cleanupAudioResources(
              this.audioContextAnalysis,
              source,
              analyser,
            );

          return;
        }

        analyser?.getByteFrequencyData(dataArray);
        const totalFrequency = dataArray.reduce((sum, value) => sum + value, 0);
        this.frequency = totalFrequency / frequencyBinCount;

        requestAnimationFrame(loop);
      };

      loop();
    } catch (error) {
      this.cleanupAudioResources(context, source, analyser);
    }
  }

  private cleanupAudioResources(
    context?: AudioContext | null,
    source?: MediaStreamAudioSourceNode,
    analyser?: AnalyserNode,
  ) {
    if (!context) return;

    try {
      if (source) {
        source.disconnect();
      }
      if (analyser) {
        analyser.disconnect();
      }
      context.close().catch(console.error);
    } finally {
      this.audioContextAnalysis = null;
    }
  }

  disconnect() {
    this.isEnableAudioLevel = false;
    this.soundMeter?.stop();
    cancelAnimationFrame(this.frame);
    this.cleanupAudioResources(this.audioContextAnalysis);
  }
}
```









只有一个人在开会测试，使用CreateCloudRecording和DeleteCloudRecording进行云录制，当我掉用CreateCloudRecording后在调用DeleteCloudRecording，云录制并没有生成文件，当我此期间开麦或共享屏幕调用了ModifyCloudRecording接口，此时是能生成有录制文件。但我的需求是无论有没有媒体流都要生成录制文件，于是我设置了MixLayoutParams参数如下。此时我重复上面操作还是无法在控制台看我的录制文件，占位图相关配置好像没有效果。

```
roomIdType: 0,
recordParams: {
  recordMode: 2,
  outputFormat: 3,
},
mixTranscodeParams: {
  videoParams: {
    width: 1920,
    height: 1080,
    fps: 60,
    bitRate: 8192000,
    gop: 10,
  },
},
PlaceHolderMode: 1,
MixLayoutParams: {
  PlaceHolderMode:1,
  BackgroundImageUrl:"https://www.anxinssl.com/wp-content/uploads/2023/09/640-9.jpg",
  DefaultSubBackgroundImage:"https://www.anxinssl.com/wp-content/uploads/2023/09/640-9.jpg",
  MixLayoutMode: 4,
  MediaId: 0,
  MixLayoutList: [
    {
      Top: 0,
      Left: 0,
      Width: 1920,
      Height: 1080,
      RenderMode: 0,
    },
  ],
},
```



1。update



2. record list
