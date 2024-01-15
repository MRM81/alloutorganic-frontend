"use client";
import React from "react";
import { Grid, Box } from "@mui/material";
import { Typography } from "@mui/material";
import SideBar from "../(components)/SideBar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CreateBlog from "./(components)/CreateBlog";
import EditBlog from "./(components)/EditBlog";

const Blog = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/");
    },
  });

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

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
        p="20px 100px"
        // bgcolor="rgb(23, 77, 36, 0.1)"
        justifyContent="start"
        alignItems="start"
      >
        <Box margin="10px auto">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{ boxShadow: "3px 3px 6px grey", border: "solid 1px grey" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{ height: "10px" }}
            >
              <Typography
                fontWeight="bold"
                color="primary"
                sx={{ width: "33%", flexShrink: 0 }}
              >
                Create
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                textTransform="capitalize"
                textAlign="left"
                color="text.secondary"
              >
                Create A New Blog Post
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CreateBlog />
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            sx={{ boxShadow: "3px 3px 6px grey", border: "solid 1px grey" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
              sx={{ height: "10px" }}
            >
              <Typography
                fontWeight="bold"
                color="primary"
                sx={{ width: "33%", flexShrink: 0 }}
              >
                Edit
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                textTransform="capitalize"
                textAlign="left"
                color="text.secondary"
              >
                Edit A Blog Post
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <EditBlog />
            </AccordionDetails>
          </Accordion>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Blog;
