import React from "react";
import { Button } from "@mui/material";
import { useProducts } from "../../../reducer/useProducts";

export default function AddToCartButton({ product }) {
  const { products, handleNewProduct } = useProducts();

  const addNewProductToShoppingCar = () => {
    const prod = {
      id: product.id,
      title: product.title,
      price: product.price,
    };
    handleNewProduct(prod);
    console.log("🚀 ~ prod", prod);
  };
  console.log("🚀 ~ products", products);

  return (
    <Button
      variant="contained"
      onClick={addNewProductToShoppingCar}
      sx={{ borderColor: "#A37F56", height: "3rem", border: 2 }}
    >
      {" "}
      AÑADIR AL CARRITO
    </Button>
  );
}
