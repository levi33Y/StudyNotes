# ci





## 本地测试

打包，本地测试包

export CSC_KEY_PASSWORD=123456

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