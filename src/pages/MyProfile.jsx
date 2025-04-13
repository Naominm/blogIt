import { Avatar } from "@mui/material";
import Icon from "../components/icon/Icon";
import NavBar from "../components/NavBar";
import { Box, Typography } from "@mui/material";
function MyProfilePage() {
  return (
    <Box component="div">
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
      <Typography variant="h6"> Welcome to your profile</Typography>
    </Box>
  );
}

export default MyProfilePage;
