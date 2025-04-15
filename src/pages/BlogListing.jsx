import { Avatar, Box, Paper, Typography } from "@mui/material";
import Icon from "../components/icon/Icon";
import NavBar from "../components/NavBar";
import BlogCard from "../components/Card";
import featuredImage from "../assets/heroh1.jpg";
import AvatarImage from "../assets/blog.png";
import FeaturedBlogs from "../components/TrendingBlogs";
function BlogListing() {
  return (
    <>
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
          width: { xs: "100%", md: "70%" },
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
      <Paper
        sx={{
          mt: 10,
          px: 5,
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h6" sx={{ my: 1 }}>
          Trending Blogs
        </Typography>
        <Box component="div" sx={{ width: "100%" }}>
          <FeaturedBlogs
            title="Getting Started with Blogs"
            authorAvatar={AvatarImage}
            authorName="JohnSmith"
            updatedDate="2023-11-20"
          />
        </Box>
        <Box component="div" sx={{ width: "100%" }}>
          <FeaturedBlogs
            title="Getting Started with Blogs"
            authorAvatar={AvatarImage}
            authorName="JohnSmith"
            updatedDate="2023-11-20"
          />
        </Box>
      </Paper>
    </Box>
  );
}

export default BlogListing;
