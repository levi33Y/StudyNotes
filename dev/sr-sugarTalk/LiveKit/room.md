~~~ts
export interface InternalRoomOptions {
  /**
   * AdaptiveStream lets LiveKit automatically manage quality of subscribed
   * video tracks to optimize for bandwidth and CPU.
   * When attached video elements are visible, it'll choose an appropriate
   * resolution based on the size of largest video element it's attached to.
   *
   * When none of the video elements are visible, it'll temporarily pause
   * the data flow until they are visible again.
   */
  adaptiveStream: AdaptiveStreamSettings | boolean;

  /**
   * enable Dynacast, off by default. With Dynacast dynamically pauses
   * video layers that are not being consumed by any subscribers, significantly
   * reducing publishing CPU and bandwidth usage.
   *
   * Dynacast will be enabled if SVC codecs (VP9/AV1) are used. Multi-codec simulcast
   * requires dynacast
   */
  dynacast: boolean;

  /**
   * default options to use when capturing user's audio
   */
  audioCaptureDefaults?: AudioCaptureOptions;

  /**
   * default options to use when capturing user's video
   */
  videoCaptureDefaults?: VideoCaptureOptions;

  /**
   * default options to use when publishing tracks
   */
  publishDefaults?: TrackPublishDefaults;

  /**
   * audio output for the room
   */
  audioOutput?: AudioOutputOptions;

  /**
   * should local tracks be stopped when they are unpublished. defaults to true
   * set this to false if you would prefer to clean up unpublished local tracks manually.
   */
  stopLocalTrackOnUnpublish: boolean;

  /**
   * policy to use when attempting to reconnect
   */
  reconnectPolicy: ReconnectPolicy;

  /**
   * specifies whether the sdk should automatically disconnect the room
   * on 'pagehide' and 'beforeunload' events
   */
  disconnectOnPageLeave: boolean;

  /**
   * @internal
   * experimental flag, introduce a delay before sending signaling messages
   */
  expSignalLatency?: number;

  /**
   * mix all audio tracks in web audio, helps to tackle some audio auto playback issues
   * allows for passing in your own AudioContext instance, too
   */

  webAudioMix: boolean | WebAudioSettings;

  /**
   * @experimental
   */
  e2ee?: E2EEOptions;

  loggerName?: string;
}
~~~

## adaptiveStream 接收流优化 

~~~ts
export type AdaptiveStreamSettings = {
  /**
   * Set a custom pixel density. Defaults to 2 for high density screens (3+) or
   * 1 otherwise.
   * When streaming videos on a ultra high definition screen this setting
   * let's you account for the devicePixelRatio of those screens.
   * Set it to `screen` to use the actual pixel density of the screen
   * Note: this might significantly increase the bandwidth consumed by people
   * streaming on high definition screens.
   */
  pixelDensity?: number | 'screen';
  /**
   * If true, video gets paused when switching to another tab.
   * Defaults to true.
   */
  pauseVideoInBackground?: boolean;
};
~~~



dynacast 发布动态编码优化

## audioCaptureDefaults 音频捕获

~~~ts
export interface AudioCaptureOptions {
  /**
   * specifies whether automatic gain control is preferred and/or required
   */
  autoGainControl?: ConstrainBoolean;

  /**
   * the channel count or range of channel counts which are acceptable and/or required
   */
  channelCount?: ConstrainULong;

  /**
   * A ConstrainDOMString object specifying a device ID or an array of device
   * IDs which are acceptable and/or required.
   */
  deviceId?: ConstrainDOMString;

  /**
   * whether or not echo cancellation is preferred and/or required
   */
  echoCancellation?: ConstrainBoolean;

  /**
   * the latency or range of latencies which are acceptable and/or required.
   */
  latency?: ConstrainDouble;

  /**
   * whether noise suppression is preferred and/or required.
   */
  noiseSuppression?: ConstrainBoolean;

  /**
   * the sample rate or range of sample rates which are acceptable and/or required.
   */
  sampleRate?: ConstrainULong;

