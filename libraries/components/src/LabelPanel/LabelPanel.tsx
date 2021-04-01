import * as React from "react";
import { View, TouchableOpacity, ViewStyle, TextStyle, StyleProp } from "react-native";
import { Panel } from "../Panel";
import { MuxText } from "../MuxText";
import { Icon } from "../Icon";
import { LoadingOverlay } from "../LoadingOverlay";

import { Colors, activeOpacity, borderRadius, sectionMinHeight, defaultTextIndent } from "../styles";
import { scale } from "../helpers";

interface ILabelContentAlignTypes {
  left: StyleProp<ViewStyle>;
  right: StyleProp<ViewStyle>;
  "space-between": StyleProp<ViewStyle>;
}

interface ILabelPanelProps {
  componentId?: string;
  disableBorderRadius?: boolean;
  disableBorders?: boolean;
  disabledStyle?: ViewStyle;
  isLoading?: boolean;
  label: string;
  labelDisabled?: boolean;
  labelBackgroundColor?: string;
  labelIcon?: string;
  labelIconColor?: string;
  labelIconSize?: number;
  labelContentAlign?: "left" | "right" | "space-between";
  labelTextBold?: boolean;
  labelTextColor?: string;
  labelTextSize?: number;
  noMarginTop?: boolean;
  noValueVerticalPaddings?: boolean;
  prevValue?: string;
  style?: ViewStyle;
  value?: string;
  valueDisabled?: boolean;
  valueTextAlign?: string;
  valueTextSize?: number;
  valueTextColor?: string;
  valueIcon?: string;
  valueIconColor?: string;
  valueIconSize?: number;
  numberOfLines?: number;
  onValueLongPress?: (value: string | null | undefined) => void;
  onValuePress?: (value: string | null | undefined) => void;
  onLabelIconPress?: () => void;
  onLabelPress?: (value: string | null | undefined, label: string) => void;
  onLabelLongPress?: (value: string | null | undefined, label: string) => void;
}

class LabelPanel extends React.PureComponent<ILabelPanelProps> {
  static defaultProps = {
    disableBorderRadius: false,
    disableBorders: false,
    labelIconColor: Colors.blue,
    valueIconColor: Colors.blue,
    isLoading: false,
    labelContentAlign: "right",
    labelTextBold: false,
    labelTextColor: Colors.grayDark,
    labelTextSize: scale(15),
    noMarginTop: false,
    valueDisabled: false,
    valueTextAlign: "left",
    valueTextSize: scale(20),
    valueTextColor: Colors.grayDark
  };

  onValuePress = () => {
    const { value, onValuePress } = this.props;
    if (onValuePress) {
      onValuePress(value);
    }
  };

  onValueLongPress = () => {
    const { value, onValueLongPress } = this.props;
    if (onValueLongPress) {
      onValueLongPress(value);
    }
  };

  onLabelPress = () => {
    const { value, label, onLabelPress } = this.props;
    if (onLabelPress) {
      onLabelPress(value, label);
    }
  };

  onLabelLongPress = () => {
    const { value, label, onLabelLongPress } = this.props;
    if (onLabelLongPress) {
      onLabelLongPress(value, label);
    }
  };

