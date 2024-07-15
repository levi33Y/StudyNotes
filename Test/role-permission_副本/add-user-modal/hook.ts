import { flattenTree } from "@/components/union-tree/utils";
import {
  IAddUserModalMountedProps,
  IAddUserModalProblemProps,
  IDialogProps,
  IListDataItemProps,
  ITreeDataProps,
  ITreeSettingProps,
} from "@/pages/back-stage/role-permission/add-user-modal/props";
import { OpenDialogEnum } from "@/pages/back-stage/role-permission/props";
import {
  GetTree,
  GetUserList,
  insertUser,
} from "@/services/api/role-permission";
import {
  HierarchyDepthEnum,
  HierarchyStaffRangeEnum,
  IGetTreeResponseProps,
  IGetUserListResponseProps,
  IIdentifyFileUsersItemProps,
  IStaffDepartmentHierarchyItemPros,
  StaffIdSourceEnum,
} from "@/services/dtos/role-permission";
import { KeysOf, ValuesOf } from "@/utils/type";
import { useMemoizedFn, useUpdateEffect } from "ahooks";
import { App } from "antd";
import React, { useState } from "react";

const ADMIN_ID = "1";

export const useAction = ({ status, close }: IDialogProps) => {
  const { message } = App.useApp();

  const [treeData, setTreeData] = useState<ITreeDataProps[]>([]);

  const [treeSetting, setTreeSetting] = useState<ITreeSettingProps>({
    expandedKeys: [],
    checkedKeys: [],
    autoExpandParent: true,
  });

  const [listData, setListData] = useState<IListDataItemProps[]>([]);

  const [addUserModalProblem, setAddUserModalProblem] =
    useState<IAddUserModalProblemProps>({
      loading: false,
      search: "",
      value: [],
    });

  const updateAdduserModalProblem = useMemoizedFn(
    (
      k: KeysOf<IAddUserModalProblemProps>,
      v: ValuesOf<IAddUserModalProblemProps>
    ) => {
      setAddUserModalProblem((prev) => ({
        ...prev,
        [k]: v,
      }));
    }
  );

  const onCancelList = (node: IListDataItemProps) => {
    const newKeys = listData
      .filter((item) => item.key !== node.key)
      .map((item) => item.key);

    updateAdduserModalProblem("value", newKeys);

    setListData((pred) => pred.filter((item) => item.key !== node.key));
  };

  const onSubmitForm = () => {
    updateAdduserModalProblem("loading", true);

    const data: IIdentifyFileUsersItemProps[] = listData.map((item) => ({
      userId: Number(item.key),
      userName: item.title,
    }));

    insertUser({ identifyFileUsers: data })
      .then(() => {
        message.success("保存成功");

        close(OpenDialogEnum.Submit);
      })
      .catch(() => {
        message.success("保存失敗");
      })
      .finally(() => {
        updateAdduserModalProblem("loading", false);
      });
  };

  const onChangeUnionTree = (value: React.Key[]) => {
    updateAdduserModalProblem("value", value);

    const newList = flattenTree(treeData)
      .filter(
        (item) =>
          value.includes(item.key) && item.isStaff && !item.disableCheckbox
      )
      .map((item) => ({
        key: item.key,
        title: item.title,
      })) as IListDataItemProps[];

    setListData((pred) => newList);
  };

  const Mounted = async (): Promise<IAddUserModalMountedProps[]> => {
    const [...data] = await Promise.all([
      GetTree({
        StaffIdSource: StaffIdSourceEnum.UserAccount,
        HierarchyDepth: HierarchyDepthEnum.All,
        HierarchyStaffRange: HierarchyStaffRangeEnum.Department,
      }),
      GetUserList({
        PageIndex: 1,
        PageSize: 2147483647,
        Keyword: "",
      }),
    ]);

    return new Promise((resolve) => resolve(data));
  };

  useUpdateEffect(() => {
    if (status === OpenDialogEnum.Open) {
      updateAdduserModalProblem("loading", true);

      Mounted()
        .then(([treeForm, permissionList]) => {
          const { staffDepartmentHierarchy = [] } =
            treeForm as IGetTreeResponseProps;

          const { userProfiles = [] } =
            permissionList as IGetUserListResponseProps;

          const keys = userProfiles
            .map((item) => item.userId + "")
            .filter((item) => item !== ADMIN_ID);

          const loop = ({
            department = {
              id: "",
              name: "",
              parentId: "",
            },
            staffs = [],
            childrens = [],
          }: IStaffDepartmentHierarchyItemPros): ITreeDataProps => {
            const children = [];

            for (let i = 0, item; (item = childrens[i++]); ) {
              children.push(loop(item));
            }

            const staff = staffs.map((item) => ({
              title: item.userName,
              key: item.id + "",
              isStaff: true,
              disableCheckbox: keys.includes(item.id),
            }));

            return {
              title: department.name,
              key: department.id + "",
              children: children.concat(staff),
            };
          };

          const tree: ITreeDataProps[] = [];

          for (let i = 0, item; (item = staffDepartmentHierarchy[i++]); ) {
            tree.push(loop(item));
          }

          setTreeData(() => tree);

          updateAdduserModalProblem("value", [...keys]);
        })
        .finally(() => {
          updateAdduserModalProblem("loading", false);
        });
    } else {
      setTreeSetting({
        expandedKeys: [],
        checkedKeys: [],
        autoExpandParent: true,
      });

      setListData([]);

      setAddUserModalProblem(() => ({
        loading: false,
        search: "",
        value: [],
      }));
    }
  }, [status]);

  return {
    treeData,
    listData,
    treeSetting,
    addUserModalProblem,
    updateAdduserModalProblem,
    onChangeUnionTree,
    onCancelList,
    onSubmitForm,
  };
};
