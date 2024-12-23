# 学习笔记

2024/9/9

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

2024/9/12 UPDATE:
今日总结：

1. 对接报表中心接口，调整发送设置保存逻辑。调整保存按钮点击逻辑，完成模版对象-保存需求。修复自定义组件在Form表单变更时状态不更新的问题，添加useEffect监听组件value，使用 JSON.stringify比较组件状态和 value`两个数组类型变量。

明日计划：

1. 跟进发送设置接口对接。



卡位：暂无

报表中心 模版库：https://github.com/sj-distributor/ReportCenter.Web/pull/23

## 三、每周总结

1.



## 四、目录

1. 表单是否修改



### 表单是否修改

some + JSON.stringfly

只对当前一次的操作进行判断

~~~ts
//disableSaveButton: [boolean, boolean];

/*
copyFields: {
  callSettingFile: boolean;
  callSettingSource: ChannelEnum;
  callSettingPort: PortEnum;
  sendSettingForm: ISendSettingFormProps[];
}
*/

  const onFieldsChange = (
    changedFields: {
      name?: [string] | ["sendSettingForm", number, string];
      value?: any;
    }[]
  ) => {
    const { copyFields } = templateFetchProblemInfo;

    changedFields?.some(({ name, value }) => {
      if (name?.length === 1) {
        const key = name?.at(0) as keyof typeof copyFields;

        if(!["callSettingFile","sendSettingForm","sendSettingForm"].includes(key)) {
          return;
        }

        if( copyFields[key] !== value) {
          updateTemplateFetchProblemInfo("disableSaveButton", [
            false,
            templateFetchProblemInfo.disableSaveButton.at(1),
          ]);
        }
      } 
      else if (name?.length === 3) {
        const key = name?.at(2) as keyof ISendSettingFormProps;

        const sendSettingForm = copyFields?.sendSettingForm?.at(name?.at(1) as number);

        if(!sendSettingForm) {
          return;
        }

        if(JSON.stringify(sendSettingForm[key]) !== JSON.stringify(value)) {
          updateTemplateFetchProblemInfo("disableSaveButton", [
            templateFetchProblemInfo.disableSaveButton.at(0),
            false,
          ]);
        }
      }
    });
~~~



如果这一次操作没有修改，则会覆盖状态

```ts
```





每次都对整个表单进行修改，或者说，每次修改都会携带键，把这次修改存储起来，对比的逻辑还是采用“只对当前一次的操作进行判断”，然后在遍历存储表。(动态表单仍存在整个项删除情况下逻辑)

~~~ts
  const changeMap = useRef(new Map<string, boolean>());

  const onFieldsChange = (
    changedFields: {
      name?: [string] | ["sendSettingForm", number, string];
      value?: any;
    }[]
  ) => {
    const { copyFields } = templateFetchProblemInfo;

    changedFields?.some(({ name, value }) => {
      if (name?.length === 1) {
        const key = name?.at(0) as keyof typeof copyFields;

        ["callSettingFile", "callSettingPort", "callSettingSource"].includes(
          key
        ) && changeMap.current.set(key, copyFields[key] !== value);
      } else if (name?.length === 3) {
        const key = name?.at(2) as keyof ISendSettingFormProps;

        const sendSettingForm = copyFields?.sendSettingForm?.at(
          name?.at(1) as number
        );

        if (!sendSettingForm) {
          changeMap.current.set((name.at(1) as number) + "-" + key, true);
        } else {
          changeMap.current.set(
            (name.at(1) as number) + "-" + key,
            JSON.stringify(sendSettingForm[key]) !== JSON.stringify(value)
          );
        }
      }
    });

    const isCallChange = Array.from(changeMap.current.keys()).some((key) => {
      if (key?.split("-")?.length === 1) {
        return changeMap.current.get(key);
      }
    });

    const isSendChange = Array.from(changeMap.current.keys()).some((key) => {
      if (key?.split("-")?.length === 2) {
        return changeMap.current.get(key);
      }
    });

    updateTemplateFetchProblemInfo("disableSaveButton", [
      !isCallChange,
      !isSendChange,
    ]);
  };
~~~







