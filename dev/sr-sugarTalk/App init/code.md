# 应用

### 项目启动

electron mian index

```
app.whenReady().then(createWindow);

function createWindow {
	const win = new BrowserWindow()
}

if (process.env.VITE_DEV_SERVER_URL) {
  // electron-vite-vue#298
  win.loadURL(url);
  // Open devTool if the app is not packaged
  // win.webContents.openDevTools();
} else {
  win.loadFile(indexHtml);
}
```