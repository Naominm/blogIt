import {
  Avatar,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Alert,
  Collapse,
} from "@mui/material";
import Icon from "../components/icon/Icon";
import NavBar from "../components/NavBar";
import apiUrl from "../utils/apiUrl";
import { useState, useEffect } from "react";
import axios from "axios";
import useProfileStore from "../../store/userProfileStore";

function MyProfilePage() {
  return (
    <Box component="div">
      <NavBar
        icon={Icon}
        menuItems={[
          { label: "listing", path: "/blogs" },
          { label: "Write", path: "/writers" },
          { label: "My Blogs", path: "/blogs/:blogId" },
          { label: "My Profile", path: "/profile" },
        ]}
        extraComponents={
          <>
            <Avatar alt="Naomi" src="/avatar.png" />
          </>
        }
      />
      <Box>
        <ProfileInfoCard />
        <PersonalInfoSec />
        <UpdatePasswordSection />
      </Box>
    </Box>
  );
}

function ProfileInfoCard() {
  const {
    firstName,
    lastName,
    email,
    username,
    setFirstName,
    setLastName,
    setEmail,
    setUsername,
  } = useProfileStore((state) => state);
  const {
    avatarUrl,
    setAvatarUrl,
    phoneNumber,
    setPhoneNumber,
    occupation,
    setOccupation,
    bio,
    setBio,
    secondaryEmail,
    setSecondaryEmail,
  } = useProfileStore();
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
  const uploadUrl = import.meta.env.VITE_CLOUDINARY_UPLOAD_URL;

  const handleAvatarUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
      const res = await axios.post(uploadUrl, formData);
      const data = res.data;
      setAvatarUrl(data.secure_url);
      setAvatarPreview(URL.createObjectURL(file));
      console.log("Uploaded avatar URL:", data.secure_url);
    } catch (error) {
      console.error("Avatar upload failed:", error);
    }
  };

  const handleProfileSave = async () => {
    const profileData = {
      phoneNumber,
      occupation,
      bio,
      secondaryEmail,
      avatarUrl,
    };

    try {
      const response = await axios.post(
        `${apiUrl}/users/profile`,
        profileData,
        {
          withCredentials: true,
        },
      );

      console.log("Profile information updated successfully", response.data);
      setShowSuccessAlert(true);
      setTimeout(() => setShowSuccessAlert(false), 3000);
    } catch (error) {
      console.error("Error updating profile info:", error);

      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }

      console.error("Failed to update profile. Please try again later.");
    }
  };

  return (
    <Paper sx={{ p: 3, mb: 4 }}>
      <Typography variant="h6" mb={2}>
        welcome {username}
      </Typography>
      <Box
        component="form"
        sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
      >
        <Avatar
          src={avatarPreview || avatarUrl || ""}
          alt="profile"
          sx={{ width: 80, height: 80 }}
        />
        <Button variant="outlined" component="label">
          upload Photo
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                handleAvatarUpload(file);
              }
            }}
          />
        </Button>
      </Box>
      <Grid container spacing={2}>
        <Grid span={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></TextField>
        </Grid>
        <Grid span={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          ></TextField>
        </Grid>
        <Grid span={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></TextField>
        </Grid>
        <Grid span={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Secondary Email"
            value={secondaryEmail}
            onChange={(e) => setSecondaryEmail(e.target.value)}
          ></TextField>
        </Grid>
      </Grid>
      <Button variant="contained" sx={{ mt: 3 }} onClick={handleProfileSave}>
        Save Profile Info
      </Button>
    </Paper>
  );
}

function PersonalInfoSec() {
  const {
    firstName,
    lastName,
    email,
    username,
    setFirstName,
    setLastName,
    setEmail,
    setUsername,
  } = useProfileStore((state) => state);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${apiUrl}/users/profile`, {
          withCredentials: true,
        });
        const data = response.data;
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.emailAddress);
        setUsername(data.userName);

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchProfile();
  }, [setFirstName, setLastName, setEmail, setUsername]);
  const handleSave = async () => {
    const updatedProfile = {
      firstName,
      lastName,
      emailAddress: email,
      userName: username,
    };

    try {
      const response = await axios.patch(
        `${apiUrl}/users/profile`,
        updatedProfile,
        {
          withCredentials: true,
        },
      );
      console.log("Personal info updated", response.data);
    } catch (err) {
      console.error("Error updating personal info:", err);
    }
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Paper sx={{ p: 3, mb: 4 }}>
      <Typography variant="h6" mb={2}>
        Personal Info
      </Typography>
      <Grid container columns={12} spacing={2}>
        <Grid span={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          ></TextField>
        </Grid>
        <Grid span={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          ></TextField>
        </Grid>
        <Grid span={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></TextField>
        </Grid>
        <Grid span={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          ></TextField>
        </Grid>
      </Grid>
      <Button variant="contained" sx={{ mt: 3 }} onClick={handleSave}>
        Save PErsonal Info
      </Button>
    </Paper>
  );
}

function UpdatePasswordSection() {
  return (
    <Paper sx={{ p: 3 }} component="form">
      <Typography variant="h6" mb={2}>
        Update password
      </Typography>
      <Grid container spacing={2}>
        <Grid span={{ xs: 12 }}>
          <TextField
            fullWidth
            type="password"
            label="Enter your current password"
          ></TextField>
        </Grid>
        <Grid span={{ xs: 12 }}>
          <TextField
            fullWidth
            type="password"
            label="Enter your New password"
          ></TextField>
        </Grid>
        <Grid span={{ xs: 12 }}>
          <TextField
            fullWidth
            type="password"
            label="Confirm New Password"
          ></TextField>
        </Grid>
      </Grid>
      <Button variant="contained" sx={{ mt: 3 }}>
        {" "}
        Update Password
      </Button>
    </Paper>
  );
}
export default MyProfilePage;
