import React from "react";
import Home from "./components/page/Home";
import Catalogue from "./components/page/Catalogue";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/atoms/Footer";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogue" element={<Catalogue />} />
      
    </Routes>
  );
}
