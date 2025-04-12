import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Button,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
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
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        height="150"
        image={featuredImage || ""}
        alt={title}
        onClick={onClick}
        sx={{ cursor: "pointer", objectPosition: "top" }}
      />

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
        subheader={
          <div style={{ display: "flex", alignItems: "center", marginTop: 5 }}>
            Last Updated
            <CalendarTodayIcon fontSize="small" style={{ marginRight: 4 }} />
            {new Date(updatedDate).toLocaleDateString()}
          </div>
        }
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ color: "teal" }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {excerpt}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={onClick}
          sx={{ ml: "auto", color: "crimson", fontWeight: 700 }}
        >
          Read Full Blog
        </Button>
      </CardActions>
    </Card>
  );
}
