# 进程、窗口通信



## 应用层 主进程 渲染进程

应用层：系统应用、窗口

主进程：index.js（额外的启动文件） - main.js

渲染进程：src



## ipcMain和ipcRender Api



## 应用层渲染时



## ipcRenderer 渲染进程



## contextBridge.exposeInMainWorld主进程



## 从渲染进程打开窗口



## 应用层与渲染进程通信

```
preload.ts
```



应用层和主进程之间的通信流程是:

1. `应用层使用ipcRender.send方法将事件及数据传递到主进程`
2. `主进程使用ipcMain.on或者ipcMain.once方法监听事件并获取数据`
3. `主进程使用ipcMain.removeListener移除事件监听或者ipcMain.removeAllListeners移除所有事件监听`
4. `主进程使用窗口实例的webContents.send方法将事件和数据传递到应用层`
5. `应用层使用ipcRender.on或者ipcRender.once监听事件并获取数据`
6. `应用层使用ipcRenderer.removeListener移除事件监听或者ipcRenderer.removeAllListeners移除所有事件监听`

![image-20240729111320135](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240729111320135.png)





