"use client";
import React, { useState } from "react";
import { Drawer, Button, ButtonGroup, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useSession } from "next-auth/react";
import PersonIcon from "@mui/icons-material/Person";
import SearchMenu from "./SearchMenu";
import Cart from "./Cart";

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { data: session } = useSession({ required: false });
  return (
    <>
      <Drawer
        PaperProps={{
          sx: {
            px: "20px",
            py: "10px",
            width: { xs: "100vw", sm: "66vw", md: "50vw", lg: "33vw" },
          },
        }}
        anchor="left"
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
          <img className="logo3-img" src="/logo.jpg"></img>
        </a>

        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="text"
          sx={{ py: "20px" }}
        >
        
          {session?.user.role == "Admin" ? (
            <Button
              href="/admin/Dashboard"
              sx={{ justifyContent: "left", height: "50px" }}
            >
              Administration
            </Button>
          ) : (
            <></>
          )}

          {session ? (
            <Button
              href="/Dashboard"
              sx={{ justifyContent: "left", height: "50px" }}
            >
              Dashboard
            </Button>
          ) : (
            <></>
          )}
          <Button href="/Blog" sx={{ justifyContent: "left", height: "50px" }}>
            Blog
          </Button>
          <Button href="/Shop" sx={{ justifyContent: "left", height: "50px" }}>
            Shop
          </Button>
          <Button
            href="/Recipes"
            sx={{ justifyContent: "left", height: "50px" }}
          >
            Recipes
          </Button>
          <Button href="/About" sx={{ justifyContent: "left", height: "50px" }}>
            About
          </Button>
          <Button
            href="/Contact"
            sx={{ justifyContent: "left", height: "50px" }}
          >
            Contact
          </Button>
        </ButtonGroup>

        {session ? (
          <Button
            variant="contained"
            size="small"
            href="/api/auth/signout?callbackUrl=/"
          >
            Logout
          </Button>
        ) : (
          <Button
            variant="contained"
            size="small"
            href="/api/auth/signin?callbackUrl=/"
          >
            Login
          </Button>
        )}
      </Drawer>
      <IconButton
        sx={{ color: "primary" }}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <MenuIcon fontSize="large" color="primary" />
      </IconButton>
    </>
  );
};

export default MobileMenu;
