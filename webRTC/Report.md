# [RTCStatsReport](https://developer.mozilla.org/zh-CN/docs/Web/API/RTCStatsReport)

## getStats方法

获取RTCStatsReport对象

1. 通过RTCPeerConnection对等连接对象方法获取。

   ~~~ts
   // 获取当前对等连接的视频RTP接收器对象
   const rtpVideoReceiver = pc:RTCPeerConnection.getReceivers().find(rece => rece.track.kind === 'video');
   // 获取当前对等连接的视频RTP发送器对象
   const rtpVideoSender = pc:RTCPeerConnection.getSenders().find(sender => sender.track.kind === 'video');
   ~~~

   

2. 通过RTP媒体管理API获取。

   ~~~ts
   // 获取视频RTP接收器的RTCStatsReport对象
   const receiVideoStats = await rtpVideoReceiver:RTCRtpReceiver.getStats();
   // 获取视频RTP发送器的RTCStatsReport对象
   const sendVideoStats = await rtpVideoSender:RTCRtpSender.getStats();
   ~~~

   

## RTCStats拓展

RTCStatsReport包含一个Map集合对象，是RTCStats的集合。键是字符串，值是从RTCStats派生的监控对象。



### RTCStats

所有统计对象的基本对象。

RTCStats包含统计对象的基础属性，实际使用的监控项继承了RTCStats的属性，并增加了自己的扩展项。

