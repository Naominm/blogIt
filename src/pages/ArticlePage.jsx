import { Typography, Card, Paper, Box } from "@mui/material";
import NavBar from "../components/NavBar";

function ArticlesPage() {
  return (
    <>
      <ArticlesContent />
    </>
  );
}

function ArticlesContent() {
  return (
    <>
      <NavBar />
      <Box
        component="div"
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper elevation={0} sx={{ mt: 5, width: "60%", height: "100%" }}>
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            Want to speak English like a native speaker? Read this first.
          </Typography>
        </Paper>
      </Box>
    </>
  );
}

export default ArticlesPage;
