# 多窗口状态共享

main：

ipc通信：

loaclstore：

pinia：

序列化传参



## 方案

方案：ipc通信，将维护对象放在特定业务的渲染进程，其余进程通过事件与维护数据进程进行通信，修改或获取状态。



方案：pinia+IPC

main：

```ts
ipcMain.handle("store-dispatch", (_, id: string, hash: string) => {
  const wins = BrowserWindow.getAllWindows()
  wins.forEach((win) => {
    win.webContents.send("store-dispatch", id, hash)
  })
})
```

redaner：

```ts
contextBridge.exposeInMainWorld("store", {
  dispatch: (id: string, hash: string) =>
    ipcRenderer.invoke("store-dispatch", id, hash),
  subscribe: (callback: (id: string, hash: string) => void) => {
    ipcRenderer.on("store-dispatch", (_, id: string, hash: string) =>
      callback(id, hash)
    )
  },
})
```



## 业务

share-canvas：

同步共享人信息

可以通过房间对象发送事件

同步房间当前的主持人事件



发起共享：

desktopSource，公布共享的桌面窗口。

shareParticipant、moderator，组件信息。



远端批注：

drawingBoard，远端批注



本地批注：

pushDrawingBoard，本地批注







