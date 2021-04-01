import * as React from "react";

const withValidTableRowParams = <P extends {}>(
  TableRowComponent: React.ComponentClass<P> | React.FunctionComponent<P>
) => {
  return function ValidatedComponent({ ...props }) {
    const { label, value } = props;
    if (!!label && label !== "" && !!value && value !== "") {
      return <TableRowComponent {...(props as P)} />;
    }
    return null;
  };
};
export { withValidTableRowParams };
