import * as Yup from "yup";

export const ValidateSchema = Yup.object().shape({
   name: Yup.string().min(3,"Minimum 3 characters required").max(12,"Max length 12").required("Name  is required"),
   phone: Yup.string().min(10,"Min length should be 10").max(10,"Max length should be 10").required("Phone  is required"),
   email: Yup.string().required("Email  is required"),
   password: Yup.string()
   .required("Password is required")
   .min(4,"Password is too short - should be greater than 4"),
});