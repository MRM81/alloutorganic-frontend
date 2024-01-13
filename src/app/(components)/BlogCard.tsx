"use client";
import { Box, Card, CardContent } from "@mui/material";
import { Typography, CardMedia, Button } from "@mui/material";
import dateFormat from "dateformat";
import React from "react";

const BlogCard = (props: any) => {

  const date = dateFormat(props.post.date, "mmmm dS, yyyy");
  const content = props.post.content.split(" ", 23).join(" ") + ".....";
  return (

    <Card  sx={{ display: "flex", flexDirection: {xs: "column", sm: "row" }, boxShadow:"none", pb: "30px", mt: "30px", borderBottom: "solid 1px #d3d3d3"}}>
      <CardMedia
        component="img"
        sx={{ width: {xs: "100%", sm: 250 }}}
        image={props.post.images[0].imageUrl}
        alt="Blog image"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{pt: "0", position: "relative", height: "100%" }}>
        <Typography component="div" variant="body2" color="primary" fontWeight="bold" gutterBottom>
            {date}
          </Typography>
          <Typography component="div" variant="h4" fontFamily="goergia" gutterBottom>
            {props.post.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            mb="20px"
            gutterBottom
          >
           {content}
          </Typography>

          <Button sx={{position: "absolute", bottom: "0px", pl: "0"}} variant="text" size="large">Read More</Button>
        </CardContent>
      </Box>
    </Card>
  );
};

export default BlogCard;
{
  /* <img src="https://tradematch-advertisments.s3.amazonaws.com/aaa3b57c-ab0c-4701-9f11-d53e1fce2d8d.jpg" alt="Test" /> */
}
