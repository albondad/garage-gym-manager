import * as yup from "yup";

export const signInFormikValidationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
