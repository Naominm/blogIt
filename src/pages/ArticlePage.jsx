import { Typography, Card, Paper, Box } from "@mui/material";
import featuredImage from "../assets/heroh1.jpg";
import AvatarImage from "../assets/blog.png";
import NavBar from "../components/NavBar";
import ArticleCard from "../components/ArticleCard";

function ArticlesPage() {
  return (
    <>
      <NavBar />
      <ArticlesContent />
    </>
  );
}

function ArticlesContent() {
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
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            Want to speak English like a native speaker? Read this first.
          </Typography>
        </Paper>
        <Box component="div" sx={{ width: { xs: "100%", md: "60%" } }}>
          <ArticleCard
            title="Getting Started with React"
            excerpt="Learn the basics of React components and state management in this blog. Learn the basics of React components and state management in this blog.
            Learn the basics of React components and state management in this blog.
            Learn the basics of React components and state management in this blog.
            Learn the basics of React components and state management in this blog."
            featuredImage={featuredImage}
            authorAvatar={AvatarImage}
            authorName="JohnSmith"
            updatedDate="2023-11-20"
          />
        </Box>
      </Box>
    </>
  );
}

export default ArticlesPage;
