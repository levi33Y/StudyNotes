# 导出

## 媒体/http链接/owa

electron mian

~~~ts
import { download } from "electron-dl"


await download(win, url, {
  directory: path.join(app.getPath("downloads"), "SugarTalk_Downloads"),
  saveAs: false,
})

event.sender.send("download-complete", url)
~~~



## word

[docxtemplater](https://docxtemplater.com/docs/tag-types/)+file-saver本地下载

```ts
//在项目本地资源存放.docx作为模版，模版内容通过docxtemplater语法编辑
{#list}{content}


{#list}

//
import {saveAs} from "file-saver";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";

const _exportByWord = async (data: string[], type?: string) => {
  try {
    const response = await fetch('Doc.docx');

    const blob = await response.blob();

    const arrayBuffer = await blob.arrayBuffer();

    const zip = new PizZip(arrayBuffer);

    const doc = new Docxtemplater().loadZip(zip);

    doc.setOptions({
      nullGetter: function () {
        return "";
      }
    });

    doc.setData({
      list:data.map((item) => ({
        content: item,
      })),
    });

    doc.render();

    const out = doc.getZip().generate({
      type: "blob",
      mimeType:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });

    saveAs(out, `${state.title}-${type}.docx`);
  } catch (e){
    ElMessage({
      message: "導出失敗",
      type: "error",
    });
  }
};
```

- word 是一种压缩格式
- 通过fetch方式，读取模版文件二进制文件信息



## pdf

jsPdf + ttf

```ts
import { SourceHanSansK } from "../../iconfont/sourcehansansk";

const _exportByPdf = (data: string, type?: string) => {
  const doc = new jsPDF({
    orientation: "p",
    unit: "mm",
    format: "a4",
  });

  doc.addFileToVFS("sourcehansansk", SourceHanSansK);

  doc.addFont("sourcehansansk", "s", "normal");

  doc.setFont("s");

  const startX = 10,
    startY = 10,
    lineHeight = 10;

  const pageWidth = doc.internal.pageSize.getWidth() - startX * 2;

  const lines = doc.splitTextToSize(data, pageWidth, { wordwrap: true });

  const pageHeight = doc.internal.pageSize.getHeight();

  let nowY = startY;

  lines.forEach((line: string, index: number) => {
    if (nowY > pageHeight) {
      doc.addPage();

      nowY = startY;
    }

    doc.text(line, startX, nowY);

    nowY += lineHeight;
  });

  doc.save(`${state.title}-${type}.pdf`);
};
```

- SourceHanSansK为字体文件，在[](https://github.com/parallax/jsPDF/blob/master/fontconverter/fontconverter.html)转换器将ttf转为ES modules
- [思源雅黑](https://github.com/adobe-fonts/source-han-sans/blob/master/README-CN.md) [Google Fonts](https://fonts.google.com)
- [参考](https://www.cnblogs.com/ww01/p/11496213.html)
