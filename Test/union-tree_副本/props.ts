import { TreeDataNode } from "antd";
import React from "react";

export interface IUnionTreeProps {
  treeData: IUnionTreeItemProps[];
  id?: string;
  value?: React.Key[];
  onChange?: (value: React.Key[]) => void;
  searchValue?: string;
  defaultValue?: React.Key[];
}

export interface IUnionTreeItemProps extends TreeDataNode {
  children?: IUnionTreeItemProps[];
}
