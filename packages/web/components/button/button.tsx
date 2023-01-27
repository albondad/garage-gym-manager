import { buttonClassName } from "./button.styles";
import { ComponentProps } from "react";
import { cx } from "@emotion/css";

export type ButtonPropsType = ComponentProps<"button">;

export const Button = ({ className = "", ...restProps }: ButtonPropsType) => {
  const buttonClassNames = cx({
    [buttonClassName]: true,
    [className]: !!className,
  });

  return <button className={buttonClassNames} {...restProps} />;
};
