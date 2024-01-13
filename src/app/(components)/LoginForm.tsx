"use client";

import { useRouter } from "next/navigation";
import React, { useState, useRef } from "react";
import { Stack, TextField, Button, Box, Typography } from "@mui/material";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef("");
  const password = useRef("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setErrorMessage("");

    await signIn("credentials", {
      email: email.current,
      password: password.current,
      redirect: false,
    }).then((res) => {
      if (res?.ok) {
        router.push("/");
      } else {
        console.log(res?.error as string);
        setErrorMessage("Invalid Credentials");
      }
    });
  };

  return (
    <Box display="flex" justifyContent="center" pb="120px">
      <Stack
        direction="column"
        component={"form"}
        onSubmit={handleSubmit}
        sx={{
          mt: "80px",
          width: { xs: "95vw", sm: "70vw", md: "55vw", lg: "30vw" },
          textAlign: "center",
        }}
      >
        <TextField
          id="outlined-required"
          label="Email"
          type="text"
          margin="normal"
          name="email"
          placeholder="username"
          onChange={(e) => (email.current = e.target.value)}
          required
        />

        <TextField
          id="outlined-required"
          label="Password"
          type="password"
          margin="normal"
          name="password"
          autoComplete="initialPassword"
          placeholder="Password"
          onChange={(e) => (password.current = e.target.value)}
          required
        />

        <Button
          sx={{ height: "60px", mt: "20px", fontSize: "1.3em" }}
          variant="contained"
          type="submit"
          color="primary"
          fullWidth
        >
          Login
        </Button>
        <Typography variant="subtitle2" component="p" color="red">
          {errorMessage}
        </Typography>
      </Stack>
    </Box>
  );
};

export default LoginForm;
