import { ShoppingCartRounded } from "@material-ui/icons";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { productsReducer } from "../../reducer/productsReducer";
import { useProducts } from "../../reducer/useProducts";

export const ShoppingCarModal = () => {
  const [shopingCarOpen, setShopingCarOpen] = useState(false);

  const handleOpenCar = () => {
    setShopingCarOpen(true);
  };

  const handleCloseCar = () => {
    setShopingCarOpen(false);
  };

  const { products } = useProducts();
  console.log("🚀 ~ products", products)

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
          {products}
        </Box>
      </Modal>
    </>
  );
};
