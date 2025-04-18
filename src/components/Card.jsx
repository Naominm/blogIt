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
import useProfileStore from "../../store/userProfileStore";
import AvatarImage from "../assets/blog.png";

export default function BlogCard({
  title,
  excerpt,
  featuredImage,
  authorAvatar,
  authorName,
  content,
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
  const firstName = useProfileStore((state) => state.firstName);
  const avatarUrl = useProfileStore((state) => state.avatarUrl);
  return (
    <Card component="div">
      <Box>
        <CardHeader
          avatar={
            <Avatar alt={firstName} src={avatarUrl}>
              {!avatarUrl && ""}
            </Avatar>
          }
          title={authorName ? authorName : "Unknown Author"}
        />
        <Box
          sx={{
            Width: "100%",
            height: "100%",
            display: "flex",
            justify: "center",
            mx: 2,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <CardContent
              sx={{
                display: "flex",
                gap: { xs: "2rem", md: "none" },
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
                flexGrow: 1,
              }}
              onClick={onClick}
            >
              <Box
                display="flex"
                sx={{
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: { xs: "100%", md: "40%" },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  width="30%"
                  image={featuredImage || ""}
                  alt={title}
                  onClick={onClick}
                  sx={{ cursor: "pointer", borderRadius: "10px" }}
                />
              </Box>
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ color: "teal", fontWeight: 700 }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="subtitle"
                  color="text.secondary"
                  sx={{ fontWeight: "bold", mb: 1, fontFamily: "Roboto" }}
                >
                  {content}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {excerpt}
                </Typography>
              </Box>
            </CardContent>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mx: 5, mt: 1 }}>
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
      </Box>
      {isMyBlogPage && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "right",
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
