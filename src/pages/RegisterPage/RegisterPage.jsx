import React from "react";
import RegisterForm from "../../component/RegisterForm/RegisterForm";
import css from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div className={css.container}>
      <RegisterForm />
    </div>
  );
};
export default RegisterPage;
