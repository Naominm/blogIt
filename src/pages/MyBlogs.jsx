import {
  Avatar,
  Box,
  Paper,
  Button,
  CircularProgress,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  Alert,
} from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useProfileStore from "../../store/userProfileStore";
import apiUrl from "../utils/apiUrl";
import ReactMarkdown from "react-markdown";
import BlogCard from "../components/Card";
import featuredImage from "../assets/heroh1.jpg";
import AvatarImage from "../assets/blog.png";

function MyBlogsPage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [myBlogs, setMyBlogs] = useState([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const firstName = useProfileStore((state) => state.firstName);
  const avatarUrl = useProfileStore((state) => state.avatarUrl);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const { isLoading, data, error } = useQuery({
    queryKey: ["my-blogs"],
    queryFn: async () => {
      // const response = await axios.get("http://localhost:4000/blogs", {
      const response = await axios.get(`${apiUrl}/blogs`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    },
  });

  useEffect(() => {
    if (data) {
      const activeBlogs = data.filter((blog) => !blog.isDeleted);
      setMyBlogs(activeBlogs);
    }
  }, [data]);

  const openDeleteDialog = (blogId) => {
    console.log("Opening delete dialog for blog ID:", blogId);
    setSelectedBlogId(blogId);
    setDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setSelectedBlogId(null);
  };

  const handleDelete = async () => {
    if (!selectedBlogId) return;

    try {
      const response = await axios.delete(`${apiUrl}/blogs/${selectedBlogId}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setSnackbar({
        open: true,
        message: response.data.message || "Blog deleted successfully",
        severity: "success",
      });

      queryClient.invalidateQueries(["my-blogs"]);
    } catch (error) {
      console.error("[handleDelete] Error:", error);
      setSnackbar({
        open: true,
        message: error.response?.data?.message || "Failed to delete the blog",
        severity: "error",
      });
    } finally {
      closeDeleteDialog();
    }
  };
  function getExcerpt(text, maxWords = 30) {
    const words = text.trim().split(" ");
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + "... Read More";
  }

  return (
    <>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#F6F8FA",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            mt: 5,
            width: "70%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {isLoading ? (
            <Box mt={1} display="flex" justifyContent="center">
              <CircularProgress size={100} />
            </Box>
          ) : error ? (
            <Typography color="error">
              Error loading blogs: {error.message}
            </Typography>
          ) : myBlogs.length === 0 ? (
            <Typography variant="h6">No blogs found</Typography>
          ) : (
            myBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blogId={blog.id}
                title={blog.title}
                excerpt={
                  <ReactMarkdown>{getExcerpt(blog.excerpt, 30)}</ReactMarkdown>
                }
                content={<ReactMarkdown>{blog.content}</ReactMarkdown>}
                updatedDate={new Date(blog.updatedAt).toLocaleDateString()}
                authorAvatar={blog.author?.avatarUrl || AvatarImage}
                authorName={`${blog.author?.firstName} ${blog.author?.lastName}`}
                featuredImage={blog.imageUrl || featuredImage}
                remove="Delete"
                edit="Edit"
                onEditClick={() => {
                  console.log("found blog object", blog);
                  console.log("navigating to edit blog page", blog.id);
                  navigate(`/edit/${blog.id}`);
                }}
                onRemoveClick={() => openDeleteDialog(blog.id)}
                onClick={() => {
                  console.log("Blog object:", blog);
                  navigate(`/articles/${blog.id}`);
                }}
                isMyBlogPage={true}
              />
            ))
          )}
        </Box>
      </Paper>

      <Dialog open={deleteDialogOpen} onClose={closeDeleteDialog}>
        <DialogTitle>Delete Blog</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this blog?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          severity={snackbar.severity}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default MyBlogsPage;
