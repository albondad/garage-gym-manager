import {
  brandClassName,
  containerClassName,
  linksClassName,
  linkClassName,
  brandDefaultTextClassName,
  brandRedTextClassName,
} from "./navigation-bar.styles";
import { ComponentProps } from "react";

export type NavigationBarPropsType = ComponentProps<"div">;

export const NavigationBar = ({
  children,
  ...restProps
}: NavigationBarPropsType) => {
  return (
    <div className={containerClassName} {...restProps}>
      <div className={brandClassName}>
        <span className={brandRedTextClassName}>{"AL'S"}</span>
        <span className={brandDefaultTextClassName}> GYM</span>
      </div>
      <div className={linksClassName}>
        <a className={linkClassName}>Home</a>
        <a className={linkClassName}>Login</a>
      </div>
    </div>
  );
};
