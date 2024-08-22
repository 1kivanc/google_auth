import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Box, Typography, Paper } from "@mui/material";

const GoogleLoginComponent = () => {
  const navigate = useNavigate();

  const handleSuccess = async (credentialResponse) => {
    try {
      const res = await axios.post("http://localhost:5000/auth/google", {
        token: credentialResponse.credential,
      });

      const userProfile = {
        name: res.data.user.name,
        email: res.data.user.email,
        picture: res.data.user.avatar,
      };

      localStorage.setItem("userProfile", JSON.stringify(userProfile));
      navigate("/profile");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleError = () => {
    console.error("Login Failed");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "100vh",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: "3rem",
          borderRadius: "12px",
          maxWidth: "400px",
          width: "100%",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography
          variant="h4"
          sx={{ mb: 3, fontWeight: "bold", color: "#333" }}
        >
          Hoşgeldin, Lütfen giriş yap
        </Typography>

        <GoogleLogin
          width={400}
          onSuccess={handleSuccess}
          onError={handleError}
        />
      </Paper>
    </Box>
  );
};

export default GoogleLoginComponent;
