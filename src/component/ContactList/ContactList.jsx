import React from "react";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { selectContacts, selectFilterContacts } from "../../redux/selectors";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector(selectFilterContacts);
  return (
    <ul className={css.list}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
