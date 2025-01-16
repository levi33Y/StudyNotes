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

file-saver本地下载

```ts
import { saveAs } from "file-saver";

const blob = new Blob([data], {
  type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
});

saveAs(blob, `${state.title}-${type}.docx`);
```



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
