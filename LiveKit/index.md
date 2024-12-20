### emit



~~~ts
export type RoomEventCallbacks = {
  connected: () => void;
  reconnecting: () => void;
  signalReconnecting: () => void;
  reconnected: () => void;
  disconnected: (reason?: DisconnectReason) => void;
  connectionStateChanged: (state: ConnectionState) => void;
  mediaDevicesChanged: () => void;
  participantConnected: (participant: RemoteParticipant) => void;
  participantDisconnected: (participant: RemoteParticipant) => void;
  trackPublished: (publication: RemoteTrackPublication, participant: RemoteParticipant) => void;
  trackSubscribed: (
    track: RemoteTrack,
    publication: RemoteTrackPublication,
    participant: RemoteParticipant,
  ) => void;
  trackSubscriptionFailed: (
    trackSid: string,
    participant: RemoteParticipant,
    reason?: SubscriptionError,
  ) => void;
  trackUnpublished: (publication: RemoteTrackPublication, participant: RemoteParticipant) => void;
  trackUnsubscribed: (
    track: RemoteTrack,
    publication: RemoteTrackPublication,
    participant: RemoteParticipant,
  ) => void;
  trackMuted: (publication: TrackPublication, participant: Participant) => void;
  trackUnmuted: (publication: TrackPublication, participant: Participant) => void;
  localTrackPublished: (publication: LocalTrackPublication, participant: LocalParticipant) => void;
  localTrackUnpublished: (
    publication: LocalTrackPublication,
    participant: LocalParticipant,
  ) => void;
  localAudioSilenceDetected: (publication: LocalTrackPublication) => void;
  participantMetadataChanged: (
    metadata: string | undefined,
    participant: RemoteParticipant | LocalParticipant,
  ) => void;
  participantNameChanged: (name: string, participant: RemoteParticipant | LocalParticipant) => void;
  participantPermissionsChanged: (
    prevPermissions: ParticipantPermission | undefined,
    participant: RemoteParticipant | LocalParticipant,
  ) => void;
  participantAttributesChanged: (
    changedAttributes: Record<string, string>,
    participant: RemoteParticipant | LocalParticipant,
  ) => void;
  activeSpeakersChanged: (speakers: Array<Participant>) => void;
  roomMetadataChanged: (metadata: string) => void;
  dataReceived: (
    payload: Uint8Array,
    participant?: RemoteParticipant,
    kind?: DataPacket_Kind,
    topic?: string,
  ) => void;
  sipDTMFReceived: (dtmf: SipDTMF, participant?: RemoteParticipant) => void;
  transcriptionReceived: (
    transcription: TranscriptionSegment[],
    participant?: Participant,
    publication?: TrackPublication,
  ) => void;
  connectionQualityChanged: (quality: ConnectionQuality, participant: Participant) => void;
  mediaDevicesError: (error: Error) => void;
  trackStreamStateChanged: (
    publication: RemoteTrackPublication,
    streamState: Track.StreamState,
    participant: RemoteParticipant,
  ) => void;
  trackSubscriptionPermissionChanged: (
    publication: RemoteTrackPublication,
    status: TrackPublication.PermissionStatus,
    participant: RemoteParticipant,
  ) => void;
  trackSubscriptionStatusChanged: (
    publication: RemoteTrackPublication,
    status: TrackPublication.SubscriptionStatus,
    participant: RemoteParticipant,
  ) => void;
  audioPlaybackChanged: (playing: boolean) => void;
  videoPlaybackChanged: (playing: boolean) => void;
  signalConnected: () => void;
  recordingStatusChanged: (recording: boolean) => void;
  participantEncryptionStatusChanged: (encrypted: boolean, participant?: Participant) => void;
  encryptionError: (error: Error) => void;
  dcBufferStatusChanged: (isLow: boolean, kind: DataPacket_Kind) => void;
  activeDeviceChanged: (kind: MediaDeviceKind, deviceId: string) => void;
  chatMessage: (message: ChatMessage, participant?: RemoteParticipant | LocalParticipant) => void;
  localTrackSubscribed: (publication: LocalTrackPublication, participant: LocalParticipant) => void;
  metricsReceived: (metrics: MetricsBatch, participant?: Participant) => void;
};
~~~

