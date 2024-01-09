"use client";
import React, { useState } from "react";
import {
  Drawer,
  Button,
  ButtonGroup,
  IconButton,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";

const Cart = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Drawer
        PaperProps={{ sx: { px: "20px", py: "10px", width: "400px" } }}
        anchor="right"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
      >
        <IconButton
          sx={{ color: "primary", position: "absolute", right: "15px" }}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <CloseIcon />
        </IconButton>
        <a href="/">
          <img className="logo-img" src="logo2.jpg"></img>
        </a>

        <Typography variant="h6" component="h6" gutterBottom>
          Your Shopping Items
        </Typography>
      </Drawer>
      <IconButton
        sx={{ color: "primary.main" }}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <ShoppingCartIcon />
      </IconButton>
    </>
  );
};

export default Cart;
