import React from "react";
import CatalogGrid from "../organism/CatalogGrid";
import Navbar from '../atoms/Navbar'
import Footer from '../atoms/Footer'

export default function Catalogue(){
    return(
        <>
        <Navbar />
        <CatalogGrid />
        <Footer />
        </>
    )
}