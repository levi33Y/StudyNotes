win

```
onInstallByWin: () => ipcRenderer.invoke("download-blackhole-win"),
  onSwitchDefaultByWin: () => ipcRenderer.invoke("switch-devices-win"),

ipcMain.handle("download-virtual-win", async () => {
  return new Promise((res, rej) => {
    const exePath = path.join(
      app.getAppPath(),
      "public",
      "VBCABLE_Driver_Pack45/VBCABLE_Setup.exe"
    )

    exec(`open "${exePath}"`, (error) => {
      error && rej("Error installing BlackHole")
    })
  })
})

ipcMain.handle("switch-devices-win", async (_,target: "default" | "virtual") => {
  const cmdPath = path.join(app.getAppPath(), "public", "nircmd.exe")

  if(target === "default") {
    exec(`${cmdPath} setdefaultsounddevice "CABLE Input"`, (error) => {
    })
  } else if(target === "virtual") {
    exec(`${cmdPath} setdefaultsounddevice "扬声器"`, (error) => {
    })
  }
})
```