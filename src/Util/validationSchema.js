import * as Yup from 'yup';
export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Enter an invalid email address')
        .required('This feild is Required'),
    password: Yup.string()
        .required('This feild is Required')
        // to Make Complex Custom validation use .matches() 
        .matches(/[0-9]/, "Please enter at least 1 number")
        .matches(/[a-z]/, "Please enter at least 1 lowercase character")
        .matches(/[A-Z]/, "Please enter at least 1 uppercase character")
        // This regex[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?] is include all spcial characters on keyboard
        .matches(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, "Please enter at least 1 special character")
});

export const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(10, 'Your firstName is too short! enter minimum 10 character')
        .max(30, 'Your firstName is too long! enter maximum 30 character')
        .required('This field is Required'),
    lastName: Yup.string()
        .min(10, 'Your lastName is too short! enter minimum 10 character')
        .max(30, 'Your lastName is too long! enter maximum 30 character')
        .required('This field is Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('This field is Required'),
    password: Yup.string()
        .min(8, "Your password is too short! enter minimum 8 character")
        .required('This feild is Required')
        // to Make Complex Custom validation use .matches() 
        .matches(/[0-9]/, "Please enter at least 1 number")
        .matches(/[a-z]/, "Please enter at least 1 lowercase character")
        .matches(/[A-Z]/, "Please enter at least 1 uppercase character")
        // This regex[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?] is include all spcial characters on keyboard
        .matches(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, "Please enter at least 1 special character"),
    confirmPassword: Yup.string()
        .min(8, "Your password is too short! enter minimum 8 character")
        .required('This feild is Required')
        // to match confirmpassword with password use  .oneOf()
        .oneOf([Yup.ref('password')], "Your confirmed Password dont match your password")
        // to Make Complex Custom validation use .matches() 
        .matches(/[0-9]/, "Please enter at least 1 number")
        .matches(/[a-z]/, "Please enter at least 1 lowercase character")
        .matches(/[A-Z]/, "Please enter at least 1 uppercase character")
        // This regex[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?] is include all spcial characters on keyboard
        .matches(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, "Please enter at least 1 special character")
});