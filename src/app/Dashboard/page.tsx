"use client";
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import RegistrationForm from "../(components)/RegistrationForm";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession({required: false});
  return (
    <Box>
      <Stack height="50vh" justifyContent="center" alignItems="center">
        {session ? (
          <Typography variant="h3" component="h3" color="primary">
            DASHBOARD
          </Typography>
        ) : (
          <RegistrationForm />
        )}
      </Stack>
      <Box height="700px" bgcolor="rgb(23, 77, 36, 0.1)" pt="40px"></Box>
    </Box>
  );
};

export default Dashboard;
