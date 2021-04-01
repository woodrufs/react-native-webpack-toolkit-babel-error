const componentTypes = {
  Button: "button",
  Checkbox: "checkbox",
  IconButton: "iconButton",
  Input: "input",
  List: "list",
  ListItem: "listItem",
  LoadingIndicator: "loadingIndicator",
  MenuItem: "menuItem",
  None: undefined,
  Screen: "screen",
  Text: "text",
  ToggleButton: "toggleButton",
  Icon: "icon",
  StatusIndicator: "statusIndicator",
  Toast: "toast",
  Table: "table",
  Dialog: "dialog",
  SearchPicker: "searchPicker",
  Drawer: "drawer",
  // Panel
  Panel: "panel",
  PanelLeftIcon: "panelLeftIcon",
  PanelContent: "panelContent",
  SearchInputPanel: "searchInputPanel",
  ExpandedContent: "expandedContent",
  // LabelPanel
  LabelPanelContainer: "labelPanelContainer",
  LabelPanelIcon: "labelPanelIcon",
  LabelPanelValueContainer: "labelPanelValueContainer",
  // Navigation
  Header: "header",
  Footer: "footer"
};
type typesType = typeof componentTypes;

export type ComponentTypes = keyof typesType | string;

export default componentTypes;
