import type { $Keys } from "utility-types";

export const componentIDs = {
  Title: "title",
  Placeholder: "placeholder",
  ScanInput: "scanInput",
  Submit: "submit",
  Home: "home",
  TreeSection: "treeSection",
  Left: "left",
  Right: "right",
  Cancel: "cancel",
  Yes: "yes",
  Required: "required",
  BalanceStatus: "balanceStatus",
  BalanceSummary: "balanceSummary",
  Values: "values"
};

export type ComponentIDs = $Keys<typeof componentIDs> | string;
