import { Typography, Paper, Box, Avatar } from "@mui/material";
import AvatarImage from "../assets/blog.png";
import ArticleCard from "../components/ArticleCard";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import apiUrl from "../utils/apiUrl";
import useProfileStore from "../../store/userProfileStore";
import ReactMarkdown from "react-markdown";

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
      <ArticlesContent blog={blog} />
    </>
  );
}

function ArticlesContent({ blog }) {
  const firstName = useProfileStore((state) => state.firstName);
  const avatarUrl = useProfileStore((state) => state.avatarUrl);
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
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, textAlign: "center" }}
          >
            {blog.title}
          </Typography>
        </Paper>
        <Box component="div" sx={{ width: { xs: "100%", md: "60%" } }}>
          <ArticleCard
            title={blog.title}
            excerpt={<ReactMarkdown>{blog.excerpt}</ReactMarkdown>}
            content={<ReactMarkdown>{blog.content}</ReactMarkdown>}
            featuredImage={blog.imageUrl}
            authorAvatar={avatarUrl || AvatarImage}
            authorName={`${blog.author?.firstName} ${blog.author?.lastName}`}
            updatedDate={new Date(blog.updatedAt).toLocaleDateString()}
          />
        </Box>
      </Box>
    </>
  );
}

export default ArticlesPage;
