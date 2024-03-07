import { Route, Routes } from "react-router-dom";
import "../../src/index.css";
import Loader from "./Loader/Loader";
import { Suspense, lazy, useEffect } from "react";
import Layout from "./Layout/Layout";
import { RestrictedRoute } from "./RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../redux/auth/selectors";
import { refreshUser } from "../redux/auth/operations";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

const App = () => {
  const { isRefreshing } = useSelector(selectAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />}></Route>
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<ContactsPage />}
                  />
                }
              ></Route>
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<RegisterPage />}
                  />
                }
              ></Route>
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<LoginPage />}
                  />
                }
              ></Route>
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
};
export default App;
