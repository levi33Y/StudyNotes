在vite+electron项目中，src写着我前端vue代码。electron是我的electron代码。我的项目结构大致如下

```ts
|-electron
  |-mian/index
|-src
  |-config/index
	|-App.vue
	|-main.ts
|-index.html
|-tsconfig.json
|-tsconfig.node.json
|-vite.config.ts
|-package.json

// tsconfig.json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "jsx": "preserve",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "lib": ["ESNext", "DOM"],
    "skipLibCheck": true,
    "noEmit": true,
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@assets/*": ["./src/assets/*"],
      "@icon/&": ["./src/icon/*"]
    }
  },
  "include": ["src",],
  "references": [{ "path": "./tsconfig.node.json" }]
}


//tsconfig.node.json
{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts", "package.json", "electron",
  ]
}

```

现在src目录下有config文件夹，electron主进程中也要用导入使用这个配置，于是我尝试直接在electron/mian/index.ts中导入config，但报错了，然后我在tsconfig.node.json修改了include，让他编译src/config，然后就不报错了。

```ts
// electron/mian/index.ts
import config from "../../src/config/index";

Vue: File
/Users/levi/Documents/GitLab/sugartalk/src/config/index.ts
is not listed within the file list of project
/Users/levi/Documents/GitLab/sugartalk/tsconfig.node.json
. Projects must list all files or use an include pattern.

// tsconfig.node.json
  "include": ["vite.config.ts", "package.json", "electron",
    "src/config"
  ]
```

但是我尝试build打包时，就报错了

~~~ts
error TS6305: Output file '/Users/levi/Documents/GitLab/sugartalk/src/config/index.d.ts' has not been built from source file '/Users/levi/Documents/GitLab/sugartalk/src/config/index.ts'.
  The file is in the program because:
    Matched by include pattern 'src' in '/Users/levi/Documents/GitLab/sugartalk/tsconfig.json'

  tsconfig.json:22:15
    22   "include": ["src",],
                     ~~~~~

    File is matched by include pattern specified here.


Found 1 error.

~~~

~~~

