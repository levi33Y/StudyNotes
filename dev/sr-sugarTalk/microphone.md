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



## room

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



## 流程

RoomEvent.SignalConnected 信号连接成功，接下来发布音视轨。





## webRTC监听设备变化

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



## 本地对象streamList

本地对象用于显示各种信息，因此需定义局部更新信息方法。





## 解决方案一：

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

