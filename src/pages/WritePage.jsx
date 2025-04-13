import { Typography, Avatar, Box } from "@mui/material";
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
      <Typography variant="h6">This is the writers page</Typography>
      <Box component="div">
        <WritersForm />
      </Box>
    </>
  );
}

function WritersForm() {
  return (
    <>
      <Typography variant="h6">The form goes here</Typography>
    </>
  );
}

export default WritersPage;
