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
    </Box>
  );
};

export default Dashboard;
