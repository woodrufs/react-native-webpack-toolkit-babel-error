/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { FlatList, TextStyle, View, ViewStyle } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import {
  helpers,
  styles,
  ExpandablePanel,
  MuxText,
  IExpandablePanelProps,
  Input,
  Table,
  TablePanelRow
} from "@strmbrkr/components";
import { CenterView, FieldContainer } from "../decorators";

const { Colors } = styles;
const { scale } = helpers;

const ExpandablePanelWrapper = (props: IExpandablePanelProps) => {
  const {
    pinIcon,
    panelIcon,
    label,
    labelHeight,
    icon,
    iconSize,
    backgroundColor,
    color,
    content,
    isExpanded = false,
    onIconPress,
    panelStyle,
    iconContainerStyle,
    fieldContainerStyle,
    caretStyle,
    caretLeftAligned,
    panelIconColor
  } = props;

  const onIconLongPress = () => {
    action("ExpandablePanel icon is long pressed")();
  };
  const [expanded, setExpanded] = React.useState(isExpanded);

  const toggle = () => {
    action("ExpandablePanel is pressed")();
    setExpanded(!expanded);
  };

  return (
    <ExpandablePanel
      pinIcon={pinIcon}
      panelIcon={panelIcon}
      noMarginTop
      label={label}
      labelHeight={labelHeight}
      icon={icon}
      iconSize={iconSize}
      panelIconColor={panelIconColor}
      backgroundColor={backgroundColor}
      color={color}
      content={content}
      isExpanded={isExpanded}
      onIconPress={onIconPress}
      onIconLongPress={onIconLongPress}
      onPress={toggle}
      panelStyle={panelStyle}
      iconContainerStyle={iconContainerStyle}
      fieldContainerStyle={fieldContainerStyle}
      caretStyle={caretStyle}
      caretLeftAligned={caretLeftAligned}
    />
  );
};

ExpandablePanelWrapper.defaultProps = {
  isExpanded: false
};

interface IStyleSheet {
  topPanel: ViewStyle;
  topPanelIconContainer: ViewStyle;
  bottomPanel: ViewStyle;
  innerPanel: ViewStyle;
  listContent: ViewStyle;
  borderBetweenIconAndField: ViewStyle;
  customCaret: TextStyle;
}
const stylesheet: IStyleSheet = {
  topPanel: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  topPanelIconContainer: {
    borderBottomLeftRadius: 0
  },
  bottomPanel: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderTopWidth: 0
  },
  innerPanel: {
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  listContent: {
    width: "80%",
    marginLeft: "20%"
  },
  borderBetweenIconAndField: {
    borderLeftWidth: scale(1),
    borderLeftColor: Colors.grayAlto
  },
  customCaret: {
    fontSize: scale(15),
    color: Colors.green
  }
};

const handleInputOnChangeText = (text: string) => action(`Text: ${text}`)();

