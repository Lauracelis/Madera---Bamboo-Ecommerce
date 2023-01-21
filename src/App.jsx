import React from "react";
import Home from "./components/page/Home";
import { Catalogue } from "./components/page/Catalogue";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Footer from "./components/atoms/Footer";
import { ShoppingCarProvider } from "./context/ShoppingCarProvider";
import { Navbar } from "./components/atoms/Navbar";

export default function App() {
  return (
    <ShoppingCarProvider>
      <Navbar />

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/*" element={<Navigate to="home" />} />
      </Routes>
    </ShoppingCarProvider>
  );
}
