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

2024/9/4 UPDATE: 
今日总结：

1. 对接报表中心接口。补充了删除和批量删除模版对象逻辑，完成了模版对象新增接口对接。完成选择框与下拉框联动以及默认值逻辑。使用useEffect替换useUpdateEffect解决子组件因为条件渲染导致监听不到依赖更新。对使用相同接口的变量在使用时定义别名，防止命名冲突。



明日计划：

1. 继续对接报表中心接口。



卡位：暂无
报表中心 模版库：https://github.com/sj-distributor/ReportCenter.Web/pull/20

## 三、每周总结

1. 



## 四、目录

1. 条件渲染与依赖更新





### 条件渲染、依赖更新、组件卸载

```
{
  loading ? (
      <div className="w-full flex justify-center items-center">
        <Spin />
      </div>
  ) : (
      <UnionTree
          treeData={treeData}
          searchValue={searchValue}
          onChange={(v) => {
            setTreeValue(v);

            const newList = clone(v)?.filter((key) => {
              return !flattenTree(treeData).find(
                  (item) => item.key === key
              )?.children;
            });

            form.setFieldValue("selectValue", newList);
          }}
      />
  )
}
```

作为子组件的UnionTree被用作条件渲染，当组件内有依赖更新时，并不会触发更新（treeData更新后loading设置为ture。





### 命名空间

const命名空间并不会因为作用替代
