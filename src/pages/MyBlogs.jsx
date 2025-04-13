import { Typography, Avatar, Box, Paper, Button } from "@mui/material";
import NavBar from "../components/NavBar";
import Icon from "../components/icon/Icon";
import BlogCard from "../components/Card";
import featuredImage from "../assets/heroh1.jpg";
import AvatarImage from "../assets/blog.png";

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
      <Paper sx={{ display: "flex", justifyContent: "center" }}>
        <Box component="div" sx={{ mt: 5, width: "70%" }}>
          <BlogCard
            title="Blog 1 Title"
            excerpt=" React components and state management in this blog.  React components and state management in this blog. React components and state management in this blog"
            updatedDate="4/13/2025"
            authorAvatar={AvatarImage}
            authorName="Naomi Njeri"
            featuredImage={featuredImage}
          />
        </Box>
      </Paper>
    </>
  );
}

export default MyBlogsPage;
