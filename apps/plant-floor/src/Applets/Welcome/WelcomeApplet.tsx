// TODO: inspect these disabled rules
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from "react";
import { View, Image, ImageStyle, ViewStyle, ImageURISource } from "react-native";
import { authorize } from "react-native-app-auth";
import { Button, styles, helpers } from "@strmbrkr/components";
import { StackScreenProps } from "@react-navigation/stack";
import Config from "react-native-config";

import { UnauthorizedRootStackParamList } from "../../App";

const { Colors } = styles;
const { scale } = helpers;

export type PlexEnvironment = "dev" | "test" | "prod";

interface IWelcomeAppletProps {
  environment: PlexEnvironment;
}

const getEnvColor = (env: PlexEnvironment) => {
  switch (env) {
    case "dev":
      return Colors.devGreen;
    case "test":
      return Colors.testOrange;
    case "prod":
      return Colors.blueMedium;
    default:
      return Colors.black;
  }
};

const getEnvImagePaths = (env: PlexEnvironment) => {
  let backgroundPath: ImageURISource;
  let logoPath: ImageURISource;
  switch (env) {
    case "dev":
      logoPath = require("./assets/logo_dev.png") as ImageURISource;
      backgroundPath = require("./assets/background_dev.png") as ImageURISource;
      break;
    case "test":
      logoPath = require("./assets/logo_test.png") as ImageURISource;
      backgroundPath = require("./assets/background_test.png") as ImageURISource;
      break;
    case "prod":
      logoPath = require("./assets/logo_prod.png") as ImageURISource;
      backgroundPath = require("./assets/background_prod.png") as ImageURISource;
      break;
    default:
      // TODO: If we dont get what we want, resolve a better way
      logoPath = require("./assets/logo_prod.png") as ImageURISource;
      backgroundPath = require("./assets/background_prod.png") as ImageURISource;
      break;
  }

  return {
    logo: logoPath,
    background: backgroundPath
  };
};

type ComponentProps = StackScreenProps<UnauthorizedRootStackParamList, "Welcome">;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const WelcomeApplet = ({ navigation, route }: ComponentProps) => {
  const loginPressed = () => {
    console.log("login pressed");
  };
  const env = route.params.environment;
  const containerStyles = [stylesheet.container, { backgroundColor: getEnvColor(env) }];
  const { logo, background } = getEnvImagePaths(env);
  return (
    <View style={containerStyles}>
      <Image source={background} style={stylesheet.background} resizeMode="cover" />
      <View style={stylesheet.contentWrapper}>
        <Image source={logo} style={stylesheet.logo} resizeMode="contain" />
        <Button
          icon="user"
          title={`Log In to ${Config.ENVIRONMENT}`}
          onPress={loginPressed}
          style={stylesheet.button}
          iconColor={Colors.blue}
          titleColor={Colors.blue}
          underlayColor={Colors.grayAlto}
        />
      </View>
    </View>
  );
};

interface IStyles {
  container: ViewStyle;
  background: ImageStyle;
  contentWrapper: ViewStyle;
  logo: ImageStyle;
  button: ViewStyle;
}
const stylesheet: IStyles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0
  },
  background: {
    position: "absolute",
    width: "150%",
    height: "150%"
  },
  contentWrapper: {
    width: "80%",
    maxWidth: scale(280),
    height: "55%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: scale(50)
  },
  logo: {
    width: "100%"
  },
  button: {
    backgroundColor: Colors.white,
    width: "100%",
    height: scale(50)
  }
};

export { WelcomeApplet, IWelcomeAppletProps };
