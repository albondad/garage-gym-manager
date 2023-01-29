import { ComponentProps } from "react";
import { cx } from "@emotion/css";
import { formErrorMessageClassName } from "./form-error-message.styles";

export type FormErrorMessagePropsType = ComponentProps<"div">;

export const FormErrorMessage = ({
  className = "",
  ...restProps
}: FormErrorMessagePropsType) => {
  const formErrorMessageClassNames = cx({
    [className]: !!className,
    [formErrorMessageClassName]: true,
  });

  return <div className={formErrorMessageClassNames} {...restProps} />;
};
