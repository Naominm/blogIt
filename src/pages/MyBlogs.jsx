import { Typography, Avatar } from "@mui/material";
import NavBar from "../components/NavBar";
import Icon from "../components/icon/Icon";

function MyBlogsPage() {
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
      <Typography variant="h6">All the blogs that you have authored</Typography>
    </>
  );
}

function myBlogCard() {
  return <></>;
}
export default MyBlogsPage;
