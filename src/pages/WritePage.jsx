import NavBar from "../components/NavBar";
import Icon from "../components/icon/Icon";
import WritersForm from "../components/WritersCard";
import {
  TextField,
  Box,
  Paper,
  Button,
  IconButton,
  Avatar,
} from "@mui/material";
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

export default WritersPage;
