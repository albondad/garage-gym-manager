import {
  brandClassName,
  containerClassName,
  linksClassName,
  linkClassName,
  brandDefaultTextClassName,
  brandRedTextClassName,
} from "./navigation-bar.styles";
import { ComponentProps } from "react";
import { useRouter } from "next/router";

export type NavigationBarPropsType = ComponentProps<"div">;

export const NavigationBar = ({
  children,
  ...restProps
}: NavigationBarPropsType) => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/home");
  };

  const handleSignInClick = () => {
    router.push("/sign-in");
  };

  return (
    <div className={containerClassName} {...restProps}>
      <div className={brandClassName}>
        <span className={brandRedTextClassName}>{"AL'S"}</span>
        <span className={brandDefaultTextClassName}> GYM</span>
      </div>
      <div className={linksClassName}>
        <a className={linkClassName} onClick={handleHomeClick}>
          Home
        </a>
        <a className={linkClassName} onClick={handleSignInClick}>
          Sign In
        </a>
      </div>
    </div>
  );
};
