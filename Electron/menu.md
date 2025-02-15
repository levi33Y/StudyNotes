# 程序应用功能



## 菜单



### 窗口菜单

```ts
//setApplicationMenu
import { Menu} from "electron"

const menu = Menu.buildFromTemplate(items)

Menu.setApplicationMenu(menu)
```



win与mac差异



### 上下文菜单

~~~ts
//popup
import { Menu} from "electron"

const menu = Menu.buildFromTemplate(tpl)
menu.popup({})

~~~



### 托盘

~~~ts
//tray.setContextMenu
import {Tray, Menu} from "electron"

const iconPath = nativeImage.createFromPath('./public/tray.png')

const trayMenu = Menu.buildFromTemplate(contextMenuItems)

tray = new Tray(iconPath)

tray.setContextMenu(trayMenu)
~~~



### Dock菜单

~~~ts
//dock.setMenu
import {app, Menu} from "electron"

const { dock } = app

const dockMenu = Menu.buildFromTemplate(tpl)

dock.setMenu(dockMenu)
~~~



## 剪切板



## 对话框



## 快捷键



## 图像



## 屏幕信息（应用自适应）



## devtool