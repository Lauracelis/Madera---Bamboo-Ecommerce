import React from "react";
// import { Button } from "@material-ui/core";
import { Link, MenuItem } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@material-ui/core";

 const PersonalizationButton = ({ text }) => {
  return (
    <Button >
    <Link 
      href={"https://api.whatsapp.com/send?phone=573057399225&text=¡Hola!,quiero personalizar mi producto."}
      component="a"
      sx={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
     Personalizar
    </Link>
    </Button>
  );
};
export default PersonalizationButton;
// export default function () {
//   return (
//     <Button color="secondary" variant="contained">
//       {" "}
//       PERSONALIZAR
//     </Button>
//   );
// }
