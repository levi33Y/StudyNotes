# livekit 1.15.8



## test

MINDY.L aE8#urf~

TED.F #zjobKL0

MONESY.H JN6OhDz2

WINNIE.X bEQbphuf

Open.G  zmzAsKyo



## IP

ipinfo.io

myip.ipip.net

voip




## project

sugar talk web
项目地址
https://gitlab.sjfood.us/oxygen/sugartalk-web

CI11
https://teamcity.sjfood.us/buildConfiguration/SugartalkWeb_BuildDocker?mode=builds

CD
https://octopus.sjfood.us/app#/Spaces-1/projects/sugarktalk-web/deployments

sugar talk App
项目地址
https://gitlab.sjfood.us/oxygen/sugartalk

CI
https://teamcity.sjfood.us/project/SugarTalk_SugartalkApp?mode=builds



## build

打包，本地测试包

export CSC_KEY_PASSWORD=123456

export VITE_ARMS_PID=hccokn11qx@cc45921292807a8

node ./scripts/changeBuild.js <!--[version(bash)]--> productName="SugarTalkTest"

make build-test



## ci

https://teamcity.sjfood.us/buildConfiguration/SugarTalk_SugartalkApp_BuildTestMacWindows?branch=update-error-log&buildTypeTab=overview&mode=builds

**修改证书密码**

![image-20241231082546320](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20241231082546320.png)



**关联app center**

生成目录（output/SugarTalkTest.%GitVersion.NuGetVersion%.zip）：
![image-20241231083334342](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20241231083334342.png)

脚本：

![image-20241231083546785](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20241231083546785.png)



**文件名称&appcenter版本号**

文件名称规则（electron-buildxxx.json,

~~~json
{
  //version
  mac: {
   		...
      artifactName: "${productName}_universal_${version}.${ext}",
    	...
  },
  win:{
      ...
      artifactName: "${productName}_${version}.${ext}",
      ...
  },
}
~~~



版本号获取（暂定用gitxxx

~~~shell
node ./scripts/changeBuild.js 

#一定规则
preVersion=%GitVersion.FullSemVer%
version=${preVersion//+/-} 

productName="SugarTalkTest"
~~~



appcenter

~~~shell
#VERSION
VERSION=%GitVersion.FullSemVer%

...

appcenter distribute release ... --build-version ${VERSION//+/-} ...
~~~





## app center

https://install.appcenter.ms/orgs/proton-technology/apps/sugartalk-test/distribution_groups/open



https://docs.livekit.io/home/self-hosting/local/
livekit-server --dev --bind 0.0.0.0 --keys "Alg5qfSGXaqd426: 0adb5eebd3de6f3af994f0ba3e1975c0"



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

