import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.container}>
      <div className={css.textCont}>
        <h2 className={css.title}>Phonebook</h2>
        <p className={css.text}>
          A convenient application for saving contacts.
        </p>
      </div>
    </div>
  );
};
export default HomePage;
