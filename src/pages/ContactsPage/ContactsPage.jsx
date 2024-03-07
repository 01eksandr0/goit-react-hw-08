import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContactList from "../../component/ContactList/ContactList";
import SearchBox from "../../component/SearchBox/SearchBox";
import ContactForm from "../../component/ContactForm/ContactForm";
import { fetchContacts } from "../../redux/operations";
import { selectFilterContacts } from "../../redux/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectFilterContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1 style={{ margin: 20 }}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error ? <p>{error}</p> : <ContactList />}
      {isLoading && <Loader />}
    </div>
  );
};
export default ContactsPage;
