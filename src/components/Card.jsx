import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { red } from "@mui/material/colors";

export default function BlogCard({
  title,
  excerpt,
  featuredImage,
  authorAvatar,
  authorName,
  updatedDate,
  onClick,
  edit,
  remove,
  onEditClick,
  onRemoveClick,
  isMyBlogPage = false,
}) {
  const navigate = useNavigate();
  const handleEditClick = () => {
    navigate("/edit/:blogId");
  };

  return (
    <Card component="div" sx={{}}>
      <Box>
        <CardHeader
          avatar={
            authorAvatar ? (
              <Avatar
                src={authorAvatar}
                alt={authorName}
                sx={{ bgcolor: red[500] }}
              />
            ) : (
              <Avatar sx={{ bgcolor: red[500] }}>
                <PersonIcon />
              </Avatar>
            )
          }
          title={authorName ? authorName : "Unknown Author"}
        />
        <Box
          sx={{
            Width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            mx: 4,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{ color: "teal", fontWeight: 700 }}
              >
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {excerpt}
              </Typography>
            </CardContent>
          </Box>
          <Box>
            <CardMedia
              component="img"
              height="160"
              width="50%"
              image={featuredImage || ""}
              alt={title}
              onClick={onClick}
              sx={{ cursor: "pointer", objectPosition: "top" }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mx: 10, mt: 3 }}
      >
        <CardActions sx={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 5,
              fontWeight: 700,
              fontFamily: "monospace",
            }}
          >
            {new Date(updatedDate).toLocaleDateString()}
          </div>
        </CardActions>
        <Box>
          <Button
            size="small"
            color="primary"
            onClick={() => navigate("/articles")}
            sx={{ ml: "auto", color: "crimson", fontWeight: 700 }}
          >
            Read Full Blog
          </Button>
        </Box>
      </Box>
      {isMyBlogPage && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            gap: 15,
            mx: 5,
            my: 2,
            mb: 2,
          }}
        >
          <Button variant="contained" onClick={onEditClick}>
            {edit}
          </Button>
          <Button
            variant="contained"
            onClick={onRemoveClick}
            sx={{ backgroundColor: "crimson" }}
          >
            {remove}
          </Button>
        </Box>
      )}
    </Card>
  );
}
