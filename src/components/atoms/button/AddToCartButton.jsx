import React from "react";
import { Button } from "@mui/material";
import { useProducts } from "../../../reducer/useProducts";

export default function AddToCartButton({ product }) {
  const { handleNewProduct } = useProducts();

  console.log(product);

  const addNewProductToShoppingCar = () => {
    const prod = {
        id: product.id,
        title: product.title,
        price: product.price,
    }
    handleNewProduct(prod)
  };

  return (
    <Button
      variant="contained"
      sx={{ borderColor: "#A37F56", height: "3rem", border: 2 }}
    >
      {" "}
      AÑADIR AL CARRITO
    </Button>
  );
}
