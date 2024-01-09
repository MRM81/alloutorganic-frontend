import React from "react";

import { Box, Stack, Typography } from "@mui/material";

const Recipes = () => {
  return (
    <Box>
      <Stack height="50vh" justifyContent="center" alignItems="center">
        <Typography variant="h3" component="h3" color="primary">
          Recipes
        </Typography>
      </Stack>
    </Box>
  );
};

export default Recipes;
