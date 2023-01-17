import { Typography, Container } from "@material-ui/core";
import React from "react";

export default function Footer(){
    return(
       <Container>
        <Typography variant="h5">
            CONTÁCTANOS
        </Typography>
        <Typography variant="h6">
        Diagonal 52b sur #53-89 | Barrio Venecia
        </Typography>
        <Typography variant="h6">
        MADERA&BAMBOO@GMAIL.COM
        </Typography>
        <Typography variant="h6">
        +57 305 869 63 61
        </Typography>
        <Typography variant="h7">
        ©2023 MADERA & BAMBOO
        </Typography>
       </Container>
    )
}