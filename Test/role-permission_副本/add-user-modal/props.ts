import { OpenDialogEnum } from "@/pages/back-stage/role-permission/props";
import {
  IGetTreeResponseProps,
  IGetUserListResponseProps,
} from "@/services/dtos/role-permission";
import { TreeDataNode } from "antd";
import React from "react";

export interface ITreeDataProps extends TreeDataNode {
  key: string;
  title: string;
  isStaff?: boolean;
  disableCheckbox?: boolean;
}

export interface IDialogProps {
  status: OpenDialogEnum;
  close: (x: OpenDialogEnum) => void;
}

export interface ITreeSettingProps {
  expandedKeys: React.Key[];
  checkedKeys: React.Key[];
  autoExpandParent: boolean;
}

export interface IAddUserModalProblemProps {
  loading: boolean;
  search: string;
  value: React.Key[];
}

export interface IListDataItemProps {
  key: string;
  title: string;
}

export type IAddUserModalMountedProps =
  | IGetTreeResponseProps
  | IGetUserListResponseProps;
