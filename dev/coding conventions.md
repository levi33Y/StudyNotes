# 代码规范



## vscode 设置

1. 每次保存都遵循eslint格式化

```
{
  // vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,
  // 重新设定tabsize
  "editor.tabSize": 2,
  // #每次保存的时候自动格式化
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // #每次保存的时候将代码按eslint格式进行修复
  "eslint.autoFixOnSave": true,
  // 添加 vue 支持
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  //  #去掉代码结尾的分号
  "prettier.semi": true,
  //  #使用单引号替代双引号
  "prettier.singleQuote": false,
  //  #让函数(名)和后面的括号之间加个空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  // #缩进字节数
  "prettier.tabWidth": 2,
  // #缩进不使用tab，使用空格
  "prettier.useTabs": false,
  // #在对象，数组括号与文字之间加空格
  "prettier.bracketSpacing": true,
  // #末尾空行
  "prettier.endOfLine": "auto",
  "prettier.htmlWhitespaceSensitivity": "ignore",
  // #在jsx中使用单引号代替双引号
  "prettier.jsxSingleQuote": false,
  "prettier.trailingComma": "es5",

  // #这个按用户自身习惯选择
  "vetur.validation.script": false,
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "auto"
    },
    "prettyhtml": {
      "printWidth": 100,
      "singleQuote": false,
      "wrapAttributes": false,
      "sortAttributes": false
    }
  },
  // "window.zoomLevel": 1,
  "beautify.config": {
    "brace_style": "preserve-inline"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "[typescript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "never"
    }
  },
  // 字体大小
  "editor.fontSize": 14,
  "explorer.confirmDelete": false,
  "editor.fontLigatures": false,
  "security.workspace.trust.untrustedFiles": "open",
  "editor.minimap.enabled": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "editor.wordWrap": "on",
  "settingsSync.ignoredExtensions": [],
  "editor.maxTokenizationLineLength": 1e36,
  "workbench.colorTheme": "One Dark Pro Darker",
  "git.ignoreMissingGitWarning": true
}
```

