import React from "react";
import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";

const Contact = ({ contact: { name, phone, id } }) => {
  const dispatch = useDispatch();
  const deleteContacts = () => dispatch(deleteContact(id));
  return (
    <div className={css.container} id={id}>
      <ul className={css.list}>
        <li>
          <FaUser height={10} width={10} />
          {name}
        </li>
        <li>
          <FaPhone />
          {phone}
        </li>
      </ul>
      <button type="button" onClick={deleteContacts}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
