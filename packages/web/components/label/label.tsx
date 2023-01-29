import { ComponentProps } from "react";
import { cx } from "@emotion/css";
import { labelClassName } from "./label.styles";
import React from "react";

export type LabelPropsType = ComponentProps<"label">;

export const Label = ({ className = "", ...restProps }: LabelPropsType) => {
  const labelClassNames = cx({
    [className]: !!className,
    [labelClassName]: true,
  });

  return <label className={labelClassNames} {...restProps} />;
};
