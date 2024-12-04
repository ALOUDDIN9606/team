import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import Service from "../pages/service/Service";
import NotFound from "../pages/not-found/NotFound";
import Login from "../pages/login/Login";
import Company from "../pages/company/Company";
import Career from "../pages/career/Career";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact_us/Contact";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/company" element={<Company />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;





