1. 服务器地址
2. 服务器地址yml文件
3. electron-updater



~~~ts
// server: config.feedUrl

import { AppUpdater, autoUpdater, UpdateInfo } from "electron-updater";

class AppAutoUpdater {
  autoUpdater: AppUpdater = autoUpdater;

  constructor() {
    this.autoUpdater.removeAllListeners();

    this.initUpdater();

    autoUpdater.forceDevUpdateConfig = !app.isPackaged;

    autoUpdater.autoDownload = false;

    autoUpdater.setFeedURL(config.feedUrl);

    this.autoUpdater = autoUpdater;
  }

  initUpdater() {
    // 检测下载错误
    autoUpdater.on("error", (error) => {
      console.error("更新异常", error.message);
    });

    // 检测到有更新
    autoUpdater.on("update-available", (releaseInfo: UpdateInfo) => {
      let releaseNotes = "";

      https.get(`${config.feedUrl}/release-notes.md`, (response) => {
        response.on("data", (notesChunk) => {
          releaseNotes += notesChunk;
        });
        response.on("end", () => {
          console.log({
            ...releaseInfo,
            releaseNotes,
          });
        });
      });
    });

    // 检测到不需要更新时
    autoUpdater.on("update-not-available", () => {});

    // 更新下载进度
    autoUpdater.on("download-progress", (progress) => {
      log.info(progress);
    });

    // 当需要更新的内容下载完成后
    autoUpdater.on("update-downloaded", () => {
      log.info("下载完成");
    });
  }
}
~~~

~~~ts
const updater = new AppAutoUpdater();

/* 检查更新 */
const checkVersion = async () => {
  const updateResult = await updater.autoUpdater.checkForUpdates();

  return {
    currentVersion: updater.autoUpdater.currentVersion,
    updateInfo: updateResult?.updateInfo,
  };
};

/* 下载更新 */
const downloadUpdate = async () => {
  await updater.autoUpdater.downloadUpdate();
};

/* 退出并重启 */
const autoInstall = () => {
  global.sharedData.isUpdate = true;

  updater.autoUpdater.quitAndInstall();
};
~~~



~~~ts
// 检查更新
const checkVersion = async () => {
  const updater = new AppAutoUpdater();

  const updateResult = await updater.autoUpdater.checkForUpdates();

  return {
    currentVersion: updater.autoUpdater.currentVersion,
    updateInfo: updateResult?.updateInfo,
  };
};
~~~



electron-builder配置生产latest-mac.yml或latest.yml文件

~~~yml
# url可为空
  
publish:
  [
    {
      provider: "generic",
      url: "",
      "channel": "latest",
    },
  ],
~~~



yml示例

~~~yaml
version: 1.0.0
files:
  - url: SugarTalkTest_mac.zip
    sha512: xEjBcXlPOGTHBW5BfLFn1g93C6xKxB3vpxZdOqivB5fSKyXDOCymUcv4zOvxkzSL/5O1PYQr2tiXDUWXRNxkAA==
    size: 371294934
  - url: SugarTalkTest_mac.dmg
    sha512: 67826k21PrOnDxq38iSSQyA44P+KusMYhgV3jnLIr81FCBVKtNj4VbgcHyEpXs1d982gD+w6RBLbNOfZXLipHA==
    size: 384855612
path: SugarTalkTest_mac.zip
sha512: xEjBcXlPOGTHBW5BfLFn1g93C6xKxB3vpxZdOqivB5fSKyXDOCymUcv4zOvxkzSL/5O1PYQr2tiXDUWXRNxkAA==
releaseDate: '2025-12-12T07:16:28.744Z'
~~~



参考

https://zhuanlan.zhihu.com/p/712248900