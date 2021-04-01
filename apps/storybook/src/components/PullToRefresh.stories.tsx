import * as React from "react";

import { storiesOf } from "@storybook/react-native";
import { LabelPanel, PullToRefreshView } from "@strmbrkr/components";

import { CenterView } from "../decorators";

const PullToRefreshViewWrapper = () => {
  const [isRefreshing, setIsRefreshing] = React.useState<boolean>(false);
  const [content, setContent] = React.useState<string[]>(["ITEM-1", "ITEM-2", "ITEM-3"]);
  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      const newContent = ["ITEM-4", "ITEM-5", "ITEM-6"];
      setContent([...newContent, ...content]);
      setIsRefreshing(false);
    }, 3000);
  };

  return (
    <PullToRefreshView isRefreshing={isRefreshing} onRefresh={onRefresh}>
      {content.map((label) => (
        <LabelPanel key={label} label={label} />
      ))}
    </PullToRefreshView>
  );
};

storiesOf("PullToRefreshView", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("New content appears at the top", () => <PullToRefreshViewWrapper />);
