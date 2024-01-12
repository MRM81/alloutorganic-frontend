import React from "react";
import { Box, Stack, Typography, Grid, Button } from "@mui/material";
import Link from "next/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Home = () => {
  return (
    <Box bgcolor="white">
      <Grid
        container
        direction={{ xs: "column", lg: "row" }}
        p={{ md: "40px 30px", xl: "40px 180px"}}
      >
        <Grid container minHeight="500px">
          <Grid container  direction="row" justifyContent="space-between">
            <Grid
              item
              xs={12}
              md={5.9}
              sx={{
                position: "relative",
                backgroundImage: `url(${"/home1.jpg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",

                boxShadow: "2px 2px 5px grey",
              }}
            >
              <Link href="/Recipes">
                <Typography
                  variant="subtitle1"
                  component="h6"
                  color="secondary"
                  sx={{
                    position: "absolute",
                    bottom: "40px",
                    backgroundColor: "rgb(0, 0, 0, 0.65)",
                    p: "10px 50px",
                  }}
                >
                  View Recipes
                  <ChevronRightIcon fontSize="large" />
                </Typography>
              </Link>
            </Grid>
            <Grid
              item
              xs={5.9}
              sx={{
                position: "relative",
                backgroundImage: `url(${"/home2.jpg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",

                boxShadow: "2px 2px 5px grey",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Link href="/Shop">
                <Typography
                  variant="subtitle1"
                  component="h6"
                  color="secondary"
                  sx={{
                    position: "absolute",
                    bottom: "40px",
                    backgroundColor: "rgb(0, 0, 0, 0.65)",
                    p: "10px 50px",
                  }}
                >
                  View Products
                  <ChevronRightIcon fontSize="large" />
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          item
          direction="column"
          xs={5}
          lg={12}
          justifyContent="center"
          gap={3}
          alignItems="center"
          sx={{ p: { xs: "40px 0px", sm: "50px" } }}
        >
          <Typography
            variant="h5"
            component="h5"
            fontWeight="bold"
            fontSize="1.5em"
            color="primary"
            textTransform="uppercase"
            fontFamily="impact"
            textAlign="center"
            gutterBottom
          >
            Live a 100% organic lifestyle
          </Typography>
          <Typography
            variant="body2"
            component="p"
            textAlign="center"
            gutterBottom
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            voluptates enim consequatur, a itaque perspiciatis quam earum
            temporibus excepturi suscipit odio beatae alias porro hic placeat,
            eius ab, exercitationem harum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Pariatur voluptates enim consequatur,
            a itaque perspiciatis quam earum temporibus excepturi suscipit odio
            beatae alias porro hic placeat, eius ab, exercitationem harum.
          </Typography>
          <Button href="/about" variant="contained" size="large">
            Learn More
          </Button>
        </Grid>
      </Grid>

      {/* ******************************* Start of Latest blog section **************************************** */}
      {/* ******************************* Start of Latest blog section **************************************** */}
      {/* ******************************* Start of Latest blog section **************************************** */}

      <Box bgcolor="rgb(23, 77, 36, 0.1)"  p={{xs:"40px 0px", md: "40px 30px", xl: "40px 180px"}}>
        <Typography
          variant="h3"
          component="h3"
          textAlign="center"
          color="primary"
          sx={{
            fontFamily: "impact",
            textTransform: "uppercase",
            fontSize: { xs: "1.5em", sm: "1.8em", lg: "2.1em" },
          }}
        >
          latest Blog posts
        </Typography>

        <Grid
          container
          direction={{ xs: "column", lg: "row" }}
          sx={{ p: { xs: "20px", sm: "50px", lg: "50px 0px" } }}
          gap={3}
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            container
            xs={3.5}
            justifyContent="left"
            gap={1}
            alignItems="center"
            boxShadow="2px 2px 5px grey"
            borderRadius="4px"
            sx={{
              p: { xs: "40px 10px", sm: "50px", backgroundColor: "white" },
            }}
          >
            <Typography
              variant="h5"
              component="h5"
              fontWeight="bold"
              fontSize="1.5em"
              color="primary"
              textTransform="uppercase"
              fontFamily="impact"
              gutterBottom
            >
              Live a 100% organic lifestyle
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              voluptates enim consequatur, a itaque perspiciatis quam earum
              temporibus excepturi suscipit odio beatae alias porro hic placeat,
              eius ab, exercitationem harum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Pariatur voluptates enim
              consequatur, a itaque perspiciatis quam earum temporibus excepturi
              suscipit odio beatae alias porro hic placeat, eius ab,
              exercitationem harum.
            </Typography>
            <Button href="/About" variant="contained" size="large">
              Learn More
            </Button>
          </Grid>

          <Grid
            item
            container
            xs={3.5}
            justifyContent="left"
            gap={1}
            alignItems="center"
            boxShadow="2px 2px 5px grey"
            borderRadius="4px"
            sx={{
              p: { xs: "40px 10px", sm: "50px", backgroundColor: "white" },
            }}
          >
            <Typography
              variant="h5"
              component="h5"
              fontWeight="bold"
              fontSize="1.5em"
              color="primary"
              textTransform="uppercase"
              fontFamily="impact"
              gutterBottom
            >
              Live a 100% organic lifestyle
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              voluptates enim consequatur, a itaque perspiciatis quam earum
              temporibus excepturi suscipit odio beatae alias porro hic placeat,
              eius ab, exercitationem harum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Pariatur voluptates enim
              consequatur, a itaque perspiciatis quam earum temporibus excepturi
              suscipit odio beatae alias porro hic placeat, eius ab,
              exercitationem harum.
            </Typography>
            <Button href="/About" variant="contained" size="large">
              Learn More
            </Button>
          </Grid>

          <Grid
            item
            container
            xs={3.5}
            justifyContent="left"
            gap={1}
            alignItems="center"
            boxShadow="2px 2px 5px grey"
            borderRadius="4px"
            sx={{
              p: { xs: "40px 10px", sm: "50px", backgroundColor: "white" },
            }}
          >
            <Typography
              variant="h5"
              component="h5"
              fontWeight="bold"
              fontSize="1.5em"
              color="primary"
              textTransform="uppercase"
              fontFamily="impact"
              gutterBottom
            >
              Live a 100% organic lifestyle
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              voluptates enim consequatur, a itaque perspiciatis quam earum
              temporibus excepturi suscipit odio beatae alias porro hic placeat,
              eius ab, exercitationem harum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Pariatur voluptates enim
              consequatur, a itaque perspiciatis quam earum temporibus excepturi
              suscipit odio beatae alias porro hic placeat, eius ab,
              exercitationem harum.
            </Typography>
            <Button href="/About" variant="contained" size="large">
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
