"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useApiClient } from "../apiClient/ClientContext";
import { ApiException } from "../apiClient/Client";
import { Stack, TextField, Button } from "@mui/material";
import { RegisterDto, UserDto } from "../apiClient/Client";

const RegistrationForm = () => {
  const router = useRouter();
  const api = useApiClient();

  const [errorMessage, setErrorMessage] = useState("");

  const [user, setUser] = useState<UserDto>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [passwordConfirmation, setPasswordConfirmation] = useState({
    initialPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePasswordConfirmationChange = (e: {
    target: { name: any; value: any };
  }) => {
    const { name, value } = e.target;
    setPasswordConfirmation({
      ...passwordConfirmation,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      if (user.password != passwordConfirmation.confirmPassword) {
        console.log("Passwords do not match");
      }
        const registerBody: RegisterDto = {
          user: {
            ...user,
          },
        };
      
      
      const response = await api.auth_Register(registerBody);

      if (!response.result) {
        
        setErrorMessage(response.error as string);
      } else {
        router.refresh();
        router.push("/");
      }
    } catch (error: any) {
      if (error instanceof ApiException) {
        console.log(`Exception Response: ${error.message}`);
      } else {
        console.log(`Error Response: `, error);
      }
    }
  };

  return (
    <>
      <Stack
        direction="column"
        component={"form"}
        onSubmit={handleSubmit}
        sx={{
          mt: "80px",
          width: { xs: "90vw", md: "50ch" },
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
          value={user.email}
          onChange={handleChange}
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
          value={user.password}
          onChange={handleChange}
          required
        />

        <TextField
          id="outlined-required"
          label="Confirm Password"
          type="password"
          margin="normal"
          name="confirmPassword"
          autoComplete="confirmPassword"
          placeholder="Confirm Password"
          value={passwordConfirmation.confirmPassword}
          onChange={handlePasswordConfirmationChange}
          required
        />
        <Button
          sx={{ height: "60px", mt: "20px", fontSize: "1.3em" }}
          variant="contained"
          type="submit"
          color="primary"
          fullWidth
        >
          Register
        </Button>
      </Stack>
      <p className="text-red-500">{errorMessage}</p>
    </>
  );
};

export default RegistrationForm;
