"use client";
import * as React from "react";
import {
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Grid,
} from "@mui/material";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { useState, useEffect } from "react";

export default function SideBar(props: any) {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll(".link-btn");
    navLinks.forEach((navLink) => {
      const navText = navLink.querySelector(".MuiListItemText-root");

      if (navLink.getAttribute("href") === currentPath) {
        navLink.classList.add("active");
        navText?.classList.add("active");
      }
    });
  }, []);

  return (
    <>
      <Grid container width="100vw">
        <Grid
          item
          bgcolor={"white"}
          xs={3}
          minHeight={"100vh"}
          boxShadow={"2px 2px 10px grey"}
          sx={{ display: { xs: "none", md: "block" }, p: "20px 10px" }}
        >
          <Typography variant="h4" color="black" pl="10px">
            All Out Organic
          </Typography>

          <Typography variant="body2" color="black" pl="10px">
            {props.email}
          </Typography>

          <List>
            <ListItem disablePadding>
              <Link
                className="link-btn"
                sx={{ width: "100%", textDecoration: "none" }}
                href="/admin/Dashboard"
              >
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsSuggestIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link
                className="link-btn"
                sx={{ width: "100%", textDecoration: "none" }}
                href="/admin/Blog"
              >
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsSuggestIcon />
                  </ListItemIcon>
                  <ListItemText primary="Blog Content" />
                </ListItemButton>
              </Link>
            </ListItem>

            <ListItem disablePadding>
              <Link
                className="link-btn"
                sx={{ width: "100%", textDecoration: "none" }}
                href="/admin/Product"
              >
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsSuggestIcon />
                  </ListItemIcon>
                  <ListItemText primary="Product Content" />
                </ListItemButton>
              </Link>
            </ListItem>

            <ListItem disablePadding>
              <Link
                className="link-btn"
                sx={{ width: "100%", textDecoration: "none" }}
                href="/admin/Recipe"
              >
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsSuggestIcon />
                  </ListItemIcon>
                  <ListItemText primary="Recipe Content" />
                </ListItemButton>
              </Link>
            </ListItem>

            <ListItem disablePadding>
              <Link
                className="link-btn"
                sx={{ width: "100%", textDecoration: "none" }}
                href="/admin/User"
              >
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsSuggestIcon />
                  </ListItemIcon>
                  <ListItemText primary="User Content" />
                </ListItemButton>
              </Link>
            </ListItem>

            <ListItem disablePadding>
              <Link
                className="link-btn"
                sx={{ width: "100%", textDecoration: "none" }}
                href="/admin/Advertising"
              >
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsSuggestIcon />
                  </ListItemIcon>
                  <ListItemText primary="Advertising" />
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={9}></Grid>
      </Grid>
    </>
  );
}
