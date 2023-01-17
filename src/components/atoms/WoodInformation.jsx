import React from "react";
import { Container, Typography } from "@material-ui/core";
import CatalogButton from "./CatalogButton";
import mosaico from "../../assets/img/mosaico.jpg";

export default function WoodInformation() {
  return (
    <Container>
      <img 
      src={mosaico} 
      alt="wood information" 
      />
      <Typography variant="h6">
        asdfghjklñpoiuytrewqzxcvbnmkuytrewasfghjklkjnbvcxdfgthjkmnb
      </Typography>
      <CatalogButton />
    </Container>
  );
}
