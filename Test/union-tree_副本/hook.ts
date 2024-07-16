import { useUpdateEffect } from "ahooks";
import { TreeProps } from "antd";
import React, { useMemo, useState } from "react";
import { IUnionTreeItemProps, IUnionTreeProps } from "./props";
import { leafNodes } from "./utils";

export const useAction = ({
  value,
  onChange,
  treeData = [],
  searchValue = "",
  defaultValue = [],
}: IUnionTreeProps & TreeProps) => {
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([]);

  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);

  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);

  const [flattenKey, setFlattenKey] = useState<React.Key[]>([]);

  const onExpandTree: TreeProps["onExpand"] = (expandedKeysValue) => {
    setExpandedKeys(expandedKeysValue);

    setAutoExpandParent(false);
  };

  const onCheckTree: TreeProps["onCheck"] = (checkedKeysValue) => {
    let filterCheck: React.Key[] = [];

    if ("includes" in checkedKeysValue) {
      filterCheck = leafNodes(treeData).filter((item) =>
        checkedKeysValue.includes(item)
      );
    }
    const keys = defaultValue?.filter((item) => !flattenKey.includes(item));

    triggerChange([...keys, ...filterCheck]);
  };

  const triggerChange = (newValue: React.Key[]) => {
    onChange?.(newValue);
  };

  const unionTreeData = useMemo(() => {
    const treeSearch = searchValue || "";

    const filterTree = <T extends IUnionTreeItemProps>(data: T[]) => {
      const filteredKeys: React.Key[] = [];

      const filteredTree: any[] = [];

      const filterNodes = <T extends IUnionTreeItemProps>(nodes: T[]) => {
        nodes.forEach(<T extends IUnionTreeItemProps>(node: T) => {
          const nodeTitle = String(node.title);

          if (nodeTitle.toLowerCase().includes(treeSearch.toLowerCase())) {
            if (filteredKeys.indexOf(node.key) === -1) {
              filteredKeys.push(node.key);
            }

            let inFilteredTree: boolean = false;

            const checkedSameKey = <T extends IUnionTreeItemProps>(
              data: T[],
              key: string
            ) => {
              data.forEach((item) => {
                if (item.key === key) {
                  return (inFilteredTree = true);
                }

                if (item.children) {
                  checkedSameKey(item.children, key);
                }
              });
            };

            checkedSameKey(filteredTree, node.key + "");

            if (!inFilteredTree) {
              filteredTree.push(node);
            }
          }

          if (node.children) {
            filterNodes(node.children);
          }
        });
      };

      filterNodes(data);

      return { filteredKeys, filteredTree };
    };

    const { filteredKeys, filteredTree } = filterTree(treeData);

    setFlattenKey(() => leafNodes(filteredTree));

    return filteredTree;
  }, [searchValue, treeData]);

  useUpdateEffect(() => {
    setCheckedKeys(value || []);
  }, [value]);

  return {
    unionTreeData,
    checkedKeys,
    expandedKeys,
    autoExpandParent,
    setCheckedKeys,
    setExpandedKeys,
    setAutoExpandParent,
    onExpandTree,
    onCheckTree,
  };
};
