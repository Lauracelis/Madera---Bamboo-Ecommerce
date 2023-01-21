import React from "react";
import {Container, Typography} from '@material-ui/core'
import PersonalizationButton from "../atoms/PersonalizationButton";
import personalizar from '../../assets/img/personalizar.jpg'

export default function Personalization(){
    return(
        <Container >
            <Typography variant="h6">
            Nos gusta conocer a nuestros clientes y brindarles nuestro servicio personalizado para que tu hogar hable por ti. Si quieres personalizar algún producto de nuestra tienda o por el contrario un nuevo artefacto, contáctanos!
            </Typography>
            <img style={{width:"100%", marginTop:"10%"}} src={personalizar} />
            <PersonalizationButton />
        </Container>
    )
}