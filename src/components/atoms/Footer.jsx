import { Typography, Container } from "@material-ui/core";
import { width } from "@mui/system";
import React from "react";

export default function Footer(){
    return(
       <Container style={{
        background:"#311815", 
        color:"#FFFFFF",
        textAlign:"center",
        width:"100%",
        paddingTop:"20px",
        paddingBottom:"10px"}}>

        <Typography style={{
            fontSize:"25px",
            margin:"10px"
        }}>
            CONTÁCTANOS
        </Typography>
        <Typography>
        Diagonal 52b sur #53-89 | Barrio Venecia
        </Typography>
        <Typography>
        MADERA&BAMBOO@GMAIL.COM
        </Typography>
        <Typography>
        +57 305 869 63 61
        </Typography>
        <Typography style={{
            fontSize:"10px",
            marginTop:"12px"
        }}>
        ©2023 MADERA & BAMBOO
        </Typography>
       </Container>
    )
}