import { ComponentProps } from "react";
import { cx } from "@emotion/css";
import { inputClassName } from "./input.styles";

export type InputPropsType = ComponentProps<"input">;

export const Input = ({ className = "", ...restProps }: InputPropsType) => {
  const inputClassNames = cx({
    [className]: !!className,
    [inputClassName]: true,
  });

  return <input className={inputClassNames} {...restProps} />;
};