  /**
   * sample size or range of sample sizes which are acceptable and/or required.
   */
  sampleSize?: ConstrainULong;
}
~~~

echoCancellation 回声

noiseSuppression 噪音

## videoCaptureDefaults 视频捕获

```ts
export interface VideoCaptureOptions {
  /**
   * A ConstrainDOMString object specifying a device ID or an array of device
   * IDs which are acceptable and/or required.
   */
  deviceId?: ConstrainDOMString;

  /**
   * a facing or an array of facings which are acceptable and/or required.
   */
  facingMode?: 'user' | 'environment' | 'left' | 'right';

  resolution?: VideoResolution;
}
```

## publishDefaults 推送

```ts
export interface TrackPublishDefaults {
  /**
   * encoding parameters for camera track
   */
  videoEncoding?: VideoEncoding;

  /**
   * Multi-codec Simulcast
   * VP9 and AV1 are not supported by all browser clients. When backupCodec is
   * set, when an incompatible client attempts to subscribe to the track, LiveKit
   * will automatically publish a secondary track encoded with the backup codec.
   *
   * You could customize specific encoding parameters of the backup track by
   * explicitly setting codec and encoding fields.
   *
   * Defaults to `true`
   */
  backupCodec?: true | false | { codec: BackupVideoCodec; encoding?: VideoEncoding };

  /**
   * encoding parameters for screen share track
   */
  screenShareEncoding?: VideoEncoding;

  /**
   * codec, defaults to vp8; for svc codecs, auto enable vp8
   * as backup. (TBD)
   */
  videoCodec?: VideoCodec;

  /**
   * max audio bitrate, defaults to [[AudioPresets.music]]
   * @deprecated use `audioPreset` instead
   */
  audioBitrate?: number;

  /**
   * which audio preset should be used for publishing (audio) tracks
   * defaults to [[AudioPresets.music]]
   */
  audioPreset?: AudioPreset;

  /**
   * dtx (Discontinuous Transmission of audio), enabled by default for mono tracks.
   */
  dtx?: boolean;

  /**
   * red (Redundant Audio Data), enabled by default for mono tracks.
   */
  red?: boolean;

  /**
   * publish track in stereo mode (or set to false to disable). defaults determined by capture channel count.
   */
  forceStereo?: boolean;

  /**
   * use simulcast, defaults to true.
   * When using simulcast, LiveKit will publish up to three versions of the stream
   * at various resolutions.
   */
  simulcast?: boolean;

  /**
   * scalability mode for svc codecs, defaults to 'L3T3'.
   * for svc codecs, simulcast is disabled.
   */
  scalabilityMode?: ScalabilityMode;

  /**
   * Up to two additional simulcast layers to publish in addition to the original
   * Track.
   * When left blank, it defaults to h180, h360.
   * If a SVC codec is used (VP9 or AV1), this field has no effect.
   *
   * To publish three total layers, you would specify:
   * {
   *   videoEncoding: {...}, // encoding of the primary layer
   *   videoSimulcastLayers: [
   *     VideoPresets.h540,
   *     VideoPresets.h216,
   *   ],
   * }
   */
  videoSimulcastLayers?: Array<VideoPreset>;

  /**
   * custom video simulcast layers for screen tracks
   * Note: the layers need to be ordered from lowest to highest quality
   */
  screenShareSimulcastLayers?: Array<VideoPreset>;

  /**
   * For local tracks, stop the underlying MediaStreamTrack when the track is muted (or paused)
   * on some platforms, this option is necessary to disable the microphone recording indicator.
   * Note: when this is enabled, and BT devices are connected, they will transition between
   * profiles (e.g. HFP to A2DP) and there will be an audible difference in playback.
   *
   * defaults to false
   */
  stopMicTrackOnMute?: boolean;
}
```

audioOutput

stopLocalTrackOnUnpublish 轨道自动优化

reconnectPolicy 重连策略

disconnectOnPageLeave 离开房间策略
