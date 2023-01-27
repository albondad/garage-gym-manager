import { containerClassName, mainContentClassName } from "./layout.styles";
import { ComponentProps } from "react";
import { NavigationBar } from "..";

export type LayoutPropsType = ComponentProps<"div">;

export const Layout = ({ children, ...restProps }: LayoutPropsType) => {
  return (
    <div className={containerClassName} {...restProps}>
      <NavigationBar />
      <div className={mainContentClassName}>{children}</div>
    </div>
  );
};