gpt：

### 连接状态相关事件

- **connected**: 当成功连接到房间时触发。
- **reconnecting**: 当尝试重新连接到房间时触发。
- **signalReconnecting**: 当信号连接正在重新建立时触发。
- **reconnected**: 当重新连接成功后触发。
- **disconnected**: 当与房间的连接断开时触发，`reason` 参数提供断开原因。
- **connectionStateChanged**: 当连接状态发生变化时触发，`state` 参数表示新的连接状态。

### 设备和媒体相关事件

- **mediaDevicesChanged**: 当媒体设备（如摄像头、麦克风）发生变化时触发。
- **mediaDevicesError**: 当访问媒体设备时发生错误时触发。

### 参与者（Participants）相关事件

- **participantConnected**: 当有新的远程参与者加入房间时触发。
- **participantDisconnected**: 当远程参与者离开房间时触发。
- **participantMetadataChanged**: 当参与者的元数据（metadata）发生变化时触发。
- **participantNameChanged**: 当参与者的名字发生变化时触发。
- **participantPermissionsChanged**: 当参与者的权限发生变化时触发。
- **participantAttributesChanged**: 当参与者的属性发生变化时触发。
- **participantEncryptionStatusChanged**: 当参与者的加密状态发生变化时触发。

### 音视频轨道（Tracks）相关事件

- **trackPublished**: 当远程参与者发布一个新的音视频轨道时触发。
- **trackSubscribed**: 当订阅了远程参与者的音视频轨道时触发。
- **trackSubscriptionFailed**: 当订阅远程轨道失败时触发。
- **trackUnpublished**: 当远程参与者取消发布一个音视频轨道时触发。
- **trackUnsubscribed**: 当取消订阅一个远程参与者的音视频轨道时触发。
- **trackMuted**: 当一个音视频轨道被静音时触发。
- **trackUnmuted**: 当一个音视频轨道取消静音时触发。
- **localTrackPublished**: 当本地参与者发布一个新的音视频轨道时触发。
- **localTrackUnpublished**: 当本地参与者取消发布一个音视频轨道时触发。
- **localTrackSubscribed**: 当本地参与者订阅了自己的音视频轨道时触发。
- **trackStreamStateChanged**: 当远程轨道的流状态发生变化时触发。
- **trackSubscriptionPermissionChanged**: 当远程轨道的订阅权限发生变化时触发。
- **trackSubscriptionStatusChanged**: 当远程轨道的订阅状态发生变化时触发。

### 音频和视频播放状态

- **audioPlaybackChanged**: 当音频播放状态发生变化时触发。
- **videoPlaybackChanged**: 当视频播放状态发生变化时触发。

### 录制和加密状态

- **recordingStatusChanged**: 当房间的录制状态发生变化时触发。
- **encryptionError**: 当加密过程中发生错误时触发。

### 数据传输和通信相关事件

- **dataReceived**: 当接收到数据包时触发。
- **sipDTMFReceived**: 当接收到 SIP DTMF 信号时触发。
- **transcriptionReceived**: 当接收到转录信息时触发。
- **dcBufferStatusChanged**: 当数据通道缓冲状态发生变化时触发。
- **chatMessage**: 当收到聊天消息时触发。

### 其他事件

- **activeSpeakersChanged**: 当活动发言者列表发生变化时触发。
- **roomMetadataChanged**: 当房间的元数据发生变化时触发。
- **connectionQualityChanged**: 当连接质量发生变化时触发。
- **metricsReceived**: 当接收到性能指标时触发。
- **activeDeviceChanged**: 当活动设备（如麦克风或摄像头）发生变化时触发。
