"use client";
import React from "react";
import { AppBar, Toolbar, Typography, Stack } from "@mui/material";
import { Button, IconButton, Grid, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SearchMenu from "./SearchMenu";
import MobileMenu from "./MobileMenu";
import Cart from "./Cart";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession({ required: false });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Box bgcolor={"primary.main"} height="30px" pt="5px">
          <Typography
            variant="body2"
            fontFamily="georgia"
            fontSize=".7em"
            fontWeight="bold"
            textTransform="uppercase"
            component="p"
            color="secondary"
            align="center"
          >
            Love the life you live, Live the life you love
          </Typography>
        </Box>
        {session ? (
          <Box position="absolute" top="4px" right="20px">
            <Typography variant="body1" component="p">
              {"Welcome: " + session.user.email}
            </Typography>
          </Box>
        ) : (
          <></>
        )}
        <Toolbar
          sx={{
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Grid
              container
              justifyContent={"space-between"}
              alignItems="center"
              width="100vw"
              sx={{ px: { xs: "20px", md: "70px" } }}
            >
              <Grid item>
                <MobileMenu />
                <SearchMenu />
              </Grid>
              <Grid item p="20px 0px">
                <Link href="/">
                  <Image
                    src="/logo.jpg"
                    width={300}
                    height={300}
                    alt="Logo Image"
                  ></Image>
                </Link>
                {/* <a href="/">
                  <img
                    className="logo-img"
                    src="logo2.jpg"
                    alt="Logo image"
                  ></img>
                </a> */}
              </Grid>
              <Grid item>
                <IconButton
                  size="large"
                  edge="end"
                  color="primary"
                  aria-label="menu"
                  href="/Dashboard"
                >
                  <PersonIcon />
                </IconButton>
                <Cart />
              </Grid>
            </Grid>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack
                sx={{ display: { xs: "none", md: "flex" } }}
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
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
                    variant="outlined"
                    size="small"
                    color="primary"
                    href="/api/auth/signout?callbackUrl=/"
                  >
                    Logout
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    href="/api/auth/signin?callbackUrl=/"
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
};

export default Header;
