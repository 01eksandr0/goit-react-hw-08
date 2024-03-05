import React from "react";
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/operations";
const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const dispach = useDispatch();
  const handleSubmit = (values, actions) => {
    const user = { name: values.name, phone: values.number };
    dispach(addContact(user));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.inputContainer}>
          <label className={css.label}>
            Name
            <Field className={css.input} type="text" name="name" />
          </label>
          <ErrorMessage name="name" as="span" />
        </div>
        <div className={css.inputContainer}>
          <label className={css.label}>
            Number
            <Field className={css.input} type="text" name="number" />
          </label>
          <ErrorMessage name="number" as="span" />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