storiesOf("ExpandablePanel", module)
  .addDecorator((getStory) => (
    <CenterView>
      <FieldContainer>{getStory()}</FieldContainer>
    </CenterView>
  ))
  .add("ExpandablePanel caret left aligned", () => (
    <ExpandablePanelWrapper label={<MuxText>Text</MuxText>} caretLeftAligned />
  ))
  .add("ExpandablePanel without content", () => (
    <ExpandablePanelWrapper label={<MuxText numberOfLines={2}>S48597012366</MuxText>} />
  ))
  .add("ExpandablePanel with content", () => (
    <ExpandablePanelWrapper
      label={<MuxText numberOfLines={2}>S48597012366</MuxText>}
      content={<Table disableBorders>{renderTableRows(tableData)}</Table>}
    />
  ))
  .add("ExpandablePanel with a long label", () => (
    <ExpandablePanelWrapper
      content={<Table disableBorders>{renderTableRows(tableData)}</Table>}
      label={
        <MuxText numberOfLines={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
        </MuxText>
      }
    />
  ))
  .add("ExpandablePanel with icon of the specified size", () => (
    <ExpandablePanelWrapper
      label={<MuxText numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur</MuxText>}
      icon="mixed"
      iconSize={30}
      color={Colors.white}
      backgroundColor={Colors.green}
      content={<Table disableBorders>{renderTableRows(tableData)}</Table>}
      onIconPress={action("Icon is pressed")}
    />
  ))
  .add("ExpandablePanel with input and icon", () => (
    <ExpandablePanelWrapper
      label={
        <Input placeholder="Type here..." onChangeText={handleInputOnChangeText}>
          {"Lorem ipsum dolor sit amet, consectetur"}{" "}
        </Input>
      }
      icon="mixed"
      color={Colors.white}
      backgroundColor={Colors.green}
      onIconPress={action("Icon is pressed")}
    />
  ))
  .add("ExpandablePanel with custom Panel styles", () => (
    <View>
      <ExpandablePanelWrapper
        label={<MuxText numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur</MuxText>}
        icon="mixed"
        iconSize={30}
        color={Colors.white}
        backgroundColor={Colors.green}
        content={<Table disableBorders>{renderTableRows(tableData)}</Table>}
        panelStyle={stylesheet.topPanel}
        iconContainerStyle={stylesheet.topPanelIconContainer}
        onIconPress={action("Icon is pressed")}
        disableBorders
      />
      <ExpandablePanelWrapper
        label={<MuxText numberOfLines={2}>Total containers: 5</MuxText>}
        color={Colors.white}
        backgroundColor={Colors.green}
        panelStyle={stylesheet.bottomPanel}
        content={
          <View style={{ backgroundColor: Colors.grayLight }}>
            <FlatList
              style={stylesheet.listContent}
              data={containers}
              keyExtractor={keyExtractor}
              renderItem={renderContainerOrMasterUnit}
            />
          </View>
        }
        onIconPress={action("Icon is pressed")}
        disableBorders
      />
    </View>
  ))
  .add("ExpandablePanel with border between icon and field", () => (
    <ExpandablePanelWrapper
      label={
        <Input placeholder="Type here..." onChangeText={handleInputOnChangeText}>
          {"Lorem ipsum dolor sit amet, consectetur"}{" "}
        </Input>
      }
      icon="mixed"
      color={Colors.grayAlto}
      backgroundColor={Colors.white}
      onIconPress={action("Icon is pressed")}
      fieldContainerStyle={stylesheet.borderBetweenIconAndField}
    />
  ))
  .add("ExpandablePanel with custom caret and custom height", () => (
    <ExpandablePanelWrapper
      labelHeight={scale(70)}
      label={
        <Input placeholder="Type here..." onChangeText={handleInputOnChangeText}>
          {"Lorem ipsum dolor sit amet, consectetur"}{" "}
        </Input>
      }
      icon="mixed"
      color={Colors.green}
      backgroundColor={Colors.white}
      onIconPress={action("Icon is pressed")}
      caretStyle={stylesheet.customCaret}
    />
  ))
  .add("ExpandablePanel with new buttons", () => (
    <ExpandablePanelWrapper
      label={
        <MuxText align="right" bold numberOfLines={2}>
          S48597012366
        </MuxText>
      }
      icon="check"
      iconSize={scale(24)}
      pinIcon="favorites"
      panelIcon="container"
      color={Colors.white}
      backgroundColor={Colors.green}
      onIconPress={action("Icon is pressed")}
    />
  ));

const tableData = [
  { label: "SUPPLIER", value: "Alkar Steel" },
  { label: "SHIPPER NO", value: "mp0307" },
  { label: "PART/MTL", value: "HK9001" },
  { label: "CONTAINERS", value: "4" },
  {
    label: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING",
    value: "adipiscing elit. Nullam nec magna gravida, venenatis lorem eu, lacinia justo. Proin placerat, est."
  }
];

const containers = [{ serialNo: 1 }, { serialNo: 2 }, { serialNo: 3 }, { serialNo: 4 }, { serialNo: 5 }];

const renderTableRows = (data: any) =>
  data.map((dataItem: any, index: number) => (
    /* eslint-disable react/no-array-index-key */
    <TablePanelRow key={`${index}`} label={dataItem.label} value={dataItem.value} />
  ));

const keyExtractor = (container: any) => container.serialNo.toString();
const renderContainerOrMasterUnit = () => {
  const content = <Table disableBorders>{renderTableRows(tableData)}</Table>;

  return (
    <ExpandablePanel
      label={<MuxText>S09u87878798</MuxText>}
      icon="check"
      color={Colors.white}
      backgroundColor={Colors.green}
      content={content}
      panelStyle={stylesheet.innerPanel}
    />
  );
};
