import React from "react";
// import { Button } from "@material-ui/core";
import { Link, MenuItem } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import swal from 'sweetalert';

const alert = () => {
    swal("This modal will disappear soon!", {
        buttons: false,
        timer: 2000,
      });
}

 const WathsappButton = ({ text }) => {
  return (
    <Button onClick={alert}
     
     variant="contained" >
    <Link 
      href={"https://api.whatsapp.com/send?phone=573057399225&text=¡Hola!,estoy interesado en los siguientes productos:"}
      component="a"
      sx={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
     Finalizar compra
    </Link>
    </Button>
  );
};
export default WathsappButton;