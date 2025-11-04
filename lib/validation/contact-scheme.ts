import * as Yup from "yup";

export const contactSchema = Yup.object({
    email: Yup.string().email("Enter a valid email").required("Email is required"),
    name: Yup.string().required("Name is required"),
    message: Yup.string().required("Message is required"),
});