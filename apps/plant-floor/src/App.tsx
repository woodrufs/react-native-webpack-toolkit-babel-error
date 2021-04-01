// eslint-disable-next-line import/no-unassigned-import
import "react-native-gesture-handler";
import * as React from "react";
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Config from "react-native-config";
// import { WelcomeApplet } from "./Applets/Welcome";
// import { Home } from "./Home";
import { IWelcomeAppletProps, PlexEnvironment, WelcomeApplet } from "./Applets/Welcome";

// type AuthorizedRootStackParamList = {
//   MainMenu: undefined;
// };

type UnauthorizedRootStackParamList = {
  Welcome: IWelcomeAppletProps;
};

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  const UnauthorizedStack = createStackNavigator<UnauthorizedRootStackParamList>();
  // const AuthorizedStack = createStackNavigator<AuthorizedRootStackParamList>();

  return (
    <NavigationContainer>
      <UnauthorizedStack.Navigator initialRouteName="Welcome">
        <UnauthorizedStack.Screen
          name="Welcome"
          component={WelcomeApplet}
          options={{ header: () => null }}
          initialParams={{ environment: Config.ENVIRONMENT as PlexEnvironment }}
        />
      </UnauthorizedStack.Navigator>
    </NavigationContainer>
  );
};

export { UnauthorizedRootStackParamList };
export default App;
