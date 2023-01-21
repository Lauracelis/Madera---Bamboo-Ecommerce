import React from "react";
import CatalogGrid from "../organism/CatalogGrid";
import { Navbar } from "../atoms/Navbar";
import Footer from "../atoms/Footer";
import { ProductCard } from "../molecules/ProductCard";

export function Catalogue() {
  return (
    <>
      {/* <CatalogGrid />  */}

      <ProductCard />
      <Footer />
    </>
  );
}
