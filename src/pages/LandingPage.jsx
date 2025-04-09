import { Typography } from "@mui/material";
function LandingPage() {
  return (
    <div className="landingPage">
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        fontWeight={700}
        mt={4}
      >
        Hello welcome to blogIt
      </Typography>
    </div>
  );
}

export default LandingPage;
