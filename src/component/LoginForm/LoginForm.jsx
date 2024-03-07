import React from "react";
import css from "./LoginForm.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
const FeedbackSchema = Yup.object().shape({
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
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
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
