import {
  buttonContainerClassName,
  containerClassName,
  formClassName,
  headingClassName,
  inputContainerClassName,
  signInPageClassName,
} from "./sign-in-page.styles";
import { Button, FormErrorMessage, Input, Label } from "..";
import { ComponentProps } from "react";
import { signInFormikValidationSchema } from "./sign-in-page.utilities";
import { useFormik } from "formik";

export type SignInPagePropsType = ComponentProps<"div">;

export const SignInPage = ({ children, ...restProps }: SignInPagePropsType) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInFormikValidationSchema,
    onSubmit: () => {},
  });

  return (
    <div className={signInPageClassName} {...restProps}>
      <div className={containerClassName}>
        <h1 className={headingClassName}>Sign In</h1>
        <form className={formClassName} onSubmit={formik.handleSubmit}>
          <div className={inputContainerClassName}>
            <Label>Email *</Label>
            <Input
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </div>
          <div className={inputContainerClassName}>
            <Label>Password *</Label>
            <Input
              name="password"
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
            />
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </div>
          <div className={buttonContainerClassName}>
            <Button type="submit">Sign In</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
