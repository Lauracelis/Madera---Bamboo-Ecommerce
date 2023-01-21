import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import CatalogButton from "./button/CatalogButton";
import mosaico from "../../assets/img/mosaico.jpg";


export default function WoodInformation() {
  return (
    <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center" , padding:"20px"}}>
      <img 
      src={mosaico} 
      alt="wood information" 
      style={{width:"100%", marginTop:"10%"}}
      />
      <Typography>
        asdfghjkl ñpoiuy trew qzx cvb nmku ytrewasfg hjklkjnb vcxd fgthjkm nb
      </Typography>
      <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center" ,marginBottom:"20px"}}>
      <CatalogButton />
      </Box>
    </Box>
    
   
  );
}
