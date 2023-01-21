import { Button, ButtonGroup, CardMedia, Tooltip } from "@material-ui/core";
import { Add, Delete, Remove, ShoppingCartRounded } from "@material-ui/icons";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { productsReducer } from "../../reducer/productsReducer";
import { useProducts } from "../../reducer/useProducts";
import WathsappButton from "../atoms/button/WathsappButton";

export const ShoppingCarModal = () => {
  const [shopingCarOpen, setShopingCarOpen] = useState(false);

  const handleOpenCar = () => {
    setShopingCarOpen(true);
  };

  const handleCloseCar = () => {
    setShopingCarOpen(false);
  };

  const { products } = useProducts();
  console.log("🚀 ~ products", products);

  const prodsLocal = JSON.parse(localStorage.getItem("products")) || [];
  console.log("🚀 ~ prodsLocal", prodsLocal);
  // prodsLocal.map(a => {
  //   (a !== undefined) ? console.log(a.img) : console.log("gg"); 
  // })

  return (
    <>
      <IconButton onClick={handleOpenCar}>
        <ShoppingCartRounded />
      </IconButton>
      <Modal
        open={shopingCarOpen}
        onClose={handleCloseCar}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box>
          {prodsLocal.map((prod) => (
            <>
            <CardMedia key={prod.id}
              component="img"
              sx={{ width: 25 }}
              image={prod.img}
            />
            <Typography >{prod.title}</Typography>
            <Typography>{prod.price}</Typography>
            <Tooltip title="Delete">
              <IconButton>
                <Delete />
              </IconButton>
            </Tooltip>
            <Tooltip describeChild title="Agregar un nuevo producto">
              <Button>Add</Button>
            </Tooltip>
            <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <Remove fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <Add fontSize="small" />
          </Button>
        </ButtonGroup>
            <WathsappButton />
            </>
              
            ))}
          </Box>
        </Box>
      </Modal>
    </>
  );
};
