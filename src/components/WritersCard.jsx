import {
  TextField,
  Box,
  Paper,
  Button,
  IconButton,
  Alert,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import apiUrl from "../utils/apiUrl";

export default function WritersForm({
  initialTitle,
  initialExcerpt,
  initialContent,
  blogId,
  isEdit = false,
  onSubmit,
  loading = false,
}) {
  const [title, setTitle] = useState(initialTitle || "");
  const [excerpt, setExcerpt] = useState(initialExcerpt || "");
  const [content, setContent] = useState(initialContent || "");
  const [formError, setFormError] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const navigate = useNavigate();

  const { isPending, mutate } = useMutation({
    mutationFn: async () => {
      if (isEdit && blogId) {
        const response = await axios.put(
          `${apiUrl}/blogs/${blogId}`,
          { title, excerpt, content },
          { withCredentials: true },
        );
        return response.data;
      } else {
        const response = await axios.post(
          `${apiUrl}/blogs`,
          { title, excerpt, content },
          { withCredentials: true },
        );
        return response.data;
      }
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const serverMessage = error.response.data.message;
        setFormError(serverMessage);
      } else {
        setFormError("something went wrong");
      }
    },
    onSuccess: (data) => {
      console.log("onsucess", data);
      console.log("Navigating to blog:", data.id);
      navigate(`/blogs/${data.blog.id}`);
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(title, excerpt, content);
    if (!title || !excerpt) {
      setFormError("All fields are required");
      return;
    }
    mutate();
  }

  function uploadImage(files) {
    if (files && files.length > 0) {
      const file = files[0];
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      console.log("Selected file:", files[0]);
    }
  }
  function removeImage() {
    setImageFile(null);
    setPreviewUrl(null);
  }

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {formError && (
          <Alert severity="error" sx={{ mb: 1, mx: 2 }}>
            {formError}
          </Alert>
        )}
        <Paper
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: { xs: "100%", md: "50%" },
            height: "100%",
            mt: 3,
            pb: 2,
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px",
              backgroundColor: "#F6F8FA",
              border: "2px dashed #ccc",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            {previewUrl ? (
              <>
                <img
                  src={previewUrl}
                  alt="Preview"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
                <IconButton
                  onClick={removeImage}
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    bgcolor: "white",
                    color: "black",
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </>
            ) : (
              <>
                <input
                  accept="image/*"
                  type="file"
                  id="upload-image"
                  style={{ display: "none" }}
                  onChange={(e) => uploadImage(e.target.files)}
                />
                <label htmlFor="upload-image">
                  <Button
                    variant="contained"
                    component="span"
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload Image
                  </Button>
                </label>
              </>
            )}
          </Box>

          <TextField
            fullWidth
            label="Enter Your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ backgroundColor: "#F6F8FA" }}
          />
          <TextField
            fullWidth
            label="Enter Your subHeadline"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            sx={{ backgroundColor: "#F6F8FA" }}
          />
          <TextField
            label="Blog Content"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            multiline
            rows={8}
            variant="outlined"
            fullWidth
            sx={{ backgroundColor: "#F6F8FA" }}
          />
          <Button
            type="submit"
            disabled={isPending}
            variant="contained"
            sx={{ my: 1, mx: 1 }}
          >
            {isPending ? "please wait.." : "submit"}
          </Button>
        </Paper>
      </Box>
    </>
  );
}
