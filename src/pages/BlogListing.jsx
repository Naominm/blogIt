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
import BlogCard from "../components/Card";
import featuredImage from "../assets/heroh1.jpg";
import AvatarImage from "../assets/blog.png";
import apiUrl from "../utils/apiUrl";
import useProfileStore from "../../store/userProfileStore";
import ReactMarkdown from "react-markdown";

function BlogListing() {
  const navigate = useNavigate();

  const { isLoading, data: blogs, error } = useQuery({
    queryKey: ["all-blogs"],
    queryFn: async () => {
      try {
        const response = await axios.get(`${apiUrl}/blogs`, {
          withCredentials: true,
        });
        return response.data;
      } catch (err) {
        if (err.response && err.response.status === 404) {
          return []; 
        }
        throw err;
      }
    },
  });
  
  return (
    <>
      <BlogsHero blogs={blogs} isLoading={isLoading} error={error} />
    </>
  );
}

function BlogsHero({ blogs, isLoading, error }) {
  const firstName = useProfileStore((state) => state.firstName);
  const avatarUrl = useProfileStore((state) => state.avatarUrl);
  const navigate = useNavigate();
  function getExcerpt(text, maxWords = 30) {
    const words = text.trim().split(" ");
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + "... Read More";
  }

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
              excerpt={
                <ReactMarkdown>{getExcerpt(blog.excerpt, 30)}</ReactMarkdown>
              }
              content={<ReactMarkdown>{blog.content}</ReactMarkdown>}
              featuredImage={blog.imageUrl || featuredImage}
              authorAvatar={blog.author?.avatarUrl || AvatarImage}
              authorName={`${blog.author?.firstName} ${blog.author?.lastName}`}
              updatedDate={new Date(blog.updatedAt).toLocaleDateString()}
              onClick={() => navigate(`/articles/${blog.id}`)}
            />
          ))
        ) : (
          <Box textAlign="center" mt={5}>
          <Typography variant="h6" gutterBottom>
            You haven't published any blogs yet.
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Start sharing your thoughts and stories with the world!
          </Typography>
          <Box mt={2}>
            <button
              onClick={() => navigate("/writers")}
              style={{
                backgroundColor: "teal",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Create Your First Blog
            </button>
          </Box>
        </Box>
        
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
        <Paper
          sx={{
            mt: 10,
            px: 5,
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="subtitle1" sx={{ my: 1, color: "teal" }}>
            More of this author
          </Typography>

          {isLoading ? (
            <CircularProgress />
          ) : error ? (
            <Alert severity="error">Error loading blogs: {error.message}</Alert>
          ) : blogs?.length > 0 ? (
            blogs.slice(0, 5).map((blog) => (
              <Box
                key={blog.id}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 3,
                  mb: 2,
                }}
              >
                <Avatar alt={firstName} src={avatarUrl}>
                  {!avatarUrl && AvatarImage}
                </Avatar>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    {blog.title}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {`${blog.author?.firstName} ${blog.author?.lastName}`}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {new Date(blog.updatedAt).toLocaleDateString()}
                  </Typography>
                </Box>
              </Box>
            ))
          ) : (
            <Typography variant="body2">No more blogs available</Typography>
          )}
        </Paper>
      </Paper>
    </Box>
  );
}

export default BlogListing;
