import {
  Avatar,
  Box,
  Paper,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Icon from "../components/icon/Icon";
import NavBar from "../components/NavBar";
import BlogCard from "../components/Card";
import featuredImage from "../assets/heroh1.jpg";
import AvatarImage from "../assets/blog.png";
import FeaturedBlogs from "../components/TrendingBlogs";
import { useLogout } from "../components/logout";
import apiUrl from "../utils/apiUrl";

function BlogListing() {
  const logout = useLogout();
  const navigate = useNavigate();

  const {
    isLoading,
    data: blogs,
    error,
  } = useQuery({
    queryKey: ["all-blogs"],
    queryFn: async () => {
      const response = await axios.get(`${apiUrl}/blogs`, {
        withCredentials: true,
      });
      return response.data;
    },
  });

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
            <button
              onClick={logout}
              style={{ fontWeight: "bold", color: "crimson", padding: 5 }}
            >
              Logout
            </button>
            <Avatar alt="Naomi" src="/avatar.png" />
          </>
        }
      />
      <BlogsHero blogs={blogs} isLoading={isLoading} error={error} />
    </>
  );
}

function BlogsHero({ blogs, isLoading, error }) {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
      <Box
        component="div"
        sx={{
          width: { xs: "100%", md: "70%" },
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: 10,
          gap: 3,
          px: 2,
        }}
      >
        {isLoading ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : error ? (
          <Alert severity="error">Error loading blogs: {error.message}</Alert>
        ) : blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <BlogCard
              key={blog._id}
              title={blog.title}
              excerpt={blog.excerpt}
              featuredImage={featuredImage}
              authorAvatar={AvatarImage}
              authorName={`${blog.author?.firstName} ${blog.author?.lastName}`}
              updatedDate={new Date(blog.updatedAt).toLocaleDateString()}
              onClick={() => navigate(`/articles/${blog._id}`)}
            />
          ))
        ) : (
          <Typography variant="h6">No blogs found</Typography>
        )}
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
        <Typography
          variant="subtitle soon"
          sx={{ my: 1, color: "teal", display: { xs: "none", md: "flex" } }}
        >
          Trending Blogs will appear here soon..
        </Typography>
      </Paper>
    </Box>
  );
}

export default BlogListing;
