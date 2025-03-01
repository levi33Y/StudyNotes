列表渲染与Ref

```vue
<div v-for="stream in streamList" :key="stream.id">
  <audio
    ref="audioElementRefs"
    style="display: none"
    v-if="!stream.isLocal"
    :srcObject="stream.microphoneStream"
    autoplay
  />
</div>
```

audioElementRefs获取值的时机