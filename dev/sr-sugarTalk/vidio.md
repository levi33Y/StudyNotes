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