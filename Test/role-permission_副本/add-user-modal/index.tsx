import { UnionTree } from "@/components/union-tree";
import { IDialogProps } from "@/pages/back-stage/role-permission/add-user-modal/props";
import { OpenDialogEnum } from "@/pages/back-stage/role-permission/props";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, List, Modal, Spin } from "antd";
import { useAction } from "./hook";

export const AddUserModal = (props: IDialogProps) => {
  const { status, close } = props;

  const {
    treeData,
    listData,
    addUserModalProblem,
    updateAdduserModalProblem,
    onCancelList,
    onSubmitForm,
    onChangeUnionTree,
  } = useAction(props);

  return (
    <Modal
      className="rolePermissionDialog h-[37rem]"
      title={"添加用戶"}
      open={status === OpenDialogEnum.Open}
      onOk={() => onSubmitForm()}
      onCancel={() => close(OpenDialogEnum.Cancel)}
      width={880}
      styles={{
        header: {
          height: "4.875rem",
          boxSizing: "border-box",
          padding: "1.5rem 0 1.4375rem 1.5rem",
          borderBottom: "0.0625rem solid #E7E8EE",
          margin: "0",
          display: "flex",
          alignItems: "center",
        },
        mask: {},
        footer: {
          height: "4.75rem",
          boxSizing: "border-box",
          margin: "0",
          padding: "1rem 1.5rem 1rem 0",
          background: "#F8F8F8",
          borderRadius: "0.67rem",
        },
        content: {
          boxSizing: "border-box",
          margin: "0",
          padding: "0 ",
        },
      }}
      cancelText={<span className="text-[#7B8EFE]">取消</span>}
      okText={<span className="text-[#FFFFFF]">確定</span>}
      okButtonProps={{
        className:
          "w-[6rem] h-[2.75rem] bg-gradient-to-r from-[#44ABFE] to-[#7C67FF]",
        disabled: addUserModalProblem.loading || listData.length === 0,
      }}
      cancelButtonProps={{
        className:
          "w-[6rem] h-[2.75rem] border-[0.1rem] border-[#697FFF] box-border mr-[0.8rem] bg-[#F8F8F8]",
      }}
    >
      <Spin spinning={addUserModalProblem.loading}>
        <div className="flex justify-between">
          <div className="w-[50%] h-[30rem] box-border mx-[1.5rem] my-[2rem] ">
            <Input
              className="w-[100%] h-[1.875rem] mb-[1.125rem]"
              placeholder="搜索用戶名，部門名"
              suffix={<SearchOutlined />}
              value={addUserModalProblem.search}
              onChange={(e) =>
                updateAdduserModalProblem("search", e?.target.value ?? "")
              }
            />
            <UnionTree
              treeData={treeData}
              searchValue={addUserModalProblem.search}
              onChange={onChangeUnionTree}
              value={addUserModalProblem.value}
              defaultValue={listData.map((item) => item.key)}
            />
          </div>
          <div
            className="w-[50%] h-[30rem] py-[0.5rem] mx-[1.5rem] my-[2rem]
          border-[.1rem] border-solid border-[#E5E5E5] rounded-md box-border"
          >
            <span className="font-bold px-[1rem]">
              已選{listData.length}個用戶
            </span>
            <List
              className="h-[28rem] px-[1rem] pt-[1rem] overflow-y-auto"
              itemLayout="horizontal"
              dataSource={listData}
              renderItem={(item, index) => (
                <List.Item>
                  {
                    <div className="w-[100%] flex justify-between">
                      <span>{item.title}</span>
                      <CloseOutlined
                        onClick={() => {
                          onCancelList(item);
                        }}
                      />
                    </div>
                  }
                </List.Item>
              )}
            />
          </div>
        </div>
      </Spin>
    </Modal>
  );
};
