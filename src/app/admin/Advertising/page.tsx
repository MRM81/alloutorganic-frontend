"use client";
import React from "react";
import { Grid } from "@mui/material";
import SideBar from "../(components)/SideBar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useApiClient } from "@/app/api/apiClient/ClientContext";
import { useState, useEffect } from "react";
import { UserDto } from "@/app/api/apiClient/Client";

const Advertising = () => {
  const api = useApiClient();

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/");
    },
  });

  const [user, setUser] = useState<UserDto>();

  const getUser = async () => {
    await api
        .user_Get(session?.user.id as string)
        .then((res) => {

            setUser(res);
            return res;
        })
        .catch((err) => {
            console.log(err.message);
        });
    };

  useEffect(() => {
   
    if(session) {
      const fetchData = async () => {
        await getUser();
      };
      fetchData();
    }
    
  }, [session]);

  return (
    <Grid container direction="row" height="150vh">
      <Grid item xs={3}>
        <SideBar email={session?.user.email} />
      </Grid>
      <Grid item xs={9}></Grid>
    </Grid>
  );
};

export default Advertising;
