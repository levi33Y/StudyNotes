# TrackPublishOptions 

轨道流选项 ，发布音轨或视频轨设置

interface TrackPublishDefaults { 
  [audioPreset](https://docs.livekit.io/client-sdk-js/interfaces/TrackPublishDefaults.html#audioPreset)?: [AudioPreset](https://docs.livekit.io/client-sdk-js/interfaces/AudioPreset.html); 
  [backupCodec](https://docs.livekit.io/client-sdk-js/interfaces/TrackPublishDefaults.html#backupCodec)?: *boolean* | { 
    codec: *"vp8"* | *"h264"*; 
    encoding?: [VideoEncoding](https://docs.livekit.io/client-sdk-js/interfaces/VideoEncoding.html); 
  }; 
  [degradationPreference](https://docs.livekit.io/client-sdk-js/interfaces/TrackPublishDefaults.html#degradationPreference)?: *RTCDegradationPreference*; 
  [dtx](https://docs.livekit.io/client-sdk-js/interfaces/TrackPublishDefaults.html#dtx)?: *boolean*; 
  [forceStereo](https://docs.livekit.io/client-sdk-js/interfaces/TrackPublishDefaults.html#forceStereo)?: *boolean*; 
  [red](https://docs.livekit.io/client-sdk-js/interfaces/TrackPublishDefaults.html#red)?: *boolean*; 
  [scalabilityMode](https://docs.livekit.io/client-sdk-js/interfaces/TrackPublishDefaults.html#scalabilityMode)?: [ScalabilityMode](https://docs.livekit.io/client-sdk-js/types/ScalabilityMode.html); 
  [screenShareEncoding](https://docs.livekit.io/client-sdk-js/interfaces/TrackPublishDefaults.html#screenShareEncoding)?: [VideoEncoding](https://docs.livekit.io/client-sdk-js/interfaces/VideoEncoding.html); 
  [screenShareSimulcastLayers](https://docs.livekit.io/client-sdk-js/interfaces/TrackPublishDefaults.html#screenShareSimulcastLayers)?: [VideoPreset](https://docs.livekit.io/client-sdk-js/classes/VideoPreset.html)[]; 
  [simulcast](https://docs.livekit.io/client-sdk-js/interfaces/TrackPublishDefaults.html#simulcast)?: *boolean*; 
  [stopMicTrackOnMute](https://docs.livekit.io/client-sdk-js/interfaces/TrackPublishDefaults.html#stopMicTrackOnMute)?: *boolean*; 
  [videoCodec](https://docs.livekit.io/client-sdk-js/interfaces/TrackPublishDefaults.html#videoCodec)?: 
    | *"vp8"*
    | *"h264"*
    | *"vp9"*
    | *"av1"*; 
  [videoEncoding](https://docs.livekit.io/client-sdk-js/interfaces/TrackPublishDefaults.html#videoEncoding)?: [VideoEncoding](https://docs.livekit.io/client-sdk-js/interfaces/VideoEncoding.html); 
  [videoSimulcastLayers](https://docs.livekit.io/client-sdk-js/interfaces/TrackPublishDefaults.html#videoSimulcastLayers)?: [VideoPreset](https://docs.livekit.io/client-sdk-js/classes/VideoPreset.html)[]; 
}

<u>**音频设置：**</u>

## AudioPreset

defaults to [[AudioPresets.music]]

音频预设



## dtx

default for mono tracks.

单多音轨



## forceStereo

立体声



## red

冗余音数据



## stopMicTrackOnMute

音频流停止行为



<u>**视频设置：**</u>

## screenShareEncoding

共享屏幕设置

interface VideoEncoding { 
  [maxBitrate](https://docs.livekit.io/client-sdk-js/interfaces/VideoEncoding.html#maxBitrate): *number*; 
  [maxFramerate](https://docs.livekit.io/client-sdk-js/interfaces/VideoEncoding.html#maxFramerate)?: *number*; 
  [priority](https://docs.livekit.io/client-sdk-js/interfaces/VideoEncoding.html#priority)?: *RTCPriorityType*; 
}



## screenShareSimulcastLayers

要播放的图层



## videoCodec

defaults to vp8

视频编码器







<u>**相机：**</u>

## videoEncoding

相机编码设置





<u>**其余：**</u>

## backupCodec

Defaults to `true`

备用编码器



## degradationPreference

退化设置，向下兼容



## scalabilityMode

svc编码器



## simulcast

defaults to true.

多播



## videoSimulcastLayers

广播图层设置
