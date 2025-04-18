import { CardHeader, CardMedia, Avatar, Box, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { red } from "@mui/material/colors";

export default function ArticleCard({
  featuredImage,
  authorAvatar,
  authorName,
  updatedDate,
  onClick,
  excerpt,
  content,
}) {
  return (
    <Box component="div" sx={{}}>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontWeight: 700,
            fontFamily: "monospace",
          }}
        >
          {new Date(updatedDate).toLocaleDateString()}
        </div>
      </Box>

      <Box sx={{ Width: "100%", height: "100%" }}>
        <CardMedia
          component="img"
          height="350"
          image={featuredImage || ""}
          onClick={onClick}
          sx={{ cursor: "pointer" }}
        />
      </Box>
      <Box component="div" sx={{ mt: 2 }}>
        <Typography variant="h6" color="text.secondary" fontSize="1rem">
          {content}
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize="1rem">
          {excerpt}
        </Typography>
      </Box>
    </Box>
  );
}
