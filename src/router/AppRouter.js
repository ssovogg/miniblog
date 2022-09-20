import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "../pages/Blog/Blog";
import Login from '../pages/Login/Login';

const AppRouter = ({ isLoggedIn }) => (
  <BrowserRouter>
    <Routes>
      {!isLoggedIn ? <Route path="/miniblog" element={<Login />} /> : <Route path="/miniblog" element={<Blog />} />}
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
