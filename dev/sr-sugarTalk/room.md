# 会议

## **新 ui 位置**

一、ui 切换

当共享屏幕时，通过 eletron 窗口和条件渲染隐藏原来存在的 ui（旧 ui，显示录制 ui（新增 ui。这样做的目的是保留原来逻辑，防止多过 change 和避免更多成本

思路：

三个状态，通过改变窗口尺寸来实现 room/option/sharing

**pb：**

`win.setBackgroundMaterial`api 切换透明度失败

```ts
// 为1/0时切换失败
if (isFixed) {
  win.setBackgroundColor("rgba(255,255,255,0.99)");
} else {
  win.setBackgroundColor("rgba(255,255,255,0.025)");
}
```

变更逻辑

两个窗口的切换，
共享会议选项，鼠标事件的切换
进入会议：房间
开始共享：窗口大小
共享时：鼠标事件
结束共享:窗口大小

二、窗口的权限

1. 拖拽
2. 手动改变尺寸大小
3. 聚焦
4. 阴影
5. 窗口顶置运行
6. 窗口交通灯（mac
7. 聚焦

## hook 状态

**原来的逻辑**

1. 开始/结束共享

## eletron 窗口

```
window.electronAPI
  .getCurrentWindow()
  .setSize(
```

## “过滤”窗口

#### `win.setContentProtection(enable)` _macOS_ _Windows_

- `enable` boolean

防止窗口内容被其他应用捕获

在 macOS 上，它将 NSWindow 的 sharingType 设置为 NSWindowSharingNone。 在 Windows 上，它以参数为 `WDA_EXCLUDEFROMCAPTURE` 调用 SetWindowDisplayAffinity 。 对于 Windows 10 2004 以上版，本窗口将完全从抓取中移除，在低版本 Windows 上其行为就像是 `WDA_MONITOR` 捕捉了黑色窗口。
