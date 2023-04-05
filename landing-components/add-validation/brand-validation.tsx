import * as Yup from "yup";

import { variables } from "./variable";

const { required, IsEmail } = variables;

export const brandvalidation = Yup.object({
  firstName: Yup.string()
    .required(required)
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  lastName: Yup.string()
    .required(required)
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  email: Yup.string().required(required).email(IsEmail),
  companyName: Yup.string().required(required),
  brandWebsite: Yup.string()
    .required(required)
    .matches(
      /(.com)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter Valid Url!",
    ),
});
