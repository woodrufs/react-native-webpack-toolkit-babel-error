import * as React from "react";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { ExpandablePanel, Input, LabelPanel, ThreeSectionPanel, styles, helpers } from "@strmbrkr/components";
import { CenterView, FieldContainer } from "../decorators";

const { Colors } = styles;
const { scale } = helpers;

const handleInputOnChangeText = (text: string) => action(`Text: ${text}`)();

storiesOf("ThreeSectionPanel", module)
  .addDecorator((getStory) => (
    <CenterView>
      <FieldContainer>{getStory()}</FieldContainer>
    </CenterView>
  ))
  .add("ThreeSectionPanel with Input", () => (
    <ThreeSectionPanel
      noMarginTop
      header={
        <ExpandablePanel
          noMarginTop
          disableBorders
          label={<Input onChangeText={handleInputOnChangeText} />}
          icon="check"
          color={Colors.white}
          backgroundColor={Colors.green}
          onIconPress={action("Icon is pressed")}
        />
      }
      firstLabel="Masters: "
      firstValue="15"
      secondLabel="LOOSE: "
      secondValue="3"
    />
  ))
  .add("ThreeSectionPanel with LabelPanel", () => (
    <ThreeSectionPanel
      noMarginTop
      header={
        <LabelPanel
          noMarginTop
          disableBorders
          label="Total (24)"
          labelTextSize={scale(18)}
          labelContentAlign="left"
          value="28"
          valueTextSize={scale(42)}
          valueTextAlign="right"
          labelBackgroundColor={Colors.grayDark}
          labelTextColor={Colors.white}
        />
      }
      firstLabel="Masters: "
      firstValue="15"
      secondLabel="LOOSE: "
      secondValue="3"
    />
  ))
  .add("ThreeSectionPanel with container and footer styling", () => {
    const containerStyle = {
      borderColor: Colors.blue
    };

    const footerStyle = {
      borderWidth: scale(1),
      borderColor: Colors.green
    };

    return (
      <ThreeSectionPanel
        noMarginTop
        header={
          <LabelPanel
            noMarginTop
            disableBorders
            label="Total (24)"
            labelTextSize={scale(18)}
            labelContentAlign="left"
            value="28"
            valueTextSize={scale(42)}
            valueTextAlign="right"
            labelBackgroundColor={Colors.grayDark}
            labelTextColor={Colors.white}
          />
        }
        firstLabel="Masters: "
        firstValue="15"
        secondLabel="LOOSE: "
        secondValue="3"
        style={containerStyle}
        footerStyle={footerStyle}
      />
    );
  });
