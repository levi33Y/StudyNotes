# 初始化项目

🎉

## 一、gitFlow



## 二、搭建項目、引入sass

1. 在项目根目录创建`web`文件夹

2. 基于`react + typeScript`使用`npx create-react-app` 创建项目

3. 引入 `sass`

   - `npm i sass`

   - `xxx.css` 文件修改为`xxx.model.scss`

   - **规范：**项目中引入`sass`

     ```
     import style from "./App.module.scss";
     ```

4. 修改`tsconfig.ts`文件，`"target":"es5"`改为`es6`

5. **规范：**修改组件的导出方式

   ```
   export const App = () => {
     return (
     	...
   	);
   }
   ```

## 三、vscode 设置



## 四、gitflow

1. 创建分支 init-project 并且推送到仓库

2. gitLab 中提交 issues：Init react typescript sass project，发起pr：Init react typescript sass project



## Coding Conventions

- 清晰的issue、pr名称，一致名称外，要足够详细。init project -> Init react typescript sass project
- 考核项目外面包一层 web
- commit 英文
- 样式表统一用 css module
- Fragment与空标签<></>，当且仅当jsx括号内2个标签以上在react使用



## 🔧

1. pr 描述不够简介明确，要添加规则，命名要简洁规范，首字母大写
2. Commit 提交信息经历简介并且全英文
3. pr 与 issue 命名统一
4. 整体的命名和注释要规范统一，大驼峰、小驼峰、横线要统一风格
