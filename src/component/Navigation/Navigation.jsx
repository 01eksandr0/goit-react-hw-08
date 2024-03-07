import { Link, NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/auth/selectors";

const Navigation = () => {
  const { isLoggedIn, user } = useSelector(selectAuth);
  const dinamicStyle = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div className={css.nav}>
      <nav>
        <ul className={css.navList}>
          <li>
            <NavLink to="/" className={dinamicStyle}>
              Home
            </NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <NavLink to="/contacts" className={dinamicStyle}>
                Contacts
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
      <ul className={css.list}>
        {!isLoggedIn && (
          <li>
            <NavLink to="/register" className={dinamicStyle}>
              Register
            </NavLink>
          </li>
        )}
        {!isLoggedIn && (
          <li>
            <NavLink to="/login" className={dinamicStyle}>
              Login
            </NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <p className={css.text}>Welcome, {user.name}</p>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button className={css.btnLogout}>Logout</button>
          </li>
        )}
      </ul>
    </div>
  );
};
export default Navigation;
