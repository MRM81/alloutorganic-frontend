"use client";
import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Stack } from "@mui/material";
import { Button, IconButton, Grid, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SearchMenu from "./SearchMenu";
import MobileMenu from "./MobileMenu";
import Cart from "./Cart";
import { signIn, signOut, useSession, getSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession({ required: false });

  const [isAdmin, setIsAdmin] = useState(false);

  getSession().then((res) => {
    setIsAdmin(res?.user.role == "Admin");
  });

  switch (isAdmin) {
    case true:
      return <Admin />;

    case false:
      return <Client />;
  }

  function Admin() {
    return (
      <Box position="fixed" top="10px" pl="40px">
        <MobileMenu />
      </Box>
    );
  }

  function Client() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Stack
            direction="row"
            bgcolor={"primary.main"}
            height="30px"
            alignItems="center"
            justifyContent="space-between"
            p="0px 10px"
          >
            <SearchMenu />

            {session ? (
              <Typography variant="body2" component="p" color="secondary">
                {session.user.role}
              </Typography>
            ) : (
              <></>
            )}

            <Stack direction="row">
              <IconButton
                size="small"
                edge="end"
                color="secondary"
                aria-label="menu"
                href="/Dashboard"
              >
                <PersonIcon fontSize="small" />
              </IconButton>

              <Cart />
            </Stack>
          </Stack>

          <Toolbar
            sx={{
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              boxShadow: "2px 2px 20px #F9F9F9",
            }}
          >
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid
                container
                justifyContent={"center"}
                alignItems="center"
                width="100vw"
                sx={{ px: { xs: "20px", md: "70px" } }}
              >
                <a href="/">
                  <img
                    className="logo-img"
                    src="/logo3.jpg"
                    alt="Logo image"
                  ></img>
                </a>
              </Grid>
              <Box sx={{ display: { xs: "block", sm: "none" } }}>
                <MobileMenu />
              </Box>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack
                  sx={{ display: { xs: "none", sm: "flex" }, mb: "10px" }}
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                >
                  {session?.user.role == "Admin" ? (
                    <Button color="primary" href="/admin/Dashboard">
                      Administration
                    </Button>
                  ) : (
                    <></>
                  )}

                  {session ? (
                    <Button color="primary" href="/Dashboard">
                      Dashboard
                    </Button>
                  ) : (
                    <></>
                  )}
                  <Button color="primary" href="/Blog">
                    Blog
                  </Button>
                  <Button color="primary" href="/Shop">
                    Shop
                  </Button>
                  <Button color="primary" href="/Recipes">
                    Recipes
                  </Button>
                  <Button color="primary" href="/About">
                    About
                  </Button>
                  <Button color="primary" href="/Contact">
                    Contact
                  </Button>
                  {session ? (
                    <Button
                      variant="contained"
                      size="small"
                      color="primary"
                      //href="/api/auth/signout?callbackUrl=/"
                      onClick={() => signOut({ callbackUrl: "/" })}
                    >
                      Logout
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      size="small"
                      color="primary"
                      //href="/api/auth/signin?callbackUrl=/"
                      onClick={() => signIn()}
                    >
                      Login
                    </Button>
                  )}
                </Stack>
              </Stack>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

  
};

export default Header;
