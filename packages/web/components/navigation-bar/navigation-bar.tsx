import {
  brandClassName,
  containerClassName,
  linksClassName,
  linkClassName,
  brandDefaultTextClassName,
  brandRedTextClassName,
} from "./navigation-bar.styles";
import { ComponentProps, useContext } from "react";
import { useRouter } from "next/router";
import { AuthenticationContext } from "../../contexts";

export type NavigationBarPropsType = ComponentProps<"div">;

export const NavigationBar = ({
  children,
  ...restProps
}: NavigationBarPropsType) => {
  const router = useRouter();
  const authenticationContext = useContext(AuthenticationContext);

  const handleHomeClick = () => {
    router.push("/home");
  };

  const handleSignInClick = () => {
    router.push("/sign-in");
  };

  const handleSignOutClick = () => {
    authenticationContext.signOut();
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
        {!authenticationContext.isAuthenticated && (
          <a className={linkClassName} onClick={handleSignInClick}>
            Sign In
          </a>
        )}
        {authenticationContext.isAuthenticated && (
          <a className={linkClassName} onClick={handleSignOutClick}>
            Sign Out
          </a>
        )}
      </div>
    </div>
  );
};
