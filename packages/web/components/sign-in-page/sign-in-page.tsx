import { containerClassName } from "./sign-in-page.styles";
import { ComponentProps } from "react";

export type SignInPagePropsType = ComponentProps<"div">;

export const SignInPage = ({ children, ...restProps }: SignInPagePropsType) => {
  return <div className={containerClassName} {...restProps}></div>;
};
