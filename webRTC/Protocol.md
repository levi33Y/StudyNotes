# 协议与框架

![059-01](https://raw.githubusercontent.com/levi33Y/Pictures/main/059-01.jpg)



## RTC

Real-Time Communication 实时通讯项目，指Web-RTC、WebRTC。



## RTP

Real-time Transport Protocol 实时传输协议，IP网络实时传输音频和视频。



### RTP媒体流

RTP会为每个媒体流建立一个会话，即音频和视频流使用单独的RTP会话，这样接收端就能选择性地接收媒体流。



### RTCP

RTP Control Protocol 实时传输协议（RTP）的姊妹协议，为RTP会话提供带外统计信息和控制信息，与RTP协作提供多媒体数据的传输和打包功能，其本身不传输任何媒体数据。



#### RTCP数据包、复合RTCP数据包

在会话期间收集媒体分发质量方面的统计信息，并将这些数据传输给会话媒体源和其他会话参与方。在数以万计的接收者参与的直播会话中，所有参与者都发送RTCP报告。

RTCP数据包类型：

1. 发送者报告（SR）

活跃发送者在会议中定期发送报告，报告该时间间隔内发送的所有RTP数据包的发送和接收统计信息。发送者报告包含绝对时间戳，表示自1900年1月1日零点以来经过的秒数。绝对时间戳帮助接收方同步RTP消息，对于同时传输音频和视频的场景尤为重要，因为音频和视频的RTP流独立使用相对时间戳，必须使用RTCP绝对时间戳进行同步。

2. 接收者报告（RR）

接收者报告适用于不发送RTP数据包的被动参与者，用于通知发送者和其他接收者服务质量。

3. 源描述（SDES）

源描述可以用于将CNAME项发送给会话参与者，也可以用于提供其他信息，例如名称、电子邮件地址、电话号码以及源所有者或控制者的地址。

4. 关闭流（BYE）

源发送BYE消息以关闭流，允许端点（endpoint）宣布即将离开会议。

5. 特定于应用程序的消息（APP）

APP提供了一种机制，用于扩展RTCP。



复合包有多个数据包。



#### 关键帧

https://blog.csdn.net/aggresss/article/details/108019463

https://blog.jianchihu.net/webrtc-research-keyframe-request.html



## SDP

Session Description Protocol 描述媒体信息的协议，以文本格式描述终端功能和首选项。





## SRTP/SRTCP

SecureReal-time Transport Protocol、Secure Real-Time Control Protocol，

SRTP是RTP的一个配置文件，旨在为单播和多播应用程序中的RTP数据提供加密、消息身份验证和完整性以及重放攻击保护等安全功能。SRTP有一个姊妹协议：安全RTCP（SRTCP），它提供了与RTCP相同的功能，并增强了安全性。



## TLS/DTLS

Secure Socket Layer SSL 安全套接层 -> Transport Layer Security TLS安全传输层协议、Datagram Transport Layer Security DTLS 数据包传输层安全性协议

安全套接层（Secure Socket Layer，SSL）是为网络通信提供安全保证及数据完整性的一种安全协议，ETF对SSL 3.0进行了标准化，并添加了一些机制，经过标准化的SSL更名为TLS（Transport Layer Security，安全传输层）协议。

在TLS协议架构上进行了扩展，提出DTLS（Datagram Transport Layer Security，数据包传输层安全性）协议，使之支持UDP，DTLS即成为TLS的一个支持数据包传输的版本。



## ICE

Interactive Connectivity Establishment 交互式连接建立协议,，是用于提案/应答模式的NAT（网络地址转换）传输协议，主要用于在UDP协议下建立多媒体会话。



## NAT

NAT是一种实现内网主机与互联网通信的方法。



### STUN与TURN

Session Traversal Utilities for NAT STUN 公网地址及端口的发现协议，客户端向STUN服务发送请求，STUN服务返回客户端的公网地址及NAT网络信息。



Traversal Using Relays around NAT TURN ，SPAN（Simple Protocol for Augmenting NATs）方式，通过数据转发的方式穿透NAT，解决了防火墙和对称NAT的问题。
