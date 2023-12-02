import { validateFormikUsingJoi } from "../../utils/validateFormikUsingJoi";
import Input from "./input";
import PageHeader from "./PageHeader";

import usersService from "../../services/usersService";
import { Navigate, useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import Joi from "joi";
import { useState } from "react";
import { useAuth } from "../../contexts/auth.context";


 const SignUp = ({redirect}) => {
    const [serverError, setServerError] = useState("");
 const navigate = useNavigate();

  const { user, signUp } = useAuth();

    const form = useFormik({
        validateOnMount: true,
        initialValues: {
            email: "",
            name: "",
            password: "",
        },
        validate: validateFormikUsingJoi({
            email: Joi.string()
            .min(2)
            .max(255)
            .required()
            .email({tlds: { allow: false }}),
            name: Joi.string().min(6).max(1024).required(),
            password: Joi.string().min(6).max(1024).required(),
        }),

        async onSubmit(values) {
            try {
              await signUp({...values, biz: false});
              if (redirect) {
                navigate(redirect);
              }
          } catch (err) {
             if(err. response?.status === 400) {
             setServerError(err.response.data);
             }
          }
         },
    });

    if (user) {
        return <Navigate to="/"/>;
    }

    return (
       <>
        <PageHeader title="Sign Up" 
        description="Open a new account for free <3" 
        />

         <form onSubmit={form.handleSubmit}  >
            {serverError && <div className="alert alert-danger">{serverError}</div>}
            
            
            <Input 
            {...form.getFieldProps("name")}
            type="text" 
            label="Name" 
            required  
            error={form.touched.name && form.errors.name}
            />

            <Input 
            {...form.getFieldProps("email")}
            type="email" 
            label="email" 
            required  
            error={form.touched.email && form.errors.email}
           
            />

             <Input 
            {...form.getFieldProps("password")}
            type="text" 
            label="Password" 
            required  
            error={form.touched.password && form.errors.password}
            />



            <div className="my-2">
                <button disabled={!form.isValid} className="btn btn-primary">
                    Sign Up

                </button>
            </div>
        </form>
        </>
    );
};


export default SignUp;