import { Route, Routes } from "react-router-dom";

import routes from "./routes.json";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ProfilePage from "../pages/ProfilePage";

const PageRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={routes.HOME} element={<HomePage />} />
        <Route path={routes.LOGIN} element={<LoginPage />} />
        <Route path={routes.SIGNUP} element={<SignupPage />} />
        <Route path={routes.PROFILE} element={<ProfilePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default PageRoutes;
