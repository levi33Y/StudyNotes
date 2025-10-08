# 学习笔记

2024/8/14



## Todo

1. [✅] xxx
2. [❌] xxx
3. [❓] xxx



## Yesterday

1. 




## Today

1. 



## 一、掘





## 二、每日总结

2024/8/22 UPDATE: 

今日总结：

1. 使用Record对文件解析结果类型约束。使用箭头函数替代变量分配给 this，在作用域中直接使用this，消除全局“this”与局部变量警告，根据ui调整導入-模板對象ui，删除冗余的form表单结构，根据需求调整上传文件校验逻辑。



明日计划：

1. 跟进报表中心、ai检测货品质量开发

   

卡位：暂无

报表中心：https://github.com/sj-distributor/ReportCenter.Web/pull/18



## 三、每周总结

1. 




## 四、目录



1、 文件



2、调整列表和树模版对象





### 文件

能够让文件存在于作用领域中，随时拿随时解析



参数：

文件：base

文件模版：文件映射处理，键为文件模版键值，值为解析键的值



方法：

setFile 设置文件

parese 解析文件，返回[{string:string}]



拓展：



开发：

execl解析



~~~ts
TS7053: Element implicitly has an any type because expression of type string can't be used to index type {}
No index signature with a parameter of type string was found on type {}

//对应代码：
const k =
  item &&
  Object.prototype.hasOwnProperty.call(item, key) &&
  item[key];
  
  
//使用了一系列判断还是报这个错，只有规范item类型为对象才能（其中key为string）
~~~



~~~ts
ESLint: Unexpected aliasing of 'this' to local variable.(@typescript-eslint/no-this-alias)

//对应代码
const _this = this;
~~~





源码：

~~~ts
import { RcFile } from "antd/es/upload/interface";
import { isNil } from "ramda";
import * as XLSX from "xlsx";

export class Excel {
  #file?: RcFile | null;

  #template?: Record<string, string> | null;

  constructor() {
    this.#file = null;

    this.#template = null;
  }

  setFile(file?: RcFile, template?: Record<string, string>): void {
    try {
      if (isNil(this)) {
        throw new Error(
          `this is undefined, please check if “this” Points correctly`
        );
      }

      this.#file = file;

      this.#template = template;
    } catch (err) {
      console.warn(err);
    }
  }

  clear(): void {
    this.#file = null;

    this.#template = null;
  }

  parse(): Promise<Partial<Record<keyof Error | "data", any>>> {
    const _this = this;

    return new Promise((resolve, reject) => {
      if (isNil(_this)) {
        return reject(
          new Error(
            `this is undefined, please check if “this” Points correctly`
          )
        );
      }

      if (isNil(_this.#file)) {
        return reject(new Error("file is null"));
      }

      const reader = new FileReader();

      reader.readAsArrayBuffer(_this.#file);

      reader.onload = (e) => {
        const binary = e?.target?.result;

        try {
          const wb = XLSX.read(binary, { type: "binary" });

          const outData: Record<string, string>[] =
            XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]) || [];

          const parseResult = outData.map((item) => {
            const parseItem: Record<string, string> = {};

            _this.#template &&
              Object.keys(_this.#template).forEach((key) => {
                const k =
                  item &&
                  Object.prototype.hasOwnProperty.call(item, key) &&
                  item[key];

                const pk =
                  _this.#template &&
                  Object.prototype.hasOwnProperty.call(_this.#template, key) &&
                  _this.#template[key];

                k && pk && (parseItem[pk] = k);
              });

            return parseItem;
          });

          return resolve({ data: parseResult });
        } catch (error) {
          reject(error);
        }
      };

      reader.onerror = (error) => {
        reject(error);
      };
    });
  }

  download(): void {
    try {
      if (this === void 0) {
        throw new Error(
          `this is undefined, please check if “this” Points correctly.`
        );
      }

      if (!this.#file) {
        return;
      }

      const downloadLink = document.createElement("a");

      downloadLink.href = URL.createObjectURL(this.#file);

      downloadLink.download = this.#file.name;

      downloadLink.style.display = "none";

      document.body.appendChild(downloadLink);

      downloadLink.click();

      document.body.removeChild(downloadLink);
    } catch (error) {
      console.warn(error);
    }
  }
}

~~~





