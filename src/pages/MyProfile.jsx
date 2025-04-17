import {
  Avatar,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
} from "@mui/material";
import Icon from "../components/icon/Icon";
import NavBar from "../components/NavBar";
import apiUrl from "../utils/apiUrl";
import { useState, useEffect } from "react";

function MyProfilePage() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios
      .get(`${apiUrl}/users/me`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Error fetching user:", err));
  }, []);
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
  return (
    <Paper sx={{ p: 3, mb: 4 }}>
      <Typography variant="h6" mb={2}>
        Profile Info
      </Typography>
      <Box
        component="form"
        sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
      >
        <Avatar src="" alt="profile" sx={{ width: 80, height: 80 }} />
        <Button variant="outlined" component="label">
          upload Photo
          <input hidden accept="" type="file"></input>
        </Button>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Phone Number"></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Occupation"></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Bio"></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Secondary Email"></TextField>
        </Grid>
      </Grid>
      <Button variant="contained" sx={{ mt: 3 }}>
        Save Profile Info
      </Button>
    </Paper>
  );
}

function PersonalInfoSec() {
  return (
    <Paper sx={{ p: 3, mb: 4 }}>
      <Typography variant="h6" mb={2}>
        Personal Info
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="First Name" required></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Last Name" required></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Email" required></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Username" required></TextField>
        </Grid>
      </Grid>
      <Button variant="contained" sx={{ mt: 3 }}>
        Save PErsonal Info
      </Button>
    </Paper>
  );
}

function UpdatePasswordSection() {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" mb={2}>
        Update password
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="password"
            label="Enter your current password"
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="password"
            label="Enter your New password"
          ></TextField>
        </Grid>
        <Grid item xs={12}>
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
