# livekit 1.15.8



## test

MINDY.L aE8#urf~

TED.F #zjobKL0

MONESY.H JN6OhDz2

WINNIE.X bEQbphuf

Open.G  zmzAsKyo



ipinfo.io

myip.ipip.net

voip



arms

https://signin.aliyun.com/login.htm?callback=https%3A%2F%2Farms.console.aliyun.com%2F#/main

mars.p@1761366443001369.onaliyun.com
Vdx%zZ%ZtAc(FGVr9R7Mk@0wCyKpi3yH

## 项目

sugar talk web
项目地址
https://gitlab.sjfood.us/oxygen/sugartalk-web

CI11
https://teamcity.sjfood.us/buildConfiguration/SugartalkWeb_BuildDocker?mode=builds

CD
https://octopus.sjfood.us/app#/Spaces-1/projects/sugarktalk-web/deployments

sugar talk App
项目地址
https://gitlab.sjfood.us/oxygen/sugartalk

CI
https://teamcity.sjfood.us/project/SugarTalk_SugartalkApp?mode=builds



## sugartalk v1.1

1. enhance-share-ui
   - 共享桌面菜单UI
   - 共享时成员、EA弹窗
   - 共享桌面声音
   - 过滤窗口
2. enhance-member-list
   - 成员管理
   - tab栏 ？兼容EA？
3. enhance-home-ui
   - 会议列表
   - 会议详情
4. enhance-schedule-metting-ui
   - 共享会议ui



### enhance-share-ui

共享状态ui



操作菜单弹窗



共享音频



窗口过滤



画布

### enhance-member-list

#### 成员管理

FR-11-1

 在V1.0的會議中，點擊成員，彈出彈窗去查看會中成員，由於彈窗大小固定，且獨立的彈窗不易使用。因此，優化成員功能。

1、點擊成員，在應用右側側邊欄顯示成員列表。v

2、側邊欄上方為該功能的名稱+人數，例：管理成員(2)。點擊【X】，則關閉側邊欄。v

3、側邊欄下方為全體靜音和解除全體靜音，僅主持人和聯席主持人可以看到和使用。v

4、選中成員，有靜音功能。若該角色有其他功能，在更多的按鈕下拉顯示。x



FR-17-1

1、在右側的成員列表，新增改名按鈕。改名後本次會議的全體參會人均可見，僅在本次會議

2、角色說明：x

主持人：可更改參會成員名稱

聯席主持人：可更改參會成員名稱

參會人：僅可更改自己的成員名稱

3、點擊改名按鈕後，打開修改名稱的彈窗，點擊確認即可保存，點擊取消則關閉彈窗。v

4、新增搜索成員功能，支持模糊搜索。v

5、支持WEB端和客戶端。v



livekit接口

4、選中成員，有靜音功能。若該角色有其他功能，在更多的按鈕下拉顯示。

1、在右側的成員列表，新增改名按鈕。改名後本次會議的全體參會人均可見，僅在本次會議。



数据接口

4、選中成員，有靜音功能。若該角色有其他功能，在更多的按鈕下拉顯示。

2、角色說明：

主持人：可更改參會成員名稱

聯席主持人：可更改參會成員名稱

參會人：僅可更改自己的成員名稱

#### tab栏 ？兼容EA？



### enhance-home-ui

#### 会议列表

FR-12-1

功能說明：

1、在首頁的下方會議列表，顯示我創建的、我是參會人的會議和當前正在參加的會議

2、卡片字段：

2.1、日期：

如果是今天、明天、後天的預定會議，即參考 今天 11月7日。

如果是超出後天的日期，即參考 周一 11月25日

2.2、會議主題：為創建會議時的會議主題。

2.3、會議時間段：為會議的開始時間-結束時間。

2.4、會議號：鼠標移入顯示點擊複製會議號，點擊即複製當前會議號。v

2.5、週期：顯示週期則表示該會議為循環會議，沒有則表示該會議為單次會議。

2.6、會議狀態：

待開始：會議是當天的，但還沒到開始時間。

進行中：會議正在進行。

3、操作：

...：創建人點擊可以顯示查看詳情、修改會議、刪除會議。參會人僅顯示查看詳情和刪除會議。

分享圖標：打開邀請信息的彈窗。

入會：進入該會議室。

#### 会议详情

FR-13-1

查看會議詳情

會議詳情顯示以下信息

開始時間

結束時間

會議狀態

會議時長

選擇時區

發起人用戶名和頭像

會議號：支持複製

參會人：最多顯示6個頭像，超出顯示...+總人數，點擊可以查看參會人的名單，支持模糊搜索。

邀請：打開邀請信息的彈窗。

進入會議：進入該會議室



### enhance-schedule-meeting-ui

FR-14-1

 1、對接賬號中心，關聯人員架構。

2、參會人：點擊輸入框，支持模糊搜索，搜索內容會藍色顯示。點擊右側按鈕，打開人員選擇彈窗。



FR-15-1

1、會議設置按鈕，點擊打開會議設置彈窗。點擊確定後，設置才保存，預定會議成功後生效。

2、點擊指定主持人，打開選擇主持人彈窗，會議創建人在第一位，且為灰色不可選狀態。當創建人不在會議中，這些成員優先成為主持人。

2.1、鼠標移入圖標有提示，移走則消失，提示內容為：指定參與人為主持人，當你不在會議中，該成員將優先成為主持人

2.2、顯示已選擇的用戶名，當超出一定長度後，顯示XXX等X人即可。

3、入會密碼：開關默認為關閉狀態。打開開關即在下方隨機生成一個6位數的密碼，支持複製。鼠標移入圖標有提示，移走則消失，提示內容為：系統隨機生成的6位數密碼。

4、METIS發送會議記錄：開關默認為關閉狀態。當打開該開關時，會同時打開會議自動錄製的開關。會議結束後，常駐參會人可以收到metis在企業微信發送的會議記錄。



FR-16-1

 1、參會人數≤16人時，在下方顯示參會人即可。格式：頭像+用戶名。2、參會人數＞16人時，僅顯示前16名參會人，下方下拉按鈕顯示共x人。點擊可以展開，顯示所有人。下拉按鈕變為收起，點擊後，僅顯示16人，按鈕變為共X人。



#### 参会人选择框



#### 日程会议设置界面



v1.2

预订会议-周期优化 7

会议-锁定会议 7

会议-管理成员-未入会 7

会议-主持人会议中等候室操作 / 会议-主持人等候室操作 / 会议-成员等候室界面 / 会议设置-开放等候室选项 30

### docking-member-api

进入会议 ：获取权限，其他人权限

onMounted get

别人进入会议：更新权限

roomEvent get

别人操作你的权限：更新

roomEvent get

别人操作别人

roomEvent get



你需改权限

post ddata get



主持人退出

pDis get



断网，重连后操作

red get



获取信息《- 更新信息 《- onMounted、roomEvent、pDis、red



主持人设置联合主持人

主持人离开会议

主持人重回

主持人重回后收回主持人



```
(isCreator && participant.role === MeetingPermissionEnum.Host) ||
(participant.role === MeetingPermissionEnum.CoHost) &&
localRole === MeetingPermissionEnum.Host &&
isCreator ||
isNil(participant.role)||
(localRole && participant.role !== MeetingPermissionEnum.Host)
```

xxx

```
onFocus: (callback) => ipcRenderer.on("win-focus", (_) => callback()),
onBlur: (callback) => ipcRenderer.on("win-blur", (_) => callback()),
onLoad: (callback) => ipcRenderer.on("win-load", (_, body) => callback(body)),
```





### v1.1 ui修复

win room边框 ?



初始化/结束共享room窗口位置 ,窗口菜单，快捷键x



共享音频win兼容 v



共享时win本地播放音频  ?



共享时electron窗口鼠标事件 v



共享时

左上角分別為網絡狀態、會議時長、會議名稱。v

下方功能依次為： 音頻開關、視頻開關、 v

共享屏幕（不再顯示結束共享，點擊即打開共享畫面選擇窗口）  v

邀請、v

成員、v

錄製（原來的名字為智能轉寫）、v

EA、v

設置、v

結束共享（原來為結束會議，改為僅結束共享屏幕）v



共享画板 x



共享声音本地参会人麦克疯v



### v1.1流订阅

TrackSubscribed b加入,原a获取到流

TrackUnsubscribed 直接退出房间或者

```
.setScreenShareEnabled(false, {
  audio: false,
})
```

之类操作，其他人就触发



前两者均有本地事件对应本地人的流事件



TrackSubscriptionFailed

https://docs.livekit.io/reference/internals/livekit-sfu/#livekit-sfu-architecture

房间节点流的丢失，尝试重新订阅，

false取消订阅流进入un

两秒之后重新订阅流，如果流成功订阅就会触发TrackSubscribed更新这个远程用户的信息

```ts
const remoteTrackPublication = participant.tracks.get(trackSid)

remoteTrackPublication?.setSubscribed(false)

setTimeout(() => {
  remoteTrackPublication?.setSubscribed(true)
}, 2000)
```





### v.1.1黑屏

同时共享，结束显示的那个：

非显示共享用户：卡住

显示共享用户：黑屏



房间更新逻辑

麦克风

共享屏幕

摄像头



shareStream 共享屏幕

1、房间ready

订阅流，共享流-更新本地状态

2、屏幕共享

推送流*

订阅流，阻塞共享行为

3、会议中，

订阅流，共享流-更新本地状态



一个共享人：资源锁x



```ts
    if (room.value.state !== ConnectionState.Connected) return

    const sharePreId = Array.from(room.value.participants.values()).find((p)=>{
      const pub = p.getTrack(Track.Source.ScreenShare)

      const audioPub = p.getTrack(Track.Source.ScreenShareAudio)

      return pub?.isSubscribed || audioPub?.isSubscribed
    })?.sid

    let participant= sharePreId ? room.value.participants.get(sharePreId) : room.value.localParticipant

    let videoTrack  = participant?.getTrack(Track.Source.ScreenShare)?.videoTrack?.mediaStreamTrack

    let audioTrack = participant?.getTrack(Track.Source.ScreenShareAudio)?.audioTrack?.mediaStreamTrack

    if(!videoTrack && !audioTrack) {
      shareState.shareStream = undefined
    } else {
      const shareStream = new MediaStream()

      videoTrack && shareStream.addTrack(videoTrack)

      audioTrack && shareStream.addTrack(audioTrack)

      state.shareStream = shareStream
    }
```



### v.1.1共享音频

mac共享屏幕使用虚拟设备，因此视频流和音流单独获取

win可以获取桌面音频，视频和音频同一获取，推的时候单独推



### v1.1共享桌面

共享中窗口独立

pinia

共享区域能够过滤

win.setContentProtection

共享区域内的所有内容能获取到流

canvas

可以对流进行压缩处理。

track Source/unknown





### v1.1 livekitreconnection

https://docs.livekit.io/home/client/connect/#network-changes-and-reconnection

```
RTCEngine.ts
```

```ts
      .on(RoomEvent.Reconnecting,()=>{
        state.disConnectedSetTimeout = setTimeout(()=> {
          stopShare()

          shareScreenState.shareStream = undefined

          appStore.isMeeting = false

          room.value?.disconnect()

          ElMessageBox.alert('網絡異常，已斷開連接', {
            confirmButtonText: '確認',
            callback: () => {
              navigation.destroy("/room")
            },
          })
        },20000)
      })
      .on(RoomEvent.Reconnected,()=>{
        clearTimeout(state.disConnectedSetTimeout)
      })
```



### v1.1噪音

```
if (
  trackPublication.source === Track.Source.Microphone &&
  trackPublication.track instanceof LocalAudioTrack &&
  isKrispNoiseFilterSupported()
) {
   {
    const krispProcessor = KrispNoiseFilter();

    await trackPublication.track.setProcessor(krispProcessor);

    await krispProcessor.setEnabled(true);
  }
}
```

v1.1流更新 共享遮照卡住

v.1.1 共享遮照鼠标事件





### phase3 feedback

#### 连接状态消息提示



#### 会议权限-主持人录制等权限



#### 过滤窗口



### v1.1 互动批注

共享桌面

```
    <template #canvas>
      <DrawingBoard
          ref="drawingBoardRef"
          @drawing="sendDrawing"
          :share-user-name="shareParticipant?.name ?? ''"
          :moderator="moderator"
      />
    </template>
    
        drawingBoardRef.value?.resize({
      width: currentDisplay.size.width,
      height: currentDisplay.size.height,
      videoWidth: currentDisplay.size.width,
      videoHeight: currentDisplay.size.height,
      currentVideoWidth: currentDisplay.size.width,
      currentVideoHeight: currentDisplay.size.height,
      ratio: 1,
    });
```



update-1.1-phase3-feedback-partial





## vuex livekitRoom

### useRoomStore

room

room Event

customize room state





大佬们，有人知道electron应用如何跨应用获取应用窗口信息吗

desktopCapturer获取桌面媒体流，并没有位置大小信息

screen模块只能获取屏幕的位置大小信息

尝试node-window-manager版本不兼容，
