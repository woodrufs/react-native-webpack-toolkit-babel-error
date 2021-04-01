import * as React from "react";
import { View, TouchableOpacity, ViewStyle, TextStyle } from "react-native";
import { Panel } from "../Panel";
import { Icon } from "../Icon";
import { CaretIcon } from "./CaretIcon";

import { activeOpacity, borderRadius, Colors, sectionMinHeight, borderWidth } from "../styles";
import { scale } from "../helpers";

type iconProps = {
  icon: string;
  disabled?: boolean;
  containerStyle?: ViewStyle;
  iconSize?: number;
};
interface IExpandablePanelProps {
  backgroundColor?: string;
  caretLeftAligned?: boolean;
  caretStyle?: TextStyle;
  color?: string;
  content?: React.ReactElement<unknown>;
  contentStyle?: ViewStyle;
  disableBorders?: boolean;
  fieldContainerStyle?: ViewStyle;
  icon?: string;
  iconDisabled?: boolean;
  iconContainerStyle?: ViewStyle;
  iconSize?: number;
  iconProps?: iconProps;
  isExpanded?: boolean;
  label: React.ReactElement<unknown>;
  labelContainersStyle?: ViewStyle;
  labelHeight?: number;
  noMarginTop?: boolean;
  panelIcon?: string;
  panelIconColor?: string;
  panelIconSize?: number;
  panelStyle?: ViewStyle;
  pinIcon?: string;
  onIconPress?: () => void;
  onIconLongPress?: () => void;
  onPress?: any;
  onLongPress?: any;
}

const iconSizeDefault = scale(26);

// TODO: 'complexity' rule disabling needs to be inspected
// eslint-disable-next-line complexity
const ExpandablePanel: React.FC<IExpandablePanelProps> = ({
  caretLeftAligned,
  caretStyle,
  color,
  content,
  contentStyle,
  disableBorders = false,
  fieldContainerStyle,
  icon,
  iconDisabled,
  backgroundColor,
  iconContainerStyle,
  iconSize,
  isExpanded,
  label,
  labelContainersStyle,
  labelHeight,
  noMarginTop,
  panelIcon,
  panelIconColor = Colors.gray,
  panelIconSize = iconSizeDefault,
  panelStyle,
  pinIcon,
  onIconPress,
  onIconLongPress,
  onPress,
  onLongPress
}: IExpandablePanelProps) => {
  const iconContainerStyles = [
    stylesheet.iconContainer,
    {
      borderBottomLeftRadius: disableBorders ? 0 : borderRadius,
      backgroundColor
    },
    iconContainerStyle
  ];
  const fieldContainerStyles = [stylesheet.field, fieldContainerStyle];
  const iconSizeDefault = scale(26);
  const iconActiveOpacity = onIconPress ? activeOpacity : 1;
  const fieldActiveOpacity = onPress ? activeOpacity : 1;
  const iconSizeScaled = iconSize ?? iconSizeDefault;
  const labelStyles = [
    stylesheet.row,
    {
      height: labelHeight ?? sectionMinHeight
    },
    labelContainersStyle
  ];
  const contentContainerStyles = [
    stylesheet.content,
    {
      borderTopWidth: content ? 1 : 0
    },
    contentStyle
  ];
  const onPressAction = onPress ?? null;
  const onIconPressAction = onIconPress ?? null;
  const onIconLongPressAction = onIconLongPress ?? null;
  const labelBesidesCaret = <View style={stylesheet.label}>{label}</View>;

  return (
    <Panel style={panelStyle} disableBorders={disableBorders} noMarginTop={noMarginTop}>
      <View style={labelStyles}>
        {icon && (
          <TouchableOpacity
            style={iconContainerStyles as ViewStyle}
            activeOpacity={iconActiveOpacity}
            disabled={iconDisabled}
            onPress={onIconPressAction as any}
            onLongPress={onIconLongPressAction as any}
          >
            <View style={stylesheet.iconWrapper}>
              <Icon name={icon} color={color} size={iconSizeScaled} style={stylesheet.leftIcon} />
              {pinIcon && <Icon name={pinIcon} color={color} size={scale(15)} style={stylesheet.pinIcon} />}
            </View>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          activeOpacity={fieldActiveOpacity}
          style={fieldContainerStyles}
          onPress={onPressAction}
          onLongPress={onLongPress}
        >
          {panelIcon && (
            <Icon color={panelIconColor} name={panelIcon} size={panelIconSize} style={stylesheet.panelIcon} />
          )}
          {!caretLeftAligned && labelBesidesCaret}
          {onPressAction && <CaretIcon isExpanded={isExpanded} style={caretStyle} />}
          {caretLeftAligned && labelBesidesCaret}
        </TouchableOpacity>
      </View>
      {isExpanded && <View style={contentContainerStyles}>{content}</View>}
    </Panel>
  );
};
interface IStyles {
  row: ViewStyle;
  field: ViewStyle;
  label: ViewStyle;
  leftIcon: TextStyle;
  content: ViewStyle;
  iconContainer: ViewStyle;
  iconWrapper: ViewStyle;
  pinIcon: TextStyle;
  panelIcon: TextStyle;
}

const stylesheet: IStyles = {
  row: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    backgroundColor: Colors.grayWhite
  },
  field: {
    height: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0,
    borderColor: Colors.grayAlto,
    backgroundColor: Colors.transparent
  },
  label: {
    width: 0,
    flexGrow: 1
  },
  leftIcon: {
    borderRightWidth: borderWidth,
    borderColor: "transparent"
  },
  content: {
    borderWidth: 0,
    borderColor: Colors.grayAlto
  },
  iconContainer: {
    width: scale(60),
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius
  },
  iconWrapper: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    position: "relative",
    width: "100%"
  },
  pinIcon: {
    alignSelf: "flex-end",
    position: "absolute",
    padding: 1,
    bottom: 0,
    left: 0
  },
  panelIcon: {
    padding: scale(5)
  }
};
export { ExpandablePanel, IExpandablePanelProps };
