import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import css from "./RegisterForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.inputContainer}>
          <label className={css.label}>
            Name
            <Field className={css.input} name="name" type="text" />
          </label>
          <ErrorMessage name="name" as="span" />
        </div>
        <div className={css.inputContainer}>
          <label className={css.label}>
            Email
            <Field className={css.input} name="email" type="text" />
          </label>
          <ErrorMessage name="email" as="span" />
        </div>
        <div className={css.inputContainer}>
          <label className={css.label}>
            Password
            <Field className={css.input} name="password" type="text" />
          </label>
          <ErrorMessage name="password" as="span" />
        </div>
        <button className={css.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};
export default RegisterForm;
