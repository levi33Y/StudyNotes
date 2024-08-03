# 打包



## electron builder配置



## 打包命令

```
"pack": "electron-builder --dir",
"dist": "electron-builder"
```



## vite配置



### 使用vite-plugin-electron插件

~~~ts
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

