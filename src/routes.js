import React from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication/Authentication";
import SignIn from "./pages/Authentication/component/SignIn";
import SignUp from "./pages/Authentication/component/SignUp";
import Home from "./pages/Home-page";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Authentication />}>
        <Route index element={<SignUp />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
