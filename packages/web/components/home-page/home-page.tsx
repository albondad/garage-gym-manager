import { Button } from "..";
import {
  buttonClassName,
  containerClassName,
  headingClassName,
} from "./home-page.styles";
import { ComponentProps } from "react";

export type HomePagePropsType = ComponentProps<"div">;

export const HomePage = ({ children, ...restProps }: HomePagePropsType) => {
  return (
    <div className={containerClassName} {...restProps}>
      <h1 className={headingClassName}>LIVE. TRAIN. REPEAT.</h1>
      <Button className={buttonClassName}>Get Started</Button>
    </div>
  );
};
