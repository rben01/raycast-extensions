import { Action, ActionPanel, Icon, List } from "@raycast/api";
import React, { Dispatch, SetStateAction } from "react";
import { pinFiles } from "../pin";
import { refreshNumber } from "../hooks/hooks";
import { ActionRemoveAllDirectories } from "./action-on-files";
import { DirectoryWithFileInfo } from "../types/types";

export function QuickAccessEmptyView(props: {
  title: string;
  description: string;
  setRefresh: Dispatch<SetStateAction<number>>;
  directoryWithFiles: DirectoryWithFileInfo[];
}) {
  const { title, description, setRefresh, directoryWithFiles } = props;
  return (
    <List.EmptyView
      icon={{ source: { light: "empty-view-icon.svg", dark: "empty-view-icon@dark.svg" } }}
      title={title}
      description={description}
      actions={
        <ActionPanel>
          <Action
            title={"Pin"}
            icon={Icon.Pin}
            onAction={async () => {
              await pinFiles(false);
              setRefresh(refreshNumber());
            }}
          />
          {directoryWithFiles.length != 0 && <ActionRemoveAllDirectories setRefresh={setRefresh} />}
        </ActionPanel>
      }
    />
  );
}
