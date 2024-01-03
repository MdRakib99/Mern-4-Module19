import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

import ServicePage from "./pages/ServicePage";
import ProjectPage from "./pages/ProjectPage";

import Login from "./pages/Login";
import Register from "./pages/Register";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import WishPage from "./pages/WishPage";
import BlogPage from "./pages/BlogPage";

import ContacePage from "./pages/ContacePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/wish' element={<WishPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/contact' element={<ContacePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/service' element={<ServicePage />} />
        <Route path='/project' element={<ProjectPage />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
