import {
  RolePermissionAddIcon,
  RolePermissionDeleteIcon,
} from "@/icon/role-permission";
import { SearchOutlined } from "@ant-design/icons";
import { App, Button, Input, Spin, Table, TableProps } from "antd";
import React from "react";
import { AddUserModal } from "./add-user-modal";
import { useAction } from "./hook";
import { ITableItemProps, OpenDialogEnum } from "./props";

export const RolePermission = () => {
  const { modal } = App.useApp();

  const {
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
  } = useAction();

  const deleteModalConfig = {
    title: "操作確定",
    content: "移除後將無法找回，請確定是否移除？",
    cancelText: <div className="text-[#333444]">取消</div>,
    okText: <div className="text-[#ffffff]">確定</div>,
    okButtonProps: {
      className: "bg-[#ef4753]",
    },
    cancelButtonProps: {
      className: "border border-[#d9d9d9] box-border",
    },
  };

  const columns: TableProps<ITableItemProps>["columns"] = [
    {
      title: "用戶名",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "更新時間",
      dataIndex: "updateTime",
      key: "updateTime",
    },
    {
      title: "操作",
      render: (record: ITableItemProps) => {
        return (
          record.key != ADMIN_ID && (
            <div className="text-[#f03e56] flex flex-wrap">
              <span
                className="cursor-pointer min-w-[2rem] mr-4"
                onClick={() => {
                  modal.confirm({
                    ...deleteModalConfig,
                    onOk: () => onDelete(record),
                  });
                }}
              >
                移除
              </span>
            </div>
          )
        );
      },
    },
  ];

  return (
    <Spin spinning={rolePermissionProblemInfo.loading}>
      <div className="rolePermissionList bg-white rounded-lg grid p-list">
        <div className="permissionTitle text-[#323444] font-semibold text-[1.125rem] py-title h-title box-border">
          後台權限
        </div>
        <div className="permissionAction mb-operation flex header-top">
          <div className="flex flex-wrap justify-between w-full">
            <Input
              className="w-[17.5rem]"
              placeholder="搜索用戶名"
              suffix={<SearchOutlined />}
              value={rolePermissionProblemInfo.userName}
              onChange={(e) =>
                updateRolePermissionProblemInfo("userName", e.target?.value)
              }
            />

            <div className="flex">
              <Button
                icon={<RolePermissionAddIcon />}
                className="flex justify-center items-center text-[#ffffff] bg-[#323444]"
                type="primary"
                onClick={() =>
                  updateRolePermissionProblemInfo(
                    "openDialog",
                    OpenDialogEnum.Open
                  )
                }
              >
                添加用戶
              </Button>
              <Button
                icon={<RolePermissionDeleteIcon />}
                className="flex ml-6 justify-center items-center text-[#ffffff] bg-[#ef4753]"
                type="primary"
                disabled={rolePermissionDto.selectedRowKeys.length === 0}
                onClick={() => {
                  modal.confirm({
                    ...deleteModalConfig,
                    onOk: () => onBatchDelete(),
                  });
                }}
              >
                批量移除
              </Button>
            </div>
          </div>
        </div>
        <div className="overflow-auto">
          <Table
            rowKey={(record) => record.key}
            rowSelection={{
              selectedRowKeys: rolePermissionDto.selectedRowKeys,
              onChange: (newSelectedRowKeys: React.Key[]) =>
                updateRolePermissionDto("selectedRowKeys", newSelectedRowKeys),
              getCheckboxProps: (record: ITableItemProps) => ({
                disabled: record.key == ADMIN_ID, // Column configuration not to be checked
                name: record.userName,
              }),
            }}
            columns={columns}
            dataSource={rolePermissionList}
            scroll={{
              scrollToFirstRowOnChange: true,
              y: height,
              x: 500,
            }}
            pagination={{
              className: "h-pagination",
              position: ["bottomRight"],
              current: rolePermissionPaginationDto.current,
              pageSize: rolePermissionPaginationDto.pageSize,
              pageSizeOptions: [5, 10, 20, 50],
              total: rolePermissionProblemInfo.total,
              showQuickJumper: true,
              showSizeChanger: true,
              onChange: (page: number, pageSize: number) => {
                updateRolePermissionPaginationDto("pageSize", pageSize);

                updateRolePermissionPaginationDto("current", page);
              },
              showTotal: (total: number) => (
                <span>
                  共 <span className="text-[#697FFF]">{total}</span> 條
                </span>
              ),
            }}
          />
        </div>
      </div>
      <AddUserModal
        status={rolePermissionProblemInfo.openDialog}
        close={(value) => closeAddUserModal(value)}
      />
    </Spin>
  );
};
