import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Box,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { red } from "@mui/material/colors";

export default function FeaturedBlogs({
  title,
  authorAvatar,
  authorName,
  updatedDate,
}) {
  return (
    <Card
      component="div"
      sx={{ width: "100%", height: "100%", display: "flex" }}
    >
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
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ color: "gray", fontWeight: 700 }}
              >
                {title}
              </Typography>
            </CardContent>
          </Box>

          <CardActions>
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
          </CardActions>
        </Box>
      </Box>
    </Card>
  );
}
