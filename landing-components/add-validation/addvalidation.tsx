import * as Yup from "yup";

import { variables } from "./variable";

const { required, IsEmail, IsUrl } = variables;

export const addvalidation = Yup.object({
  firstName: Yup.string()
    .required(required)
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  lastName: Yup.string()
    .required(required)
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  email: Yup.string().required(required).email(IsEmail),
  password: Yup.string().required(required),
  city: Yup.string().required(required),
  instagramUser: Yup.string().required(required),
  companyName: Yup.string().required(required),
  brandWebsite: Yup.string().required(required).url(IsUrl),
});
