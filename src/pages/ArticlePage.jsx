import { Typography, Paper, Box, Avatar } from "@mui/material";
import featuredImage from "../assets/heroh1.jpg";
import AvatarImage from "../assets/blog.png";
import NavBar from "../components/NavBar";
import ArticleCard from "../components/ArticleCard";
import Icon from "../components/icon/Icon";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import apiUrl from "../utils/apiUrl";

function ArticlesPage() {
  const { blogId } = useParams();
  console.log("Navigating to blog ID:", blogId);
  const {
    isLoading,
    error,
    data: blog,
  } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: async () => {
      const response = await axios.get(`${apiUrl}/blogs/${blogId}`, {
        withCredentials: true,
      });
      return response.data;
    },
  });

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error)
    return <Typography>Error loading blog: {error.message}</Typography>;
  if (!blog) return <Typography>Blog not found.</Typography>;

  return (
    <>
      <NavBar
        icon={Icon}
        menuItems={[
          { label: "listing", path: "/blogs" },
          { label: "Write", path: "/writers" },
          { label: "My Blogs", path: "/blogs/blogsId" },
          { label: "My Profile", path: "/profile" },
          { label: "Articles", path: "/articles" },
        ]}
        extraComponents={
          <>
            <Avatar alt="Naomi" src="/avatar.png" />
          </>
        }
      />
      <ArticlesContent blog={blog} />
    </>
  );
}

function ArticlesContent({ blog }) {
  return (
    <>
      <Box
        component="div"
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <Paper elevation={0} sx={{ mt: 5, width: "60%", height: "100%" }}>
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            {blog.title}
          </Typography>
        </Paper>
        <Box component="div" sx={{ width: { xs: "100%", md: "60%" } }}>
          <ArticleCard
            title={blog.title}
            excerpt={blog.excerpt}
            featuredImage={featuredImage}
            authorAvatar={AvatarImage}
            authorName={`${blog.author?.firstName} ${blog.author?.lastName}`}
            updatedDate={new Date(blog.updatedAt).toLocaleDateString()}
          />
        </Box>
      </Box>
    </>
  );
}

export default ArticlesPage;