  // eslint-disable-next-line complexity
  render() {
    const {
      componentId,
      disableBorderRadius,
      disableBorders,
      disabledStyle,
      isLoading,
      label,
      labelDisabled,
      labelBackgroundColor,
      labelIcon,
      labelIconColor,
      labelIconSize,
      labelContentAlign,
      labelTextBold,
      labelTextColor,
      labelTextSize,
      noMarginTop,
      noValueVerticalPaddings,
      prevValue,
      style,
      value,
      valueDisabled,
      valueIcon,
      valueIconColor,
      valueIconSize,
      valueTextAlign,
      valueTextSize,
      valueTextColor,
      numberOfLines,
      onValuePress,
      onLabelPress,
      onLabelIconPress
    } = this.props;

    const LabelContentAlignTypes: ILabelContentAlignTypes = {
      left: stylesheet.labelContentAlignLeft,
      right: null,
      "space-between": stylesheet.labelContentAlignSpaceBetween
    };
    const iconSize = scale(30);

    const valueTouchableStyle = [
      stylesheet.touchable,
      prevValue && { backgroundColor: Colors.blurredOrange },
      valueDisabled && { ...stylesheet.disabled, ...disabledStyle },
      disableBorderRadius && {
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0
      }
    ] as ViewStyle;

    const valueWrapperStyle = [
      stylesheet.valueWrapper,
      disableBorderRadius && {
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0
      }
    ];
    const labelTouchableStyle = [
      stylesheet.labelWrapper, // $FlowFixMe labelContentAlign has default prop (flow poorly understands static props)
      labelContentAlign && LabelContentAlignTypes[labelContentAlign],
      labelBackgroundColor && { backgroundColor: labelBackgroundColor },
      disableBorderRadius && {
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0
      }
    ] as ViewStyle;
    const valueContainerStyle = [
      stylesheet.valueContainer,
      noValueVerticalPaddings ? null : stylesheet.paddingVertical
    ];

    const valueContainer = (
      <TouchableOpacity
        activeOpacity={onValuePress ? activeOpacity : 1}
        style={valueTouchableStyle}
        onPress={this.onValuePress}
        onLongPress={this.onValueLongPress}
        disabled={valueDisabled}
      >
        <View style={valueWrapperStyle}>
          <View style={valueContainerStyle}>
            {/* TODO: Had to change IMuxTextProps Children property to include any so the JSX can be added */}
            <MuxText
              align={valueTextAlign}
              bold
              color={valueTextColor}
              numberOfLines={numberOfLines}
              size={valueTextSize}
            >
              {prevValue}
              {prevValue && " "}
              {prevValue && <Icon name="next" size={scale(14)} color={Colors.amber} />}
              {prevValue && " "}
              {value}
            </MuxText>
          </View>
          {valueIcon && <Icon color={valueIconColor} name={valueIcon} size={valueIconSize ?? iconSize} />}
        </View>
      </TouchableOpacity>
    );

    const loadingIndicator = (
      <View style={stylesheet.loadingWrapper}>
        <LoadingOverlay size={iconSize} />
      </View>
    );

    const panelStyle = [stylesheet.panel, style] as ViewStyle;

    return (
      <Panel
        componentId={componentId ?? label}
        disableBorders={disableBorders}
        disableBorderRadius={disableBorderRadius}
        noMarginTop={noMarginTop}
        style={panelStyle}
      >
        <TouchableOpacity
          activeOpacity={onLabelPress ? activeOpacity : 1}
          style={labelTouchableStyle}
          disabled={labelDisabled}
          onPress={this.onLabelPress}
          onLongPress={this.onLabelLongPress}
        >
          {labelIcon && (
            <TouchableOpacity
              style={stylesheet.labelIconWrapper}
              activeOpacity={onLabelIconPress ? activeOpacity : 1}
              onPress={onLabelIconPress ?? this.onLabelPress}
            >
              <Icon color={labelIconColor} name={labelIcon} size={labelIconSize ?? iconSize} />
            </TouchableOpacity>
          )}
          <MuxText
            style={stylesheet.label}
            align="right"
            bold={labelTextBold}
            color={labelTextColor}
            numberOfLines={2}
            size={labelTextSize}
          >
            {label.toUpperCase()}
          </MuxText>
        </TouchableOpacity>
        {isLoading ? loadingIndicator : valueContainer}
      </Panel>
    );
  }
}

interface IStyles {
  label: TextStyle;
  labelIconWrapper: ViewStyle;
  labelWrapper: ViewStyle;
  labelContentAlignLeft: ViewStyle;
  labelContentAlignSpaceBetween: ViewStyle;
  loadingWrapper: ViewStyle;
  panel: ViewStyle;
  touchable: ViewStyle;
  valueContainer: ViewStyle;
  paddingVertical: ViewStyle;
  valueWrapper: ViewStyle;
  disabled: ViewStyle;
}

const stylesheet: IStyles = {
  label: {
    flex: 1
  },
  labelIconWrapper: {
    marginRight: scale(5)
  },
  labelWrapper: {
    alignItems: "center",
    backgroundColor: Colors.grayIron,
    borderBottomLeftRadius: borderRadius,
    borderTopLeftRadius: borderRadius,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: defaultTextIndent,
    width: "40%"
  },
  labelContentAlignLeft: {
    justifyContent: "flex-start"
  },
  labelContentAlignSpaceBetween: {
    justifyContent: "space-between"
  },
  loadingWrapper: {
    height: sectionMinHeight,
    flex: 1
  },
  panel: {
    alignItems: "stretch",
    flexDirection: "row",
    minHeight: sectionMinHeight
  },
  touchable: {
    height: sectionMinHeight,
    backgroundColor: Colors.white,
    borderBottomRightRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    width: "60%",
    alignItems: "center",
    flexDirection: "row"
  },
  valueContainer: {
    flex: 1,
    paddingRight: defaultTextIndent
  },
  paddingVertical: {
    paddingVertical: defaultTextIndent
  },
  valueWrapper: {
    alignItems: "center",
    borderBottomRightRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: defaultTextIndent
  },
  disabled: {
    opacity: 0.5,
    backgroundColor: Colors.grayIron
  }
};

export { LabelPanel, ILabelPanelProps };
