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
}) {
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
        <Box sx={{ Width: "100%", height: "100%", display: "flex", mx: 2 }}>
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
              height="150"
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
          {" "}
          <Button
            size="small"
            color="primary"
            onClick={onClick}
            sx={{ ml: "auto", color: "crimson", fontWeight: 700 }}
          >
            Read Full Blog
          </Button>
        </Box>
      </Box>
    </Card>
  );
}
