import {
  Typography,
  Avatar,
  Box,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";

import NavBar from "../components/NavBar";
import Icon from "../components/icon/Icon";
function WritersPage() {
  return (
    <>
      <NavBar
        icon={Icon}
        menuItems={[
          { label: "listing", path: "/explore" },
          { label: "Write", path: "/writers" },
          { label: "My Blogs", path: "/my-blogs" },
          { label: "My Profile", path: "/profile" },
        ]}
        extraComponents={
          <>
            <Avatar alt="Naomi" src="/avatar.png" />
          </>
        }
      />
      <Box component="div">
        <WritersForm />
      </Box>
    </>
  );
}

function WritersForm() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper
          component="form"
          sx={{ width: { xs: "100%", md: "50%" }, height: "100%", mt: 5 }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "30%",
              backgroundColor: "#F6F8FA",
            }}
          >
            <Button variant="contained">
              {" "}
              <CloudUploadIcon />
            </Button>
            <IconButton
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                bgcolor: "white",
                color: "black",
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default WritersPage;
