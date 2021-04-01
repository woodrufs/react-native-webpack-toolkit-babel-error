import * as React from "react";

export const isReactNode = function (n: unknown): n is React.ReactNode {
  return (n as React.ReactNode) !== undefined;
};
