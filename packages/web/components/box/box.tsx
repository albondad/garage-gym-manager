import React, { ComponentProps } from "react";
import { boxClassName } from "./box-styled";

export type ButtonProps = ComponentProps<"div">;

export const Box = ({ ...restProsp }) => {
  return <div className={boxClassName} {...restProsp} />;
};
