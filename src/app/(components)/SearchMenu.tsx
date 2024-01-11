"use client";
import React, { useState } from "react";
import {
  Drawer,
  Button,
  ButtonGroup,
  TextField,
  IconButton,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import InputAdornment from "@mui/material/InputAdornment";

const SearchMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

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
          <img className="logo-img" src="logo2.jpg"></img>
        </a>

        <TextField
          id="standard-basic"
          label="Search"
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Drawer>
      <IconButton
        sx={{ color: "primary.main" }}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <SearchIcon fontSize="small" color="secondary" />
      </IconButton>
    </>
  );
};

export default SearchMenu;
