# livekit 1.15.8



## test

MINDY.L aE8#urf~

TED.F #zjobKL0

MONESY.H JN6OhDz2

WINNIE.X bEQbphuf

Open.G  zmzAsKyo

1600099579 44939

## IP

ipinfo.io

myip.ipip.net

voip




## project

sugar talk web
项目地址
https://gitlab.sjfood.us/oxygen/sugartalk-web

CI11
https://teamcity.sjfood.us/buildConfiguration/SugartalkWeb_BuildDocker?mode=builds

CD
https://octopus.sjfood.us/app#/Spaces-1/projects/sugarktalk-web/deployments

sugar talk App
项目地址
https://gitlab.sjfood.us/oxygen/sugartalk

CI
https://teamcity.sjfood.us/project/SugarTalk_SugartalkApp?mode=builds



## build

打包，本地测试包

export CSC_KEY_PASSWORD=123456

export VITE_ARMS_PID=hccokn11qx@cc45921292807a8

node ./scripts/changeBuild.js <!--[version(bash)]--> productName="SugarTalkTest"

make build-test



## ci

https://teamcity.sjfood.us/buildConfiguration/SugarTalk_SugartalkApp_BuildTestMacWindows?branch=update-error-log&buildTypeTab=overview&mode=builds

**修改证书密码**

![image-20241231082546320](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20241231082546320.png)



**关联app center**

生成目录（output/SugarTalkTest.%GitVersion.NuGetVersion%.zip）：
![image-20241231083334342](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20241231083334342.png)

脚本：

![image-20241231083546785](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20241231083546785.png)



**文件名称&appcenter版本号**

文件名称规则（electron-buildxxx.json,

~~~json
{
  //version
  mac: {
   		...
      artifactName: "${productName}_universal_${version}.${ext}",
    	...
  },
  win:{
      ...
      artifactName: "${productName}_${version}.${ext}",
      ...
  },
}
~~~



版本号获取（暂定用gitxxx

~~~shell
node ./scripts/changeBuild.js 

#一定规则
preVersion=%GitVersion.FullSemVer%
version=${preVersion//+/-} 

productName="SugarTalkTest"
~~~



appcenter

~~~shell
#VERSION
VERSION=%GitVersion.FullSemVer%

...

appcenter distribute release ... --build-version ${VERSION//+/-} ...
~~~





## app center

https://install.appcenter.ms/orgs/proton-technology/apps/sugartalk-test/distribution_groups/open



https://docs.livekit.io/home/self-hosting/local/
livekit-server --dev --bind 0.0.0.0 --keys "Alg5qfSGXaqd426: 0adb5eebd3de6f3af994f0ba3e1975c0"





## 分支

开发需求的时候，找到对应版本某某功能分支

处理测试反馈时，能够找到版本分支

处理正式反馈时，要从master建分支了

突发切换框架时，找到最新稳定的分支，开始重构写框架

尝试某些或测试某些功能时，改动并不会合并只是用来测试，日后还能找到尝试的框架或库

场景：开发v1.2.0，1.2分两个phase

sugartalk-v1.2

sugartalk-v1.2-phase-1

发sugartalk- v1.2-phase-1测试

开发sugartalk-v1.2-phase-2，sugartalk-v1.2-phase-2

处理sugartalk- v1.2-phase-1反馈，sugartalk- v1.2-phase-1-(update-xxx)

发sugartalk- v1.2-phase-1-(update-xxx)，->sugartalk- v1.2-phase-1,->sugartalk-v1.2

继续开发sugartalk-v1.2-phase-2，发sugartalk-v1.2-phase-2测试

发sugartalk-v1.2-phase-1正式，->sugartalk-v1.2（！！！错误啦，phase-1一定要基于master了）

开发sugartalk-v1.3，sugartalk-v1.3



业务

背景：开发v1.2.0，1.2分两个phase开发

开发周期长，存在版本回退，配置文件改动大



feat/v1.2-phase-1 开发v1.2-pahse-1功能

feat/v1.2-phase-1-aaa 功能a

完成开发，测试可以，a合并到v1.2-phase1

feat/v1.2-phase-1-bbb 功能b

功能b卡位等暂停开发

feat/v1.2-phase-1-ccc 功能b

完成开发，测试可以，c合并到v1.2-phase1

merge feat/v1.2-phase-1 到 b分支，继续开发b

完成开发，测试可以，b合并到v1.2-phase1

完成phase1开发，发测试phase1，【合并到master】

feat/v1.2-phase-2 开发v1.2-phse-2功能

feat/v1.2-phase-3 开发v1.2-phase-2-2a 2a功能

fix/v1.2-phase-1-fixa	 v1.2-pahse1有问题反馈，处理fixa功能反馈

完成修复，测试可以，合并到master

merge fixa到phase-2，phase-2到2a，继续开发2a

【改框架等等】

trtc/v1.2-trtc





企业ID 
312411595
SDK ID 
29940126419
SDK Secret 
pkGWfuckvqrZfrklGcrtU8ryEwL3bEpK



https://wiltechs-idp.id.meeting.qq.com/cidp/custom/ai-f0161c8a8c2a431e968a2f4cc0e68b6b



应用ID：ai-535caf646c794ac59447dff591a2ddde



https://wiltechs-idp.id.meeting.qq.com/cidp/custom/ai-f0161c8a8c2a431e968a2f4cc0e68b6b/ai-535caf646c794ac59447dff591a2ddde?id_token=



eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIyOTk0MDEyNjQxOSIsInN1YiI6ImFkbWluMTc1NTg2NTgwNCIsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTc1NjQ1MjM5MSwiZXhwIjoxNzU2NDU1OTkxfQ.fSkOFFinBm6wI_Nv8N_-VLX88F0ryfAcDR3xUWVphmy4rJlnKgaz20KiDp1DnT559V6wTJbQ-bplLwyAawChuQ0OJ836Jgd8bnZTgXR2selBFT78TcS-CScACd-51lFjHQahL9a1QhvCAjLaNbxZdhm0UXEzza6zlTV8gnbfOL-GhBzxcEkdjlW2tduGJTlPgu8pbRquuLpqS7shl09youLk1EU6B2crzEBq67odhoOLRDMurSWIMPTnyocO8vc1e2MzCJMq68Xd05SgU94TazDqoU0zbC0n_P0mV3z0SQp0tRwjdMvAh9Lh1tLEk_TzBLxNFze8YtwJzm7cWvbaBg



eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUZW5jZW50IE1lZXRpbmciLCJleHAiOjE3NTg5NjAwODQsImlhdCI6MTc1NjI4MTY4NCwiaXNzIjoiMjk5NDAxMjY0MTkifQ.Mdfgr2Ko2FLDw-DsDoXi2AhfqcBvHViM2xmib_Pab0E
