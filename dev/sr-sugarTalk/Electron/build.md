# build

[打包应用](https://electron.nodejs.cn/docs/latest/tutorial/tutorial-packaging)

[应用封装](https://electron.nodejs.cn/docs/latest/tutorial/application-distribution)

[ASAR归档](https://electron.nodejs.cn/docs/latest/tutorial/asar-archives)



## 打包工具库

Electron Forge

用于处理 Electron 应用的打包和分发

~~~ts
npm install --save-dev @electron-forge/cli

// package.json
"scripts": {
  "start": "electron-forge start",
  "package": "electron-forge package",
  "make": "electron-forge make"
},
  
~~~

Electron build

用于打包。yml手动指定打包前端资源，vite build生成静态资源（HTML/JS/CSS）

~~~ts
npm install --save-dev electron-builder

/**
* build yml
* @https://www.electron.build/configuration
*/
  "scripts": {
    "build": "vite build && electron-builder --config ./electron-builder.yaml",
  },


~~~

### 包

![image-20250617151051376](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20250617151051376.png)![image-20250617151207239](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20250617151207239.png)

## 架构

vite build 生成dist

- vue app
- ipc main
- ipc preload



electron-builder

- installer分发包



## -

vite-plugin-electron插件

~~~
import electron from 'vite-plugin-electron/simple'

export default defineConfig({
  plugins: [
    electron({
      main:{
        entry: 'electron/index.ts',
      },
      preload: {
        input: path.join(__dirname, "electron/preload.ts"),
      },
    }),
  ],
})
~~~

