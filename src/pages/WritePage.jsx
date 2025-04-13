import { Typography, Avatar, Box, Paper } from "@mui/material";
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
        <Paper component="form" sx={{ width: "50%", height: "100%", mt: 5 }}>
          <Typography textAlign="center" sx={{ my: 2 }}>
            No this is actually the form
          </Typography>
        </Paper>
      </Box>
    </>
  );
}

export default WritersPage;
