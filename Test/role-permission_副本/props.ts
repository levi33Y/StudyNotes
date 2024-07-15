import { IGetAuthResponseProps } from "@/services/dtos/main";
import { IGetUserListResponseProps } from "@/services/dtos/role-permission";
import React from "react";

export enum OpenDialogEnum {
  Open,
  Close,
  Cancel,
  Submit,
}

export interface IPermissionPaginationDtoProps {
  current: number;
  pageSize: number;
}

export interface ITableItemProps {
  key: string;
  userName: string;
  updateTime: string;
}

export interface IPermissionDtoProps {
  selectedRowKeys: React.Key[];
}

export interface IRolePermissionProblemInfoProps {
  userName: string;
  openDialog: OpenDialogEnum;
  loading: boolean;
  refresh: boolean;
  total: number;
  defaultValue: Pick<ITableItemProps, "key">[];
}

export type IRolePermissionMountedProps =
  | IGetUserListResponseProps
  | IGetAuthResponseProps;
