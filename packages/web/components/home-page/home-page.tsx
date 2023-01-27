import { Button } from "..";
import {
  buttonClassName,
  containerClassName,
  headingClassName,
} from "./home-page.styles";
import { ComponentProps } from "react";
import { useRouter } from "next/router";

export type HomePagePropsType = ComponentProps<"div">;

export const HomePage = ({ children, ...restProps }: HomePagePropsType) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/sign-in");
  };

  return (
    <div className={containerClassName} {...restProps}>
      <h1 className={headingClassName}>LIVE. TRAIN. REPEAT.</h1>
      <Button className={buttonClassName} onClick={handleButtonClick}>
        Get Started
      </Button>
    </div>
  );
};
