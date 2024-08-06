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





## Medio

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



## onlive方法

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