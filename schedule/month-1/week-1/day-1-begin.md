# 学习笔记

第一天

2024/4/15

## 目录

- 搭建个人笔记

- 学习gitflow

- 学习DevOps
- 初始React

## 搭建个人笔记

### 基于Github+picGo+Typora搭建自己的个人学习笔记

## 学习gitFlow 

Git 分支管理模型/git工作流，团队以一种约定的流程来使用git

**Git Flow常见分支**

Master分支：生产环境代码

Develop分支：主开发分支

Feature分支：基于Develop的某个特性分支

Release分支：基于Develop的预发布分支

Hotfix分支：基于Master的修复分支

**git commit规范**

- feat:新功能（feature）
- fix:修补bug
- docs:文档（documentation）
- style:格式（不影响代码运行的变动）
- refactor:重构（即不是新增功能，也不是修改bug的代码变动）
- test:增加测试
- chore:构建过程或辅助工具的变动

### 基于git-flow工具**实践**

**模型**

![git-flow.png](https://raw.githubusercontent.com/levi33Y/pictures/main/1460000021034359)

**1、项目搭建**

输入`git flow init`初始化项目，根据模型约束分支规则

![image-20240414160234257](https://raw.githubusercontent.com/levi33Y/pictures/main/image-20240414160234257.png)

**2、开发**

输入`git flow feature start uat-c1-2024-4-15`创建了自己的分支，并开始开发“登录功能”

**3、完成开发**

输入`git flow feature finish uat-c1-2024-4-15`，完成“登录功能”开发

**4、预发布**

当测试通过了，输入`git flow release start 1.0.0`创建版本

**5、发版**

输入`git flow release finish 1.0.0`完成发布

**6、改bug**

输入`git flow hotfix start fix-c1-2024-4-15`，开始修复线上"登录功能"bug

输入`git flow hotfix finish fix-c1-2024-4-15`, 完成修复并发版

**7、git提交流如下图：**

![image-20240414163002417](https://raw.githubusercontent.com/levi33Y/pictures/main/image-20240414163002417.png)

### gitHub Desktop+gitHub

**一、新建项目**

**二、新建里程碑**

1、issues/Milestones，里程碑以1.0.0类似的方式命名

**三、新建issue**

1、输入issue名称，首字母大写全英文
2、关联角色Assignees，关联里程碑Milestone

**四、本地新建分支，推送到github**

**五、gitHub Destop使用**

**六、发起pr，fixed团队comment**
1、新建pr，首字母大写全英文，尽量和issue名称一致
2、关联角色Assignees，关联里程碑Milestone，补充描述并在末尾Close # 关联issues

### sourcetree+gitLab

**一、新建项目**

**二、新建里程碑**

1、issues/Milestones（1.0.0）

**三、新建issue，并且关联里程碑**

1、issues/list（首字母大写英文）

**四、远程新建分支，sourcetree拉取代码**

1、Repository/Branches

**五、sourcetree使用**

1、新建，克隆远程仓库（操作和其余图形化工具差不多）

**四、发起pr，fixed团队comment**

1、Requirements/

## 学习DevOps

敏捷开发模式下的开发思想，结合开发与运维

**devops**

1. 编程语言
2. 操作系统
3. 终端操作（系统中不同的命令行操作
4. 计算机网络
5. 服务器
6. 架构（docker
7. CI/CD工具
8. 监控
9. 云服务（使用云服务）

### 基于Github+jenkins+docker 开发实践

## 初学React

**JSX**

使用js语法编写标签组件

```
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}
```

**组件**

React 应用程序是由 **组件** 组成的。一个组件是 UI（用户界面）的一部分，它拥有自己的逻辑和外观。组件可以小到一个按钮，也可以大到整个页面。

**Hook**

React里面有众多内置钩子，通常是以use开头的函数

### 基于React18+Ant Design+TypeScript项目搭建实践

**创建项目**

 `react-router-dom`

`axios`

`antd`

**配置路由**

```react
import {BrowserRouter, Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>} >
              <Route path="new1" element={<New1/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
```



**layout布局配置首页**

```react
//引入antdUI


```



**添加功能页面"1"**

```react
//在app中更新路由
import New1 from "./view/new1";
```

**运行**

![image-20240415000433407](https://raw.githubusercontent.com/levi33Y/pictures/main/image-20240415000433407.png)



## 每日总结

## 要做的事

1. 开发环境
1.node v
2.devtol v
3.picgo v
4.Typro v

2. 考核项目搭建
1.搭建项目，创建pr v
2、学习react v

3. devops
1、学习devops概念，并且总结 v
团队：git gitflow cicd git
代码管理-一个严格遵循的gitflow或流程
技术风险-技术难度
风险控制
总结：
整体流程就是代码写完后，提交到git，然后使用自动化部署工具打包项目，整个流程通常由vcs、选择gitflow或githubflow，做好每一个pr，使用ci/cd

4. 新人资料 v
1、新人资料视频学习v
2、计划表完成 v





