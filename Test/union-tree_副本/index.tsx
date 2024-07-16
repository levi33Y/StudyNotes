import { Empty, Tree, TreeProps } from "antd";
import { useAction } from "./hook";
import { IUnionTreeProps } from "./props";

export const UnionTree = (props: IUnionTreeProps & TreeProps) => {
  const {
    unionTreeData,
    checkedKeys,
    expandedKeys,
    autoExpandParent,
    onExpandTree,
    onCheckTree,
  } = useAction(props);

  return (
    <div
      id={props.id}
      className="h-[calc(100vh-28.875rem)] box-border border-solid border-[.0625rem] border-[#E7E8EE] overflow-y-auto"
    >
      {props.treeData?.length === 0 ? (
        <Empty className="h-[100%] flex flex-col justify-center items-center" />
      ) : (
        <Tree
          treeData={unionTreeData}
          fieldNames={{ title: "title", key: "key", children: "children" }}
          checkedKeys={checkedKeys}
          expandedKeys={expandedKeys}
          onExpand={onExpandTree}
          onCheck={onCheckTree}
          autoExpandParent={autoExpandParent}
          checkable
        />
      )}
    </div>
  );
};
