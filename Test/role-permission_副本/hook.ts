import { permissionState } from "@/models";
import { GetAuth } from "@/services/api/main";
import { deleteUser, GetUserList } from "@/services/api/role-permission";
import { IGetAuthResponseProps } from "@/services/dtos/main";
import { IGetUserListResponseProps } from "@/services/dtos/role-permission";
import { KeysOf, ValuesOf } from "@/utils/type";
import { useDebounceEffect, useMemoizedFn } from "ahooks";
import { App } from "antd";
import dayjs from "dayjs";
import { Key, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  IPermissionDtoProps,
  IPermissionPaginationDtoProps,
  IRolePermissionMountedProps,
  IRolePermissionProblemInfoProps,
  ITableItemProps,
  OpenDialogEnum,
} from "./props";

const ADMIN_ID = "1";

export const useAction = () => {
  const { message } = App.useApp();

  const [permission, setPermission] = useRecoilState(permissionState);

  const [height, setHeight] = useState<number>(0);

  const [rolePermissionDto, setRolePermissionDto] =
    useState<IPermissionDtoProps>({
      selectedRowKeys: [],
    });

  const [rolePermissionPaginationDto, setRolePermissionPaginationDto] =
    useState<IPermissionPaginationDtoProps>({
      current: 1,
      pageSize: 10,
    });

  const [rolePermissionProblemInfo, setRolePermissionProblemInfo] =
    useState<IRolePermissionProblemInfoProps>({
      userName: "",
      openDialog: OpenDialogEnum.Close,
      total: 0,
      loading: false,
      refresh: false,
      defaultValue: [],
    });

  const [rolePermissionList, setRolePermissionList] = useState<
    ITableItemProps[]
  >([]);

  const updateRolePermissionDto = useMemoizedFn(
    (k: KeysOf<IPermissionDtoProps>, v: ValuesOf<IPermissionDtoProps>) => {
      setRolePermissionDto((prev) => ({
        ...prev,
        [k]: v,
      }));
    }
  );

  const updateRolePermissionPaginationDto = useMemoizedFn(
    (
      k: KeysOf<IPermissionPaginationDtoProps>,
      v: ValuesOf<IPermissionPaginationDtoProps>
    ) => {
      setRolePermissionPaginationDto((prev) => ({
        ...prev,
        [k]: v,
      }));
    }
  );

  const updateRolePermissionProblemInfo = useMemoizedFn(
    (
      k: KeysOf<IRolePermissionProblemInfoProps>,
      v: ValuesOf<IRolePermissionProblemInfoProps>
    ) => {
      setRolePermissionProblemInfo((prev) => ({
        ...prev,
        [k]: v,
      }));
    }
  );

  const onDelete = ({ key }: ITableItemProps) => {
    handleDelete([key]);
  };

  const onBatchDelete = () => {
    handleDelete(rolePermissionDto.selectedRowKeys);
  };

  const closeAddUserModal = (value?:OpenDialogEnum) => {

    if(value !== OpenDialogEnum.Submit) {
     return updateRolePermissionProblemInfo("openDialog", OpenDialogEnum.Close)
    }

    setRolePermissionProblemInfo(() => ({
      userName: "",
      openDialog: OpenDialogEnum.Close,
      total: 0,
      loading: false,
      refresh: false,
      defaultValue: [],
    }));

    setRolePermissionPaginationDto(() => ({
      current: 1,
      pageSize: 10,
    }));

    setRolePermissionDto(() => ({
      selectedRowKeys: [],
    }));
  };

  const handleDelete = (ids: Key[]) => {
    updateRolePermissionProblemInfo("loading", true);

    deleteUser({ userProfileIds: ids })
      .then(() => {
        message.success("刪除成功");

        updateRolePermissionProblemInfo(
          "refresh",
          !rolePermissionProblemInfo.refresh
        );
      })
      .catch(() => {
        message.error("刪除失敗");
      })
      .finally(() => {
        updateRolePermissionProblemInfo("userName", "")

        setRolePermissionPaginationDto(() => ({
          current: 1,
          pageSize: 10,
        }));

        setRolePermissionDto(() => ({
          selectedRowKeys: [],
        }));
      });
  };

  const getHeight = () => {
    const h =
      document.body.clientHeight -
      document.getElementsByClassName("header-top")[0]?.getBoundingClientRect()
        .height -
      document
        .getElementsByClassName("ant-table-thead")[0]
        ?.getBoundingClientRect().height -
      80 -
      40 * 2 -
      24 * 2 -
      60 -
      16 -
      (24 + 64);
    setHeight(h);
  };

  const Mounted = async (): Promise<IRolePermissionMountedProps[]> => {
    const [...data] = await Promise.all([
      GetUserList({
        PageIndex: rolePermissionPaginationDto.current,
        PageSize: rolePermissionPaginationDto.pageSize,
        Keyword: rolePermissionProblemInfo.userName,
      }),
      GetAuth(),
    ]);

    return new Promise((resolve) => resolve(data));
  };

  useEffect(() => {
    getHeight();

    window.addEventListener("resize", getHeight);

    return () => {
      window.removeEventListener("resize", getHeight);
    };
  }, []);

  useEffect(() => {
    updateRolePermissionProblemInfo("loading", true);

    setRolePermissionDto(() => ({
      selectedRowKeys: [],
    }));

    Mounted()
      .then(([userList, authFrom]) => {
        const { id: flag } = authFrom as IGetAuthResponseProps;

        if (!flag) {
          throw new Error("");
        }

        const { count = 0, userProfiles = [] } =
          userList as IGetUserListResponseProps;
        const userProfile = userProfiles.map((item) => ({
          key: item.id + "",
          userName: item.userName,
          updateTime: dayjs(item.lastModifiedDate).format(
            "YYYY-MM-DD HH:mm:ss"
          ),
          disableCheckbox: true,
        }));

        setRolePermissionList(() => userProfile);

        setRolePermissionProblemInfo((pre) => ({
          ...pre,
          total: count,
        }));
      })
      .catch(() => {
        setPermission({
          isGetPermission: true,
          hasAccessBackend: false,
        });
      })
      .finally(() => {
        updateRolePermissionProblemInfo("loading", false);
      });
  }, [
    rolePermissionPaginationDto.current,
    rolePermissionPaginationDto.pageSize,
    rolePermissionProblemInfo.refresh,
  ]);

  useDebounceEffect(
    () => {
      setRolePermissionPaginationDto(() => ({
        current: 1,
        pageSize: 10,
      }));

      updateRolePermissionProblemInfo(
        "refresh",
        !rolePermissionProblemInfo.refresh
      );
    },
    [rolePermissionProblemInfo.userName],
    { wait: 300 }
  );

  return {
    ADMIN_ID,
    height,
    rolePermissionList,
    rolePermissionDto,
    rolePermissionPaginationDto,
    rolePermissionProblemInfo,
    updateRolePermissionDto,
    updateRolePermissionPaginationDto,
    updateRolePermissionProblemInfo,
    onDelete,
    onBatchDelete,
    closeAddUserModal,
  };
};
