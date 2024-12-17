# Interface RoomOptions

interface RoomOptions { 
  [adaptiveStream](https://docs.livekit.io/client-sdk-js/interfaces/RoomOptions.html#adaptiveStream)?: *boolean* | [AdaptiveStreamSettings](https://docs.livekit.io/client-sdk-js/types/AdaptiveStreamSettings.html); 
  [audioCaptureDefaults](https://docs.livekit.io/client-sdk-js/interfaces/RoomOptions.html#audioCaptureDefaults)?: [AudioCaptureOptions](https://docs.livekit.io/client-sdk-js/interfaces/AudioCaptureOptions.html); 
  [audioOutput](https://docs.livekit.io/client-sdk-js/interfaces/RoomOptions.html#audioOutput)?: [AudioOutputOptions](https://docs.livekit.io/client-sdk-js/interfaces/AudioOutputOptions.html); 
  [disconnectOnPageLeave](https://docs.livekit.io/client-sdk-js/interfaces/RoomOptions.html#disconnectOnPageLeave)?: *boolean*; 
  [dynacast](https://docs.livekit.io/client-sdk-js/interfaces/RoomOptions.html#dynacast)?: *boolean*; 
  [e2ee](https://docs.livekit.io/client-sdk-js/interfaces/RoomOptions.html#e2ee)?: [E2EEOptions](https://docs.livekit.io/client-sdk-js/types/E2EEOptions.html); 
  [loggerName](https://docs.livekit.io/client-sdk-js/interfaces/RoomOptions.html#loggerName)?: *string*; 
  [publishDefaults](https://docs.livekit.io/client-sdk-js/interfaces/RoomOptions.html#publishDefaults)?: [TrackPublishDefaults](https://docs.livekit.io/client-sdk-js/interfaces/TrackPublishDefaults.html); 
  [reconnectPolicy](https://docs.livekit.io/client-sdk-js/interfaces/RoomOptions.html#reconnectPolicy)?: *ReconnectPolicy*; 
  [stopLocalTrackOnUnpublish](https://docs.livekit.io/client-sdk-js/interfaces/RoomOptions.html#stopLocalTrackOnUnpublish)?: *boolean*; 
  [videoCaptureDefaults](https://docs.livekit.io/client-sdk-js/interfaces/RoomOptions.html#videoCaptureDefaults)?: [VideoCaptureOptions](https://docs.livekit.io/client-sdk-js/interfaces/VideoCaptureOptions.html); 
  [webAudioMix](https://docs.livekit.io/client-sdk-js/interfaces/RoomOptions.html#webAudioMix)?: *boolean* | [WebAudioSettings](https://docs.livekit.io/client-sdk-js/interfaces/WebAudioSettings.html); 
}

## adaptiveStream

自动管理订阅视频轨道

？



## audioCaptureDefaults

捕获音频



## audioOutput

房间音频输出



## disconnectOnPageLeave

自动断连



## dynacast

自动管理视频流中视频层的发布



## e2ee

端到端加密



## loggerName

日记



## publishDefaults

发布音轨或视频轨的默认选项设置，在推送媒体流时可在补充



## stopLocalTrackOnUnpublish

停止未发布的轨道



## videoCaptureDefaults

捕获视频设置



## webAudioMix

音轨混合设置