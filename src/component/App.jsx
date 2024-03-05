import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/operations";
import { selectContacts } from "../redux/selectors";
import Loader from "./Loader/Loader";

const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1 style={{ margin: 20 }}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error ? <p>{error}</p> : <ContactList />}
      {isLoading && <Loader />}
    </>
  );
};
export default App;
