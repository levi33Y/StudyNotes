import React from "react";
import { IUnionTreeItemProps } from "./props";

export const flattenTree = <T extends IUnionTreeItemProps>(dom: T[]): T[] => {
  const level: T[] = [...dom];

  const nodeList: T[] = [];

  while (level.length) {
    const node: T = level.shift() as T;

    nodeList.push(node);

    if (node?.children && node.children?.length !== 0) {
      const next: T[] = (node.children as T[]) || [];

      next.map((item) => ({
        ...item,
      }));

      level.push(...next);
    }
  }

  return nodeList;
};

export const leafNodes = <T extends IUnionTreeItemProps>(
  dom: T[]
): React.Key[] => {
  const flattenData = flattenTree(dom);

  return flattenData
    .filter(
      (item: IUnionTreeItemProps) =>
        !item.children || item.children.length === 0
    )
    .map((item) => item.key);
};
