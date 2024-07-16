# PR-S25



## 分配任务弹窗入口
```tsx
<EditContext.Consumer>
  {(context) => (
    <div className="flex items-center">
      <div
        className={`flex w-[max-content] border border-solid rounded-3xl px-4 py-1.5 cursor-pointer
         text-center text-sm bg-[#133569] text-[#FFFFFF]`}
        onClick={() => {
          setRequirementId(item.id);
          editValue.setRequirementId &&
          editValue.setRequirementId(item.id);
          requirementAssignRef.current?.open();
        }}
      >
        {t(RECEPTION_KEYS.ASSIGN_TASKS, reception)}
      </div>
    </div>
  )}
</EditContext.Consumer>
```



## **需求详情**

获取当前选择的团队id



对/requirement/detail/接口



## **任务列表**

对/requirement/{id}/service-item/detail



## **嵌套表格**

ui

children 数据结构 expandedRowRender



父子联动



问题：自动展开不生效/不展开渲染就没有form记录



## **当前团队成员**

对接口



## **只有任务分配人显示入口**权限

?



## **提交提示**

ReceptionStateEnum枚举类 v



loading v



## 类型约束

### 接口数据

/todo/assign