- timestamp：对象采样时的时间。
- type：对象所代表的种类，类型是[RTCStatsType](#RTCStatsType)。
- id：对象的ID值。

```c
dictionary RTCStats {
  required DOMHighResTimeStamp timestamp;
  required RTCStatsType type;
  required DOMString id;
};
```



### RTCStatsType

RTCStatsType是一个枚举类型，表明RTCStats对象代表的种类。

- [codec](#RTCCodecStats)：当前对等连接收发RTP流所使用的编码格式，对应RTCCodecStats对象。
- [inbound-rtp](#RTCInboundRtpStreamStats)：本地流入方向的RTP流数据，对应RTCInboundRtpStreamStats对象。
- [outbound-rtp](#RTCOutboundRtpStreamStats)：本地流出方向的RTP流数据，对应RTCOutboundRtpStreamStats对象。如果RTP发送器关联多个RTP流，则每个RTP流对应一个RTCOutboundRtpStreamStats对象，通过ssrc属性进行区分。
- [remote-inbound-rtp](#RTCRemoteInboundRtpStreamStats)：远端流入方向的RTP流数据，与本地流出方向的RTP流对应。数据在远端采集，并通过RTCP发送者报告回传。对应RTCRemoteInboundRtpStreamStats对象。
- [remote-outbound-rtp](#RTCRemoteOutboundRtpStreamStats)：对等端流出方向的RTP流数据，与本地流入方向的RTP流对应。数据在远端采集，通过RTCP发送者报告回传。对应RTCRemoteOutboundRtpStreamStats对象。
- media-source：与RTCRtpSender关联的媒体轨道数据。如果媒体轨道的kind值为video，则对应[RTCVideoSourceStats](#RTCVideoSourceStats)；如果kind值为audio，则对应[RTCAudioSourceStats](#RTCAudioSourceStats)。
- [csrc](#RTCRtpContributingSourceStats)：本地流入方向RTP流的贡献源（CSRC）的数据，对应RTCRtpContributing-SourceStats对象。
- [peer-connection](#RTCPeerConnectionStats)：对等连接RTCPeerConnection的统计数据，对应RTCPeerConnectionStats对象。
- [data-channel](#RTCDataChannelStats)：数据通道的统计数据，对应RTCDataChannelStats对象。
- [stream](#RTCMediaStreamStats)：媒体流统计数据，对应RTCMediaStreamStats对象。注意，在新的规范里，stream已经被淘汰。
- track：与RTCRtpSender关联的媒体轨道的统计数据。如果媒体轨道kind值为video，则对应[RTCSenderVideoTrackAttachmentStats](#RTCSenderVideoTrackAttachmentStats)；如果kind值为audio，则对应[RTCSenderAudioTrackAttachmentStats](#RTCSenderAudioTrackAttachmentStats)对象。
- [transceiver](#RTCRtpTranSceiverStats)：与RTP收发器RTCRtpTransceiver相关的统计数据，对应RTCRtpTran-sceiverStats对象。
- sender：与RTP发送器RTCRtpSender相关的统计数据。如果其关联的媒体轨道kind值为video，则对应[RTCVideoSenderStats](#RTCVideoSenderStats)对象；如果kind值为audio，则对应[RTCAudioSenderStats](#RTCAudioSenderStats)对象。
- receiver：与RTP接收器RTCRtpReceiver相关的统计数据，对应的对象取决于与其关联的媒体轨道kind值。如果kind值为void，则对应的对象为[RTCVideoReceiverStats](#RTCVideoReceiverStats)；如果kind值为audio，则对应的对象为[RTCAudioReceiverStats](#RTCAudioReceiverStats)。
- [transport](#RTCTransportStats)：与对等连接RTCPeerConnection关联的传输对象的统计数据，对应RTC-TransportStats对象。
- [sctp-transport](#RTCSctpTransportStats)：与RTCSctpTransport对象关联的SCTP传输数据，对应RTCSctp-TransportStats对象。
- [candidate-pair](#RTCIceCandidatePairStats)：与RTCIceTransport关联的ICE候选对统计数据，对应RTCIceCandidate-PairStats对象。
- [local-candidate](#RTCIceCandidateStats)：与RTCIceTransport关联的本地ICE候选者配对数据，对应RTCIceCandidate-Stats对象。
- [remote-candidate](#RTCIceCandidateStats)：与RTCIceTransport关联的远端ICE候选者配对数据，对应RTCIce-CandidateStats对象。
- [certificate](#RTCCertificateStats)：RTCIceTransport使用的证书信息，对应RTCCertificateStats对象。
- [ice-server](#RTCIceServerStats)：当前连接使用的STUN和TURN服务器信息，对应RTCIceServerStats对象。

```c
enum RTCStatsType {
"codec",
"inbound-rtp",
"outbound-rtp",
"remote-inbound-rtp",
"remote-outbound-rtp",
"media-source",
"csrc",
"peer-connection",
"data-channel",
"stream",
"track",
"transceiver",
"sender",
"receiver",
"transport",
"sctp-transport",
"candidate-pair",
"local-candidate",
"remote-candidate",
"certificate",
"ice-server"
};
```



### RTCCodecStats

RTCCodecStats对象中维护了与编码格式相关的数据

- payloadType：RTP编解码使用的载荷种类。
- codecType：属性类型为RTCCodecType，枚举类型，枚举值为'encode'和'decode'，分别表示编码和解码。
- transportId：使用此编码格式的传输通道的ID值。使用该ID值可以对应到RTC-TransportStats对象。
- mimeType：此编码格式的mime种类，如video/vp8。
- clockRate：此编码格式的采样率。
- channels：此编码格式的通道数。
- sdpFmtpLine：SDP中与此编码格式对应的a=fmtp代码行。

```c
dictionary RTCCodecStats : RTCStats {
           unsigned long payloadType;
           RTCCodecType  codecType;
           DOMString     transportId;
           DOMString     mimeType;
           unsigned long clockRate;
           unsigned long channels;
           DOMString     sdpFmtpLine;
};
```



### RTCInboundRtpStreamStats

RTCInboundRtpStreamStats代表本地流入方向RTP媒体流的统计对象

- trackId：媒体轨道统计对象的ID值。用于定位RTCReceiverAudioTrackAttachment-Stats或RTCReceiverVideoTrackAttachmentStats对象。
- receiverId：接收媒体流的统计对象的ID值。用于查找[RTCAudioReceiverStats](#RTCAudioReceiverStats)或者[RTCVideoReceiverStats](#RTCVideoReceiverStats)对象。
- remoteId：用于查找远端[RTCRemoteOutboundRtpStreamStats](#RTCRemoteOutboundRtpStreamStats)对象。
- framesDecoded：表示RTP流已经解码的帧的总数，仅对视频有效。
- keyFramesDecoded：表示RTP流已经解码的关键帧的总数，仅对视频有效，该值包含在framesDecoded中。
- frameWidth：表示最近一帧的宽度，仅对视频有效。
- frameHeight：表示最近一帧的高度，仅对视频有效。
- frameBitDepth：表示最近一帧每像素的位深，仅对视频有效。可选值是24、30或者36位。
- framesPerSecond：表示最近1秒的解码帧数量，仅对视频有效。
- qpSum：已解码帧的量化参数（QP）总数。QP值由编码格式定义，如VP8的QP值定义在帧头的y_ac_qi元素中。
- totalDecodeTime：解码帧花费的总时长，单位为秒。使用该值除以framesDecoded的值可以得到解码的平均时长。
- totalInterFrameDelay：连续解码的帧之间的延迟总和，单位为秒。
- totalSquaredInterFrameDelay：连续解码的帧之间的延迟平方和，单位为秒。
- voiceActivityFlag：表示RTP数据包的最近一帧是否包含语音活动，该值取决于扩展头是否存在V位，仅对音频有效。
- lastPacketReceivedTimestamp：表示收到最近一个RTP数据包的时间戳，不同于timestamp，timestamp代表的是本地端点生成统计信息的时间。
- averageRtcpInterval：表示两个连续的复合RTCP数据包之间的平均间隔。复合数据包至少包含RTCP RR(接收端报告)或SR块以及带有CNAME项的SDES数据包。
- headerBytesReceived：表示接收的RTP标头和填充字节的总数，不包括IP或UDP等传输层标头的大小。headerBytesReceived + bytesReceived等于有效载荷字节数。
- fecPacketsReceived：表示接收的RTP FEC数据包总数。当接收带媒体数据包（例如Opus）的带内FEC数据包时，此计数器也可以递增。
- fecPacketsDiscarded：表示丢弃的RTP FEC数据包总数。它是fecPacketsReceived的子集。
- bytesReceived：表示接收的总字节数。
- packetsFailedDecryption：表示未能成功解密的RTP数据包的累积数量。这些数据包不计入packetsDiscarded。
- packetsDuplicated：表示因重复而丢弃的数据包的累积数量。复制的数据包具有与此前接收的数据包相同的RTP序列号和内容。如果收到一个数据包的多个副本，则全部计数，但是重复的数据包不计入packetsDiscarded。
- perDscpPacketsReceived：每个差分服务代码点（DSCP）收到的数据包总数。DSCP以字符串形式表示十进制整数。请注意，由于网络重新映射等原因，这些数字可能与发送时看到的数字不一致，并非所有操作系统都提供此信息。
- nackCount：表示此接收器发送的NACK数据包的总数。
- firCount：表示此接收器发送的FIR数据包的总数，仅对视频有效。
- pliCount：表示此接收器发送的PLI数据包的总数，仅对视频有效。
- sliCount：表示此接收器发送的SLI数据包的总数，仅对视频有效。
- estimatedPlayoutTimestamp：表示此接收器上媒体轨道的预估播放时长。播放时长是最后一个媒体样本的NTP时间戳，由播放经过的时长决定。该值用于估算同一来源音频轨道和视频轨道的不同步时长。
- jitterBufferDelay：表示每个音频样本或视频帧从接收到退出抖动缓冲区花费的时间，单位为秒。
- jitterBufferEmittedCount：表示来自抖动缓冲区的音频样本或视频帧总数（增加jitterBufferDelay的值）。可以通过计算jitterBufferDelay/jitterBufferEmittedCount得到平均抖动缓冲器的延迟时间。
- totalSamplesReceived：表示此RTP流上已接收的样本总数，包括隐藏样本concealedSamples，仅对音频有效。
- samplesDecodedWithSilk：表示由Opus编解码器的SILK部分解码的样本总数，仅对编解码器为Opus的音频有效。
- samplesDecodedWithCelt：表示由Opus编解码器的CELT部分解码的样本总数，仅对编解码器为Opus的音频有效。
- concealedSamples：表示隐藏样本的总数。隐藏样本是在播放之前被本地生成的合成样本所替换的样本。必须隐藏的样本包括丢失的数据包样本（packetsLost）和因延迟而无法播放的数据包样本（packetsDiscarded），仅对音频有效。
- silentConcealedSamples：表示静音隐藏样本的总数。播放静音样本会出现静音。它是concealedSamples的子集，仅对音频有效。
- concealmentEvents：表示隐藏事件的数量。多个连续的隐藏样本会增加concealedSamples的值，但只会增加一次隐藏事件。仅对音频有效。
- insertedSamplesForDeceleration：表示播放速度降低时，接收到的采样数与播放的采样数之差。如果由于样本的插入操作导致播放速度降低，则该值为插入样本的数量。仅对音频有效。
- removedSamplesForAcceleration：表示加快播放速度时接收到的样本数与播放的样本数之差。如果通过删除样本实现了加速，则该值为删除的样本数。仅对音频有效。
- audioLevel：表示接收轨道的音量。有关本地轨道的音量，请参阅本节RTCAudio-SourceStats的介绍。该值介于0和1之间，其中0表示静音，1表示最大音量。仅对音频有效。
- totalAudioEnergy：表示接收轨道的音频能量，仅对音频有效。
- totalSamplesDuration：表示接收轨道的音频持续时间，仅对音频有效。
- framesReceived：表示在此RTP流上接收的完整帧的总数。收到完整帧后，该值将递增。仅对视频有效。
- decoderImplementation：表示使用的解码器实现。

```C
dictionary RTCInboundRtpStreamStats: RTCReceivedRtpStreamStats {
           DOMString            trackId;
           DOMString            receiverId;
           DOMString            remoteId;
           unsigned long        framesDecoded;
           unsigned long        keyFramesDecoded;
           unsigned long        frameWidth;
           unsigned long        frameHeight;
           unsigned long        frameBitDepth;
           double               framesPerSecond;
           unsigned long long   qpSum;
           double               totalDecodeTime;
           double               totalInterFrameDelay;
           double               totalSquaredInterFrameDelay;
           boolean              voiceActivityFlag;
           DOMHighResTimeStamp  lastPacketReceivedTimestamp;
           double               averageRtcpInterval;
           unsigned long long   headerBytesReceived;
           unsigned long long   fecPacketsReceived;
           unsigned long long   fecPacketsDiscarded;
           unsigned long long   bytesReceived;
           unsigned long long   packetsFailedDecryption;
           unsigned long long   packetsDuplicated;
           record<USVString, unsigned long long> perDscpPacketsReceived;
           unsigned long        nackCount;
           unsigned long        firCount;
           unsigned long        pliCount;
           unsigned long        sliCount;
           DOMHighResTimeStamp  estimatedPlayoutTimestamp;
           double               jitterBufferDelay;
           unsigned long long   jitterBufferEmittedCount;
           unsigned long long   totalSamplesReceived;
           unsigned long long   samplesDecodedWithSilk;
           unsigned long long   samplesDecodedWithCelt;
           unsigned long long   concealedSamples;
           unsigned long long   silentConcealedSamples;
           unsigned long long   concealmentEvents;
           unsigned long long   insertedSamplesForDeceleration;
           unsigned long long   removedSamplesForAcceleration;
           double               audioLevel;
           double               totalAudioEnergy;
           double               totalSamplesDuration;
           unsigned long        framesReceived;
           DOMString            decoderImplementation;
};
```

#### RTCReceivedRtpStreamStats

RTCInboundRtpStreamStats的父类

- packetsReceived：表示接收的RTP数据包总数。
- packetsLost：表示丢失的RTP数据包总数。
- jitter：表示数据包抖动（以秒为单位）。
- packetsDiscarded：表示抖动缓冲区丢弃的RTP数据包的总数。由于重复而丢弃的RTP数据包不在此指标内。
- packetsRepaired：应用错误恢复机制修复的RTP数据包的总数。
- burstPacketsLost：在丢失突发期间丢失的RTP数据包的总数。
- burstPacketsDiscarded：在丢弃突发期间丢弃的RTP数据包的总数。
- burstLossCount：丢失的RTP数据包的累积突发数。
- burstDiscardCount：丢弃的RTP数据包的累积突发数。
- burstLossRate：在丢失突发期间丢失的RTP数据包占突发期间RTP数据包总数的比例。
- burstDiscardRate：在丢失突发期间丢弃的RTP数据包占突发期间RTP数据包总数的比例。
- gapLossRate：在间隔时间内丢失的RTP数据包的百分比。
- gapDiscardRate：在间隔时间内丢弃的RTP数据包的百分比。
- framesDropped：在解码之前丢失或丢弃的总帧数。丢弃的原因是该帧错过了此接收器的截止时限。仅对视频有效。
- partialFramesLost：丢失部分帧的累积数量。如果在解码之前通过重传等机制接收并恢复了部分帧，则会增加frameReceived计数器。仅对视频有效。
- fullFramesLost：丢失完整帧的累计数量。仅对视频有效。



```C
dictionary RTCReceivedRtpStreamStats : RTCRtpStreamStats {
           unsigned long long   packetsReceived;
           long long            packetsLost;
           double               jitter;
           unsigned long long   packetsDiscarded;
           unsigned long long   packetsRepaired;
           unsigned long long   burstPacketsLost;
           unsigned long long   burstPacketsDiscarded;
           unsigned long        burstLossCount;
           unsigned long        burstDiscardCount;
           double               burstLossRate;
           double               burstDiscardRate;
           double               gapLossRate;
           double               gapDiscardRate;
           unsigned long        framesDropped;
           unsigned long        partialFramesLost;
           unsigned long        fullFramesLost;

};
```

#### RTCRtpStreamStats

RTCReceivedRtpStreamStats的父类

- ssrc：是一个32位的无符号整数值，用于标识此统计信息对象关联的RTP数据包的源。
- kind：媒体种类，取值为audio或video，必须与关联的媒体轨道kind属性一致。
- transportId：与RTP流关联的RTCTransportStats的唯一标识。
- codecId：与RTP流关联的RTCCodecStats的唯一标识。

```c
dictionary RTCRtpStreamStats : RTCStats {
           unsigned long       ssrc;
           DOMString           kind;
           DOMString           transportId;
           DOMString           codecId;
};
```

### RTCOutboundRtpStreamStats

本地流出方向的RTP流统计对象

- trackId：媒体轨道统计对象的ID值，用于定位RTCSenderAudioTrackAttachmentStats或RTCSenderVideoTrackAttachmentStats对象。
- mediaSourceId：与RTP发送者关联的媒体轨道统计对象标识，用于定位RTCMedia-SourceStats对象。
- senderId：RTP发送者统计对象标识，用于定位RTCAudioSenderStats或RTCVideo-SenderStats对象。
- remoteId：用于定位RTCRemoteInboundRtpStreamStats统计对象。
- rid：此RTP流的rid编码参数。
- lastPacketSentTimestamp：表示发送最近一个数据包的时间戳。
- headerBytesSent：表示发送的RTP标头和填充字节的总数，不包括IP或UDP等传输层标头的大小。headerBytesSent + bytesSent等于传输有效载荷发送的字节数。
- packetsDiscardedOnSend：丢弃的RTP数据包总数。产生丢弃的原因有很多种，包括缓冲区已满或没有可用的内存。
- bytesDiscardedOnSend：丢弃的字节总数。
- fecPacketsSent：表示发送的RTP FEC数据包总数。
- retransmittedPacketsSent：表示重传的数据包总数，是packetsSent的子集。
- retransmittedBytesSent：表示重传的字节总数，仅包括有效载荷字节，是bytesSent的子集。
- targetBitrate：表示目标比特率。通常，目标比特率是提供给编解码器的配置参数，它不计算IP或其他传输层（如TCP或UDP）的大小，单位是bps。
- totalEncodedBytesTarget：每次对帧进行编码后，此值都会增加目标帧的大小（以字节为单位），实际上帧的大小可能大于或小于此数字。framesEncoded上升时该值上升。
- frameWidth：表示最近一个编码帧的宽度，仅对视频有效。
- frameHeight：表示最近一个编码帧的高度，仅对视频有效。
- frameBitDepth：表示最近一帧每像素的位深，仅对视频有效。取值是24、30或36。
- framesPerSecond：表示最近1秒的解码帧数量，仅对视频有效。
- framesSent：表示此RTP流发送的帧总数，仅对视频有效。
- hugeFramesSent：表示此RTP流发送的巨帧的总数。所谓巨帧是指编码大小为帧平均大小2.5倍以上的帧，仅对视频有效。
- framesEncoded：表示为此RTP媒体流成功编码的帧总数，仅对视频有效。
- keyFramesEncoded：表示成功为此RTP媒体流编码的关键帧总数，例如VP8的关键帧或H.264的IDR帧，仅对视频有效，是framesEncoded的子集。
- framesDiscardedOnSend：由于套接字错误而丢弃的视频帧总数。产生丢弃的原因有很多种，包括缓冲区已满或没有可用的内存。
- qpSum：RTP发送者编码的帧的QP值之和。QP值的定义取决于编解码器，对于VP8，QP值是作为语法元素“y_ac_qi”在帧头中携带的值，其范围是0到127，仅对视频有效。
- totalSamplesSent：通过此RTP流发送的样本总数，仅对音频有效。
- samplesEncodedWithSilk：由Opus编解码器的SILK部分编码的样本总数，仅对音频有效，并且音频编解码器应为Opus。
- samplesEncodedWithCelt：由Opus编解码器的CELT部分编码的样本总数。仅对音频有效，并且音频编解码器应为Opus。
- voiceActivityFlag：发送的最后一个RTP数据包是否包含语音活动，这取决于扩展头中V位是否存在，仅对音频有效。
- totalEncodeTime：编码framesEncoded帧所花费的总秒数。该值除以framesEncoded值的结果即为平均编码时间。
- totalPacketSendDelay：数据包传输到网络之前在本地缓存的总秒数。指的是从RTP打包程序发出数据包开始，到将数据包移交给OS网络套接字为止的这段时间。
- averageRtcpInterval：两个连续的复合RTCP数据包之间的平均RTCP间隔。复合数据包必须包含RTCP RR（或SR）块以及SDES数据包。
- qualityLimitationReason：当前限制分辨率或帧率的原因，如果没有限制，则为none，仅对视频有效。
- qualityLimitationDurations：流处于质量限制状态下的总时长，单位为秒，仅对视频有效。
- qualityLimitationResolutionChanges：流处于质量限制状态下，分辨率变更的次数。计数器最初为零，随着分辨率变化而增加。例如，如果将720p作为480p发送一段时间，然后恢复到720p，则qualityLimitationResolutionChanges的值为2。仅对视频有效。
- perDscpPacketsSent：每个DSCP发送的数据包总数，DSCP以字符串形式标识为十进制整数。
- nackCount：表示此RTP发送者接收到的NACK数据包的总数。
- firCount：表示此RTP发送者接收到的FIR数据包的总数，仅对视频有效。
- pliCount：表示此RTP发送者接收到的PLI数据包的总数，仅对视频有效。
- sliCount：表示此RTP发送者接收到的SLI数据包的总数，仅对视频有效。
- encoderImplementation：表示此RTP使用的编码器。



```c
dictionary RTCOutboundRtpStreamStats : RTCSentRtpStreamStats {
           DOMString            trackId;
           DOMString            mediaSourceId;
           DOMString            senderId;
           DOMString            remoteId;
           DOMString            rid;
           DOMHighResTimeStamp  lastPacketSentTimestamp;
           unsigned long long   headerBytesSent;
           unsigned long        packetsDiscardedOnSend;
           unsigned long long   bytesDiscardedOnSend;
           unsigned long        fecPacketsSent;
           unsigned long long   retransmittedPacketsSent;
           unsigned long long   retransmittedBytesSent;
           double               targetBitrate;
           unsigned long long   totalEncodedBytesTarget;
           unsigned long        frameWidth;
           unsigned long        frameHeight;
           unsigned long        frameBitDepth;
           double               framesPerSecond;
           unsigned long        framesSent;
           unsigned long        hugeFramesSent;
           unsigned long        framesEncoded;
           unsigned long        keyFramesEncoded;
           unsigned long        framesDiscardedOnSend;
           unsigned long long   qpSum;
           unsigned long long   totalSamplesSent;
           unsigned long long   samplesEncodedWithSilk;
           unsigned long long   samplesEncodedWithCelt;
           boolean              voiceActivityFlag;
           double               totalEncodeTime;
           double               totalPacketSendDelay;
           double               averageRtcpInterval;
           RTCQualityLimitationReason                 qualityLimitationReason;
           record<DOMString, double> qualityLimitationDurations;
           unsigned long        qualityLimitationResolutionChanges;
           record<USVString, unsigned long long> perDscpPacketsSent;
           unsigned long        nackCount;
           unsigned long        firCount;
           unsigned long        pliCount;
           unsigned long        sliCount;
           DOMString            encoderImplementation;
};
```

#### RTCSentRtpStreamStats

RTCOutboundRtpStreamStats的父类

- packetsSent：表示发送的RTP数据包总数。
- bytesSent：表示发送的字节总数。

```
dictionary RTCSentRtpStreamStats : RTCRtpStreamStats {
           unsigned long      packetsSent;
           unsigned long long bytesSent;
};
```

### RTCRemoteInboundRtpStreamStats

远端流入方向RTP媒体流的统计对象

- localId：用于定位与其对应的本地流出方向的统计对象RTCOutboundRtpStreamStats。
- roundTripTime：基于RTCP时间戳估算的数据包往返时长，单位为秒。
- totalRoundTripTime：表示自会话开始以来所有往返时间的累积总和（以秒为单位）。
- fractionLost：表示丢包率。
- reportsReceived：表示接收的RTCP RR块总数。
- roundTripTimeMeasurements：表示已接收到的、包含有效往返时间的RTCP RR块总数。

```
dictionary RTCRemoteInboundRtpStreamStats : RTCReceivedRtpStreamStats {
           DOMString            localId;
           double               roundTripTime;
           double               totalRoundTripTime;
           double               fractionLost;
           unsigned long long   reportsReceived;
           unsigned long long   roundTripTimeMeasurements;
};
```



### RTCRemoteOutboundRtpStreamStats

远端流出方向的RTP流统计对象

- localId：用于定位与其对应的本地流入方向的统计对象RTCInboundRtpStreamStats。
- remoteTimestamp：表示远端发送这些统计信息的远程时间戳。不同于timestamp，remoteTimestamp来自RTCP发送者报告的NTP时间，该时间可能与本地时钟不同步。
- reportsSent：表示发送的RTCP SR块总数。

```
dictionary RTCRemoteOutboundRtpStreamStats : RTCSentRtpStreamStats {
           DOMString           localId;
           DOMHighResTimeStamp remoteTimestamp;
           unsigned long long  reportsSent;
};
```

### RTCMediaSourceStats

>
>
>RTCMediaSourceStats代表附加到一个或多个RTP发送者上的媒体源统计对象。它包含有关媒体源的信息，例如编码前的帧频和分辨率。这些信息是媒体轨道采集时的属性，传递给了RTP发送者。相对来讲，RTCOutboundRtpStreamStats的部分成员属性也包含类似的信息，但RTCOutboundRtpStreamStats中的信息是在编码后获取的。也就是说，该对象反映的数据是在应用了媒体约束之后，在编码器进行编码之前采集的。
>
>例如，从高分辨率摄像机捕获一条媒体轨道，因为设定了媒体约束，所以帧被缩减，随后由于CPU和网络条件的限制，在编码阶段帧被进一步缩减。第一次帧缩减的结果通过RTCMediaSourceStats反映，而第二次帧缩减的结果通过RTCOutboundRtpStreamStats反映。

RTCMediaSourceStats对象有两个子类：RTCVideoSourceStats和RTCAudioSourceStats。依据媒体轨道的kind值来决定具体的子类。

- trackIdentifier：媒体轨道的ID属性值。
- kind：媒体轨道的kind值，取值为audio或video。如果取值为audio，则此统计对象的类型为RTCAudioSourceStats；如果取值为video，则此统计对象的类型为RTCVideoSourceStats。

```c
dictionary RTCMediaSourceStats : RTCStats {
           DOMString       trackIdentifier;
           DOMString       kind;
};
```

#### RTCVideoSourceStats

RTCVideoSourceStats表示附加在一个或多个RTP发送者上的视频轨道统计对象

- width：最近一帧的宽度（以像素为单位）。
- height：最近一帧的高度（以像素为单位）。
- bitDepth：最近一帧的位深。
- frames：帧总数。
- framesPerSecond：每秒帧数。

```c
dictionary RTCVideoSourceStats : RTCMediaSourceStats {
           unsigned long   width;
           unsigned long   height;
           unsigned long   bitDepth;
           unsigned long   frames;
           unsigned long   framesPerSecond;
};
```

#### RTCAudioSourceStats

RTCAudioSourceStats表示附加在一个或多个RTP发送者上的音频轨道统计对象

- audioLevel：表示媒体源的音量级别，值介于0和1之间。
- totalAudioEnergy：表示媒体源的音频能量。
- totalSamplesDuration：表示媒体源的音频采样持续时长，单位为秒。
- echoReturnLoss：表示回声回波损耗，仅当媒体轨道来自支持回声消除的话筒时才存在，单位为dB。
- echoReturnLossEnhancement：表示回声回波损耗增强，仅当媒体轨道来自支持回声消除的话筒时才存在，单位为dB。

```
dictionary RTCAudioSourceStats : RTCMediaSourceStats {
            double              audioLevel;
            double              totalAudioEnergy;
            double              totalSamplesDuration;
            double              echoReturnLoss;
            double              echoReturnLossEnhancement;
};
```

### RTCRtpContributingSourceStats

>
>
>RTCRtpContributingSourceStats代表RTP流贡献源（CSRC）的统计对象。贡献源生成了RTP数据，混合器将其组合成单个RTP数据包流，以便于WebRTC端点接收。在CSRC列表或收到的RTP数据包标头扩展中可以获取贡献源的信息。

- contributorSsrc：贡献源的SSRC标识符。它是一个32位无符号整数，出现在该源生成的RTP数据包的CSRC列表中。
- inboundRtpStreamId：贡献源生成的RTP流对应的统计对象RTCInboundRtpStreamStats的ID值。
- packetsContributedTo：贡献源生成的RTP数据包的总数。
- audioLevel：最近一个RTP数据包中的音频音量级别。

```
dictionary RTCRtpContributingSourceStats : RTCStats {
           unsigned long contributorSsrc;
           DOMString     inboundRtpStreamId;
           unsigned long packetsContributedTo;
           double        audioLevel;
};
```

### RTCPeerConnectionStats

RTCPeerConnectionStats代表对等连接RTCPeerConnection的统计对象

- dataChannelsOpened：表示在其生命周期内，所有曾经进入“打开”状态的数据通道数量。通过dataChannelsOpened减去dataChannelsClosed计算得到当前处于打开状态的数据通道数。此结果始终为正。
- dataChannelsClosed：表示在其生命周期内，由于对等端或者底层传输关闭，从“打开”状态变更为“关闭”状态的数据通道数量，不包含从“正在连接”转换为“关闭”或从未打开过的数据通道。
- dataChannelsRequested：表示成功调用createDataChannel()方法返回的数据通道数量。
- dataChannelsAccepted：表示datachannel触发事件建立的数据通道数量。

```
dictionary RTCPeerConnectionStats : RTCStats {
          unsigned long dataChannelsOpened;
          unsigned long dataChannelsClosed;
          unsigned long dataChannelsRequested;
          unsigned long dataChannelsAccepted;
};
```



### RTCDataChannelStats

RTCDataChannelStats代表数据通道的统计数据

- label：表示RTCDataChannel对象的label值。
- protocol：表示RTCDataChannel对象的protocol值。
- dataChannelIdentifier：表示RTCDataChannel对象的ID属性。
- transportId：表示RTCDataChannel对象底层传输通道的唯一标识。
- state：表示RTCDataChannel对象的readyState值。
- messagesSent：表示通过数据通道发出的消息数量。
- bytesSent：表示通过数据通道发出的字节数。
- messagesReceived：表示通过数据通道收到的消息数量。
- bytesReceived：表示通过数据通道接收到的字节数。

```
dictionary RTCDataChannelStats : RTCStats {
           DOMString           label;
           DOMString           protocol;
           long                dataChannelIdentifier;
           DOMString           transportId;
           RTCDataChannelState state;
           unsigned long       messagesSent;
           unsigned long long  bytesSent;
           unsigned long       messagesReceived;
           unsigned long long  bytesReceived;
};
```

### RTCMediaHandlerStats

RTCMediaHandlerStats代表***<u>媒体轨道统计数据的基类</u>***

- trackIdentifier：表示媒体轨道的ID属性。
- remoteSource：表示媒体轨道是否来自远端。true表示来自远端，false表示来自本地。
- ended：表示媒体轨道的ended状态。
- kind：表示媒体轨道的kind属性。
- priority：表示媒体轨道的优先级。

```
dictionary RTCMediaHandlerStats : RTCStats {
           DOMString           trackIdentifier;
           boolean             remoteSource;
           boolean             ended;
           DOMString           kind;
           RTCPriorityType     priority;
};
```

#### RTCSenderAudioTrackAttachmentStats

代表与RTP发送器关联的音频轨道统计对象

RTCSenderAudioTrackAttachmentStats继承自RTCAudioSenderStats，RTCAudioSenderStats又继承自RTCAudioHandlerStats，增加了mediaSourceId属性，RTCAudioHandlerStats继承自RTCMediaHandlerStats。

属性mediaSourceId表示与RTP发送器关联的媒体轨道统计对象的ID值。

```
dictionary RTCSenderAudioTrackAttachmentStats : RTCAudioSenderStats {
};
dictionary RTCAudioSenderStats : RTCAudioHandlerStats {
           DOMString             mediaSourceId;
};
dictionary RTCAudioHandlerStats : RTCMediaHandlerStats {
};
```

#### RTCSenderVideoTrackAttachmentStats

代表与RTP发送器关联的视频轨道统计对象

RTCSenderVideoTrackAttachmentStats继承自RTCVideoSenderStats，RTCVideoSenderStats继承自RTCVideoHandlerStats，增加了mediaSourceId属性，RTCVideoSenderStats又继承自RTCMediaHandlerStats。

属性mediaSourceId表示与RTP发送器关联的媒体轨道统计对象的ID值。

```
dictionary RTCSenderVideoTrackAttachmentStats : RTCVideoSenderStats {
};
dictionary RTCVideoSenderStats : RTCVideoHandlerStats {
           DOMString             mediaSourceId;
};
dictionary RTCVideoHandlerStats : RTCMediaHandlerStats {
};
```

#### RTCAudioSenderStats

RTP发送器RTCRtpSender相关的统计数据，其关联的媒体轨道kind值是audio

RTCAudioSenderStats拥有成员属性mediaSourceId，继承自RTCAudioHandlerStats，RTCAudioHandlerStats继承自RTCMediaHandlerStats。

成员属性mediaSourceId表示与RTP发送器关联的媒体轨道统计对象的ID值。

```
dictionary RTCAudioSenderStats : RTCAudioHandlerStats {
           DOMString             mediaSourceId;
};
dictionary RTCAudioHandlerStats : RTCMediaHandlerStats {
};
```

#### RTCVideoSenderStats

RTP发送器RTCRtpSender相关的统计数据，其关联的媒体轨道kind值是video

RTCVideoSenderStats拥有成员属性mediaSourceId，继承自RTCVideoHandlerStats，RTCVideoHandlerStats继承自RTCMediaHandlerStats。

成员属性mediaSourceId表示与RTP发送器关联的媒体轨道统计对象的ID值。

```
dictionary RTCVideoSenderStats : RTCVideoHandlerStats {
           DOMString             mediaSourceId;
};
dictionary RTCVideoHandlerStats : RTCMediaHandlerStats {
};
```

#### RTCAudioReceiverStats

RTCAudioReceiverStats代表RTP音频接收器的统计对象。当调用addTrack()或者addTransceiver()方法向对等连接加入RTCRtpReceiver时，即产生统计对象

RTCAudioReceiverStats继承自RTCAudioHandlerStats，RTCAudioHandlerStats继承自RTCMediaHandlerStats。无新增成员属性。

```
dictionary RTCAudioReceiverStats : RTCAudioHandlerStats {
};
dictionary RTCAudioHandlerStats : RTCMediaHandlerStats {
};
```

#### RTCVideoReceiverStats

RTCVideoReceiverStats继承自RTCVideoHandlerStats，RTCVideoHandlerStats继承自RTCMediaHandlerStats。无新增成员属性。

RTCVideoReceiverStats代表RTP视频接收器的统计对象。当调用addTrack()或者addTransceiver()方法向对等连接加入RTCRtpReceiver时，该统计对象即产生

```
dictionary RTCVideoReceiverStats : RTCVideoHandlerStats {
};
dictionary RTCVideoHandlerStats : RTCMediaHandlerStats {
};
```

### RTCRtpTransceiverStats

RTCRtpTransceiverStats代表RTCRtpTransceiver的统计对象

- senderId：表示RTCRtpSender对应的统计对象的ID值。
- receiverId：表示RTCRtpReceiver对应的统计对象的ID值。
- mid：表示RTCRtpTransceiver的mid值。

```
dictionary RTCRtpTransceiverStats {
  DOMString senderId;
  DOMString receiverId;
  DOMString mid;
};
```

### RTCTransportStats

RTCTransportStats代表RTCDtlsTransport和底层RTCIceTransport对应的统计对象

- packetsSent：表示通过此传输通道发送的数据包总数。
- packetsReceived：表示通过此传输通道接收到的数据包总数。
- bytesSent：表示通过此传输通道发送的字节数。
- bytesReceived：表示通过此传输通道接收到的字节数。
- rtcpTransportStatsId：如果未对RTP和RTCP进行多路复用，则为RTCP组件对应的统计对象的ID值，此时该对象只包含RTP组件统计信息。
- iceRole：表示RTCDtlsTransport中transport对应的role属性值。
- dtlsState：表示RTCDtlsTransport的state属性值。
- selectedCandidatePairId：表示与该传输通道关联的RTCIceCandidatePairStats的ID值。
- localCertificateId：表示与该传输通道关联的本地证书ID值。
- remoteCertificateId：表示与该传输通道关联的远端证书ID值。
- tlsVersion：表示TLS的版本号。
- dtlsCipher：表示用于DTLS传输层的加密算法名称。
- srtpCipher：表示用于SRTP传输层的加密算法名称。
- tlsGroup：表示用于TLS加密的组名称。
- selectedCandidatePairChanges：表示建立传输通道时，ICE候选对的变化次数。

```
dictionary RTCTransportStats : RTCStats {
           unsigned long long    packetsSent;
           unsigned long long    packetsReceived;
           unsigned long long    bytesSent;
           unsigned long long    bytesReceived;
           DOMString             rtcpTransportStatsId;
           RTCIceRole            iceRole;
           RTCDtlsTransportState dtlsState;
           DOMString             selectedCandidatePairId;
           DOMString             localCertificateId;
           DOMString             remoteCertificateId;
           DOMString             tlsVersion;
           DOMString             dtlsCipher;
           DOMString             srtpCipher;
           DOMString             tlsGroup;
           unsigned long         selectedCandidatePairChanges;
};
```

### RTCSctpTransportStats

RTCSctpTransportStats包含属性smoothedRoundTripTime，表示最新的平滑往返时间，单位为秒。如果还没有测量往返时间，则该值不确定。

RTCSctpTransportStats代表RTCSctpTransport对应的统计对象

```c
dictionary RTCSctpTransportStats : RTCStats {
  double smoothedRoundTripTime;
};
```

### RTCIceCandidatePairStats

RTCIceCandidatePairStats代表与RTCIceTransport关联的ICE候选对的统计对象

- transportId：表示关联的RTCTransportStats对象的ID值。
- localCandidateId：表示关联的本地候选RTCIceCandidateStats的ID值。
- remoteCandidateId：表示关联的远端候选RTCIceCandidateStats的ID值。
- state：表示一对本地和远端候选对的状态。
- nominated：表示nominated标识。
- packetsSent：表示当前候选对发送的数据包总数。
- packetsReceived：表示当前候选对接收的数据包总数。
- bytesSent：表示当前候选对发送的字节数。
- bytesReceived：表示当前候选对接收的字节数。
- lastPacketSentTimestamp：表示当前候选对最近一次发送数据包的时间戳。
- lastPacketReceivedTimestamp：表示当前候选对最近一次接收数据包的时间戳。
- firstRequestTimestamp：表示当前候选对第一次发送STUN请求的时间戳。
- lastRequestTimestamp：表示当前候选对最近一次发送STUN请求的时间戳。
- lastResponseTimestamp：表示当前候选对最近一次收到STUN响应的时间戳。
- totalRoundTripTime：表示自会话开始以来，以秒为单位的所有往返时间测量值的总和，基于STUN连接检查响应（responsesReceived）。平均往返时间可以通过responsesReceived/totalRoundTripTime来计算。
- currentRoundTripTime：表示从两个STUN连接检查计算得出的最新往返时间（以秒为单位）。
- availableOutgoingBitrate：表示当前候选对流出方向的比特率，包括所有使用当前候选对发出的RTP流。该比特率测量不包括IP层及传输层（如TCP或UDP）的大小。
- availableIncomingBitrate：表示当前候选对流入方向的比特率，包括所有使用当前候选对接收到的RTP流。该比特率测量不包括IP层及传输层（如TCP或UDP）的大小。
- circuitBreakerTriggerCount：表示针对特定5元组触发断路器的次数。
- requestsReceived：表示接收到的连接检查请求总数（包括重传）。由于无法区分连通性检查请求和同意请求，所有接收到的请求都被计算在内。
- requestsSent：表示发送的连接检查请求的总数（不包括重传）。
- responsesReceived：表示收到的连通性检查响应总数。
- responsesSent：表示发送的连接性检查响应总数。由于无法区分连通性检查请求和同意请求，所有发出的响应都被计算在内。
- retransmissionsReceived：表示接收到的连接检查请求重传的次数。重传定义为具有TRANSACTION_TRANSMIT_COUNTER属性的连接性检查请求，其中[req]字段大于1。
- retransmissionsSent：表示已发送的连接检查请求重发的总数。
- consentRequestsSent：表示已发送的同意请求总数。
- consentExpiredTimestamp：表示最近一次有效的STUN响应的时间戳。
- packetsDiscardedOnSend：表示由于套接字错误而被丢弃的数据包总数。导致套接字错误的原因包括缓冲区已满或没有可用的内存。
- bytesDiscardedOnSend：由于套接字错误而丢弃的字节数，指的是将数据包传递给套接字时发生了套接字错误。导致套接字错误的原因包括缓冲区已满或没有可用的内存。

```c
dictionary RTCIceCandidatePairStats : RTCStats {
           DOMString                     transportId;
           DOMString                     localCandidateId;
           DOMString                     remoteCandidateId;
           RTCStatsIceCandidatePairState state;
           boolean                       nominated;
           unsigned long long            packetsSent;
           unsigned long long            packetsReceived;
           unsigned long long            bytesSent;
           unsigned long long            bytesReceived;
           DOMHighResTimeStamp           lastPacketSentTimestamp;
           DOMHighResTimeStamp           lastPacketReceivedTimestamp;
           DOMHighResTimeStamp           firstRequestTimestamp;
           DOMHighResTimeStamp           lastRequestTimestamp;
           DOMHighResTimeStamp           lastResponseTimestamp;
           double                        totalRoundTripTime;
           double                        currentRoundTripTime;
           double                        availableOutgoingBitrate;
           double                        availableIncomingBitrate;
           unsigned long                 circuitBreakerTriggerCount;
           unsigned long long            requestsReceived;
           unsigned long long            requestsSent;
           unsigned long long            responsesReceived;
           unsigned long long            responsesSent;
           unsigned long long            retransmissionsReceived;
           unsigned long long            retransmissionsSent;
           unsigned long long            consentRequestsSent;
           DOMHighResTimeStamp           consentExpiredTimestamp;
           unsigned long                 packetsDiscardedOnSend;
           unsigned long long            bytesDiscardedOnSend;
};
```

### RTCIceCandidateStats

RTCIceCandidateStats代表RTCIceCandidate的统计对象

- transportId：表示关联的RTCTransportStats对象的ID值。
- address：表示候选者的地址。
- port：表示候选者的端口。
- protocol：表示候选者的协议，取值为udp或者tcp。
- candidateType：表示候选者的种类，我们在第4章介绍过RTCIceCandidateType。
- priority：表示候选者的优先级。
- url：对于本地候选者，这是ICE服务器的URL地址；对于远程候选者，该值为空。
- relayProtocol：表示与TURN服务器的通信协议，仅用于本地候选者。有效值为udp、tcp或者tls。

```
dictionary RTCIceCandidateStats : RTCStats {
           DOMString                transportId;
           DOMString?               address;
           long                     port;
           DOMString                protocol;
           RTCIceCandidateType      candidateType;
           long                     priority;
           DOMString                url;
           DOMString                relayProtocol;
};
```

### RTCCertificateStats

RTCCertificateStats代表TLS证书对应的统计对象

- fingerprint：表示证书的指纹。
- fingerprintAlgorithm：表示用于计算证书指纹的哈希函数，如sha-256。
- base64Certificate：证书的DER编码的base-64表示形式。
- issuerCertificateId：指向下一个证书对应的统计对象。如果当前证书是最后一个，则该值为空。

```
dictionary RTCCertificateStats : RTCStats {
             DOMString fingerprint;
             DOMString fingerprintAlgorithm;
             DOMString base64Certificate;
             DOMString issuerCertificateId;
};
```

### RTCIceServerStats

RTCIceServerStats代表ICE服务器的统计对象

- url：表示ICE服务器（TURN或STUN）的URL地址。
- port：表示连接ICE服务器时，客户端使用的端口号。
- protocol：表示连接ICE服务器时，客户端使用的协议，有效值为tcp或udp。
- totalRequestsSent：表示发送给ICE服务器的请求总数。
- totalResponsesReceived：表示从ICE服务器接收到的响应总数。
- totalRoundTripTime：表示已发请求的往返时长。

```
dictionary RTCIceServerStats : RTCStats {
           DOMString url;
           long port;
           DOMString protocol;
           unsigned long totalRequestsSent;
           unsigned long totalResponsesReceived;
           double totalRoundTripTime;
  };
```





## 获取麦克风码率值