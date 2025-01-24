## 共享电脑声音

### 腾讯会议

在win中，共享屏幕仅仅一个选项

在mac中，多处一个驱动安装，并且系统进行音频设置时，输出设备自动改为驱动虚拟声卡

![image-20250120112219884](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20250120112219884.png)





在音频设置中，切换设备系统的音频设置设备并没有改变，且切换的设备与系统设备不匹配时，腾讯会议就没声音

![image-20250120112327899](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20250120112327899.png)



### sugarttalk设计：

1. 驱动选择：BlackHole 2ch
2. 音频设置：设置应用内的音频轨道，无法修改系统音频
3. 共享电脑：手动选择BlackHole 2ch虚拟声卡作为音频输出
4. 版本限制：当前固定使用默认扬声器，因为共享时启动虚拟音卡，所以可以在应用中接受虚拟音卡的信号并播放。







## 麦克风设备的切换/加入与移除

webRTC：

设备切换：改变系统默认设备



加入和移除：本地媒体流MediaStreamTrack自动替换为默认设置



LiveKit：

设备切换：

加入和移除：



~~~ts
// 初始化页面，逻辑不变，推流

// 设备变化-新增，处理livekit流

// 设备变化-删除，处理livekit流

// livekit逻辑/ui逻辑，打开麦克风状态
~~~



### room

麦克风ui

~~~ts
// 本地流信息
const localStream = computed(() =>
  streamList.value.find((stream) => stream.isLocal)
);


//推本地流
room.value.localParticipant.publishTrack(audioTrack, {
  source: Track.Source.Microphone,
});

// 保存本地流
streamList.value.push(
  new ParticipantStream(
    participant,
    identity === room.value.localParticipant.identity
  )
);

/*在房间内，room对象会监听连接的参会人，实时的给每个 room.value.participants（Map<string, RemoteParticipant>）内的参会人监听对应方法，对于自己，会将room.value.localParticipant设置为streamList的index=0的本地流信息*/

// 麦克风特效
room.value.localParticipant.frequency
~~~







讲话人ui

~~~ts
// 通过是否存在讲话人
room.value.on(RoomEvent.ActiveSpeakersChanged, (speakers: Participant[]) => {
        speakersList.value = speakers
          .map((speaker) => speaker.name ?? "")
          .filter(Boolean);
      })


~~~







webRTC媒体流

```tsx
navigator.mediaDevices.getUserMedia
```





livekit流



关闭打开本地流



关闭打开麦克风



显示参会人《UserPanel》



Sequence contains more than one element.



### 流程

RoomEvent.SignalConnected 信号连接成功，接下来发布音视轨。





### webRTC监听设备变化

~~~ts
  const replaceMicrophone = async () => {
    console.log("设备发生变化");

    const devices = await navigator.mediaDevices.enumerateDevices();

    const audioinputs = devices?.filter(
      (device) => device.kind === "audioinput"
    );

    if (audioinputs?.length! > 0 && audioinputs.at(0)?.deviceId) {
      return;
    }
  };


    navigator.mediaDevices.addEventListener(
      "devicechange",
      replaceMicrophone,
    );
~~~



### 本地对象streamList

本地对象用于显示各种信息，因此需定义局部更新信息方法。





### 解决方案一：

~~~ts
  const addAudioInputTrack = async () => {
    const deviceId = await getDefaultAudioInputDeviceId();

    if (!deviceId) {
      return ElMessage({
        message: "找不到麦克风",
        type: "error",
      });
    }

    const audioTrack = await getAudioTrack(deviceId);

    await room.value.localParticipant.publishTrack(audioTrack, {
      source: Track.Source.Microphone,
    });

    room.value.localParticipant.activeDeviceMap.set("audioinput", deviceId);

    handleParticipant(room.value.localParticipant);

    console.log("发布音轨----", room.value.localParticipant);

    audioTrack.addEventListener("ended", async () => {
      if (
        room.value.localParticipant.getTrack(Track.Source.Microphone)?.trackSid
      ) {
        console.log("删除音轨----", room.value.localParticipant);

        room.value.localParticipant
          .getTrack(Track.Source.Microphone)
          ?.track?.stop();

        const currentMicTrack = room.value.localParticipant.getTrack(
          Track.Source.Microphone
        )!.track!;

        await room.value.localParticipant.unpublishTrack(currentMicTrack);

        handleParticipant(room.value.localParticipant);
      }
    });
  };



// handleParticipant
  const handleParticipant = (
    participant: Participant,
    remove: boolean = false
  ) => {
    const { identity } = participant;
    
    const index = streamList.value.findIndex((item) => item.id === identity);

    const streamItem = streamList.value[index];

    if (!isNil(streamItem)) {
      streamList.value[index].disconnect();
      streamItem.updata(participant);
    } else {
      streamList.value.push(
        new ParticipantStream(
          participant,
          identity === room.value.localParticipant.identity
        )
      );
    }
  };


