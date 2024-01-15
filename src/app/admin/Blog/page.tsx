"use client";
import React from "react";
import { Grid, Box, Stack, TextField } from "@mui/material";
import { Button, Typography, MenuItem } from "@mui/material";
import SideBar from "../(components)/SideBar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useApiClient } from "@/app/api/apiClient/ClientContext";
import { useState, useRef } from "react";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { BlogPostDto, BlogImageDto } from "@/app/api/apiClient/Client";
import { useDropzone } from "react-dropzone";
import { ApiException } from "@/app/api/apiClient/Client";
import { FileResizer } from "@/app/Utils/fileResizer";
import ConfirmationDialog from "@/app/(components)/ConfirmationDialog";
import { Height } from "@mui/icons-material";

const Blog = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/");
    },
  });

  const api = useApiClient();
  const { v4: uuidv4 } = require("uuid");
  const region = process.env.NEXT_PUBLIC_AWS_S3_REGION;
  const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BLOG_IMAGES;
  const accessKey = process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY;
  const secretAccessKey = process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY;
  const [open, setOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [imageMain, setImageMain] = useState([]);
  const [images, setImages] = useState([]);
  const author = useRef("");
  const category = useRef("");
  const title = useRef("");
  const content = useRef("");

  const credentials = {
    accessKeyId: accessKey as string,
    secretAccessKey: secretAccessKey as string,
  };

  const client = new S3Client({
    region: region,
    credentials: credentials,
  });

  // Handle form submission
  async function handleImageMainChange(e: any) {
    e.preventDefault();
    setImageMain(e.target.files[0]);
  }

  // Handle form submission
  async function handleImagesChange(e: any) {
    e.preventDefault();
    setImages(Array.from(e.target.files));
  }

  // Handle form submission
  async function handleFormSubmit(e: any) {
    e.preventDefault();

    const post = await createBlogPost();
    await createBlogImage(post?.id, imageMain);

    images.map((img) => {
      createBlogImages(post?.id, img);
    });

    setOpen(true);
  }

  // Add a single image upload to the DB and S3 bucket
  async function createBlogImage(id: any, img: any) {
    const imageMainName = uuidv4() + "_thumbnail.jpg";

    updateS3(imageMain, imageMainName);

    const blogImageMainBody: BlogImageDto = {
      imageUrl: process.env.NEXT_PUBLIC_BLOG_IMG_BASE_URL + imageMainName,
      blogPostId: id,
    };
    await api.blogImage_Post(blogImageMainBody);
  }

  // Add multiple image upload to DB and S3 bucket
  async function createBlogImages(id: any, img: any) {
    const imageName = uuidv4() + "_content.jpg";

    updateS3(img, imageName);

    const blogImageBody: BlogImageDto = {
      imageUrl: process.env.NEXT_PUBLIC_BLOG_IMG_BASE_URL + imageName,
      blogPostId: id,
    };
    await api.blogImage_Post(blogImageBody);
  }

  // Resize files and store in AWS S3 bucket
  async function updateS3(img: any, newImageName: any) {
    const resizedImage: any = await FileResizer(img)
   
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: newImageName,
      Body: resizedImage,
    });

    try {
      await client.send(command);
    } catch (err) {
      setErrorMessage("Error adding images to AWS S3");
      console.error(err);
    }
  }

  // Create a new blog dto and insert into database.
  async function createBlogPost() {
    let currentDate = new Date();
    try {
      const blogPostBody: BlogPostDto = {
        author: author.current,
        category: category.current,
        title: title.current,
        content: content.current,
        date: currentDate,
      };

      const post = await api.blogPost_Post(blogPostBody);
      return post;
    } catch (error: any) {
      if (error instanceof ApiException) {
        setErrorMessage("Error inserting data into database");
        console.log(`Exception Response: ${error.message}`);
      } else {
        setErrorMessage("Error inserting data into database");
        console.log(`Error Response: `, error);
      }
    }
  }

  return (
    <Grid container direction="row">
      <Grid item xs={3}>
        <SideBar email={session?.user.email} />
      </Grid>

      <Grid
        item
        container
        xs={12}
        md={9}
        justifyContent="center"
        alignItems="start"
        bgcolor="rgb(23, 77, 36, 0.1)"
      >
        <Stack
          direction="column"
          component={"form"}
          onSubmit={handleFormSubmit}
          sx={{
            mt: "30px",
            width: { xs: "95vw", sm: "70vw", md: "55vw", lg: "30vw" },
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            component="h5"
            textTransform="capitalize"
            textAlign="left"
            color="primary"
          >
            Create a new blog entry
          </Typography>
          <ConfirmationDialog open={open} setOpen={setOpen} />
          <TextField
            id="outlined-required"
            select
            label="Author"
            name="author"
            defaultValue=""
            onChange={(e) => (author.current = e.target.value)}
            required
            margin="normal"
            sx={{
              backgroundColor: "white",
              boxShadow: "1px 1px 1px lightBlue",
              borderRadius: "3px",
              border: "solid 1px secondary.main",
              textAlign: "left",
            }}
          >
            <MenuItem value={"Lilly McLachlan"}>Lilly McLachlan</MenuItem>
            <MenuItem value={"Mark McLachlan"}>Mark McLachlan</MenuItem>
          </TextField>

          <TextField
            id="outlined-required"
            select
            label="Category"
            name="category"
            defaultValue=""
            onChange={(e) => (category.current = e.target.value)}
            required
            margin="normal"
            sx={{
              backgroundColor: "white",
              boxShadow: "1px 1px 1px lightBlue",
              borderRadius: "3px",
              border: "solid 1px secondary.main",
              textAlign: "left",
            }}
          >
            <MenuItem value={"Food"}>Food</MenuItem>
            <MenuItem value={"Beauty"}>Beauty</MenuItem>
            <MenuItem value={"Cleaning"}>Cleaning</MenuItem>
          </TextField>

          <TextField
            id="outlined-required"
            label="Title"
            type="text"
            margin="normal"
            name="title"
            autoComplete="initialPassword"
            onChange={(e) => (title.current = e.target.value)}
            required
            sx={{
              backgroundColor: "white",
              boxShadow: "1px 1px 1px lightBlue",
              borderRadius: "3px",
              border: "solid 1px secondary.main",
            }}
          />

          <TextField
            sx={{
              backgroundColor: "white",
              boxShadow: "1px 1px 1px lightBlue",
              borderRadius: "3px",
              border: "solid 1px secondary.main",
            }}
            multiline={true}
            rows={5}
            label="content"
            id="outlined-required"
            type="text"
            margin="normal"
            name="content"
            onChange={(e) => (content.current = e.target.value)}
            required
          />
          <Box textAlign={"center"} margin={"20px"}>
            <Typography variant="body1" component="div" textAlign="left">
              Thumbnail Image
            </Typography>
            <TextField
              id="outlined-required"
              name="Main Image"
              variant="outlined"
              type="file"
              onChange={handleImageMainChange}
              fullWidth
              required
              sx={{
                backgroundColor: "white",
                boxShadow: "1px 1px 1px lightBlue",
                borderRadius: "3px",
                border: "solid 1px secondary.main",
              }}
            />
            <Typography variant="body1" component="div" textAlign="left">
              Other Images
            </Typography>
            <TextField
              id="outlined-required"
              name="Images"
              variant="outlined"
              type="file"
              onChange={handleImagesChange}
              fullWidth
              inputProps={{
                multiple: true,
              }}
              sx={{
                backgroundColor: "white",
                boxShadow: "1px 1px 1px lightBlue",
                borderRadius: "3px",
                border: "solid 1px secondary.main",
              }}
            />
          </Box>
          <Button
            sx={{ height: "60px", mt: "20px", fontSize: "1.3em" }}
            variant="contained"
            type="submit"
            color="primary"
            fullWidth
          >
            Create Blog Post
          </Button>
          <Typography variant="subtitle2" component="p" color="red">
            {errorMessage}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Blog;
