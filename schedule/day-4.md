# 学习笔记

2024/8/26



## Todo

1. [✅] xxx
2. [❌] xxx
3. [❓] xxx



## Yesterday

1. 




## Today

1. [❓] py
2. [❓] llm
3. [❓] agent content
4. [❓] planka



## 一、掘





## 二、每日总结

2024/9/5 UPDATE: 
今日总结：

1. 对接报表中心接口。完成模版下载和导入接口对接，调整模版获取中呼叫设置和发送设置表单逻辑。调整导入上传文件逻辑，beforeUpload方法返回false实现手动上传文件，定义downloadFilesByALink方法，通过url下载文件。根据更新模版接口定义模版对象的接口类型，在UpdateTemplate方法中处理form表单值格式。



明日计划：

1. 继续对接报表中心接口。



卡位：暂无
报表中心 模版库：https://github.com/sj-distributor/ReportCenter.Web/pull/20

## 三、每周总结

1. 



## 四、目录

1. 下載



### 下載

~~~ts
export const downloadFileByFetch = async (url: string) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("fetch is null");
    }

    const blob = await response.blob();

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(link.href);

    return Promise.resolve(["success",null]);
  } catch (error) {
    return Promise.resolve([null,error]);
  }
};

export const downloadFileByMediaSource = async ({name, file}: { name: string; file: Blob | MediaSource; }) => {
  try {
    if (file) {
      throw new Error("file is null");
    }

    const downloadLink = document.createElement("a");

    downloadLink.href = URL.createObjectURL(file);

    downloadLink.download = name;

    downloadLink.style.display = "none";

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);

    return Promise.resolve(["success",null]);
  } catch (error) {
    return Promise.resolve([null,error]);
  }
}

export const downloadFilesByALink = async ({url,name}:{name?:string, url:string}) => {
  try {
    if (!url) {
      throw new Error("url is null");
    }

    const link = document.createElement("a");

    link.href = url;

    link.setAttribute("download", name || "");

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    return Promise.resolve(["success",null]);
  } catch (error){
    return Promise.resolve([null,error]);
  }
}
~~~

