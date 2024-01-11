"use client";

import { Box, Stack, Typography } from "@mui/material";

const Blog = () => {
  return (
    <Box>
      <Stack height="50vh" justifyContent="center" alignItems="center">
        <Typography variant="h3" component="h3" color="primary">BLOG</Typography>
      </Stack>
      <Box height="700px" bgcolor="rgb(23, 77, 36, 0.1)" pt="40px"></Box>
    </Box>
  );
};

export default Blog;
