# NavBar

Custom Navigation Bar component that is designed to be used as header prop in StackNavigatorConfig.

## Properties

| Name               | Type     | Default         | Description                                                |
| ------------------ | -------- | --------------- | ---------------------------------------------------------- |
| backButtonIcon     | string   | left-open       | Icon name of back button                                   |
| menuButtonIcon     | string   | menu            | Icon name of menu button                                   |
| backButtonDisabled | boolean  | false           | When NavBackButton is disabled, there will be no Icon and no action will be fired  |
| onBackButtonPress  | function | () => undefined | Callback function fired when the Back Button is touch-tapped |
| onMenuButtonPress  | function | () => undefined | Callback function fired when the Menu Button is touch-tapped |
| title*             | string   |                 | The text of the title in NavBar            |
| titleIcon          | string   | null            | The name of the icon that will be shown in the left of the title                 |
| modeIcon           | string   | null            | The name of the icon that will be show current mode in the right of the NavTitle |

\* required property

### onBackButtonPress()

`function() => void`

Arguments:
* no arguments

### onMenuButtonPress()

`function() => void`

Arguments:
* no arguments

### Example
```
import { Checkbox, Dialog, DialogContent } from './components';

const stackNavigatorConfig = {
  Menu: { screen: Menu, navigationOptions: {
    header: ({ navigation }) => (
      <NavBar
        backButtonDisabled={ navigation.state.routes.length > 1 }
        onBackButtonPress={ () => navigation.goBack() }
        title="Navigation Bar Title"
        titleIcon="home"
        modeIcon="checklist"
        onMenuButtonPress={ () => openMenuButton() }
      />
  }}
};

```
