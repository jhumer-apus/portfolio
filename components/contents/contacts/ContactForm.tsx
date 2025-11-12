import { cn } from "@/lib/utils";
import { contactSchema } from "@/lib/validation/contact-scheme";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik, FormikHelpers, FormikValues } from "formik";
import { useTransition } from "react";
import { toast } from "react-toastify";

interface Values {
    email: string;
    name: string;
    message: string;
}

export default function ContactForm() {

    const [isPending, startTransition] = useTransition()

    const initialValues: Values = { 
        email: "", 
        name: "", 
        message: ""
    };

    const onSubmit = async (values: Values) => {
        startTransition(async() => {
            await axios.post("/api/mail", values)
                .then(() => {
                    toast.success("Your message was successfully sent to Mr.Handsome 😎")
                })
                .catch((err) => {
                    const error = err?.response?.data?.error
                    if(error) {
                        toast.error(error + " 😞")
                    } else {
                        toast.error("Something went wrong on the form, please use the contact details 😢")
                    }
   
                })
        })

    };

    return(
        <div className="min-w-[300px] md:w-[500px] border-2 border-purple-200/30 bg-purple-900/40 rounded-xl p-8">
            <Formik 
                initialValues={initialValues} 
                onSubmit={onSubmit}
                validationSchema={contactSchema}
                noValidate
            >
                {({ isSubmitting, touched, errors }) => (
                    <Form className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-lg">Email:</label>
                            <Field 
                                id="email" 
                                name="email" 
                                className="w-full border-1 border-slate-400/50 text-lg text-slate-300 rounded-lg px-4 py-1 focus:outline-none bg-slate-900/50 cursor-target" 
                                placeholder="Your Email..."
                            />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-lg">Name:</label>
                            <Field 
                                id="name" 
                                name="name" 
                                type="text" 
                                className="w-full border-1 border-slate-400/50 text-lg text-slate-3000 rounded-lg px-4 py-1 focus:outline-none bg-slate-900/50 cursor-target" 
                                placeholder="Your Name..."
                            />
                            <ErrorMessage name="name" component="div" className="error" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-lg">Message:</label>
                            <Field 
                                id="message" 
                                name="message" 
                                type="textarea" 
                                className="w-full border-1 border-slate-400/50 text-lg text-slate-3000 rounded-lg px-4 py-1 focus:outline-none bg-slate-900/50 cursor-target" 
                                placeholder="Message..."
                                as="textarea"
                                rows={5}
                            />
                            <ErrorMessage name="message" component="div" className="error" />
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={isPending || isSubmitting}
                                className={cn(
                                    "border border-slate-100/20 bg-purple-400/20 py-2 px-6 w-fit rounded-lg transition-colors duration-200",
                                    !isPending && !isSubmitting
                                        ? "cursor-pointer hover:bg-purple-800/50 active:bg-purple-700/50"
                                        : "cursor-not-allowed opacity-50"
                                )}
                                >
                                Submit
                            </button>

                        </div>
      
                    </Form>
                )}
            </Formik>
        </div>
    )
}