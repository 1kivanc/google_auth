import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Avatar,
  Container,
  Paper,
  Button,
} from "@mui/material";

const Profile = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const storedProfile = localStorage.getItem("userProfile");
    if (storedProfile) {
      setUserProfile(JSON.parse(storedProfile));
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userProfile");
    navigate("/");
  };

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
        <Avatar
          alt={userProfile.name}
          src={userProfile.picture}
          sx={{ width: 120, height: 120, margin: "0 auto" }}
        />
        <Typography variant="h4" component="h1" sx={{ mt: 2 }}>
          Hoşgeldin, {userProfile.name}!
        </Typography>
        <Typography variant="body1" component="p" sx={{ mt: 2 }}>
          Email: {userProfile.email}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogout}
          sx={{ mt: 4 }}
        >
          Çıkış Yap
        </Button>
      </Paper>
    </Container>
  );
};

export default Profile;
