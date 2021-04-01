import * as React from "react";
import { TextStyle, View, ViewStyle } from "react-native";
import { MuxText } from "../../MuxText";
import { Icon } from "../../Icon";
import { scale } from "../../helpers";
import { Colors, borderRadius, sectionMinHeight } from "../../styles";

interface IBalanceStatusProps {
  componentId?: string;
  balance?: number;
  negativeBalanceColor?: string;
  positiveBalanceColor?: string;
  zeroBalanceColor?: string;
  style?: ViewStyle;
}

const BalanceStatus: React.FC<IBalanceStatusProps> = ({
  balance = 0,
  negativeBalanceColor,
  positiveBalanceColor,
  zeroBalanceColor,
  style
}: IBalanceStatusProps) => {
  const isZeroBalance = balance === 0;

  let backgroundColor = negativeBalanceColor ?? Colors.red;
  if (isZeroBalance) {
    backgroundColor = zeroBalanceColor ?? Colors.green;
  }
  if (balance > 0) {
    backgroundColor = positiveBalanceColor ?? Colors.testOrange;
  }

  const backgroundColorStyle = {
    backgroundColor
  };

  return (
    <View style={[styles.container, backgroundColorStyle, style]}>
      <View style={styles.contentContainer}>
        {isZeroBalance && <Icon name="check" style={styles.iconStyle} />}
        {!isZeroBalance && <MuxText style={styles.text}>{(balance > 0 ? "+" : "") + balance.toString()}</MuxText>}
      </View>
    </View>
  );
};

interface IStyles {
  container: ViewStyle;
  contentContainer: ViewStyle;
  iconStyle: TextStyle;
  text: TextStyle;
}

const styles: IStyles = {
  container: {
    minWidth: scale(130),
    minHeight: sectionMinHeight,
    borderRadius
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: Colors.white,
    fontSize: scale(25),
    fontWeight: "bold"
  },
  iconStyle: {
    marginLeft: scale(8),
    color: Colors.white,
    fontSize: scale(18)
  }
};
export { BalanceStatus, IBalanceStatusProps };
