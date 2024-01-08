'use client'
import Link from "next/link";
import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Stack,
  Button,
  ButtonGroup,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const Nav = async () => {
  const session = await getServerSession(options);

  console.log(session)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            All Out Organic
          </Typography>

          <ButtonGroup variant="text">
            <Button sx={{ color: "white" }} href="/">Home</Button>
            <Button sx={{ color: "white" }} href="/CreateUser">Create User</Button>
            <Button sx={{ color: "white" }} href="/ClientMember">Client Member</Button>
            <Button sx={{ color: "white" }} href="/Member">Member</Button>
            <Button sx={{ color: "white" }} href="/Public">Public</Button>

            {session ? (
              <Button sx={{ color: "white" }} href="/api/auth/signout?callbackUrl=/">Logout</Button>
            ) : (
              <Button sx={{ color: "white" }} href="/api/auth/signin?callbackUrl=/">Login</Button>
            )}
          </ButtonGroup>
          {session ? (
               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
               {"Session: " + session.user.name }
             </Typography>
            ) : (
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              No Session
            </Typography>
            )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
