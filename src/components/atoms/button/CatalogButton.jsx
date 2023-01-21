import React, { Component } from "react";
import { Button, Link } from "@material-ui/core";
import { Link as RouterLink, Router } from "react-router-dom";

export default function CatalogButton() {
  return (
    <Button>
      <Link
        to={"/catalogue"}
        component={RouterLink}
        sx={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
       VER CATÁLOGO
      </Link>
      </Button>
  );
}
