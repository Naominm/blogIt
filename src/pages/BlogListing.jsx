import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";

import Icon from "../components/icon/Icon";

import NavBar from "../components/NavBar";
function BlogListing() {
  return (
    <NavBar
      icon={Icon}
      menuItems={[
        { label: "Write", path: "/write" },
        { label: "My Blogs", path: "/my-blogs" },
        { label: "My Profile", path: "/profile" },
      ]}
      extraComponents={
        <>
          <NotificationsIcon sx={{ color: "white" }} />
          <Avatar alt="Naomi" src="/avatar.png" />
        </>
      }
    />
  );
}

export default BlogListing;
