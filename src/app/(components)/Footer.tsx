"use client";
import {
  Grid,
  Stack,
  Typography,
  TextField,
  ButtonGroup,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Link from "next/link";
import Image from "next/image";
const handleNewsletterSubcription = async (e: any) => {
  e.preventDefault();
  alert("Hello");
};

const Footer = () => {
  return (
    <Grid
      container
      direction={{ xs: "column", lg: "row" }}
      p="40px"
      bgcolor="primary.main"
    >
      <Grid item xs={6}>
        <Stack direction="column">
          <img className="logo-img-footer" src="/logo.jpg" alt="Logo Image"></img>

          {/* <Typography
            variant="h5"
            component="h5"
            fontWeight="bold"
            color="white"
            textTransform="uppercase"
            gutterBottom
          >
            Welcome to All Out Organic
          </Typography>
          <Typography
            variant="subtitle1"
            component="h6"
            color="white"
            gutterBottom
          >
            Love the life you live, live the life you love!
          </Typography> */}
          <Typography variant="subtitle2" component="p" color="white" mt="30px">
            Subscribe to Newsletter
          </Typography>
          <TextField
            id="standard-basic"
            variant="standard"
            sx={{
              mt: "20px",
              mb: "40px",
              width: { xs: "100%", lg: "70%" },
              input: { color: "white" },
            }}
            focused
            InputProps={{
              color: "secondary",
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={handleNewsletterSubcription}
                >
                  <ChevronRightIcon
                    sx={{
                      color: "white",
                      "&:hover": { opacity: "0.7", cursor: "pointer" },
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Grid>

      <Grid item container xs={6}>
        <Grid container direction={{ xs: "column", sm: "row" }}>
          <Grid item xs={6} pb="20px">
            <Typography
              variant="h5"
              component="h5"
              color="secondary"
              fontWeight="bold"
              gutterBottom
            >
              Learn
            </Typography>
            <Link href="/">
              <Typography
                variant="subtitle1"
                component="p"
                color="secondary"
                gutterBottom
              >
                About AOO
              </Typography>
            </Link>
            <Link href="/">
              <Typography
                variant="subtitle1"
                component="p"
                color="secondary"
                gutterBottom
              >
                FAQ
              </Typography>
            </Link>
            <Link href="/">
              <Typography
                variant="subtitle1"
                component="p"
                color="secondary"
                gutterBottom
              >
                Contact Us
              </Typography>
            </Link>
            <Link href="/">
              <Typography
                variant="subtitle1"
                component="p"
                color="secondary"
                gutterBottom
              >
                Carreers
              </Typography>
            </Link>
            <Link href="/">
              <Typography
                variant="subtitle1"
                component="p"
                color="secondary"
                gutterBottom
              >
                Our Mission
              </Typography>
            </Link>
            <Link href="/">
              <Typography
                variant="subtitle1"
                component="p"
                color="secondary"
                gutterBottom
              >
                Lifestyle Tips
              </Typography>
            </Link>
          </Grid>

          <Grid item xs={6} pb="20px">
            <Link href="/">
              <Typography
                variant="h5"
                component="h5"
                color="secondary"
                fontWeight="bold"
                gutterBottom
              >
                Community
              </Typography>
            </Link>
            <Link href="/">
              <Typography
                variant="subtitle1"
                component="p"
                color="secondary"
                gutterBottom
              >
                About AOO
              </Typography>
            </Link>
            <Link href="/">
              <Typography
                variant="subtitle1"
                component="p"
                color="secondary"
                gutterBottom
              >
                FAQ
              </Typography>
            </Link>
            <Link href="/">
              <Typography
                variant="subtitle1"
                component="p"
                color="secondary"
                gutterBottom
              >
                Contact Us
              </Typography>
            </Link>
            <Link href="/">
              <Typography
                variant="subtitle1"
                component="p"
                color="secondary"
                gutterBottom
              >
                Careers
              </Typography>
            </Link>
            <Link href="/">
              <Typography
                variant="subtitle1"
                component="p"
                color="secondary"
                gutterBottom
              >
                Our Mission
              </Typography>
            </Link>
            <Link href="/">
              <Typography
                variant="subtitle1"
                component="p"
                color="secondary"
                gutterBottom
              >
                Lifestyle Tips
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>

      <Stack direction="column" width="100%">
        <ButtonGroup>
          <IconButton>
            <FacebookIcon color="secondary" />
          </IconButton>
          <IconButton>
            <PinterestIcon color="secondary" />
          </IconButton>
          <IconButton>
            <InstagramIcon color="secondary" />
          </IconButton>
          <IconButton>
            <TwitterIcon color="secondary" />
          </IconButton>
        </ButtonGroup>

        <ButtonGroup
          sx={{ mt: "10px", fontSize: "50px" }}
          color="secondary"
          variant="text"
          size="small"
        >
          <Button sx={{ fontSize: { xs: "7px", sm: "13px" } }}>
            Terms of service
          </Button>
          <Button sx={{ fontSize: { xs: "7px", sm: "13px" } }}>
            Privacy Policy
          </Button>
          <Button sx={{ fontSize: { xs: "7px", sm: "13px" } }}>Sitemap</Button>
          <Button sx={{ fontSize: { xs: "7px", sm: "13px" } }}>
            Accessability
          </Button>
        </ButtonGroup>
      </Stack>
    </Grid>
  );
};

export default Footer;