//ui逻辑
const updateMicMuteStatus = async (status: boolean) => {
  meetingQuery.isMuted = status;

  if (room.value.localParticipant.getTrack(Track.Source.Microphone)) {
    await recordSpeak();

    await room.value.localParticipant.setMicrophoneEnabled(!status);
  } else {
    !status && (await addAudioInputTrack());
  }
};
~~~



### 方案二：

切换麦克风

~~~tsx
<template>
  <el-dropdown trigger="click"  @command="onClick">
    <ActionBtn
        title="麦克风"
        icon="icon-mic"
    />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item in micList" :command="item.id">{{ item.label }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import ActionBtn from "../action-btn/index.vue";
import { computed, onMounted, onUnmounted, ref, toRefs } from "vue";
import { ParticipantStream } from "../../../../utils/livekit/ParticipantStream";

interface Props {
  localStream: ParticipantStream | undefined;
  update: (deviceId: string) => Promise<void>;
}

const props = defineProps<Props>();

const isUnmounted = ref(false);

const micList = ref<{ label: string; id: string; }[]>([])

const init = () => {
  navigator.mediaDevices.enumerateDevices()
      .then(devices => {
        const audioInputs = devices.filter(device => device.kind === 'audioinput');

        micList.value = audioInputs.map((item)=>({
          label: item.label,
          id: item.deviceId,
        })).filter(item=>item.id !== "default")

      })
      .catch(err => {
        console.error('Error enumerating devices:', err);
      });
};

onMounted(async () => {
  init()
});

onUnmounted(() => (isUnmounted.value = true));


const onClick = async (deviceId: string) => {
  props.update(deviceId)
};
</script>

~~~



重新连接麦克风设备

```tsx
  const updateMic = async (deviceId: string) => {
    console.log("请求设备-----",deviceId)
    console.log("活动设备-----",room.value.localParticipant.activeDeviceMap)

    // 停止并删除音轨
    console.log("停止并删除音轨-----",room.value.localParticipant.getTrack(Track.Source.Microphone))
    handleParticipant(room.value.localParticipant, true)
    room.value.localParticipant.getTrack(Track.Source.Microphone).track.stop()
    const currentMicTrack =  room.value.localParticipant.getTrack(Track.Source.Microphone)!.track!
    await room.value.localParticipant.unpublishTrack(currentMicTrack)
    console.log("停止并删除音轨-----",room.value.localParticipant.getTrack(Track.Source.Microphone))

    // 获取新的音轨并推送
    console.log("获取新的音轨并推送-----",room.value.localParticipant.getTrack(Track.Source.Microphone))
    const audioTrack = await getAudioTrack(deviceId)
    await room.value.localParticipant.publishTrack(audioTrack, {
      source: Track.Source.Microphone,
    })
    console.log("获取新的音轨并推送-----",room.value.localParticipant.getTrack(Track.Source.Microphone))

    // 更新本地smartList
    handleParticipant(room.value.localParticipant)

    // 手动处理活动设备
    room.value.localParticipant.activeDeviceMap.set("audioinput", deviceId);
    // await room.value.localParticipant.setMicrophoneEnabled(true)
  }
```





## 音频管理

![image-20250121082527266](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20250121082527266.png)



### 扬声器

检查扬声器：播放存放好的音频

切换设备：web audio api

输出等级：计算

音量：node-loudness 管理当前系统输出音频



### 麦克风

检测麦克风：参考录音逻辑，即刻播放音频

切换设备：web audio api

输出等级：计算

音量：？





## 视频播放设置

### [vedio](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)标签



### css

~~~html
<video controls></video>
~~~

~~~css
//全屏按钮
video::-webkit-media-controls-fullscreen-button {
    display: none;
}
//播放按钮
video::-webkit-media-controls-play-button {
    display: none;
}
//进度条
video::-webkit-media-controls-timeline {
    display: none;
}
//观看的当前时间
video::-webkit-media-controls-current-time-display{
    display: none;            
}
//剩余时间
video::-webkit-media-controls-time-remaining-display {
    display: none;            
}
//音量按钮
video::-webkit-media-controls-mute-button {
    display: none;            
}
video::-webkit-media-controls-toggle-closed-captions-button {
    display: none;            
}
//音量的控制条
video::-webkit-media-controls-volume-slider {
    display: none;            
}
//所有控件
video::-webkit-media-controls-enclosure{ 
    display: none;
}
~~~



### 浏览器控制台：

查看shadow DOM：

Settings-Preferences-Elements-show user agent shadow DOM

![image-20250124092621360](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20250124092621360.png)