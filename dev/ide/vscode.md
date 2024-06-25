# VScode

## 快捷键

| 快捷键  | 功能     |
| ------- | -------- |
| cmd k 0 | 全局折叠 |
| cmd k j | 全局展开 |
|         |          |



## 格式化

## cmd s

### 自动整理import

设置>搜索editor.codeActionsOnSave

~~~json
  // import
  "editor.codeActionsOnSave": {
    "source.organizeImports": "explicit",
    "source.fixAll.eslint": "explicit"
  },
~~~

