import { Avatar, Box } from "@mui/material";
import Icon from "../components/icon/Icon";
import NavBar from "../components/NavBar";
import BlogCard from "../components/Card";
import featuredImage from "../assets/heroh1.jpg";
import AvatarImage from "../assets/blog.png";
function BlogListing() {
  return (
    <>
      <NavBar
        icon={Icon}
        menuItems={[
          { label: "Write", path: "/write" },
          { label: "My Blogs", path: "/my-blogs" },
          { label: "My Profile", path: "/profile" },
        ]}
        extraComponents={
          <>
            <Avatar alt="Naomi" src="/avatar.png" />
          </>
        }
      />
      <BlogsHero />
    </>
  );
}

function BlogsHero() {
  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
      <Box
        component="div"
        sx={{
          width: "70%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 10,
        }}
      >
        <BlogCard
          title="Getting Started with React"
          excerpt="Learn the basics of React components and state management in this blog."
          featuredImage={featuredImage}
          authorAvatar={AvatarImage}
          authorName="JohnSmith"
          updatedDate="2023-11-20"
          onClick={() => navigate("/blog/getting-started-with-react")}
        />
      </Box>
      <Box
        component="div"
        sx={{ backgroundColor: "#999", width: "30%", mt: 10 }}
      ></Box>
    </Box>
  );
}

export default BlogListing;
