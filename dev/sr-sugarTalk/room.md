# 会议

新ui位置

当共享屏幕时，通过eletron窗口和条件渲染隐藏原来存在的ui（旧ui，显示录制ui（新增ui。这样做的目的是保留原来逻辑，防止多过change和避免更多成本



1. ui切换



思路：

三个状态，通过改变窗口来实现



pb：

`win.setBackgroundMaterial`api切换透明度失败

```ts
// 为1时切换失败
if(isFixed) {
  win.setBackgroundColor("rgba(255,255,255,0.99)")
} else {
  win.setBackgroundColor("rgba(255,255,255,0)")
}
```



2. hook状态



3. eletron窗口

```
window.electronAPI
  .getCurrentWindow()
  .setSize(
```



4. “过滤”窗口

#### `win.setContentProtection(enable)` *macOS* *Windows*

- `enable` boolean

防止窗口内容被其他应用捕获

在 macOS 上，它将 NSWindow 的 sharingType 设置为 NSWindowSharingNone。 在 Windows 上，它以参数为 `WDA_EXCLUDEFROMCAPTURE` 调用 SetWindowDisplayAffinity 。 对于 Windows 10 2004以上版，本窗口将完全从抓取中移除，在低版本 Windows 上其行为就像是 `WDA_MONITOR` 捕捉了黑色窗口。

