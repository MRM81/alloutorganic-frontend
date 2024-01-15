"use client";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { Box, Grid, Typography } from "@mui/material";
import BlogCard from "../(components)/BlogCard";
import { useApiClient } from "../api/apiClient/ClientContext";
import { BlogPostDto } from "../api/apiClient/Client";
import IntroCard from "../(components)/IntroCard";

const Blog = () => {
  const api = useApiClient();
  const [blogPosts, setBlogPosts] = useState<BlogPostDto[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await api.blogPost_GetAllPaged(1, 20);
      return response;
    };
    getData()
      .then((res) => {
        setBlogPosts(res);
       
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Box>
      <Grid
        container
        direction={{xs: "column", md:"row"}}
        p="10px"
      >
        <Grid item xs={2.5}></Grid>
        <Grid item xs={6}>
          {/* <Typography
            variant="h5"
            component="h5"
            color="primary"
            textAlign="center"
            gutterBottom
            mt="20px"
          >
            All Out Organic Blog
          </Typography>
          <Typography
            variant="body1"
            component="p"
            fontSize="1.1em"
            color="primary"
            gutterBottom
            mt="20px"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            saepe fugit, numquam aspernatur, amet pariatur aperiam laudantium
            quod, placeat natus officiis nesciunt asperiores eos reprehenderit
            culpa. Suscipit, id! Sunt, pariatur?
          </Typography> */}
          {blogPosts.map((post) => (
            
            <BlogCard key={post.id} post={post} />
          ))}
        </Grid>
        <Grid item container xs={3.5} p="20px" justifyContent="center">
          <IntroCard/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Blog;
