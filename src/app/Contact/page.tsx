import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box>
      <Stack height="50vh" justifyContent="center" alignItems="center">
        <Typography variant="h3" component="h3" color="primary">
          CONTACT
        </Typography>
      </Stack>
      <Box height="700px" bgcolor="rgb(23, 77, 36, 0.1)" pt="40px"></Box>
    </Box>
  );
};

export default Contact;
