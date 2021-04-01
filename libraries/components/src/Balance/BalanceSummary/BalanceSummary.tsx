import * as React from "react";
import { TextStyle, View, ViewStyle } from "react-native";
import { scale } from "../../helpers";
import { MuxText } from "../../MuxText";
import { Colors, sectionMinHeight } from "../../styles";
import { BalanceStatus, IBalanceStatusProps } from "../BalanceStatus";

interface IBalanceSummaryProps extends IBalanceStatusProps {
  balance?: number;
  requiredValue: number;
  actualValue: number;
  units?: string;
  balanceStatusStyle?: ViewStyle;
}

const BalanceSummary: React.FC<IBalanceSummaryProps> = ({
  componentId,
  balance = 0,
  actualValue,
  requiredValue,
  units,
  balanceStatusStyle,
  ...balanceStatusProps
}: IBalanceSummaryProps) => {
  const actualValueString: string = actualValue.toString();
  const reqValueString: string = requiredValue.toString();
  const actualOverRequiredDisplayValue = `${actualValueString}/${reqValueString}`;
  return (
    <View style={styles.container}>
      <BalanceStatus
        {...balanceStatusProps}
        balance={balance || actualValue - requiredValue}
        style={[styles.balanceStatus, balanceStatusStyle] as ViewStyle}
      />
      <View style={styles.balanceSummary}>
        <MuxText style={styles.valueText}>{`${actualOverRequiredDisplayValue}`}</MuxText>
        {units && <MuxText style={styles.valueText}>{` ${units}`}</MuxText>}
      </View>
    </View>
  );
};

interface IStyles {
  container: ViewStyle;
  balanceStatus: ViewStyle;
  valueText: TextStyle;
  balanceSummary: TextStyle;
}

const styles: IStyles = {
  container: {
    alignSelf: "stretch",
    minHeight: sectionMinHeight,
    flexDirection: "row"
  },
  balanceSummary: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: scale(8),
    backgroundColor: Colors.white
  },
  balanceStatus: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  valueText: {
    fontSize: scale(40),
    fontWeight: "bold"
  }
};

export { BalanceSummary, IBalanceSummaryProps };
