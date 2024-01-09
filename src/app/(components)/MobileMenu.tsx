"use client";
import React, { useState } from "react";
import { Drawer, Button, ButtonGroup, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useSession } from "next-auth/react";

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { data: session } = useSession({ required: false });

  return (
    <>
      <Drawer
        PaperProps={{ sx: { px: "20px", py: "10px", width: "400px" } }}
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
          <img className="logo-img" src="logo2.jpg"></img>
        </a>

        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="text"
          sx={{ py: "20px" }}
        >
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
            variant="outlined"
            size="small"
            href="/api/auth/signout?callbackUrl=/"
          >
            Logout
          </Button>
        ) : (
          <Button
            variant="outlined"
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
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default MobileMenu;
