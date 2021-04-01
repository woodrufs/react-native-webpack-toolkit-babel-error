import * as React from "react";
import { View, ViewStyle } from "react-native";
import { EndlessScrollList, MuxText, helpers } from "@strmbrkr/components";
import { storiesOf } from "@storybook/react-native";
import { CenterView } from "../decorators";

const { scale } = helpers;

interface IStyles {
  container: ViewStyle;
  item: ViewStyle;
}
const stylesheet: IStyles = {
  item: {
    marginTop: scale(5),
    minWidth: "100%",
    minHeight: scale(25),
    flex: 1,
    alignItems: "center"
  },
  container: {
    marginTop: scale(10),
    marginBottom: scale(10),
    height: "100%"
  }
};

const dataRowsLimit = 200;
const getData = (pageNumber = 1, pageSize = 25): IData[] => {
  const dataLength = (pageNumber - 1) * pageSize;
  return dataLength < dataRowsLimit
    ? Array.from(new Array(pageSize), (x, i) => ({
        name: `Item ${dataLength + i}`,
        id: dataLength + i
      }))
    : [];
};
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IEndlessScrillListStoryProps {}
interface IData {
  name: string;
  id: number;
}
const EndlessScrollListStory: React.FC<IEndlessScrillListStoryProps> = () => {
  const [data, setData] = React.useState<IData[]>(getData());
  const [isDataLoading, setIsDataLoading] = React.useState<boolean>(false);
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const getMoreData = () => {
    setIsDataLoading(true);
    setTimeout(() => {
      setCurrentPage(currentPage + 1);
      const pageNumber = currentPage + 1;
      const moreData = getData(pageNumber);
      if (moreData.length) {
        setCurrentPage(pageNumber);
        setData([...data, ...moreData]);
      }
      setIsDataLoading(false);
    }, 3000);
  };

  const keyExtractor = (item: IData) => item.id.toString();

  const renderItem = ({ item }: { item: IData }) => (
    <View style={stylesheet.item}>
      <MuxText size={25} bold>
        {item.name}
      </MuxText>
    </View>
  );

  return (
    <View style={stylesheet.container}>
      <EndlessScrollList
        data={data}
        isDataLoading={isDataLoading}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={getMoreData}
      />
    </View>
  );
};

storiesOf("EndlessScrollList", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Endless Scroll List example", () => <EndlessScrollListStory />);
