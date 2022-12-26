import * as Yup from "yup";

import { variables } from "./variable";

const { required, IsEmail } = variables;

export const creatorvalidation = Yup.object({
  firstName: Yup.string()
    .required(required)
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  lastName: Yup.string()
    .required(required)
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  email: Yup.string().required(required).email(IsEmail),
  city: Yup.string().required(required),
  instagramUser: Yup.string()
    .required(required)
    .matches(/^[a-zA-Z0-9._-]*$/, "Enter a valid Instagram username")
    .max(30, "can’t be longer than 30 characters"),
});
