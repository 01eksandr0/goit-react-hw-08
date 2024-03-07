import { Link, NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

const Navigation = () => {
  const { isLoggedIn, user } = useSelector(selectAuth);
  const dispatch = useDispatch();
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
            <button
              onClick={() => dispatch(logOut())}
              className={css.btnLogout}
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};
export default Navigation;
