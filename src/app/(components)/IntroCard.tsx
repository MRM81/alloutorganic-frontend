import { Grid, Typography, Button } from "@mui/material";
import React from "react";

const IntroCard = () => {
  return (
    <Grid
      container
      position="relative"
      direction="column"
      mt="25%"
      bgcolor="#f9f9f9"
      height="400px"
      width="90%"
      alignItems="center"
      justifyContent="center"
      sx={{ mt: "130px", p: "30px 20px 20px 20px" }}
    >
      <img className="face-img" src="/face.jpg" alt="face" />
      <Typography variant="h5" pt="10px" gutterBottom>
        Hi! I'm Lilly
      </Typography>
      <Typography variant="body2" component="div" color="#c8c8c8" fontSize="2em" pt="10px" gutterBottom>
        Nice to meet you!
      </Typography>
      <Typography variant="subtitle1" pt="10px" >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto enim amet consectetur adipisicing elit.
        ducimus non cum? Neque consectetur.
      </Typography>
      <Button variant="text" size="large" sx={{position: "absolute", bottom: "10px"}}>Learn More</Button>
    </Grid>
  );
};

export default IntroCard;
