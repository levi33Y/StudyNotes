# webRTC



## 客户端



### socket

获取socket实例

~~~ts
const socket = useMemo(() => new WebSocket('ws://localhost:3000/ws'), []);
~~~



主播端监听onmessage

~~~ts
socket.onmessage = (e) => {
    console.log(e)
}
~~~

需要了解的是，核心的四个方法

- `onopen`：连接建立后的函数
- `onmessage`：收到服务端推送消息的函数
- `onclose`：连接关闭的函数
- `onerror`：连接异常的函数

此外，onmessage返回的e为一个MessageEvent对象



### RTC

获取通信实例

~~~ts
const peer = useMemo(()=>{
    const PeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;

    return !PeerConnection ? null : new PeerConnection();
},[])
~~~

不同浏览器的RTC协议



主播端定义onicecandidate事件监听通信流

~~~ts
peer.onicecandidate = e => {
    if (e.candidate) {
        socket.send(JSON.stringify({
            type: "offer_ice",
            iceCandidate: e.candidate
        }));
    }
};
~~~

incecandidate在setLocalDescription触发后会执行

>[mdn](RTCPeerConnection: icecandidate 事件)
>
>当 [`RTCPeerConnection`](https://developer.mozilla.org/zh-CN/docs/Web/API/RTCPeerConnection) 通过 [`RTCPeerConnection.setLocalDescription()`](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/setLocalDescription) 方法更改本地描述之后，该 [`RTCPeerConnection`](https://developer.mozilla.org/zh-CN/docs/Web/API/RTCPeerConnection) 会抛出 **`icecandidate`** 事件。该事件的监听器需要将更改后的描述信息传送给远端 [`RTCPeerConnection`](https://developer.mozilla.org/zh-CN/docs/Web/API/RTCPeerConnection)，以更新远端的备选源。



粉丝端定义ontrack方法获取集合并播放视频

~~~ts
peer.ontrack = e => {
    if (e && e.streams) {
        localVideoRef.current.srcObject = e.streams[0];
    }
};
~~~





### Medio

主播端获取html的videodom，并定义onloadeddata监听

~~~ts
peer.onicecandidate = e => {
    if (e.candidate) {
        socket.send(JSON.stringify({
            type: "offer_ice",
            iceCandidate: e.candidate
        }));
    }
};
~~~

需要了解音频、视频加载时执行的方法

1. [onloadstart](https://www.w3school.com.cn/jsref/event_onloadstart.asp)
2. [ondurationchange](https://www.w3school.com.cn/jsref/event_ondurationchange.asp)
3. [onloadedmetadata](https://www.w3school.com.cn/jsref/event_onloadedmetadata.asp)
4. [onloadeddata](https://www.w3school.com.cn/jsref/event_onloadeddata.asp)
5. [onprogress](https://www.w3school.com.cn/jsref/event_onprogress.asp)
6. [oncanplay](https://www.w3school.com.cn/jsref/event_oncanplay.asp)
7. [oncanplaythrough](https://www.w3school.com.cn/jsref/event_oncanplaythrough.asp)

且要注意在react中，通过在useEffect定义副作用实现元素渲染后执行



### onlive方法

主播端编写onLive方法，将媒体添加到轨道，并且播放视频

~~~ts
const onLive = async (sdp?: RTCSessionDescriptionInit) => {
    setLoading(true)

    let stream: MediaStream;
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

        localVideoRef.current.srcObject = stream;
    } catch {
        return console.log("未检测到摄像器或麦克风");
    }

    stream.getTracks().forEach(track => {
        peer.addTrack(track, stream);
    });

    if(!sdp) {
        const offer = await peer.createOffer();

        await peer.setLocalDescription(offer);

        socket.send(JSON.stringify(offer));
    }else {
        await peer.setRemoteDescription(sdp);

        const answer = await peer.createAnswer();

        socket.send(JSON.stringify(answer));

        await peer.setLocalDescription(answer);
    }

    setLoading(false)
}
~~~



## 服务

### socket

建立连接和接受信息

创建服务 node/index

~~~js
import express from 'express';

const app = express();

app.ws('/ws', ws => {
    ws.onmessage = mevt => {
        console.log('消息：', mevt.data)
    }
});

app.listen(3000)
~~~







#### ws

- `onopen`：连接建立后的函数
- `onmessage`：收到服务端推送消息的函数
- `onclose`：连接关闭的函数
- `onerror`：连接异常的函数







#### error log

 wsInstance.getWss is not a function





## RTC

#### `track` 事件





#### HTMLMediaElement

loadeddata



## 流程

### 实现原理



### 中转服务

#### 配置网络协议

跨域资源



#### 监听连接

socket.io库

connection事件



#### 广播信息

message事件



### RTC连接

#### 创建实例

RTCPeerConnection实例，是RTC实现p2p的api

incecandidate事件，当setRemoteDescription时触发，生产候选人信息。

track事件，当获取到sdp时触发，用于获取对等方的信息

#### 获取媒体信息



#### 创建 offer

createOffer，创建发起放sdp

#### 创建 answer

createAnswer，创建接受方sdp



### 本地描述

setRemoteDescription，无论offer还是answer，收到对方的sdp需要调用此方法，从而交给WebRTC处理sdp



## 名词

#### 信令（Signaling）

<u>*信令成功后，打开WebRTC对等连接*</u>

信令是在两个设备之间发送控制信息以确定通信协议、信道、媒体编解码器和格式以及数据传输方法以及任何所需的路由信息的过程。

##### 信令期间：

##### 信令服务器：



#### ICE

在offer与ansewer的两个设备彼此共享以便交换媒体数据所需的信息。该交换是使用交互式连接建立 (ICE)([ICE](https://developer.mozilla.org/zh-CN/docs/Glossary/ICE)处理的，这是一种协议。



##### ICE重连

在WebRTC的生命周期中，执行ICE重连。

心跳包：



##### ICE 候选地址

 ICE 候选者交换关于网络连接的信息



#### 发送

navigator.getUserMedia获取媒体信息，属于输入。



#### 接收



#### 会话描述

WebRTC 连接上的端点的配置称为会话描述



##### offer

<u>*每个对等端保持两个描述：描述本身的**本地描述**和描述呼叫的远端的**远程描述**。*</u>

连接发起者创建一个提议，在A对B启用WebRTC时，创建一个称为offer的特定描述。



##### answer

<u>*每个对等端保持两个描述：描述本身的**本地描述**和描述呼叫的远端的**远程描述**。*</u>

接受到了 offer sdp，此时用answer响应，表示呼叫结束的描述。



##### 交换提议和回答基本步骤

~~~js
// offer: 捕捉本地媒体
navigator.mediaDevices.getUserMedia() 

// offer: 创建了RTCPeerConnection，并添加到轨
RTCPeerConnection.addTrack()

// offer：创建提议
RTCPeerConnection.createOffer() 

// offer：创建本地描述，寻找答应，此时需要信令服务器进行信令
RTCPeerConnection.setLocalDescription()

socket.send(JSON.stringify(offer))

// ice层处理请求、进行广播或等等操作
......

// answer: 此时需要信令服务器进行信令,添加ice候选
socket.onmessage = e => {
  const { type, sdp, iceCandidate } = JSON.parse(e.data)
  
  ......
  
  if(type = "offer")
   peer.addIceCandidate(iceCandidate);
}

// answer：额外的操作，可能是获取媒体信息
......

// answer: 创建答应
RTCPeerConnection.createAnswer()

// 创建本地描述
RTCPeerConnection.setLocalDescription()

// answer: 进行信令
socket.send(JSON.stringify(answer))


// offer; 进行信令，添加ice候选
socket.onmessage = e => {
  const { type, sdp, iceCandidate } = JSON.parse(e.data)
  
  ......
   peer.addIceCandidate(iceCandidate);
}

// answer: 设置远端描述
RTCPeerConnection.setRemoteDescription()

~~~





##### SDP

会话描述协议



## 调试工具

chrome://webrtc-internals/





